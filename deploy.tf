provider "aws" {
  region = "us-east-1"
}

resource "aws_instance" "web" {
  ami                    = "ami-0dd76f917833aac4b"
  instance_type          = "t2.micro"
  vpc_security_group_ids = ["${aws_security_group.web.id}"]
  user_data              = "${file("deploy.sh")}"
}

resource "aws_security_group" "web" {
  ingress {
    from_port   = 3001
    to_port     = 3001
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  egress {
    from_port        = 0
    to_port          = 0
    protocol         = "-1"
    cidr_blocks      = ["0.0.0.0/0"]
    ipv6_cidr_blocks = ["::/0"]
  }
}