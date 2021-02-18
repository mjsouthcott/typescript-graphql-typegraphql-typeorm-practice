type Title =
	| "N/A"
	| "Aerospace Control Officer"
	| "Aerospace Control Operator – Aerospace Operator"
	| "Aerospace Control Operator - Radar Controller"
	| "Aerospace Engineering Officer"
	| "Aerospace Telecommunications and Information Systems Technician"
	| "Air Combat Systems Officer"
	| "Air Weapons System Technician"
	| "Airborne Electronic Sensor Operator"
	| "Aircraft Maintenance Superintendent"
	| "Aircraft Structures Technician"
	| "Ammunition Technician"
	| "Armour"
	| "Army Communication and Information Systems Specialist"
	| "Artillery"
	| "Artilleryman - Air Defence"
	| "Artilleryman - Field"
	| "Aviation Physiology Technician"
	| "Aviation Systems Technician"
	| "Avionic Systems Technician"
	| "Biomedical Electronics Technologist"
	| "Bioscience Officer"
	| "Boatswain"
	| "Cadet Instructor Cadre"
	| "Canadian Rangers - NCM"
	| "Canadian Rangers - Officer"
	| "Chaplain"
	| "Chemical, Biological, Radiological and Nuclear Operator"
	| "Clearance Diver"
	| "Combat Engineer"
	| "Communications and Electronics Engineering (Air) Officer"
	| "Communicator Research"
	| "Construction Engineering Officer"
	| "Construction Engineering Superintendent"
	| "Construction Technician"
	| "Cook"
	| "Court Reporter"
	| "Crewman"
	| "Cyber Operator"
	| "Dental Officer"
	| "Dental Officer - Specialist"
	| "Dental Technician"
	| "Dental Technician - Hygienist"
	| "Drafting and Survey Technicians"
	| "Electrical Distribution Technician"
	| "Electrical Generation Systems Technician"
	| "Electrical Technician"
	| "Electrical and Mechanical Engineering Officer"
	| "Electronic-Optronic Technician (Land)"
	| "Engineer"
	| "Financial Services Administrator"
	| "Firefighter"
	| "Flight Engineer"
	| "General Officer"
	| "General Officer Specialist - Chaplain(P)"
	| "General Officer Specialist - Chaplain(RC)"
	| "General Officer Specialist - Dental"
	| "General Officer Specialist - Legal"
	| "General Officer Specialist - Medical"
	| "Geomatics Technician"
	| "Gunner"
	| "Health Care Administration Officer"
	| "Health Service Operations"
	| "Hull Technician"
	| "Human Resources Administrator"
	| "Imagery Technician"
	| "Infantry"
	| "Infantryman"
	| "Intelligence Officer"
	| "Intelligence Operator"
	| "Land Communications and Information Systems Technician"
	| "Legal Officer"
	| "Lineman"
	| "Logistics Officer"
	| "Marine Electrician"
	| "Marine Engineer"
	| "Marine Engineering Artificer"
	| "Marine Engineering Systems Operator"
	| "Marine Engineering Technician"
	| "Marine Systems Engineering"
	| "Marine Technician"
	| "Maritime Engineering Mechanic"
	| "Maritime Surface and Sub-Surface Officer"
	| "Material Technician"
	| "Medical"
	| "Medical - Specialist"
	| "Medical Laboratory Technologist"
	| "Medical Laboratory Technologist - Junior"
	| "Medical Radiation Technologist"
	| "Medical Radiation Technologist - Junior"
	| "Medical Technician"
	| "Meteorological Technician"
	| "Military Police"
	| "Military Police Officer"
	| "Mobile Support Equipment Operator"
	| "Music"
	| "Musician"
	| "Naval Combat Information Operator"
	| "Naval Combat Systems Engineering"
	| "Naval Communicator"
	| "Naval Electronic Sensor Operator"
	| "Naval Engineering"
	| "Non-Destructive Testing Technician"
	| "Nursing"
	| "Operating Room Technician"
	| "Personnel Selection Officer"
	| "Pharmacy Officer"
	| "Physiotherapy Officer"
	| "Pilot"
	| "Pipes and Drums"
	| "Plumbing and Heating Technician"
	| "Port Inspection Diver"
	| "Postal Clerk"
	| "Preventive Medicine Technician"
	| "Public Affairs Officer"
	| "Refrigeration and Mechanical Technician"
	| "Resource Management Support Clerk"
	| "Search and Rescue Technician"
	| "Signal Operator"
	| "Signals Officer"
	| "Social Work Officer"
	| "Sonar Operator"
	| "Special Forces Operations"
	| "Steward"
	| "Supply Technician"
	| "Traffic Technician"
	| "Training Development Officer"
	| "Vehicle Technician"
	| "Water, Fuels and Environment Technician"
	| "Weapons Engineering Technician"
	| "Weapons Technician (Land)";

