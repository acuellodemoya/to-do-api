import { Injectable } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';

@Injectable()
export class AuthService {

  constructor(
    private userService: UserService
  ){}

  async validateUser(username: string, password: string): Promise<any>{
    const user = await this.userService.findByUsername(username)

    if( user && user.password === password ){
      const { password, ...result } = user
      return user
    }

    return null
  }
  
}
