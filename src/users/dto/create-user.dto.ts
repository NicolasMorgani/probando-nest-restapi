import { ApiProperty } from "@nestjs/swagger"
import { IsEmail, IsNotEmpty, IsString } from "class-validator"

export class CreateUserDto {
    @ApiProperty({
        type: String,
        description: "name"
    })
    @IsString()
    name: string

    @ApiProperty({
        type: String,
        description: "email"
    })
    @IsNotEmpty()
    @IsEmail()
    email: string
    
    @ApiProperty({
        type: String,
        description: "password"
    })
    @IsNotEmpty()
    @IsString()
    password: string
}
