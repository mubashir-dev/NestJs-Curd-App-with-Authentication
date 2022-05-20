import { BaseTaskDto } from './base-task.dto';

export class UpdateTaskDto extends BaseTaskDto {
  updateAt: Date;
}
