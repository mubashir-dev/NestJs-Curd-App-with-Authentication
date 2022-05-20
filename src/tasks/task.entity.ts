import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { TaskStatus } from './tasks.enum';

@Entity()
export class Task {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column({
    type: 'enum',
    enum: TaskStatus,
    default: TaskStatus.IS_ADDED,
  })
  status: TaskStatus;
}
