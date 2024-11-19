import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { IExecutor } from "../../../domain/entities/executor/IExecutor";
import { ExecutorStatus } from "../../../domain/enums/executors/ExecutorStatus";
import { Actor } from "./Actor";
import { Execution } from "./Execution";

@Entity()
export class Executor implements IExecutor {
  @PrimaryGeneratedColumn()
  id: number;

  @CreateDateColumn({ name: "assigned_at" })
  assignedAt: Date;

  @UpdateDateColumn({ name: "updated_at" })
  updatedAt: Date;

  @Column({ type: "enum", enum: ExecutorStatus, default: ExecutorStatus.ASSIGNED })
  status: ExecutorStatus;

  @Column({ type: "text", nullable: true })
  comments?: string;

  @ManyToOne(() => Actor, (actor) => actor.executors)
  @JoinColumn({ name: "actor_id" })
  actor: Actor;

  @ManyToOne(() => Execution, (execution) => execution.executors)
  @JoinColumn({ name: "execution_id" })
  execution: Execution;
}
