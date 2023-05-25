# environment variables
variable "region" {
  default     = "us-east-1"
  description = "region to create resources"
  type        = string
}

variable "project_name" {
  default     = "ar-portfolio"
  description = "ar-portfolio"
  type        = string
}

variable "environment" {
  default     = "dev"
  description = "environment"
  type        = string
}


