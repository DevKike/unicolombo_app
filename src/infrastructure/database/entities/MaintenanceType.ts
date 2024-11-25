import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { IMaintenanceType } from "../../../domain/entities/maintenanceType/IMaintenanceType";
import { DeptMaintTypeAssignment } from "./DeptMaintTypeAssignment";

@Entity()
export class MaintenanceType implements IMaintenanceType {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  name: string;

  @Column({ nullable: true })
  description: string;

  @CreateDateColumn({ name: "created_at" })
  createdAt: Date;

  @UpdateDateColumn({ name: "updated_at" })
  updatedAt: Date;

  @OneToMany(() => DeptMaintTypeAssignment, (deptMaintTypeAssignments) => deptMaintTypeAssignments.maintenanceType)
  deptMaintTypeAssignments: DeptMaintTypeAssignment[];
}
