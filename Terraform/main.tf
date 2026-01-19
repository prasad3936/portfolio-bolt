provider "aws" {
  region = "us-east-1"
  
}
data "aws_vpc" "selected" {
  default = true
  
}
data "aws_security_group" "default" {
  name = "default"
  vpc_id = data.aws_vpc.selected.id
  
}
resource "aws_instance" "portfolio" {
  ami = "ami-0360c520857e3138f"
  instance_type = "t2.nano"
  vpc_security_group_ids = [data.aws_security_group.default.id]
  user_data = file("${path.module}/${var.userdata_script}")
}