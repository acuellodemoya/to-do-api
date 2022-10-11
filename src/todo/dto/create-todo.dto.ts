import { IsString, IsUUID } from "class-validator"

export class CreateTodoDto {

    @IsString()
    name: string

    @IsString()
    description: string

}
