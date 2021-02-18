import {
	Entity,
	Column,
	PrimaryGeneratedColumn,
	OneToMany,
	CreateDateColumn,
	UpdateDateColumn,
	DeleteDateColumn,
	VersionColumn,
} from "typeorm";
import { FlyingSquadron } from "./FlyingSquadron";
import { Title, titles } from "../utils/wing/Titles";

@Entity()
export class Wing {
	@PrimaryGeneratedColumn()
	id: number;

	@Column({
		type: "enum",
		enum: titles,
		unique: true,
	})
	title: Title;

	@OneToMany(
		(type) => FlyingSquadron,
		(flyingSquadron) => flyingSquadron.wing,
		{
			cascade: true,
		}
	)
	flyingSquadrons: FlyingSquadron[];

	@CreateDateColumn()
	createdAt;

	@UpdateDateColumn()
	updatedAt;

	@DeleteDateColumn()
	deletedAt;

	@VersionColumn()
	version;
}
