import { TaskFilterOptionDto } from './dto/filter-task.dto';
import { TaskRepoistory } from './task.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';

@Injectable()
export class TasksService {
    constructor(@InjectRepository(TaskRepoistory) private taskRepoistory:TaskRepoistory){}
    
    async getTasks(){
        return this.taskRepoistory.find();
    }

    async getFilteredTasks(taskFilterOptionDto:TaskFilterOptionDto)
    {
        const{status} = taskFilterOptionDto;
        if(status)
        {
            return this.taskRepoistory.find({
                where:{
                    status:status
                }
            })
        }
    }
    async getTask(id)
    {
        return this.taskRepoistory.findOne({
            where:{
                 id:id
            }
        });
    }
    async createTask(tasKData:CreateTaskDto)
    {
        return this.taskRepoistory.save(tasKData);
    }

    async updateTask(id,updateTaskDto:UpdateTaskDto)
    {
        const task = await this.taskRepoistory.findOne(id);
        return this.taskRepoistory.save({
            id:task?.id,
            title:updateTaskDto.title,
            description:updateTaskDto.description
        });
    }

    async deleteTask(id)
    {
        return this.taskRepoistory.delete(id);
    }
}
