import { IsNumber, IsOptional, IsString, MinLength } from "class-validator"


export class CreateDogDto {
    @IsString()
    @MinLength(1)
    nombre: string
    
    @IsNumber()
    
    edad: number
    
    @IsString()
    @IsOptional()
    raza?:string 
}
