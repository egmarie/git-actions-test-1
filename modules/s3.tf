data "aws_caller_identity" "current" {}

locals {
  mime_types = jsondecode(file("${path.module}/mime.json"))
}
resource "aws_s3_bucket" "static_ar_bucket-1" {
  bucket = "ar-portfolio-v1"
  # acl    = "private"

  tags = {
    Name = "ar-portfolio-v1"
  }
}

resource "aws_s3_bucket_ownership_controls" "static_ar_bucket-1_own" {
  bucket = aws_s3_bucket.static_ar_bucket-1.id
  rule {
    object_ownership = "BucketOwnerPreferred"
  }
}

resource "aws_s3_bucket_public_access_block" "static_ar_bucket-1_pub" {
  bucket = aws_s3_bucket.static_ar_bucket-1.id

  block_public_acls       = false
  block_public_policy     = false
  ignore_public_acls      = false
  restrict_public_buckets = true
}

resource "aws_s3_bucket_acl" "static_ar_bucket-1_acl" {
  depends_on = [
    aws_s3_bucket_ownership_controls.static_ar_bucket-1_own,
    aws_s3_bucket_public_access_block.static_ar_bucket-1_pub,
  ]

  bucket = aws_s3_bucket.static_ar_bucket-1.id
  acl    = "public-read"
}

resource "aws_s3_bucket_policy" "allow_access_from_another_account" {
  bucket = aws_s3_bucket.static_ar_bucket-1.id
  policy = data.aws_iam_policy_document.allow_access_from_another_account.json
}

resource "aws_s3_object" "dist_folder" {
      bucket   = aws_s3_bucket.static_ar_bucket-1.id
      key      = each.value
      source   = "/home/dev/git-actions-test-1/dist/${each.value}"
      for_each = fileset("/home/dev/git-actions-test-1/dist/", "*")
      content_type = lookup(local.mime_types, regex("\\.[^.]+$", each.value), null)
}

resource "aws_s3_object" "dist_assets_folder" {
      bucket   = aws_s3_bucket.static_ar_bucket-1.id
      key      = "assets/${each.value}"
      source   = "/home/dev/git-actions-test-1/dist/assets/${each.value}"
      for_each = fileset("/home/dev/git-actions-test-1/dist/assets", "*")
      content_type = lookup(local.mime_types, regex("\\.[^.]+$", "assets/${each.value}"), null)
}

data "aws_iam_policy_document" "allow_access_from_another_account" {
  statement {
    principals {
      type        = "AWS"
      identifiers = ["arn:aws:iam::cloudfront:user/CloudFront Origin Access Identity ${aws_cloudfront_origin_access_identity.static_ar_bucket-1.id}"]
    }

    actions = [
      "s3:GetObject"
    ]

    resources = [
      "${aws_s3_bucket.static_ar_bucket-1.arn}/*",
    ]
  }
}



