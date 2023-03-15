resource "aws_s3_bucket" "static_ar_bucket-1" {
  bucket = "ar-portfolio-v1"
  # acl    = "private"

  tags = {
    Name = "ar-portfolio-v1"
  }
}
resource "aws_s3_bucket_acl" "static_bucket_acl" {
  bucket = aws_s3_bucket.static_ar_bucket-1.id
  acl    = "private"
}
resource "aws_s3_bucket_versioning" "versioning" {
    bucket = aws_s3_bucket.static_ar_bucket-1.id
  versioning_configuration {
    status = "Enabled"
  }
}

resource "aws_s3_bucket_server_side_encryption_configuration" "encrypt" {
  bucket = aws_s3_bucket.static_ar_bucket-1.id

  rule {
    apply_server_side_encryption_by_default {
      sse_algorithm = "AES256"
    }
  }
}
# tf registry
resource "aws_s3_bucket_policy" "allow_access_from_another_account" {
  bucket = aws_s3_bucket.static_ar_bucket-1.id
  policy = data.aws_iam_policy_document.allow_access_from_oac.json
}

data "aws_iam_policy_document" "allow_access_from_oac" {
  statement {
    principals {
      type        = "Service"
      identifiers = ["cloudfront.amazonaws.com"]
    }

    actions = [
      "s3:GetObject",
    ]

    resources = [
      aws_s3_bucket.static_ar_bucket-1.arn,
      "${aws_s3_bucket.static_ar_bucket-1.arn}/*",
    ]
    condition {
            test = "StringEquals"
            values = [
                "arn:aws:cloudfront::686487091234:distribution/E12PBOOPSGUSQL"
            ]
            variable = "aws:SourceArn"
  }
}
}


# resource "aws_s3_bucket_public_access_block" "block_public_access" {
#   bucket                  = aws_s3_bucket.static_ar_bucket-1.id
#   # block_public_acls       = true
#   # block_public_policy     = true
#   # ignore_public_acls      = true
#   # restrict_public_buckets = true
# }

resource "aws_s3_bucket_object" "dist" {
  for_each = fileset("../src/", "*")
  bucket   = aws_s3_bucket.static_ar_bucket-1.id
  key      = each.value
  source   = "../src/${each.value}"
  # etag makes the file update when it changes; see https://stackoverflow.com/questions/56107258/terraform-upload-file-to-s3-on-every-apply
  etag     = filemd5("../src/${each.value}")
}

resource "aws_s3_bucket_website_configuration" "example" {
  bucket = aws_s3_bucket.static_ar_bucket-1.id

  index_document {
    suffix = "index.html"
  }
  # error_document {
  #   key = "error.html"
  # }

  # routing_rule {
  #   condition {
  #     key_prefix_equals = "docs/"
  #   }
  #   redirect {
  #     replace_key_prefix_with = "documents/"
  #   }
  # }
}