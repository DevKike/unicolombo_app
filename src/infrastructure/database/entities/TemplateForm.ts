import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { ITemplateForm } from "../../../domain/entities/templateForm/ITemplateForm";
import { Stage } from "./Stage";
import { CompletedForm } from "./CompletedForm";

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

  @Column({ name: "file_path" })
  filePath: string;

  @Column({ name: "file_extension" })
  fileExtension: string;

  @CreateDateColumn({ name: "registered_at" })
  registeredAt: Date;

  @UpdateDateColumn({ name: "updated_at" })
  updatedAt: Date;

  @ManyToOne(() => Stage, (stage) => stage.templateForms)
  @JoinColumn({ name: "stage_id" })
  stage: Stage;

  @OneToMany(() => CompletedForm, (completedForm) => completedForm.templateForm)
  completedForms: CompletedForm[];
}
