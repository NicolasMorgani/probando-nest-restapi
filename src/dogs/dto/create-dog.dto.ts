import { ApiProperty } from "@nestjs/swagger"
import { IsNumber, IsOptional, IsString, MinLength } from "class-validator"


export class CreateDogDto {
    
    @ApiProperty({
        type: String,
        description: "nombre"
    })@IsString()
    @MinLength(1)
    nombre: string
    
    @ApiProperty({
        type: String,
        description: "edad"
    })
    @IsNumber()
    edad: number
    
    @ApiProperty({
        type: String,
        description: "raza-opcional"
    })
    @IsString()
    @IsOptional()
    raza?:string 
}
