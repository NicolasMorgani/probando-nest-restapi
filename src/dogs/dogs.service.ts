import { Injectable } from '@nestjs/common';
import { CreateDogDto } from './dto/create-dog.dto';
import { UpdateDogDto } from './dto/update-dog.dto';
import { Repository } from 'typeorm';
import { Dog } from './entities/dog.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class DogsService {

  constructor(
    @InjectRepository(Dog)
    private dogRepository: Repository<Dog>
  ){}

 async create(createDogDto: CreateDogDto) {
    const dog = this.dogRepository.create(createDogDto)
   return await this.dogRepository.save(dog)
  }

  async findAll() {
   return await this.dogRepository.find()
  }

 async findOne(id: number) {
    return await this.dogRepository.findOneBy({id})
  }

 async update(id: number, updateDogDto: UpdateDogDto) {
   return await this.dogRepository.update(id,updateDogDto)
  }

 async remove(id: number) {
    return await this.dogRepository.softDelete(id) 
  }
}
