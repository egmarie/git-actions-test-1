resource "aws_s3_bucket" "static_ar_bucket-1" {
  bucket = "ar-portfolio-v1"
  # acl    = "private"

  tags = {
    Name = "ar-portfolio-v1"
  }
}
/* resource "aws_s3_bucket_acl" "static_bucket_acl" {
  bucket = aws_s3_bucket.static_ar_bucket-1.id
  acl    = "private"
} */
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

  block_public_acls       = false
  block_public_policy     = false
  ignore_public_acls      = false
  restrict_public_buckets = false
}

resource "aws_s3_object" "project_files" {
  for_each = fileset("./documents/", "**")
  bucket = aws_s3_bucket.static_ar_bucket-1.bucket
  key = each.value
  source = "./documents/${each.value}"
  etag = filemd5("./documents/${each.value}")
}

data "aws_iam_policy_document" "bucket_policy_doc" {
  statement {
    principals {
      type        = "AWS"
      identifiers = ["*"]
    }

    actions = [
      "s3:GetObject",
    ]

    resources = [
      aws_s3_bucket.static_ar_bucket-1.arn,
      "${aws_s3_bucket.static_ar_bucket-1.arn}/*",
    ]
  }
  /* {
    principals = {
      type        = "Service"
      identifiers = ["cloudfront.amazonaws.com"]
    }

    condition = {
      test     = "StringEquals"
      variable = "aws:SourceArn"
      values = [
        "${aws_cloudfront_distribution.cf_distribution.arn}",
      ]
    }

    actions = [
      "s3:GetObject",
      "s3:PutObject"
    ]

    resources = [
      aws_s3_bucket.static_ar_bucket-1.arn,
      "${aws_s3_bucket.static_ar_bucket-1.arn}/*",
    ]
  }, */
  /* {
    principals = {
      type        = "AWS"
      identifiers = ["*"]
    }

    actions = [
      "s3:GetObject",
    ]

    resources = [
      aws_s3_bucket.static_ar_bucket-1.arn,
      "${aws_s3_bucket.static_ar_bucket-1.arn}/*",
    ]
  } */
  /* ]  */
}

resource "aws_s3_bucket_policy" "bucket_policy" {
  bucket = aws_s3_bucket.static_ar_bucket-1.id
  policy = data.aws_iam_policy_document.bucket_policy_doc.json
}

/* data "aws_iam_policy_document" "bucket_policy_public_doc" {
  statement {
    principals {
      type        = "AWS"
      identifiers = ["*"]
    }

    actions = [
      "s3:GetObject",
    ]

    resources = [
      aws_s3_bucket.static_ar_bucket-1.arn,
      "${aws_s3_bucket.static_ar_bucket-1.arn}/*",
    ]
  }
} */

    /* {
        "Effect": "Allow",
        "Sid": "AllowAccessToListFilesInAllFolders",
        "Action": [
            "s3:GetObject",
            "s3:PutObject"
        ],
        "Resource": "arn:aws:s3:::${aws_s3_bucket.static_ar_bucket-1.id}",
        "Condition": {
            "StringEquals": {
                "aws:SourceArn": [
                    "${aws_cloudfront_distribution.cf_distribution.arn}}"
                ],
            }
        }
    } */

