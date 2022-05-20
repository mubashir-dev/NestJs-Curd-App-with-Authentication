import { UpdateTaskStatusDto } from './dto/update-task-status.dto';
import { TasksService } from './tasks.service';
import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Post,
  Put,
  Query,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { pipe } from 'rxjs';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { TaskFilterOptionDto } from './dto/filter-task.dto';


@Controller('tasks')
export class TasksController {
  constructor(private readonly taskService: TasksService) {}
  @Get()
  async findAll(@Query() taskFilterOption: TaskFilterOptionDto) {
    if(Object.keys(taskFilterOption).length)
    {
      return { tasks: await this.taskService.getFilteredTasks(taskFilterOption) };
    }
    else
    return { tasks: await this.taskService.getTasks() };
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return { task: await this.taskService.getTask(id) };
  }

  @Post('/')
  @UsePipes(ValidationPipe)
  async store(@Body() createTask: CreateTaskDto) {
    return {
      message: 'record has been stored',
      task: await this.taskService.createTask(createTask),
    };
  }

  @Put(':id')
  @UsePipes(ValidationPipe)
  @HttpCode(200)
  async update(@Param('id') id: string, @Body() updateTask: UpdateTaskDto) {
    return {
      message: 'record has been updated',
      task: await this.taskService.updateTask(id, updateTask),
    };
  }

  @Put('/status/:id')
  @UsePipes(ValidationPipe)
  @HttpCode(200)
  async updateStatus(@Param('id') id: string, @Body() updateTaskStatusDto: UpdateTaskStatusDto) {
    return {
      message: 'record status has been updated',
      task: await this.taskService.updateTaskStatus(id, updateTaskStatusDto),
    };
  }



  @Delete(':id')
  async delete(@Param('id') id: string) {
    const isAffected = await this.taskService.deleteTask(id);
    if (isAffected?.affected == 1) {
      return {
        message: 'record ha=s been removed',     };
    } else {
      return {
        message: 'record has not been removed',
      };
    }
  }
}
