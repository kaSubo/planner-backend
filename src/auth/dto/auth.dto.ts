import { IsEmail, IsString, MinLength } from "class-validator"


export class AuthDTO {
  @IsEmail()
  email: string

  @MinLength(6, {
    message: 'Password must be at least $constraint1 characters long'
  })
  @IsString()
  password: string
}