import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { ICompletedForm } from "../../../domain/entities/completedForm/ICompletedForm";
import { TemplateForm } from "./TemplateForm";

@Entity()
export class CompletedForm implements ICompletedForm {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  code: string;

  @Column({ unique: true })
  name: string;

  @Column({ nullable: true })
  description: string

  @Column({ name: "file_path" })
  filePath: string;

  @Column({ name: "file_extension" })
  fileExtension: string;

  @CreateDateColumn({ name: "upload_at" })
  uploadAt: Date;

  @ManyToOne(() => TemplateForm, (templateForm) => templateForm.completedForms)
  @JoinColumn({ name: "template_form_id" })
  templateForm: TemplateForm;
}
