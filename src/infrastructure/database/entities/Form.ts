import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { IForm } from "../../../domain/entities/form/IForm";
import { Stage } from "./Stage";

@Entity()
export class Form implements IForm {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  code: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  path: string;

  @Column()
  extension: string;

  @CreateDateColumn({ name: "registered_at" })
  registeredAt: Date;

  @UpdateDateColumn({ name: "updated_at" })
  updatedAt: Date;

  @ManyToOne(() => Stage, (stage) => stage.forms)
  @JoinColumn({ name: "stage_id" })
  stage: Stage;
}
