import { TaskStatus } from "../tasks.enum";
import { IsNotEmpty } from 'class-validator';


export class UpdateTaskStatusDto {
    @IsNotEmpty({ message: 'task status must not be empty' })
    status: TaskStatus;
}
