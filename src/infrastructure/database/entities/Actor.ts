import { Column, Entity, PrimaryColumn } from "typeorm";
import { IActor } from "../../../domain/entities/IActor";

@Entity()
export class Actor implements IActor {
  @PrimaryColumn()
  document_number: number;

  @Column()
  document_type: string;

  @Column()
  name: string;

  @Column()
  last_name: string;

  @Column()
  phone_number: string;

  @Column()
  email: string;
}