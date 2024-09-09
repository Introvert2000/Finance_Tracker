import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity("User")
export class User {
  @PrimaryGeneratedColumn()
  id: number | undefined;

  @Column()
  username: string | undefined;

  @Column()
  password: string | undefined;
}
