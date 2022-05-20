import { TaskRepoistory } from './task.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { TasksController } from './tasks.controller';
import { TasksService } from './tasks.service';

@Module({
  controllers: [TasksController],
  providers: [TasksService],
  imports:[TypeOrmModule.forFeature([TaskRepoistory])]  
})
export class TasksModule {}
