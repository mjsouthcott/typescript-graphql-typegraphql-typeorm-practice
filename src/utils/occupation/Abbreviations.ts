type Abbreviation =
	| "N/A"
	| "AC OP - AERO OP"
	| "AC OP - RDR CONT"
	| "ACCISS"
	| "ACS TECH"
	| "ACSO"
	| "AEC"
	| "AERE"
	| "AES OP"
	| "AM SUP"
	| "AMMO TECH"
	| "ARMD"
	| "ARTY"
	| "ARTYMN - AD"
	| "ARTYMN - FD"
	| "ATIS TECH"
	| "AV PHYS TECH"
	| "AVN TECH"
	| "AVS TECH"
	| "AWS TECH"
	| "BE TECH"
	| "BIO"
	| "BOSN"
	| "CBRN OP"
	| "CBT ENGR"
	| "CE SUPT"
	| "CELE (AIR)"
	| "CHAP"
	| "CIC"
	| "CL DVR"
	| "COMM RSCH"
	| "CONST ENGR"
	| "CONST TECH"
	| "COOK"
	| "CR"
	| "CRMN"
	| "CRT RPTR"
	| "CYBER OP"
	| "DENT"
	| "DENT - SPEC"
	| "DENT TECH"
	| "DENT TECH - HYGST"
	| "DS TECH"
	| "E TECH"
	| "ED TECH"
	| "EGS TECH"
	| "EME"
	| "ENGR"
	| "EO TECH (LAND)"
	| "FIRE FTR"
	| "FLT ENGR"
	| "FSA"
	| "GEO TECH"
	| "GNR"
	| "GOL"
	| "GOS - CHAP(P)"
	| "GOS - CHAP(RC)"
	| "GOS - DENT"
	| "GOS - LEG"
	| "GOS - MED"
	| "H TECH"
	| "HCA"
	| "HRA"
	| "HSO"
	| "IMAGE TECH"
	| "INF"
	| "INFMN"
	| "INT"
	| "INT OP"
	| "LCIS TECH"
	| "LEGAL"
	| "LMN"
	| "LOG"
	| "MAR EL"
	| "MAR ENG"
	| "MAR ENG ART"
	| "MAR ENG MECH"
	| "MAR ENG TECH"
	| "MAR TECH"
	| "MARS - SS"
	| "MAT TECH"
	| "MED"
	| "MED - SPEC"
	| "MED TECH"
	| "MESO"
	| "MET TECH"
	| "MLAB TECH"
	| "MLAB TECH - JR"
	| "MP"
	| "MPO"
	| "MRAD TECH"
	| "MRAD TECH - JR"
	| "MS ENG"
	| "MSE OP"
	| "MUSC"
	| "MUSCN"
	| "NAV COMM"
	| "NAV ENG"
	| "NCI OP"
	| "NCS ENG"
	| "NDT TECH"
	| "NES OP"
	| "NUR"
	| "NUR SPEC"
	| "OR TECH"
	| "P&D"
	| "PAO"
	| "PH TECH"
	| "PHARM"
	| "PHYSIO"
	| "PID"
	| "PLT"
	| "PMED TECH"
	| "POST CLK"
	| "PSEL"
	| "RM TECH"
	| "RMS CLK"
	| "SAR TECH"
	| "SF OP"
	| "SIG OP"
	| "SIGS"
	| "SOCW"
	| "SONAR OP"
	| "STWD"
	| "SUP TECH"
	| "TFC TECH"
	| "TRG DEV"
	| "VEH TECH"
	| "W ENG TECH"
	| "W TECH L"
	| "WFE TECH";

const abbreviations = [
	"N/A",
	"AC OP - AERO OP",
	"AC OP - RDR CONT",
	"ACCISS",
	"ACS TECH",
	"ACSO",
	"AEC",
	"AERE",
	"AES OP",
	"AM SUP",
	"AMMO TECH",
	"ARMD",
	"ARTY",
	"ARTYMN - AD",
	"ARTYMN - FD",
	"ATIS TECH",
	"AV PHYS TECH",
	"AVN TECH",
	"AVS TECH",
	"AWS TECH",
	"BE TECH",
	"BIO",
	"BOSN",
	"CBRN OP",
	"CBT ENGR",
	"CE SUPT",
	"CELE (AIR)",
	"CHAP",
	"CIC",
	"CL DVR",
	"COMM RSCH",
	"CONST ENGR",
	"CONST TECH",
	"COOK",
	"CR",
	"CRMN",
	"CRT RPTR",
	"CYBER OP",
	"DENT",
	"DENT - SPEC",
	"DENT TECH",
	"DENT TECH - HYGST",
	"DS TECH",
	"E TECH",
	"ED TECH",
	"EGS TECH",
	"EME",
	"ENGR",
	"EO TECH (LAND)",
	"FIRE FTR",
	"FLT ENGR",
	"FSA",
	"GEO TECH",
	"GNR",
	"GOL",
	"GOS - CHAP(P)",
	"GOS - CHAP(RC)",
	"GOS - DENT",
	"GOS - LEG",
	"GOS - MED",
	"H TECH",
	"HCA",
	"HRA",
	"HSO",
	"IMAGE TECH",
	"INF",
	"INFMN",
	"INT",
	"INT OP",
	"LCIS TECH",
	"LEGAL",
	"LMN",
	"LOG",
	"MAR EL",
	"MAR ENG",
	"MAR ENG ART",
	"MAR ENG MECH",
	"MAR ENG TECH",
	"MAR TECH",
	"MARS - SS",
	"MAT TECH",
	"MED",
	"MED - SPEC",
	"MED TECH",
	"MESO",
	"MET TECH",
	"MLAB TECH",
	"MLAB TECH - JR",
	"MP",
	"MPO",
	"MRAD TECH",
	"MRAD TECH - JR",
	"MS ENG",
	"MSE OP",
	"MUSC",
	"MUSCN",
	"NAV COMM",
	"NAV ENG",
	"NCI OP",
	"NCS ENG",
	"NDT TECH",
	"NES OP",
	"NUR",
	"NUR SPEC",
	"OR TECH",
	"P&D",
	"PAO",
	"PH TECH",
	"PHARM",
	"PHYSIO",
	"PID",
	"PLT",
	"PMED TECH",
	"POST CLK",
	"PSEL",
	"RM TECH",
	"RMS CLK",
	"SAR TECH",
	"SF OP",
	"SIG OP",
	"SIGS",
	"SOCW",
	"SONAR OP",
	"STWD",
	"SUP TECH",
	"TFC TECH",
	"TRG DEV",
	"VEH TECH",
	"W ENG TECH",
	"W TECH L",
	"WFE TECH",
];

export { Abbreviation, abbreviations };
