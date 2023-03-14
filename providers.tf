# configure aws provider to establish a secure connection between terraform and aws
provider "aws" {
  region  = var.region
  profile = "liz-bluesky-1"

  default_tags {
    tags = {
      "Automation"  = "terraform"
      "Project"     = var.project_name
      "Environment" = var.environment
    }
  }
}
# terraform init
# terraform fmt    >> prettify the code
# terraform validate  >> check if validate
# terraform plan 
# terraform apply