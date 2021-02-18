import "reflect-metadata";
import { createConnection, getRepository } from "typeorm";
import { Aircraft } from "./entity/Aircraft";
import { FlyingSquadron } from "./entity/FlyingSquadron";
import { Wing } from "./entity/Wing";

createConnection()
	.then(async (connection) => {
		// create aircraft 1
		let aircraft1 = new Aircraft();
		aircraft1.category = "Fighter";
		aircraft1.type = "CF-188 Hornet";
		aircraft1.registration = "AB-1234";

		// create aircraft 2
		let aircraft2 = new Aircraft();
		aircraft2.category = "Fighter";
		aircraft2.type = "CF-188 Hornet";
		aircraft2.registration = "AB-5678";

		// create aircraft 3
		let aircraft3 = new Aircraft();
		aircraft3.category = "Maritime Aviation";
		aircraft3.type = "CP-140 Aurora";
		aircraft3.registration = "CD-1234";

		// create aircraft 4
		let aircraft4 = new Aircraft();
		aircraft4.category = "Maritime Aviation";
		aircraft4.type = "CP-140 Aurora";
		aircraft4.registration = "CD-5678";

		// create flying squadron 1
		let flyingSquadron1 = new FlyingSquadron();
		flyingSquadron1.title = "401 Tactical Fighter Squadron";

		// create flying squadron 2
		let flyingSquadron2 = new FlyingSquadron();
		flyingSquadron2.title = "103 Search and Rescue Squadron";

		// create a wing
		let wing = new Wing();
		wing.title = "1 Wing Kingston";

		// add relations
		flyingSquadron1.aircraft = [aircraft1, aircraft2];
		flyingSquadron2.aircraft = [aircraft3, aircraft4];
		wing.flyingSquadrons = [flyingSquadron1, flyingSquadron2];

		// save wing
		let wingRepository = getRepository(Wing);
		await wingRepository.save(wing);

		// find and display wings
		let wings = await wingRepository.find({
			relations: ["flyingSquadrons", "flyingSquadrons.aircraft"],
		});
		console.log(wings);
	})
	.catch((error) => console.log(error));
