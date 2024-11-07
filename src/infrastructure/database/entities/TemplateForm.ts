import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { ITemplateForm } from "../../../domain/entities/templateForm/ITemplateForm";
import { Stage } from "./Stage";

@Entity()
export class TemplateForm implements ITemplateForm {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  code: string;

  @Column({ unique: true })
  name: string;

  @Column({ nullable: true })
  description: string;

  @Column()
  filePath: string;

  @Column()
  fileExtension: string;

  @CreateDateColumn({ name: "registered_at" })
  registeredAt: Date;

  @UpdateDateColumn({ name: "updated_at" })
  updatedAt: Date;

  @ManyToOne(() => Stage, (stage) => stage.templateForms)
  @JoinColumn({ name: "stage_id" })
  stage: Stage;
}
