/* 

resource "aws_route53_zone" "threed-portfolio" {
  name = "3d.uncbluesky.com"

  tags = {
    Environment = "3d portfolio"
  }
}
*/
/* resource "aws_route53_record" "threed-portfolio-ns" {
  zone_id = aws_route53_zone.main.zone_id
  name    = "3d.uncbluesky.com"
  type    = "CNAME"
  ttl     = 30 */
  /* records = aws_route53_zone.threed-portfolio.name_servers */
  /* alias {
    name                   = aws_cloudfront_distribution.cf_distribution.domain_name
    zone_id                = aws_cloudfront_distribution.cf_distribution.hosted_zone_id
    evaluate_target_health = true
  } */

  /* records = [aws_cloudfront_distribution.cf_distribution.domain_name]
} */