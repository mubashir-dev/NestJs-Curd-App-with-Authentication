import { EntityRepository, Repository } from "typeorm";
import {Task} from './task.entity';

@EntityRepository(Task)
export class TaskRepoistory extends Repository<Task>
{
    
}