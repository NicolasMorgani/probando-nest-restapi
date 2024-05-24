import { Transform } from "class-transformer";
import { IsEmail, IsString, MinLength } from "class-validator";
import { ApiProperty } from "@nestjs/swagger"

export class LoginDto {
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