type AircraftDamageLevel =
	| "N/A"
	| "Minor"
	| "Serious (major component/3rd line)"
	| "Very Serious (multiple major components/3rd line)"
	| "Destroyed/Missing";

const aircraftDamageLevels = [
	"N/A",
	"Minor",
	"Serious (major component/3rd line)",
	"Very Serious (multiple major components/3rd line)",
	"Destroyed/Missing",
];

export { AircraftDamageLevel, aircraftDamageLevels };
