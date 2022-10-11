import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { Todo } from './entities/todo.entity';

@Injectable()
export class TodoService {

  constructor(
    @InjectRepository(Todo)
    private todoRepository: Repository<Todo>
  ){}

  create(createTodoDto: CreateTodoDto) {
    const todo = this.todoRepository.create(createTodoDto)
    return this.todoRepository.save(todo)
  }

  findActive(): Promise<Todo[]> {
    return this.todoRepository.findBy({
      isActive: true
    });
  }

  findOne(id: string) {
    return this.todoRepository.findOneBy({
      taskId: id
    })
  }

  update(id: string, updateTodoDto: UpdateTodoDto) {
    return this.todoRepository.update(id, updateTodoDto)
  }

  remove(id: string) {
    const deactivateTask: UpdateTodoDto = {
      isActive: false
    }
    return this.todoRepository.update(id, deactivateTask)
  }

  async setTaskState(id: string){
    let task = await this.todoRepository.findOneBy({
      taskId: id
    })

    const taskStatus: UpdateTodoDto = {
      isCompleted: !task.isCompleted
    }

    return this.todoRepository.update(id, taskStatus)
  }


}
