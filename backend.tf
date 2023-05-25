# store the terraform state file in s3 and lock with dynamodb
terraform {
  backend "s3" {
    bucket         = "ar-tf-state12"
    key            = "ar-portfolio-1/terraform.tfstate"
    region         = "us-east-1"
    profile        = "lg-bluesky-ubu"
    dynamodb_table = "terraform-state-lock"
  }
}

#env file: use profile name