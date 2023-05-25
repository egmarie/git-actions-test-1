# configure aws provider to establish a secure connection between terraform and aws
provider "aws" {
  region  = var.region
  profile = "lg-bluesky-ubu"

  default_tags {
    tags = {
      "Automation"  = "terraform"
      "Project"     = var.project_name
      "Environment" = var.environment
    }
  }
}

/* resource "aws_route53_zone" "main" {
  comment = "our main hosted zone"
  name    = "uncbluesky.com"
  tags = {
    "Name" = "BSI Domain"
  }
} */
# terraform init
# terraform fmt    >> prettify the code
# terraform validate  >> check if validate
# terraform plan 
# terraform apply