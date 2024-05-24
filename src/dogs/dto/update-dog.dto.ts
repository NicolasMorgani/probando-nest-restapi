import { PartialType } from '@nestjs/mapped-types';
import { CreateDogDto } from './create-dog.dto';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateDogDto extends PartialType(CreateDogDto) {
    @ApiProperty({
        type: String,
        description: "nombre?"
    })
    nombre?: string
    @ApiProperty({
        type: String,
        description: "edad?"
    })
    edad?: number
    @ApiProperty({
        type: String,
        description: "raza?"
    })
    raza?: string
}
