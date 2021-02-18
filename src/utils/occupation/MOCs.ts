type MOC =
	| "N/A"
	| "11: CRMN"
	| "11: GOL"
	| "12: GOS - CHAP(P)"
	| "21: ARTYMN - FD"
	| "21: ARMD"
	| "22: ARTYMN - AD"
	| "22: ARTY"
	| "23: INF"
	| "24: ENGR"
	| "31: INFMN"
	| "31: ACSO"
	| "32: PLT"
	| "39: AEC"
	| "41: AERE"
	| "43: EME"
	| "43: CBT ENGR"
	| "46: CONST ENGR"
	| "48: HCA"
	| "49: PHYSIO"
	| "51: DENT"
	| "52: LMN"
	| "52: HSO"
	| "54: PHARM"
	| "55: MED"
	| "56: BIO"
	| "57: NUR"
	| "58: SOCW"
	| "66: PAO"
	| "67: LEGAL"
	| "71: MARS - SS"
	| "72: PSEL"
	| "74: TRG DEV"
	| "75: MUSC"
	| "78: LOG"
	| "81: AES OP"
	| "81: MPO"
	| "82: INT"
	| "83: CELE (AIR)"
	| "84: SIGS"
	| "87: NCS ENG"
	| "88: MS ENG"
	| "89: NAV ENG"
	| "91: FLT ENGR"
	| "111: INT OP"
	| "121: MET TECH"
	| "131: SAR TECH"
	| "142: GEO TECH"
	| "169: AC OP - AERO OP"
	| "181: BOSN"
	| "215: SIG OP"
	| "226: ATIS TECH"
	| "227: LCIS TECH"
	| "275: NCI OP"
	| "276: NES OP"
	| "277: NAV COMM"
	| "278: SONAR OP"
	| "291: COMM RSCH"
	| "312: MAR ENG ART"
	| "313: MAR ENG ART"
	| "314: MAR ENG ART"
	| "315: MESO"
	| "321: H TECH"
	| "331: E TECH"
	| "332: MAR EL"
	| "341: CL DVR"
	| "345: PID"
	| "411: VEH TECH"
	| "421: W TECH L"
	| "434: EO TECH (LAND)"
	| "441: MAT TECH"
	| "514: AVN TECH"
	| "526: AVS TECH"
	| "532: NDT TECH"
	| "541: IMAGE TECH"
	| "565: ACS TECH"
	| "572: AWS TECH"
	| "641: RM TECH"
	| "642: ED TECH"
	| "643: EGS TECH"
	| "646: PH TECH"
	| "647: WFE TECH"
	| "648: CONST TECH"
	| "649: CE SUPT"
	| "651: FIRE FTR"
	| "714: MLAB TECH"
	| "715: MRAD TECH"
	| "718: BE TECH"
	| "725: DENT TECH"
	| "734: MLAB TECH"
	| "735: MRAD TECH"
	| "737: MED TECH"
	| "738: DENT TECH"
	| "811: MP"
	| "833: CRT RPTR"
	| "836: RMS CLK"
	| "861: COOK"
	| "862: STWD"
	| "871: MUSCN"
	| "881: POST CLK"
	| "911: SUP TECH"
	| "921: AMMO TECH"
	| "933: TFC TECH"
	| "935: MSE OP";

const mocs = [
	"N/A",
	"11: CRMN",
	"11: GOL",
	"12: GOS - CHAP(P)",
	"21: ARTYMN - FD",
	"21: ARMD",
	"22: ARTYMN - AD",
	"22: ARTY",
	"23: INF",
	"24: ENGR",
	"31: INFMN",
	"31: ACSO",
	"32: PLT",
	"39: AEC",
	"41: AERE",
	"43: EME",
	"43: CBT ENGR",
	"46: CONST ENGR",
	"48: HCA",
	"49: PHYSIO",
	"51: DENT",
	"52: LMN",
	"52: HSO",
	"54: PHARM",
	"55: MED",
	"56: BIO",
	"57: NUR",
	"58: SOCW",
	"66: PAO",
	"67: LEGAL",
	"71: MARS - SS",
	"72: PSEL",
	"74: TRG DEV",
	"75: MUSC",
	"78: LOG",
	"81: AES OP",
	"81: MPO",
	"82: INT",
	"83: CELE (AIR)",
	"84: SIGS",
	"87: NCS ENG",
	"88: MS ENG",
	"89: NAV ENG",
	"91: FLT ENGR",
	"111: INT OP",
	"121: MET TECH",
	"131: SAR TECH",
	"142: GEO TECH",
	"169: AC OP - AERO OP",
	"181: BOSN",
	"215: SIG OP",
	"226: ATIS TECH",
	"227: LCIS TECH",
	"275: NCI OP",
	"276: NES OP",
	"277: NAV COMM",
	"278: SONAR OP",
	"291: COMM RSCH",
	"312: MAR ENG ART",
	"313: MAR ENG ART",
	"314: MAR ENG ART",
	"315: MESO",
	"321: H TECH",
	"331: E TECH",
	"332: MAR EL",
	"341: CL DVR",
	"345: PID",
	"411: VEH TECH",
	"421: W TECH L",
	"434: EO TECH (LAND)",
	"441: MAT TECH",
	"514: AVN TECH",
	"526: AVS TECH",
	"532: NDT TECH",
	"541: IMAGE TECH",
	"565: ACS TECH",
	"572: AWS TECH",
	"641: RM TECH",
	"642: ED TECH",
	"643: EGS TECH",
	"646: PH TECH",
	"647: WFE TECH",
	"648: CONST TECH",
	"649: CE SUPT",
	"651: FIRE FTR",
	"714: MLAB TECH",
	"715: MRAD TECH",
	"718: BE TECH",
	"725: DENT TECH",
	"734: MLAB TECH",
	"735: MRAD TECH",
	"737: MED TECH",
	"738: DENT TECH",
	"811: MP",
	"833: CRT RPTR",
	"836: RMS CLK",
	"861: COOK",
	"862: STWD",
	"871: MUSCN",
	"881: POST CLK",
	"911: SUP TECH",
	"921: AMMO TECH",
	"933: TFC TECH",
	"935: MSE OP",
];

export { MOC, mocs };
