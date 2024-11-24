import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { IRole } from "../../../domain/entities/role/IRole";
import { Actor } from "./Actor";
import { RoleEnum } from "../../../domain/enums/role/RoleEnum";

@Entity()
export class Role implements IRole {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "enum", enum: RoleEnum, unique: true })
  name: RoleEnum;

  @Column("text", { nullable: true })
  description: string;

  @OneToMany(() => Actor, (actor) => actor.role)
  actors: Actor[];
}