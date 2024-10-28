import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Department } from "./Department";
import { MaintenanceType } from "./MaintenanceType";
import { Maintenance } from "./Maintenance";
import { IDeptMaintTypeAssignment } from "../../../domain/entities/deptMaintTypeAssignment/IDeptMaintTypeAssignment";
import { DeptMaintTypeAssignmentStatus } from "../../../domain/enums/DeptMaintTypeAssignmentStatus/DeptMaintTypeAssignmentStatus";

@Entity()
export class DeptMaintTypeAssignment implements IDeptMaintTypeAssignment
{
  @PrimaryGeneratedColumn()
  id: number;

  @CreateDateColumn({ name: "assigned_at" })
  assignedAt: Date;

  @UpdateDateColumn({ name: "updated_at" })
  updatedAt: Date;

  @Column({ type: "enum", enum: DeptMaintTypeAssignmentStatus, default: DeptMaintTypeAssignmentStatus.ACTIVE })
  status: DeptMaintTypeAssignmentStatus;

  @Column({ nullable: true })
  priority: number;

  @Column("text", { nullable: true })
  comments: string;

  @ManyToOne(() => Department, (department) => department.deptMaintTypeAssignments)
  @JoinColumn({ name: "department_id" })
  department: Department;

  @ManyToOne(() => MaintenanceType, (maintenanceType) => maintenanceType.deptMaintTypeAssignments)
  @JoinColumn({ name: "maintenance_type_id" })
  maintenanceType: MaintenanceType;

  @OneToMany(() => Maintenance, (maintenance) => maintenance.deptMaintTypeAssignment)
  maintenances: Maintenance[];
}
