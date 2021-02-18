type PersonnelCasualtyLevel =
	| "Nil"
	| "Green (minor injury)"
	| "Yellow (serious injury)"
	| "Red (very serious)"
	| "Black (fatal injury)"
	| "Grey (missing)";

const personnelCasualtyLevels = [
	"Nil",
	"Green (minor injury)",
	"Yellow (serious injury)",
	"Red (very serious)",
	"Black (fatal injury)",
	"Grey (missing)",
];

export { PersonnelCasualtyLevel, personnelCasualtyLevels };
