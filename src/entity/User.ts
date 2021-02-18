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
// import { FlightSafetyReport } from "./FlightSafetyReport"
import { Type, types } from "../utils/user/Types";
import { Rank, ranks } from "../utils/user/Ranks";

@Entity()
export class User {
	@PrimaryGeneratedColumn()
	id: number;

	@Column({
		type: "enum",
		enum: types,
	})
	type: Type;

	@Column({
		type: "enum",
		enum: ranks,
	})
	rank: Rank;

	@Column()
	firstName: string;

	@Column()
	lastName: string;

	@Column()
	occupation: string; // change to enum once table is added

	@Column()
	office: string;

	@Column()
	telephoneNumber: number;

	@Column({
		unique: true,
	})
	emailAddress: string;

	@Column()
	password: string;

	// @OneToMany(
	// 	(type) => FlightSafetyReport,
	// 	(flightSafetyReport) => flightSafetyReport.aircraft,
	// 	{
	// 		cascade: true,
	// 	}
	// )
	// flightSafetyReports: FlightSafetyReport[];

	@CreateDateColumn()
	createdAt;

	@UpdateDateColumn()
	updatedAt;

	@DeleteDateColumn()
	deletedAt;

	@VersionColumn()
	version;
}
