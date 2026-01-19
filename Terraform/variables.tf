variable "userdata_script" {
  type = string
  default = "../userdata.sh"
  }
  
variable "ami"{
  type = string
  description = "Ubuntu 24.0 AMI ID"
  default = "ami-0360c520857e3138f"
}
