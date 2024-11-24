import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { IAuth } from "../../../domain/entities/auth/IAuth";
import { Actor } from "./Actor";

@Entity()
export class Auth implements IAuth {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @OneToOne(() => Actor, (actor) => actor.auth)
  @JoinColumn({ name: "actor_id"})
  actor: Actor;
}
