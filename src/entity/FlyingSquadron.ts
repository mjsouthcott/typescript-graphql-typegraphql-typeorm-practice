import {
	Entity,
	Column,
	PrimaryGeneratedColumn,
	OneToMany,
	ManyToOne,
	JoinColumn,
	CreateDateColumn,
	UpdateDateColumn,
	DeleteDateColumn,
	VersionColumn,
} from "typeorm";
import { Aircraft } from "./Aircraft";
import { Wing } from "./Wing";
import { Title, titles } from "../utils/flying_squadron/Titles";

@Entity()
export class FlyingSquadron {
	@PrimaryGeneratedColumn()
	id: number;

	@Column({
		type: "enum",
		enum: titles,
		unique: true,
	})
	title: Title;

	@OneToMany((type) => Aircraft, (aircraft) => aircraft.flyingSquadron, {
		cascade: true,
	})
	aircraft: Aircraft[];

	@ManyToOne((type) => Wing, (wing) => wing.flyingSquadrons)
	@JoinColumn()
	wing: Wing;

	@CreateDateColumn()
	createdAt;

	@UpdateDateColumn()
	updatedAt;

	@DeleteDateColumn()
	deletedAt;

	@VersionColumn()
	version;
}
