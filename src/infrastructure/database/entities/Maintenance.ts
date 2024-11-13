import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { MaintenanceStatus } from "../../../domain/enums/maintenance/MaintenanceStatus";
import { IMaintenance } from "../../../domain/entities/maintenance/IMaintenance";
import { DeptMaintTypeAssignment } from "./DeptMaintTypeAssignment";
import { Execution } from "./Execution";

@Entity()
export class Maintenance implements IMaintenance {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ nullable: true })
  description: string;

  @CreateDateColumn({ name: "created_at" })
  createdAt: Date;

  @UpdateDateColumn({ name: "updated_at" })
  updatedAt: Date;

  @Column({ type: "enum", enum: MaintenanceStatus, default: MaintenanceStatus.REQUESTED })
  status: MaintenanceStatus;

  @ManyToOne(() => DeptMaintTypeAssignment, (deptMaintTypeAssignment) => deptMaintTypeAssignment.maintenances)
  @JoinColumn({ name: "dept_maint_type_assignment" })
  deptMaintTypeAssignment: DeptMaintTypeAssignment;

  @OneToMany(() => Execution, (execution) => execution.maintenance)
  executions: Execution[];
}
