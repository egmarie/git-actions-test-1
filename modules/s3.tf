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

resource "aws_s3_bucket_public_access_block" "block_public_access" {
  bucket = aws_s3_bucket.static_ar_bucket-1.id

  block_public_acls       = true
  block_public_policy     = true
  ignore_public_acls      = true
  restrict_public_buckets = true
}

# resource "aws_s3_bucket" "testbucket" {
#     bucket = "test-terraform-pawan-1"
#     acl = "private"

#     tags = {
#         Name  = "test-terraform"
#         Environment = "test"
#     }
# }

# resource "aws_s3_bucket_object" "uploadfile" {
#   bucket = "test-terraform-pawan-1"
#   key     = "index.html"
#   source = "../"
# }
resource "aws_s3_bucket_object" "dist" {
  for_each = fileset("../src/", "*")
  bucket = aws_s3_bucket.static_ar_bucket-1.id
  key    = each.value
  source = "../src/${each.value}"
  # etag makes the file update when it changes; see https://stackoverflow.com/questions/56107258/terraform-upload-file-to-s3-on-every-apply
  etag   = filemd5("../src/${each.value}")
}