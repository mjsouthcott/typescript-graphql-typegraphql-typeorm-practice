import {
	Entity,
	Column,
	PrimaryGeneratedColumn,
	ManyToOne,
	JoinColumn,
	CreateDateColumn,
	UpdateDateColumn,
	DeleteDateColumn,
	VersionColumn,
	OneToMany,
} from "typeorm";
import { FlyingSquadron } from "./FlyingSquadron";
// import { FlightSafetyReport } from "./FlightSafetyReport"
import { Category, categories } from "../utils/aircraft/Categories";
import { Type, types } from "../utils/aircraft/Types";

@Entity()
export class Aircraft {
	@PrimaryGeneratedColumn()
	id: number;

	@Column({
		type: "enum",
		enum: categories,
	})
	category: Category;

	@Column({
		type: "enum",
		enum: types,
	})
	type: Type;

	@Column({
		unique: true,
	})
	registration: string;

	// @OneToMany(
	// 	(type) => FlightSafetyReport,
	// 	(flightSafetyReport) => flightSafetyReport.aircraft,
	// 	{
	// 		cascade: true,
	// 	}
	// )
	// flightSafetyReports: FlightSafetyReport[];

	@ManyToOne(
		(type) => FlyingSquadron,
		(flyingSquadron) => flyingSquadron.aircraft
	)
	@JoinColumn()
	flyingSquadron: FlyingSquadron;

	@CreateDateColumn()
	createdAt;

	@UpdateDateColumn()
	updatedAt;

	@DeleteDateColumn()
	deletedAt;

	@VersionColumn()
	version;
}
