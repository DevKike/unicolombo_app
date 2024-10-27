import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { IMaintenanceType } from "../../../domain/entities/maintenanceType/IMaintenanceType";
import { DepartmentMaintenanceTypeAssignment } from "./DepartmentMaintenanceTypeAssignment";

@Entity()
export class MaintenanceType implements IMaintenanceType {
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

  @OneToMany(() => DepartmentMaintenanceTypeAssignment, (departmentMaintenanceTypeAssignment) => departmentMaintenanceTypeAssignment.maintenanceType)
  departmentMaintenanceTypeAssignments: DepartmentMaintenanceTypeAssignment[];
}
