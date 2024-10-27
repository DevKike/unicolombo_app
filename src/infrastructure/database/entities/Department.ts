import { IDepartment } from "../../../domain/entities/department/IDepartment";
import { Column, CreateDateColumn, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Actor } from "./Actor";
import { DepartmentStatus } from "../../../domain/enums/department/DepartmentStatus";
import { DepartmentMaintenanceTypeAssignment } from "./DepartmentMaintenanceTypeAssignment";

@Entity()
export class Department implements IDepartment {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ nullable: true })
  description: string;

  @Column({ name: "phone_number", unique: true, nullable: true })
  phoneNumber: string;

  @CreateDateColumn({ name: "created_at" })
  createdAt: Date;

  @UpdateDateColumn({ name: "updated_at" })
  updatedAt: Date;

  @Column({ type:"enum", enum: DepartmentStatus, default: DepartmentStatus.ACTIVE })
  status: DepartmentStatus;
  
  @OneToOne(() => Actor)
  @JoinColumn({ name: "coordinator_id" })
  coordinator: Actor;
  
  @OneToMany(() => Actor, (actor) => actor.department)
  actors: Actor[];
  
  @OneToMany(() => DepartmentMaintenanceTypeAssignment, (departmentMaintenanceTypeAssignment) => departmentMaintenanceTypeAssignment.department)
  departmentMaintenanceTypeAssignments: DepartmentMaintenanceTypeAssignment[];
}
