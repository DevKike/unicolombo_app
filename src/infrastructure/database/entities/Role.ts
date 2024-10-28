import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { IRole } from "../../../domain/entities/role/IRole";
import { Actor } from "./Actor";

@Entity()
export class Role implements IRole {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column("text", { nullable: true })
  description: string;

  @OneToMany(() => Actor, (actor) => actor.role)
  actors: Actor[];
}