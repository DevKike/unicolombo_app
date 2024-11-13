import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { IStage } from "../../../domain/entities/stage/IStage";
import { DeptMaintTypeAssignment } from "./DeptMaintTypeAssignment";
import { TemplateForm } from "./TemplateForm";
import { Execution } from "./Execution";

@Entity()
export class Stage implements IStage {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  order: number;

  @CreateDateColumn({ name: "created_at" })
  createdAt: Date;

  @UpdateDateColumn({ name: "updated_at" })
  updatedAt: Date;

  @ManyToOne(() => DeptMaintTypeAssignment, (deptMaintTypeAssignment) => deptMaintTypeAssignment.stages)
  @JoinColumn({ name: "dept_maint_type_assignment_id" })
  deptMaintTypeAssignment: DeptMaintTypeAssignment;

  @OneToMany(() => TemplateForm, (templateForm) => templateForm.stage)
  templateForms: TemplateForm[];

  @OneToMany(() => Execution, (execution) => execution.stage)
  executions: Execution[];
}
