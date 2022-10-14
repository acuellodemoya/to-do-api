import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {

  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>
  ){}

  create(createUserDto: CreateUserDto) {
    const user = this.userRepository.create(createUserDto)
    return  this.userRepository.save(user)
  }

  findActive() {
    return this.userRepository.findBy({
      isActive: true
    })
  }

  findOne(id: string) {
    return this.userRepository.findOneBy({
      userId: id
    })
  }

  findByUsername(username: string){
    return this.userRepository.findOneBy({
      username
    })
  }

  update(id: string, updateUserDto: UpdateUserDto) {
    return this.userRepository.update(id, updateUserDto)
  }

  remove(id: string) {
    const deactivateUser: UpdateUserDto = {
      isActive: false
    }
    return this.userRepository.update(id, deactivateUser)
  }

  
}
