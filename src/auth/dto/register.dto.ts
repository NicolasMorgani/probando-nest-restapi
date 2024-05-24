import { ApiProperty } from "@nestjs/swagger";
import { Transform } from "class-transformer";
import { IsEmail, IsString, MinLength } from "class-validator";


export class RegisterDto{
   
    @ApiProperty({
        type: String,
        description: "name"
    })    @IsString()
    @MinLength(1)
    name: string;
    
    @ApiProperty({
        type: String,
        description: "email"
    })
    @IsEmail()
    email: string;
  
    @ApiProperty({
        type: String,
        description: "password"
    })
    @IsString()
    @MinLength(6)
    @Transform(({ value }) => value.trim())
    password: string;
}