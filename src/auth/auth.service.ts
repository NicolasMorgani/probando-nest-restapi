import { BadRequestException, Injectable, UnauthorizedException } from '@nestjs/common';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { UsersService } from 'src/users/users.service';
import * as bcryptjs from "bcryptjs";
import { LoginDto } from './dto/login.dto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(
        private readonly userSevice:UsersService,
        private readonly jwtService:JwtService
    ){}

   async register({email,name,password}:CreateUserDto){
       const user= await this.userSevice.findOnByEmail(email)
        if(user){
            throw new BadRequestException("El Usuario Ya existe")
        }
      const hashedPassword = await bcryptjs.hash(password, 10);
      await this.userSevice.create({
        name,
        email,
        password: hashedPassword,
      })
      return {
        message: "Usuario creado con exito",
      };
    }

    async login({ email, password }: LoginDto) {
        const user = await this.userSevice.findOnByEmail(email);
    
        if (!user) {
          throw new UnauthorizedException("Invalid email");
        }
    
        const isPasswordValid = await bcryptjs.compare(password, user.password);
    
        if (!isPasswordValid) {
          throw new UnauthorizedException("Invalid password");
        }
        const payload = { email: user.email };

    const token = await this.jwtService.signAsync(payload);
    
    return {
        token: token,
        email: user.email,
      };
      }
}
