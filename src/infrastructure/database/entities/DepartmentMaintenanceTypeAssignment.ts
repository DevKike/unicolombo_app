import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Department } from "./Department";
import { MaintenanceType } from "./MaintenanceType";
import { Maintenance } from "./Maintenance";
import { IDepartmentMaintenanceTypeAssignment } from "../../../domain/entities/departmentMaintenanceTypeAssignment/IDepartmentMaintenanceTypeAssignment";
import { DepartmentMaintenanceTypeAssignmentStatus } from "../../../domain/enums/DepartmentMaintenanceTypeAssignmentStatus/DepartmentMaintenanceTypeAssignmentStatus";

@Entity()
export class DepartmentMaintenanceTypeAssignment implements IDepartmentMaintenanceTypeAssignment
{
  @PrimaryGeneratedColumn()
  id: number;

  @CreateDateColumn({ name: "assigned_at" })
  assignedAt: Date;

  @UpdateDateColumn({ name: "updated_at" })
  updatedAt: Date;

  @Column({ type: "enum", enum: DepartmentMaintenanceTypeAssignmentStatus, default: DepartmentMaintenanceTypeAssignmentStatus.ACTIVE })
  status: DepartmentMaintenanceTypeAssignmentStatus;

  @Column({ nullable: true })
  priority: number;

  @Column("text", { nullable: true })
  comments: string;

  @ManyToOne(() => Department, (department) => department.departmentMaintenanceTypeAssignments)
  @JoinColumn({ name: "department_id" })
  department: Department;

  @ManyToOne(() => MaintenanceType, (maintenanceType) => maintenanceType.departmentMaintenanceTypeAssignments)
  @JoinColumn({ name: "maintenance_type_id" })
  maintenanceType: MaintenanceType;

  @OneToMany(() => Maintenance, (maintenance) => maintenance.departmentMaintenanceTypeAssignment)
  maintenances: Maintenance[];
}
