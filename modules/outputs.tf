output "threed-portfolio-ecr-repo-url" {
    value = "${aws_ecr_repository.threed_portfolio_ecr.repository_url}"
}
# docker build -t 686487091234.dkr.ecr.us-east-1.amazonaws.com/3d_portfolio_ecr/app:1 .

# aws ecr get-login-password --region us-east-1 | docker login --username lg-bluesky --password-stdin 686487091234.dkr.ecr.us-east-1.amazonaws.com


#aws ecr list-images --repository-name 3d_portfolio_ecr
# aws ecr describe-repositories


# cat ~/SSL/docker-pw.rtf docker login -u egma34y --
# password-stdin 686487091234.dkr.ecr.us-east-1.amazonaws.com

