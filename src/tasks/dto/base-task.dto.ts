import { IsNotEmpty, IsString } from 'class-validator';

export class BaseTaskDto {
  @IsNotEmpty({ message: 'title must not be empty' })
  @IsString({message:'title must be a string'})
  title: string;
  @IsNotEmpty({ message: 'description must not be empty' })
  description: string;
}
