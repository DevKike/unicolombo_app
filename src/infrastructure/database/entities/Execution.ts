import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { IExecution } from "../../../domain/entities/execution/IExecution";
import { Maintenance } from "./Maintenance";
import { Stage } from "./Stage";
import { CompletedForm } from "./CompletedForm";
import { ExecutionStatus } from "../../../domain/enums/execution/ExecutionStatus";

@Entity()
export class Execution implements IExecution {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({type: "enum", enum: ExecutionStatus, default: ExecutionStatus.IN_PROGRESS })
  status: ExecutionStatus;

  @Column({ nullable: true })
  description?: string;

  @CreateDateColumn({ name: "started_at" })
  startedAt: Date;

  @UpdateDateColumn({ name: "updated_at" })
  updatedAt: Date;

  @Column({ type: "timestamp", nullable: true, name: "ended_at" })
  endedAt?: Date;

  @ManyToOne(() => Maintenance, (maintenance) => maintenance.executions)
  @JoinColumn({ name: "maintenance_id" })
  maintenance: Maintenance;

  @ManyToOne(() => Stage, (stage) => stage.executions)
  @JoinColumn({ name: "stage_id" })
  stage: Stage;

  @OneToMany(() => CompletedForm, (completedForm) => completedForm.templateForm)
  completedForms: CompletedForm[];
}