const titles = [
	"N/A",
	"Aerospace Control Officer",
	"Aerospace Control Operator – Aerospace Operator",
	"Aerospace Control Operator - Radar Controller",
	"Aerospace Engineering Officer",
	"Aerospace Telecommunications and Information Systems Technician",
	"Air Combat Systems Officer",
	"Air Weapons System Technician",
	"Airborne Electronic Sensor Operator",
	"Aircraft Maintenance Superintendent",
	"Aircraft Structures Technician",
	"Ammunition Technician",
	"Armour",
	"Army Communication and Information Systems Specialist",
	"Artillery",
	"Artilleryman - Air Defence",
	"Artilleryman - Field",
	"Aviation Physiology Technician",
	"Aviation Systems Technician",
	"Avionic Systems Technician",
	"Biomedical Electronics Technologist",
	"Bioscience Officer",
	"Boatswain",
	"Cadet Instructor Cadre",
	"Canadian Rangers - NCM",
	"Canadian Rangers - Officer",
	"Chaplain",
	"Chemical, Biological, Radiological and Nuclear Operator",
	"Clearance Diver",
	"Combat Engineer",
	"Communications and Electronics Engineering (Air) Officer",
	"Communicator Research",
	"Construction Engineering Officer",
	"Construction Engineering Superintendent",
	"Construction Technician",
	"Cook",
	"Court Reporter",
	"Crewman",
	"Cyber Operator",
	"Dental Officer",
	"Dental Officer - Specialist",
	"Dental Technician",
	"Dental Technician - Hygienist",
	"Drafting and Survey Technicians",
	"Electrical Distribution Technician",
	"Electrical Generation Systems Technician",
	"Electrical Technician",
	"Electrical and Mechanical Engineering Officer",
	"Electronic-Optronic Technician (Land)",
	"Engineer",
	"Financial Services Administrator",
	"Firefighter",
	"Flight Engineer",
	"General Officer",
	"General Officer Specialist - Chaplain(P)",
	"General Officer Specialist - Chaplain(RC)",
	"General Officer Specialist - Dental",
	"General Officer Specialist - Legal",
	"General Officer Specialist - Medical",
	"Geomatics Technician",
	"Gunner",
	"Health Care Administration Officer",
	"Health Service Operations",
	"Hull Technician",
	"Human Resources Administrator",
	"Imagery Technician",
	"Infantry",
	"Infantryman",
	"Intelligence Officer",
	"Intelligence Operator",
	"Land Communications and Information Systems Technician",
	"Legal Officer",
	"Lineman",
	"Logistics Officer",
	"Marine Electrician",
	"Marine Engineer",
	"Marine Engineering Artificer",
	"Marine Engineering Systems Operator",
	"Marine Engineering Technician",
	"Marine Systems Engineering",
	"Marine Technician",
	"Maritime Engineering Mechanic",
	"Maritime Surface and Sub-Surface Officer",
	"Material Technician",
	"Medical",
	"Medical - Specialist",
	"Medical Laboratory Technologist",
	"Medical Laboratory Technologist - Junior",
	"Medical Radiation Technologist",
	"Medical Radiation Technologist - Junior",
	"Medical Technician",
	"Meteorological Technician",
	"Military Police",
	"Military Police Officer",
	"Mobile Support Equipment Operator",
	"Music",
	"Musician",
	"Naval Combat Information Operator",
	"Naval Combat Systems Engineering",
	"Naval Communicator",
	"Naval Electronic Sensor Operator",
	"Naval Engineering",
	"Non-Destructive Testing Technician",
	"Nursing",
	"Operating Room Technician",
	"Personnel Selection Officer",
	"Pharmacy Officer",
	"Physiotherapy Officer",
	"Pilot",
	"Pipes and Drums",
	"Plumbing and Heating Technician",
	"Port Inspection Diver",
	"Postal Clerk",
	"Preventive Medicine Technician",
	"Public Affairs Officer",
	"Refrigeration and Mechanical Technician",
	"Resource Management Support Clerk",
	"Search and Rescue Technician",
	"Signal Operator",
	"Signals Officer",
	"Social Work Officer",
	"Sonar Operator",
	"Special Forces Operations",
	"Steward",
	"Supply Technician",
	"Traffic Technician",
	"Training Development Officer",
	"Vehicle Technician",
	"Water, Fuels and Environment Technician",
	"Weapons Engineering Technician",
	"Weapons Technician (Land)",
];

export { Title, titles };
