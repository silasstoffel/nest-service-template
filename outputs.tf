output "url" {
  value = "http://${aws_instance.web.public_ip}:3001/health"
}