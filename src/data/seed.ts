// AUTO-GENERATED from Workload_Rev19 -> NPI_Development tab.
// Real MANN+HUMMEL project data. Fields absent from the workbook are flagged:
//  - valueMio: 0 (no monetary value exists anywhere in the source workbook)
//  - risk: 'baixo' placeholder (no project risk exists in the source)
//  - players: only the PM owner + total effort (NPI tab has no per-role hours)
import type { AppState, Member, Project, Activity } from '../types'

const members = [
  {
    "id": "m1",
    "name": "Dasilva W.",
    "role": "PM",
    "color": "#2563eb"
  },
  {
    "id": "m2",
    "name": "Dania R.",
    "role": "PM",
    "color": "#0891b2"
  },
  {
    "id": "m3",
    "name": "Ikeoka C.",
    "role": "PM",
    "color": "#7c3aed"
  },
  {
    "id": "m4",
    "name": "N/d",
    "role": "PM",
    "color": "#db2777"
  }
] as Member[]

const projects = [
  {
    "id": "p1",
    "code": "NPI-G-000497-S",
    "client": "Carrier",
    "name": "Carrier _  Air Filter  element (Automotiv) - Ref 30-00471-20",
    "type": "NPI",
    "npiSubtype": "G",
    "players": [
      {
        "memberId": "m1",
        "role": "PM",
        "hours": 12
      }
    ],
    "startWeek": "2025-W22",
    "endWeek": "2025-W40",
    "stage": "Nomination",
    "risk": "baixo",
    "reading": "confirmar",
    "valueMio": 0,
    "submissions": [],
    "nomination": {
      "koDate": "2025-05-27",
      "sopDate": "2025-10-01",
      "valueMio": 0,
      "type": "NPI"
    }
  },
  {
    "id": "p2",
    "code": "NPI-G-001250-S",
    "client": "CNH",
    "name": "CNH FleetPro _ CAF - FILT-001",
    "type": "NPI",
    "npiSubtype": "G",
    "players": [
      {
        "memberId": "m2",
        "role": "PM",
        "hours": 12
      }
    ],
    "startWeek": "2025-W41",
    "endWeek": "2026-W40",
    "stage": "Nomination",
    "risk": "baixo",
    "reading": "confirmar",
    "valueMio": 0,
    "submissions": [],
    "nomination": {
      "koDate": "2025-10-08",
      "sopDate": "2026-09-30",
      "valueMio": 0,
      "type": "NPI"
    }
  },
  {
    "id": "p3",
    "code": "NPI-G-001251-S",
    "client": "CNH",
    "name": "CNH FleetPro _ Oil Filter - FILT-012",
    "type": "NPI",
    "npiSubtype": "G",
    "players": [
      {
        "memberId": "m2",
        "role": "PM",
        "hours": 12
      }
    ],
    "startWeek": "2026-W13",
    "endWeek": "2026-W40",
    "stage": "Nomination",
    "risk": "baixo",
    "reading": "confirmar",
    "valueMio": 0,
    "submissions": [],
    "nomination": {
      "koDate": "2026-03-26",
      "sopDate": "2026-09-30",
      "valueMio": 0,
      "type": "NPI"
    }
  },
  {
    "id": "p4",
    "code": "NPI-G-001252-S",
    "client": "CNH",
    "name": "CNH FleetPro _ CAF - FILT-017",
    "type": "NPI",
    "npiSubtype": "G",
    "players": [
      {
        "memberId": "m2",
        "role": "PM",
        "hours": 12
      }
    ],
    "startWeek": "2026-W40",
    "endWeek": "2026-W40",
    "stage": "Nomination",
    "risk": "baixo",
    "reading": "confirmar",
    "valueMio": 0,
    "submissions": [],
    "nomination": {
      "koDate": "2026-09-30",
      "sopDate": "2026-09-30",
      "valueMio": 0,
      "type": "NPI"
    }
  },
  {
    "id": "p5",
    "code": "NPI-G-001464-S",
    "client": "AGCO",
    "name": "AGCO Package",
    "type": "NPI",
    "npiSubtype": "G",
    "players": [
      {
        "memberId": "m2",
        "role": "PM",
        "hours": 11
      }
    ],
    "startWeek": "2025-W49",
    "endWeek": "2026-W1",
    "stage": "Nomination",
    "risk": "baixo",
    "reading": "confirmar",
    "valueMio": 0,
    "submissions": [],
    "nomination": {
      "koDate": "2025-12-03",
      "sopDate": "2026-01-01",
      "valueMio": 0,
      "type": "NPI"
    }
  },
  {
    "id": "p6",
    "code": "NPI-H-000015-S",
    "client": "HYSTER",
    "name": "Hyster _ Elemento filtrante - 4024328",
    "type": "NPI",
    "npiSubtype": "H",
    "players": [
      {
        "memberId": "m1",
        "role": "PM",
        "hours": 11
      }
    ],
    "startWeek": "2025-W11",
    "endWeek": "2026-W36",
    "stage": "Nomination",
    "risk": "baixo",
    "reading": "confirmar",
    "valueMio": 0,
    "submissions": [],
    "nomination": {
      "koDate": "2025-03-12",
      "sopDate": "2026-09-01",
      "valueMio": 0,
      "type": "NPI"
    }
  },
  {
    "id": "p7",
    "code": "NPI-H-000018-S",
    "client": "HYSTER",
    "name": "Hyster _ Elemento filtrante do ar secundário - 4024329",
    "type": "NPI",
    "npiSubtype": "H",
    "players": [
      {
        "memberId": "m1",
        "role": "PM",
        "hours": 11
      }
    ],
    "startWeek": "2025-W11",
    "endWeek": "2026-W36",
    "stage": "Nomination",
    "risk": "baixo",
    "reading": "confirmar",
    "valueMio": 0,
    "submissions": [],
    "nomination": {
      "koDate": "2025-03-12",
      "sopDate": "2026-09-01",
      "valueMio": 0,
      "type": "NPI"
    }
  },
  {
    "id": "p8",
    "code": "NPI-H-000019-S",
    "client": "HYSTER",
    "name": "Hyster _ Filtro de óleo da transmissão - 4024304",
    "type": "NPI",
    "npiSubtype": "H",
    "players": [
      {
        "memberId": "m1",
        "role": "PM",
        "hours": 11
      }
    ],
    "startWeek": "2025-W11",
    "endWeek": "2026-W36",
    "stage": "Nomination",
    "risk": "baixo",
    "reading": "confirmar",
    "valueMio": 0,
    "submissions": [],
    "nomination": {
      "koDate": "2025-03-12",
      "sopDate": "2026-09-01",
      "valueMio": 0,
      "type": "NPI"
    }
  },
  {
    "id": "p9",
    "code": "NPI-H-000020-S",
    "client": "HYSTER",
    "name": "Hyster _ Filtro de sucção hidraulico - 8838322",
    "type": "NPI",
    "npiSubtype": "H",
    "players": [
      {
        "memberId": "m1",
        "role": "PM",
        "hours": 11
      }
    ],
    "startWeek": "2025-W11",
    "endWeek": "2026-W36",
    "stage": "Nomination",
    "risk": "baixo",
    "reading": "confirmar",
    "valueMio": 0,
    "submissions": [],
    "nomination": {
      "koDate": "2025-03-12",
      "sopDate": "2026-09-01",
      "valueMio": 0,
      "type": "NPI"
    }
  },
  {
    "id": "p10",
    "code": "NPI-H-000021-S",
    "client": "HYSTER",
    "name": "Hyster _ Filtro Hidraulico - 8546415",
    "type": "NPI",
    "npiSubtype": "H",
    "players": [
      {
        "memberId": "m1",
        "role": "PM",
        "hours": 11
      }
    ],
    "startWeek": "2025-W11",
    "endWeek": "2026-W36",
    "stage": "Nomination",
    "risk": "baixo",
    "reading": "confirmar",
    "valueMio": 0,
    "submissions": [],
    "nomination": {
      "koDate": "2025-03-12",
      "sopDate": "2026-09-01",
      "valueMio": 0,
      "type": "NPI"
    }
  },
  {
    "id": "p11",
    "code": "NPI-H-000022-S",
    "client": "HYSTER",
    "name": "Hyster _ Elemento Filtro Hidraulico - 69138773",
    "type": "NPI",
    "npiSubtype": "H",
    "players": [
      {
        "memberId": "m1",
        "role": "PM",
        "hours": 11
      }
    ],
    "startWeek": "2025-W11",
    "endWeek": "2026-W36",
    "stage": "Nomination",
    "risk": "baixo",
    "reading": "confirmar",
    "valueMio": 0,
    "submissions": [],
    "nomination": {
      "koDate": "2025-03-12",
      "sopDate": "2026-09-01",
      "valueMio": 0,
      "type": "NPI"
    }
  },
  {
    "id": "p12",
    "code": "NPI-H-000033-S",
    "client": "MWM",
    "name": "MWM _ Filtro de combustível",
    "type": "NPI",
    "npiSubtype": "H",
    "players": [
      {
        "memberId": "m1",
        "role": "PM",
        "hours": 11
      }
    ],
    "startWeek": "2025-W17",
    "endWeek": "2026-W36",
    "stage": "Nomination",
    "risk": "baixo",
    "reading": "confirmar",
    "valueMio": 0,
    "submissions": [],
    "nomination": {
      "koDate": "2025-04-22",
      "sopDate": "2026-09-01",
      "valueMio": 0,
      "type": "NPI"
    }
  },
  {
    "id": "p13",
    "code": "NPI-H-000038-S",
    "client": "LS TRACTOR",
    "name": "LS Tractor _ Minitroplicon",
    "type": "NPI",
    "npiSubtype": "H",
    "players": [
      {
        "memberId": "m2",
        "role": "PM",
        "hours": 11
      }
    ],
    "startWeek": "2025-W37",
    "endWeek": "2026-W19",
    "stage": "Nomination",
    "risk": "baixo",
    "reading": "confirmar",
    "valueMio": 0,
    "submissions": [],
    "nomination": {
      "koDate": "2025-09-08",
      "sopDate": "2026-05-04",
      "valueMio": 0,
      "type": "NPI"
    }
  },
  {
    "id": "p14",
    "code": "NPI-H-000045-S",
    "client": "LS TRACTOR",
    "name": "LS Tractor _ Personalização Filtro de Óleo W 10 050",
    "type": "NPI",
    "npiSubtype": "H",
    "players": [
      {
        "memberId": "m2",
        "role": "PM",
        "hours": 11
      }
    ],
    "startWeek": "2025-W22",
    "endWeek": "2025-W41",
    "stage": "Nomination",
    "risk": "baixo",
    "reading": "confirmar",
    "valueMio": 0,
    "submissions": [],
    "nomination": {
      "koDate": "2025-05-30",
      "sopDate": "2025-10-10",
      "valueMio": 0,
      "type": "NPI"
    }
  },
  {
    "id": "p15",
    "code": "NPI-H-000175-S",
    "client": "AGCO",
    "name": "Elemento Primário C 20 500 AGCO - S3-23",
    "type": "NPI",
    "npiSubtype": "H",
    "players": [
      {
        "memberId": "m2",
        "role": "PM",
        "hours": 12
      }
    ],
    "startWeek": "2026-W9",
    "endWeek": "2026-W18",
    "stage": "Nomination",
    "risk": "baixo",
    "reading": "confirmar",
    "valueMio": 0,
    "submissions": [],
    "nomination": {
      "koDate": "2026-02-24",
      "sopDate": "2026-05-01",
      "valueMio": 0,
      "type": "NPI"
    }
  },
  {
    "id": "p16",
    "code": "NPI-H-000176-S",
    "client": "AGCO",
    "name": "Elemento Secundário - CF 500/1 AGCO - S3-23",
    "type": "NPI",
    "npiSubtype": "H",
    "players": [
      {
        "memberId": "m2",
        "role": "PM",
        "hours": 12
      }
    ],
    "startWeek": "2026-W9",
    "endWeek": "2026-W18",
    "stage": "Nomination",
    "risk": "baixo",
    "reading": "confirmar",
    "valueMio": 0,
    "submissions": [],
    "nomination": {
      "koDate": "2026-02-24",
      "sopDate": "2026-05-01",
      "valueMio": 0,
      "type": "NPI"
    }
  },
  {
    "id": "p17",
    "code": "NPI-H-000207-S",
    "client": "CNH",
    "name": "CNH OES Fleetpro 3 -> FILT-026 / CAF",
    "type": "NPI",
    "npiSubtype": "H",
    "players": [
      {
        "memberId": "m2",
        "role": "PM",
        "hours": 12
      }
    ],
    "startWeek": "2025-W49",
    "endWeek": "2026-W40",
    "stage": "Nomination",
    "risk": "baixo",
    "reading": "confirmar",
    "valueMio": 0,
    "submissions": [],
    "nomination": {
      "koDate": "2025-12-01",
      "sopDate": "2026-09-30",
      "valueMio": 0,
      "type": "NPI"
    }
  },
  {
    "id": "p18",
    "code": "NPI-H-000212-S",
    "client": "CNH",
    "name": "CNH CAS1093 / 87684088 / CAF",
    "type": "NPI",
    "npiSubtype": "H",
    "players": [
      {
        "memberId": "m2",
        "role": "PM",
        "hours": 12
      }
    ],
    "startWeek": "2026-W40",
    "endWeek": "2026-W40",
    "stage": "Nomination",
    "risk": "baixo",
    "reading": "confirmar",
    "valueMio": 0,
    "submissions": [],
    "nomination": {
      "koDate": "2026-10-01",
      "sopDate": "2026-10-01",
      "valueMio": 0,
      "type": "NPI"
    }
  },
  {
    "id": "p19",
    "code": "NPI-H-000240-S",
    "client": "Carrier",
    "name": "Carrier_Filter Kit - Trailer",
    "type": "NPI",
    "npiSubtype": "H",
    "players": [
      {
        "memberId": "m1",
        "role": "PM",
        "hours": 11
      }
    ],
    "startWeek": "2026-W11",
    "endWeek": "2026-W44",
    "stage": "Nomination",
    "risk": "baixo",
    "reading": "confirmar",
    "valueMio": 0,
    "submissions": [],
    "nomination": {
      "koDate": "2026-03-12",
      "sopDate": "2026-11-01",
      "valueMio": 0,
      "type": "NPI"
    }
  },
  {
    "id": "p20",
    "code": "NPI-H-000267-S",
    "client": "LS MTRON",
    "name": "CF 360 - LS Mtron - Etiqueta Personalizada",
    "type": "NPI",
    "npiSubtype": "H",
    "players": [
      {
        "memberId": "m2",
        "role": "PM",
        "hours": 11
      }
    ],
    "startWeek": "2026-W27",
    "endWeek": "2026-W27",
    "stage": "Nomination",
    "risk": "baixo",
    "reading": "confirmar",
    "valueMio": 0,
    "submissions": [],
    "nomination": {
      "koDate": "2026-07-01",
      "sopDate": "2026-07-01",
      "valueMio": 0,
      "type": "NPI"
    }
  },
  {
    "id": "p21",
    "code": "NPI-I-000081-S",
    "client": "JOHN DEERE",
    "name": "Dex2: Primary Element (AN403918) OES",
    "type": "NPI",
    "npiSubtype": "I",
    "players": [
      {
        "memberId": "m2",
        "role": "PM",
        "hours": 21
      }
    ],
    "startWeek": "2027-W13",
    "endWeek": "2027-W13",
    "stage": "Nomination",
    "risk": "baixo",
    "reading": "confirmar",
    "valueMio": 0,
    "submissions": [],
    "nomination": {
      "koDate": "2027-04-01",
      "sopDate": "2027-04-01",
      "valueMio": 0,
      "type": "NPI"
    }
  },
  {
    "id": "p22",
    "code": "NPI-I-000082-S",
    "client": "JOHN DEERE",
    "name": "Dex2: Secondary Element (AN403919) OES",
    "type": "NPI",
    "npiSubtype": "I",
    "players": [
      {
        "memberId": "m2",
        "role": "PM",
        "hours": 21
      }
    ],
    "startWeek": "2027-W13",
    "endWeek": "2027-W13",
    "stage": "Nomination",
    "risk": "baixo",
    "reading": "confirmar",
    "valueMio": 0,
    "submissions": [],
    "nomination": {
      "koDate": "2027-04-01",
      "sopDate": "2027-04-01",
      "valueMio": 0,
      "type": "NPI"
    }
  },
  {
    "id": "p23",
    "code": "NPI-I-000084-S",
    "client": "JCB",
    "name": "JCB - P1068 Service Switch 80Mbar",
    "type": "NPI",
    "npiSubtype": "I",
    "players": [
      {
        "memberId": "m2",
        "role": "PM",
        "hours": 18
      }
    ],
    "startWeek": "2026-W9",
    "endWeek": "2026-W9",
    "stage": "Nomination",
    "risk": "baixo",
    "reading": "confirmar",
    "valueMio": 0,
    "submissions": [],
    "nomination": {
      "koDate": "2026-02-25",
      "sopDate": "2026-01-12",
      "valueMio": 0,
      "type": "NPI"
    }
  },
  {
    "id": "p24",
    "code": "NPI-I-000089-S",
    "client": "JCB",
    "name": "Elemento Primário C 15 300 JCB",
    "type": "NPI",
    "npiSubtype": "I",
    "players": [
      {
        "memberId": "m2",
        "role": "PM",
        "hours": 12
      }
    ],
    "startWeek": "2026-W9",
    "endWeek": "2026-W9",
    "stage": "Nomination",
    "risk": "baixo",
    "reading": "confirmar",
    "valueMio": 0,
    "submissions": [],
    "nomination": {
      "koDate": "2026-02-24",
      "sopDate": "2026-01-05",
      "valueMio": 0,
      "type": "NPI"
    }
  },
  {
    "id": "p25",
    "code": "NPI-I-000090-S",
    "client": "JCB",
    "name": "Elemento Secundário CF 300 JCB",
    "type": "NPI",
    "npiSubtype": "I",
    "players": [
      {
        "memberId": "m2",
        "role": "PM",
        "hours": 12
      }
    ],
    "startWeek": "2026-W9",
    "endWeek": "2026-W9",
    "stage": "Nomination",
    "risk": "baixo",
    "reading": "confirmar",
    "valueMio": 0,
    "submissions": [],
    "nomination": {
      "koDate": "2026-02-24",
      "sopDate": "2026-01-05",
      "valueMio": 0,
      "type": "NPI"
    }
  },
  {
    "id": "p26",
    "code": "NPI-I-000107-S",
    "client": "AGCO",
    "name": "Elementos AGCO FENDT/Valtra",
    "type": "NPI",
    "npiSubtype": "I",
    "players": [
      {
        "memberId": "m2",
        "role": "PM",
        "hours": 11
      }
    ],
    "startWeek": "2026-W2",
    "endWeek": "2026-W2",
    "stage": "Nomination",
    "risk": "baixo",
    "reading": "confirmar",
    "valueMio": 0,
    "submissions": [],
    "nomination": {
      "koDate": "2026-01-05",
      "sopDate": "2026-01-05",
      "valueMio": 0,
      "type": "NPI"
    }
  },
  {
    "id": "p27",
    "code": "NPI-I-000114-S",
    "client": "JOHN DEERE",
    "name": "JDeeere DEX",
    "type": "NPI",
    "npiSubtype": "I",
    "players": [
      {
        "memberId": "m2",
        "role": "PM",
        "hours": 24
      }
    ],
    "startWeek": "2027-W42",
    "endWeek": "2027-W42",
    "stage": "Nomination",
    "risk": "baixo",
    "reading": "confirmar",
    "valueMio": 0,
    "submissions": [],
    "nomination": {
      "koDate": "2027-10-20",
      "sopDate": "2027-10-20",
      "valueMio": 0,
      "type": "NPI"
    }
  },
  {
    "id": "p28",
    "code": "NPI-I-000115-S",
    "client": "JCB",
    "name": "JCB - Spin-On W 950/47",
    "type": "NPI",
    "npiSubtype": "I",
    "players": [
      {
        "memberId": "m2",
        "role": "PM",
        "hours": 12
      }
    ],
    "startWeek": "2026-W9",
    "endWeek": "2026-W9",
    "stage": "Nomination",
    "risk": "baixo",
    "reading": "confirmar",
    "valueMio": 0,
    "submissions": [],
    "nomination": {
      "koDate": "2026-02-24",
      "sopDate": "2026-01-05",
      "valueMio": 0,
      "type": "NPI"
    }
  },
  {
    "id": "p29",
    "code": "NPI-I-000147-S",
    "client": "AGCO",
    "name": "AGCO DSH - FENDT FILTERS",
    "type": "NPI",
    "npiSubtype": "I",
    "players": [
      {
        "memberId": "m2",
        "role": "PM",
        "hours": 11
      }
    ],
    "startWeek": "2026-W2",
    "endWeek": "2026-W2",
    "stage": "Nomination",
    "risk": "baixo",
    "reading": "confirmar",
    "valueMio": 0,
    "submissions": [],
    "nomination": {
      "koDate": "2026-01-10",
      "sopDate": "2026-01-10",
      "valueMio": 0,
      "type": "NPI"
    }
  },
  {
    "id": "p30",
    "code": "NPI-P-000439-S",
    "client": "JOHN DEERE",
    "name": "Filter Element _ J. Deere AH164063 _ Old EWF 23_0961_P_00",
    "type": "NPI",
    "npiSubtype": "P",
    "players": [
      {
        "memberId": "m2",
        "role": "PM",
        "hours": 17
      }
    ],
    "startWeek": "2027-W3",
    "endWeek": "2027-W3",
    "stage": "Nomination",
    "risk": "baixo",
    "reading": "confirmar",
    "valueMio": 0,
    "submissions": [],
    "nomination": {
      "koDate": "2027-01-20",
      "sopDate": "2027-01-20",
      "valueMio": 0,
      "type": "NPI"
    }
  },
  {
    "id": "p31",
    "code": "NPI-X-000374-S",
    "client": "JOHN DEERE",
    "name": "Dex Air Filter (Entaron HD13)",
    "type": "NPI",
    "npiSubtype": "X",
    "players": [
      {
        "memberId": "m2",
        "role": "PM",
        "hours": 9
      }
    ],
    "startWeek": "2024-W31",
    "endWeek": "2026-W28",
    "stage": "Nomination",
    "risk": "baixo",
    "reading": "confirmar",
    "valueMio": 0,
    "submissions": [],
    "nomination": {
      "koDate": "2024-07-31",
      "sopDate": "2026-07-07",
      "valueMio": 0,
      "type": "NPI"
    }
  },
  {
    "id": "p32",
    "code": "NPI-X-000394-S",
    "client": "Carrier",
    "name": "Kit Carrier",
    "type": "NPI",
    "npiSubtype": "X",
    "players": [
      {
        "memberId": "m1",
        "role": "PM",
        "hours": 16
      }
    ],
    "startWeek": "2025-W41",
    "endWeek": "2026-W44",
    "stage": "Nomination",
    "risk": "baixo",
    "reading": "confirmar",
    "valueMio": 0,
    "submissions": [],
    "nomination": {
      "koDate": "2025-10-09",
      "sopDate": "2026-11-01",
      "valueMio": 0,
      "type": "NPI"
    }
  },
  {
    "id": "p33",
    "code": "NPI-X-000408-S",
    "client": "AGCO",
    "name": "Air Filter Picolino AGCO",
    "type": "NPI",
    "npiSubtype": "X",
    "players": [
      {
        "memberId": "m2",
        "role": "PM",
        "hours": 12
      }
    ],
    "startWeek": "2024-W41",
    "endWeek": "2024-W42",
    "stage": "Nomination",
    "risk": "baixo",
    "reading": "confirmar",
    "valueMio": 0,
    "submissions": [],
    "nomination": {
      "koDate": "2024-10-07",
      "sopDate": "2024-10-15",
      "valueMio": 0,
      "type": "NPI"
    }
  },
  {
    "id": "p34",
    "code": "NPI-X-000507-S",
    "client": "JOHN DEERE",
    "name": "JOHN DEERE CAF CUD 61 001 (TA32591) - Transbordo OEM",
    "type": "NPI",
    "npiSubtype": "X",
    "players": [
      {
        "memberId": "m2",
        "role": "PM",
        "hours": 12
      }
    ],
    "startWeek": "2024-W43",
    "endWeek": "2025-W21",
    "stage": "Nomination",
    "risk": "baixo",
    "reading": "confirmar",
    "valueMio": 0,
    "submissions": [],
    "nomination": {
      "koDate": "2024-10-22",
      "sopDate": "2025-05-20",
      "valueMio": 0,
      "type": "NPI"
    }
  },
  {
    "id": "p35",
    "code": "NPI-X-000678-S",
    "client": "JOHN DEERE",
    "name": "JOHN DEERE DEX- ENTARON HD 13 VERSION 2",
    "type": "NPI",
    "npiSubtype": "X",
    "players": [
      {
        "memberId": "m2",
        "role": "PM",
        "hours": 24
      }
    ],
    "startWeek": "2027-W33",
    "endWeek": "2027-W33",
    "stage": "Nomination",
    "risk": "baixo",
    "reading": "confirmar",
    "valueMio": 0,
    "submissions": [],
    "nomination": {
      "koDate": "2027-08-20",
      "sopDate": "2027-08-20",
      "valueMio": 0,
      "type": "NPI"
    }
  },
  {
    "id": "p36",
    "code": "NPI-X-000734-S",
    "client": "IVECO",
    "name": "Iveco NexPro _ Filter Blow by",
    "type": "NPI",
    "npiSubtype": "X",
    "players": [
      {
        "memberId": "m3",
        "role": "PM",
        "hours": 12
      }
    ],
    "startWeek": "2025-W35",
    "endWeek": "2025-W35",
    "stage": "Nomination",
    "risk": "baixo",
    "reading": "confirmar",
    "valueMio": 0,
    "submissions": [],
    "nomination": {
      "koDate": "2025-08-26",
      "sopDate": "",
      "valueMio": 0,
      "type": "NPI"
    }
  },
  {
    "id": "p37",
    "code": "NPI-X-000735-S",
    "client": "IVECO",
    "name": "Iveco NexPro _ Oil Filter HU 12 013 z",
    "type": "NPI",
    "npiSubtype": "X",
    "players": [
      {
        "memberId": "m3",
        "role": "PM",
        "hours": 12
      }
    ],
    "startWeek": "2025-W35",
    "endWeek": "2025-W35",
    "stage": "Nomination",
    "risk": "baixo",
    "reading": "confirmar",
    "valueMio": 0,
    "submissions": [],
    "nomination": {
      "koDate": "2025-08-26",
      "sopDate": "",
      "valueMio": 0,
      "type": "NPI"
    }
  },
  {
    "id": "p38",
    "code": "NPI-X-000994-S",
    "client": "AGCO",
    "name": "Elemento FENDT - Caixa Individual",
    "type": "NPI",
    "npiSubtype": "X",
    "players": [
      {
        "memberId": "m2",
        "role": "PM",
        "hours": 12
      }
    ],
    "startWeek": "2025-W31",
    "endWeek": "2025-W31",
    "stage": "Nomination",
    "risk": "baixo",
    "reading": "confirmar",
    "valueMio": 0,
    "submissions": [],
    "nomination": {
      "koDate": "2025-07-29",
      "sopDate": "2025-06-23",
      "valueMio": 0,
      "type": "NPI"
    }
  },
  {
    "id": "p39",
    "code": "NPI-X-000995-S",
    "client": "AGCO",
    "name": "CAF - AGC1164 - Embalagem Individual OES",
    "type": "NPI",
    "npiSubtype": "X",
    "players": [
      {
        "memberId": "m2",
        "role": "PM",
        "hours": 12
      }
    ],
    "startWeek": "2025-W31",
    "endWeek": "2025-W31",
    "stage": "Nomination",
    "risk": "baixo",
    "reading": "confirmar",
    "valueMio": 0,
    "submissions": [],
    "nomination": {
      "koDate": "2025-07-29",
      "sopDate": "2025-06-23",
      "valueMio": 0,
      "type": "NPI"
    }
  },
  {
    "id": "p40",
    "code": "NPI-X-000997-S",
    "client": "JOHN DEERE",
    "name": "Air Filter IQORON VP25 - Projeto JD PHELPS",
    "type": "NPI",
    "npiSubtype": "X",
    "players": [
      {
        "memberId": "m2",
        "role": "PM",
        "hours": 12
      }
    ],
    "startWeek": "2025-W27",
    "endWeek": "2026-W13",
    "stage": "Nomination",
    "risk": "baixo",
    "reading": "confirmar",
    "valueMio": 0,
    "submissions": [],
    "nomination": {
      "koDate": "2025-07-01",
      "sopDate": "2026-03-26",
      "valueMio": 0,
      "type": "NPI"
    }
  },
  {
    "id": "p41",
    "code": "NPI-X-001080-S",
    "client": "JOHN DEERE",
    "name": "Phelps (sprayer): Junta de vedação (OEM) / GASKET / KK115579 / JOH1232",
    "type": "NPI",
    "npiSubtype": "X",
    "players": [
      {
        "memberId": "m2",
        "role": "PM",
        "hours": 12
      }
    ],
    "startWeek": "2025-W30",
    "endWeek": "2026-W14",
    "stage": "Nomination",
    "risk": "baixo",
    "reading": "confirmar",
    "valueMio": 0,
    "submissions": [],
    "nomination": {
      "koDate": "2025-07-22",
      "sopDate": "2026-04-03",
      "valueMio": 0,
      "type": "NPI"
    }
  },
  {
    "id": "p42",
    "code": "NPI-X-001081-S",
    "client": "JOHN DEERE",
    "name": "Dex1: Dust dump valve AT536768 (OES)",
    "type": "NPI",
    "npiSubtype": "X",
    "players": [
      {
        "memberId": "m2",
        "role": "PM",
        "hours": 12
      }
    ],
    "startWeek": "2025-W29",
    "endWeek": "2026-W17",
    "stage": "Nomination",
    "risk": "baixo",
    "reading": "confirmar",
    "valueMio": 0,
    "submissions": [],
    "nomination": {
      "koDate": "2025-07-14",
      "sopDate": "2026-04-24",
      "valueMio": 0,
      "type": "NPI"
    }
  },
  {
    "id": "p43",
    "code": "NPI-X-001082-S",
    "client": "JOHN DEERE",
    "name": "Dex1: Cover AT522470 Entaron HD13 (OES)",
    "type": "NPI",
    "npiSubtype": "X",
    "players": [
      {
        "memberId": "m2",
        "role": "PM",
        "hours": 12
      }
    ],
    "startWeek": "2025-W38",
    "endWeek": "2026-W18",
    "stage": "Nomination",
    "risk": "baixo",
    "reading": "confirmar",
    "valueMio": 0,
    "submissions": [],
    "nomination": {
      "koDate": "2025-09-19",
      "sopDate": "2026-05-01",
      "valueMio": 0,
      "type": "NPI"
    }
  },
  {
    "id": "p44",
    "code": "NPI-X-001083-S",
    "client": "JOHN DEERE",
    "name": "Dex1: Service Switch AT555740 (OEM)",
    "type": "NPI",
    "npiSubtype": "X",
    "players": [
      {
        "memberId": "m2",
        "role": "PM",
        "hours": 12
      }
    ],
    "startWeek": "2025-W44",
    "endWeek": "2026-W28",
    "stage": "Nomination",
    "risk": "baixo",
    "reading": "confirmar",
    "valueMio": 0,
    "submissions": [],
    "nomination": {
      "koDate": "2025-10-28",
      "sopDate": "2026-07-07",
      "valueMio": 0,
      "type": "NPI"
    }
  },
  {
    "id": "p45",
    "code": "NPI-X-001099-S",
    "client": "JOHN DEERE",
    "name": "Dex2: Air Filter (Entaron XD2124) AT533912 (24_4408_V_00 amostras MHDE) / OEM",
    "type": "NPI",
    "npiSubtype": "X",
    "players": [
      {
        "memberId": "m2",
        "role": "PM",
        "hours": 12
      }
    ],
    "startWeek": "2025-W32",
    "endWeek": "2027-W13",
    "stage": "Nomination",
    "risk": "baixo",
    "reading": "confirmar",
    "valueMio": 0,
    "submissions": [],
    "nomination": {
      "koDate": "2025-08-07",
      "sopDate": "2027-04-01",
      "valueMio": 0,
      "type": "NPI"
    }
  },
  {
    "id": "p46",
    "code": "NPI-X-001127-S",
    "client": "FPT",
    "name": "FPT _ G-Drive",
    "type": "NPI",
    "npiSubtype": "X",
    "players": [
      {
        "memberId": "m3",
        "role": "PM",
        "hours": 12
      }
    ],
    "startWeek": "2025-W30",
    "endWeek": "2025-W30",
    "stage": "Nomination",
    "risk": "baixo",
    "reading": "confirmar",
    "valueMio": 0,
    "submissions": [],
    "nomination": {
      "koDate": "2025-07-22",
      "sopDate": "",
      "valueMio": 0,
      "type": "NPI"
    }
  },
  {
    "id": "p47",
    "code": "NPI-X-001128-S",
    "client": "FPT",
    "name": "FPT _ G-Drive",
    "type": "NPI",
    "npiSubtype": "X",
    "players": [
      {
        "memberId": "m3",
        "role": "PM",
        "hours": 12
      }
    ],
    "startWeek": "2025-W30",
    "endWeek": "2025-W30",
    "stage": "Nomination",
    "risk": "baixo",
    "reading": "confirmar",
    "valueMio": 0,
    "submissions": [],
    "nomination": {
      "koDate": "2025-07-21",
      "sopDate": "",
      "valueMio": 0,
      "type": "NPI"
    }
  },
  {
    "id": "p48",
    "code": "NPI-X-001188-S",
    "client": "MWM",
    "name": "MWM_Nova correlação com PN do cliente final K",
    "type": "NPI",
    "npiSubtype": "X",
    "players": [
      {
        "memberId": "m1",
        "role": "PM",
        "hours": 12
      }
    ],
    "startWeek": "2025-W31",
    "endWeek": "2026-W36",
    "stage": "Nomination",
    "risk": "baixo",
    "reading": "confirmar",
    "valueMio": 0,
    "submissions": [],
    "nomination": {
      "koDate": "2025-08-01",
      "sopDate": "2026-09-01",
      "valueMio": 0,
      "type": "NPI"
    }
  },
  {
    "id": "p49",
    "code": "NPI-X-001231-S",
    "client": "CNH",
    "name": "CNH CAS1093 / 24_0584_X_00 / 87682993 / Air Filter Element",
    "type": "NPI",
    "npiSubtype": "X",
    "players": [
      {
        "memberId": "m2",
        "role": "PM",
        "hours": 12
      }
    ],
    "startWeek": "2025-W34",
    "endWeek": "2025-W35",
    "stage": "Nomination",
    "risk": "baixo",
    "reading": "confirmar",
    "valueMio": 0,
    "submissions": [],
    "nomination": {
      "koDate": "2025-08-22",
      "sopDate": "2025-08-26",
      "valueMio": 0,
      "type": "NPI"
    }
  },
  {
    "id": "p50",
    "code": "NPI-X-001298-S",
    "client": "JOHN DEERE",
    "name": "Dex1: Primary Element / AT522469 (Entaron HD13) / OES",
    "type": "NPI",
    "npiSubtype": "X",
    "players": [
      {
        "memberId": "m2",
        "role": "PM",
        "hours": 12
      }
    ],
    "startWeek": "2025-W40",
    "endWeek": "2026-W40",
    "stage": "Nomination",
    "risk": "baixo",
    "reading": "confirmar",
    "valueMio": 0,
    "submissions": [],
    "nomination": {
      "koDate": "2025-09-30",
      "sopDate": "2026-09-30",
      "valueMio": 0,
      "type": "NPI"
    }
  },
  {
    "id": "p51",
    "code": "NPI-X-001299-S",
    "client": "JOHN DEERE",
    "name": "Dex1: Secondary Element / AT522472 (Entaron HD13) / OES",
    "type": "NPI",
    "npiSubtype": "X",
    "players": [
      {
        "memberId": "m2",
        "role": "PM",
        "hours": 12
      }
    ],
    "startWeek": "2025-W40",
    "endWeek": "2026-W40",
    "stage": "Nomination",
    "risk": "baixo",
    "reading": "confirmar",
    "valueMio": 0,
    "submissions": [],
    "nomination": {
      "koDate": "2025-09-30",
      "sopDate": "2026-09-30",
      "valueMio": 0,
      "type": "NPI"
    }
  },
  {
    "id": "p52",
    "code": "NPI-X-001300-S",
    "client": "JOHN DEERE",
    "name": "Dex2: HAND OPERATED VALVE (T309251) OES",
    "type": "NPI",
    "npiSubtype": "X",
    "players": [
      {
        "memberId": "m2",
        "role": "PM",
        "hours": 21
      }
    ],
    "startWeek": "2025-W40",
    "endWeek": "2027-W13",
    "stage": "Nomination",
    "risk": "baixo",
    "reading": "confirmar",
    "valueMio": 0,
    "submissions": [],
    "nomination": {
      "koDate": "2025-09-30",
      "sopDate": "2027-04-01",
      "valueMio": 0,
      "type": "NPI"
    }
  },
  {
    "id": "p53",
    "code": "NPI-X-001303-S",
    "client": "METALPLAN",
    "name": "METALPLAN - W 719/4",
    "type": "NPI",
    "npiSubtype": "X",
    "players": [
      {
        "memberId": "m1",
        "role": "PM",
        "hours": 12
      }
    ],
    "startWeek": "2025-W43",
    "endWeek": "2026-W31",
    "stage": "Nomination",
    "risk": "baixo",
    "reading": "confirmar",
    "valueMio": 0,
    "submissions": [],
    "nomination": {
      "koDate": "2025-10-20",
      "sopDate": "2026-08-01",
      "valueMio": 0,
      "type": "NPI"
    }
  },
  {
    "id": "p54",
    "code": "NPI-X-001304-S",
    "client": "METALPLAN",
    "name": "METALPLAN - W 940/18",
    "type": "NPI",
    "npiSubtype": "X",
    "players": [
      {
        "memberId": "m1",
        "role": "PM",
        "hours": 12
      }
    ],
    "startWeek": "2026-W5",
    "endWeek": "2026-W31",
    "stage": "Nomination",
    "risk": "baixo",
    "reading": "confirmar",
    "valueMio": 0,
    "submissions": [],
    "nomination": {
      "koDate": "2026-01-29",
      "sopDate": "2026-08-01",
      "valueMio": 0,
      "type": "NPI"
    }
  },
  {
    "id": "p55",
    "code": "NPI-X-001341-S",
    "client": "VLI",
    "name": "VLI_WL 10028",
    "type": "NPI",
    "npiSubtype": "X",
    "players": [
      {
        "memberId": "m1",
        "role": "PM",
        "hours": 12
      }
    ],
    "startWeek": "2026-W31",
    "endWeek": "2026-W31",
    "stage": "Nomination",
    "risk": "baixo",
    "reading": "confirmar",
    "valueMio": 0,
    "submissions": [],
    "nomination": {
      "koDate": "2026-08-01",
      "sopDate": "2026-08-01",
      "valueMio": 0,
      "type": "NPI"
    }
  },
  {
    "id": "p56",
    "code": "NPI-X-001342-S",
    "client": "VLI",
    "name": "VLI_51265",
    "type": "NPI",
    "npiSubtype": "X",
    "players": [
      {
        "memberId": "m1",
        "role": "PM",
        "hours": 12
      }
    ],
    "startWeek": "2026-W31",
    "endWeek": "2026-W31",
    "stage": "Nomination",
    "risk": "baixo",
    "reading": "confirmar",
    "valueMio": 0,
    "submissions": [],
    "nomination": {
      "koDate": "2026-08-01",
      "sopDate": "2026-08-01",
      "valueMio": 0,
      "type": "NPI"
    }
  },
  {
    "id": "p57",
    "code": "NPI-X-001343-S",
    "client": "VLI",
    "name": "VLI_WF 10178",
    "type": "NPI",
    "npiSubtype": "X",
    "players": [
      {
        "memberId": "m1",
        "role": "PM",
        "hours": 12
      }
    ],
    "startWeek": "2026-W31",
    "endWeek": "2026-W31",
    "stage": "Nomination",
    "risk": "baixo",
    "reading": "confirmar",
    "valueMio": 0,
    "submissions": [],
    "nomination": {
      "koDate": "2026-08-01",
      "sopDate": "2026-08-01",
      "valueMio": 0,
      "type": "NPI"
    }
  },
  {
    "id": "p58",
    "code": "NPI-X-001344-S",
    "client": "VLI",
    "name": "WA 10154",
    "type": "NPI",
    "npiSubtype": "X",
    "players": [
      {
        "memberId": "m1",
        "role": "PM",
        "hours": 11
      }
    ],
    "startWeek": "2026-W31",
    "endWeek": "2026-W31",
    "stage": "Nomination",
    "risk": "baixo",
    "reading": "confirmar",
    "valueMio": 0,
    "submissions": [],
    "nomination": {
      "koDate": "2026-08-01",
      "sopDate": "2026-08-01",
      "valueMio": 0,
      "type": "NPI"
    }
  },
  {
    "id": "p59",
    "code": "NPI-X-001345-S",
    "client": "VLI",
    "name": "WK 955/1",
    "type": "NPI",
    "npiSubtype": "X",
    "players": [
      {
        "memberId": "m1",
        "role": "PM",
        "hours": 11
      }
    ],
    "startWeek": "2026-W31",
    "endWeek": "2026-W31",
    "stage": "Nomination",
    "risk": "baixo",
    "reading": "confirmar",
    "valueMio": 0,
    "submissions": [],
    "nomination": {
      "koDate": "2026-08-01",
      "sopDate": "2026-08-01",
      "valueMio": 0,
      "type": "NPI"
    }
  },
  {
    "id": "p60",
    "code": "NPI-X-001346-S",
    "client": "VLI",
    "name": "C 23 610/3",
    "type": "NPI",
    "npiSubtype": "X",
    "players": [
      {
        "memberId": "m1",
        "role": "PM",
        "hours": 11
      }
    ],
    "startWeek": "2026-W31",
    "endWeek": "2026-W31",
    "stage": "Nomination",
    "risk": "baixo",
    "reading": "confirmar",
    "valueMio": 0,
    "submissions": [],
    "nomination": {
      "koDate": "2026-08-01",
      "sopDate": "2026-08-01",
      "valueMio": 0,
      "type": "NPI"
    }
  },
  {
    "id": "p61",
    "code": "NPI-X-001347-S",
    "client": "VLI",
    "name": "P 934",
    "type": "NPI",
    "npiSubtype": "X",
    "players": [
      {
        "memberId": "m1",
        "role": "PM",
        "hours": 11
      }
    ],
    "startWeek": "2026-W31",
    "endWeek": "2026-W31",
    "stage": "Nomination",
    "risk": "baixo",
    "reading": "confirmar",
    "valueMio": 0,
    "submissions": [],
    "nomination": {
      "koDate": "2026-08-01",
      "sopDate": "2026-08-01",
      "valueMio": 0,
      "type": "NPI"
    }
  },
  {
    "id": "p62",
    "code": "NPI-X-001348-S",
    "client": "VLI",
    "name": "C 13 114/4",
    "type": "NPI",
    "npiSubtype": "X",
    "players": [
      {
        "memberId": "m1",
        "role": "PM",
        "hours": 11
      }
    ],
    "startWeek": "2026-W31",
    "endWeek": "2026-W31",
    "stage": "Nomination",
    "risk": "baixo",
    "reading": "confirmar",
    "valueMio": 0,
    "submissions": [],
    "nomination": {
      "koDate": "2026-08-01",
      "sopDate": "2026-08-01",
      "valueMio": 0,
      "type": "NPI"
    }
  },
  {
    "id": "p63",
    "code": "NPI-X-001349-S",
    "client": "VLI",
    "name": "VLI_542840",
    "type": "NPI",
    "npiSubtype": "X",
    "players": [
      {
        "memberId": "m1",
        "role": "PM",
        "hours": 12
      }
    ],
    "startWeek": "2026-W31",
    "endWeek": "2026-W31",
    "stage": "Nomination",
    "risk": "baixo",
    "reading": "confirmar",
    "valueMio": 0,
    "submissions": [],
    "nomination": {
      "koDate": "2026-08-01",
      "sopDate": "2026-08-01",
      "valueMio": 0,
      "type": "NPI"
    }
  },
  {
    "id": "p64",
    "code": "NPI-X-001397-S",
    "client": "VLI",
    "name": "VLI_51601 WIX",
    "type": "NPI",
    "npiSubtype": "X",
    "players": [
      {
        "memberId": "m1",
        "role": "PM",
        "hours": 12
      }
    ],
    "startWeek": "2026-W31",
    "endWeek": "2026-W31",
    "stage": "Nomination",
    "risk": "baixo",
    "reading": "confirmar",
    "valueMio": 0,
    "submissions": [],
    "nomination": {
      "koDate": "2026-08-01",
      "sopDate": "2026-08-01",
      "valueMio": 0,
      "type": "NPI"
    }
  },
  {
    "id": "p65",
    "code": "NPI-X-001617-S",
    "client": "JOHN DEERE",
    "name": "Phelps IQORON VP25 w/o pre cleaner OES",
    "type": "NPI",
    "npiSubtype": "X",
    "players": [
      {
        "memberId": "m2",
        "role": "PM",
        "hours": 11
      }
    ],
    "startWeek": "2026-W4",
    "endWeek": "2026-W9",
    "stage": "Nomination",
    "risk": "baixo",
    "reading": "confirmar",
    "valueMio": 0,
    "submissions": [],
    "nomination": {
      "koDate": "2026-01-21",
      "sopDate": "2026-02-28",
      "valueMio": 0,
      "type": "NPI"
    }
  },
  {
    "id": "p66",
    "code": "NPI-X-001618-S",
    "client": "JOHN DEERE",
    "name": "Phelps -  Junta de vedação OES",
    "type": "NPI",
    "npiSubtype": "X",
    "players": [
      {
        "memberId": "m2",
        "role": "PM",
        "hours": 11
      }
    ],
    "startWeek": "2026-W4",
    "endWeek": "2026-W9",
    "stage": "Nomination",
    "risk": "baixo",
    "reading": "confirmar",
    "valueMio": 0,
    "submissions": [],
    "nomination": {
      "koDate": "2026-01-23",
      "sopDate": "2026-02-28",
      "valueMio": 0,
      "type": "NPI"
    }
  },
  {
    "id": "p67",
    "code": "NPI-X-001635-S",
    "client": "CNH",
    "name": "Filter Element WK 1050/3 sem sensor (OES)",
    "type": "NPI",
    "npiSubtype": "X",
    "players": [
      {
        "memberId": "m2",
        "role": "PM",
        "hours": 11
      }
    ],
    "startWeek": "2026-W5",
    "endWeek": "2026-W13",
    "stage": "Nomination",
    "risk": "baixo",
    "reading": "confirmar",
    "valueMio": 0,
    "submissions": [],
    "nomination": {
      "koDate": "2026-01-29",
      "sopDate": "2026-03-28",
      "valueMio": 0,
      "type": "NPI"
    }
  },
  {
    "id": "p68",
    "code": "NPI-X-001669-S",
    "client": "LS MTRON",
    "name": "C 18360/2 - LS Mtron - Etiqueta Personalizada",
    "type": "NPI",
    "npiSubtype": "X",
    "players": [
      {
        "memberId": "m2",
        "role": "PM",
        "hours": 11
      }
    ],
    "startWeek": "2026-W16",
    "endWeek": "2026-W29",
    "stage": "Nomination",
    "risk": "baixo",
    "reading": "confirmar",
    "valueMio": 0,
    "submissions": [],
    "nomination": {
      "koDate": "2026-04-15",
      "sopDate": "2026-07-15",
      "valueMio": 0,
      "type": "NPI"
    }
  },
  {
    "id": "p69",
    "code": "NPI-X-001674-S",
    "client": "LS MTRON",
    "name": "CF 360 - LS Mtron - Etiqueta Personalizada",
    "type": "NPI",
    "npiSubtype": "X",
    "players": [
      {
        "memberId": "m2",
        "role": "PM",
        "hours": 11
      }
    ],
    "startWeek": "2026-W16",
    "endWeek": "2026-W29",
    "stage": "Nomination",
    "risk": "baixo",
    "reading": "confirmar",
    "valueMio": 0,
    "submissions": [],
    "nomination": {
      "koDate": "2026-04-15",
      "sopDate": "2026-07-15",
      "valueMio": 0,
      "type": "NPI"
    }
  },
  {
    "id": "p70",
    "code": "NPI-X-001707-S",
    "client": "JOHN DEERE",
    "name": "Big Air Package (HXE11091)",
    "type": "NPI",
    "npiSubtype": "X",
    "players": [
      {
        "memberId": "m2",
        "role": "PM",
        "hours": 20
      }
    ],
    "startWeek": "2026-W8",
    "endWeek": "2027-W13",
    "stage": "Nomination",
    "risk": "baixo",
    "reading": "confirmar",
    "valueMio": 0,
    "submissions": [],
    "nomination": {
      "koDate": "2026-02-19",
      "sopDate": "2027-04-01",
      "valueMio": 0,
      "type": "NPI"
    }
  },
  {
    "id": "p71",
    "code": "NPI-X-001708-S",
    "client": "JOHN DEERE",
    "name": "Big Air Package (HXE11090)",
    "type": "NPI",
    "npiSubtype": "X",
    "players": [
      {
        "memberId": "m2",
        "role": "PM",
        "hours": 20
      }
    ],
    "startWeek": "2026-W8",
    "endWeek": "2027-W13",
    "stage": "Nomination",
    "risk": "baixo",
    "reading": "confirmar",
    "valueMio": 0,
    "submissions": [],
    "nomination": {
      "koDate": "2026-02-20",
      "sopDate": "2027-04-01",
      "valueMio": 0,
      "type": "NPI"
    }
  },
  {
    "id": "p72",
    "code": "NPI-X-002159-S",
    "client": "JOHN DEERE",
    "name": "J. DEERE_Pre fuel filter DEX  DZ133888 170P",
    "type": "NPI",
    "npiSubtype": "X",
    "players": [
      {
        "memberId": "m2",
        "role": "PM",
        "hours": 23
      }
    ],
    "startWeek": "2027-W29",
    "endWeek": "2027-W29",
    "stage": "Nomination",
    "risk": "baixo",
    "reading": "confirmar",
    "valueMio": 0,
    "submissions": [],
    "nomination": {
      "koDate": "2027-07-20",
      "sopDate": "2027-07-20",
      "valueMio": 0,
      "type": "NPI"
    }
  },
  {
    "id": "p73",
    "code": "NPI-X-002189-S",
    "client": "JOHN DEERE",
    "name": " J. Deere_Service Switch AT555740 (OES)",
    "type": "NPI",
    "npiSubtype": "X",
    "players": [
      {
        "memberId": "m2",
        "role": "PM",
        "hours": 6
      }
    ],
    "startWeek": "2026-W25",
    "endWeek": "2026-W30",
    "stage": "Nomination",
    "risk": "baixo",
    "reading": "confirmar",
    "valueMio": 0,
    "submissions": [],
    "nomination": {
      "koDate": "2026-06-17",
      "sopDate": "2026-07-20",
      "valueMio": 0,
      "type": "NPI"
    }
  }
] as Project[]

const activities = [
  {
    "id": "a1",
    "projectId": "p1",
    "week": "2026-W1",
    "day": "SEG",
    "title": "Desenvolvimento",
    "role": "PM",
    "memberId": "m1",
    "loadDays": 0.5
  },
  {
    "id": "a2",
    "projectId": "p1",
    "week": "2026-W5",
    "day": "SEG",
    "title": "Desenvolvimento",
    "role": "PM",
    "memberId": "m1",
    "loadDays": 0.5
  },
  {
    "id": "a3",
    "projectId": "p1",
    "week": "2026-W9",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m1",
    "loadDays": 0.5
  },
  {
    "id": "a4",
    "projectId": "p1",
    "week": "2026-W14",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m1",
    "loadDays": 0.5
  },
  {
    "id": "a5",
    "projectId": "p1",
    "week": "2026-W18",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m1",
    "loadDays": 0.5
  },
  {
    "id": "a6",
    "projectId": "p1",
    "week": "2026-W23",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m1",
    "loadDays": 0.5
  },
  {
    "id": "a7",
    "projectId": "p1",
    "week": "2026-W27",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m1",
    "loadDays": 0.5
  },
  {
    "id": "a8",
    "projectId": "p1",
    "week": "2026-W31",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m1",
    "loadDays": 0.5
  },
  {
    "id": "a9",
    "projectId": "p1",
    "week": "2026-W36",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m1",
    "loadDays": 0.5
  },
  {
    "id": "a10",
    "projectId": "p1",
    "week": "2026-W40",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m1",
    "loadDays": 0.5
  },
  {
    "id": "a11",
    "projectId": "p1",
    "week": "2026-W44",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m1",
    "loadDays": 0.5
  },
  {
    "id": "a12",
    "projectId": "p1",
    "week": "2026-W49",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m1",
    "loadDays": 0.5
  },
  {
    "id": "a13",
    "projectId": "p2",
    "week": "2026-W1",
    "day": "SEG",
    "title": "Desenvolvimento",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a14",
    "projectId": "p2",
    "week": "2026-W5",
    "day": "SEG",
    "title": "Desenvolvimento",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a15",
    "projectId": "p2",
    "week": "2026-W9",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a16",
    "projectId": "p2",
    "week": "2026-W14",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a17",
    "projectId": "p2",
    "week": "2026-W18",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a18",
    "projectId": "p2",
    "week": "2026-W23",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a19",
    "projectId": "p2",
    "week": "2026-W27",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a20",
    "projectId": "p2",
    "week": "2026-W31",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a21",
    "projectId": "p2",
    "week": "2026-W36",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a22",
    "projectId": "p2",
    "week": "2026-W40",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a23",
    "projectId": "p2",
    "week": "2026-W44",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a24",
    "projectId": "p2",
    "week": "2026-W49",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a25",
    "projectId": "p3",
    "week": "2026-W1",
    "day": "SEG",
    "title": "Desenvolvimento",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a26",
    "projectId": "p3",
    "week": "2026-W5",
    "day": "SEG",
    "title": "Desenvolvimento",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a27",
    "projectId": "p3",
    "week": "2026-W9",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a28",
    "projectId": "p3",
    "week": "2026-W14",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a29",
    "projectId": "p3",
    "week": "2026-W18",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a30",
    "projectId": "p3",
    "week": "2026-W23",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a31",
    "projectId": "p3",
    "week": "2026-W27",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a32",
    "projectId": "p3",
    "week": "2026-W31",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a33",
    "projectId": "p3",
    "week": "2026-W36",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a34",
    "projectId": "p3",
    "week": "2026-W40",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a35",
    "projectId": "p3",
    "week": "2026-W44",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a36",
    "projectId": "p3",
    "week": "2026-W49",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a37",
    "projectId": "p4",
    "week": "2026-W1",
    "day": "SEG",
    "title": "Desenvolvimento",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a38",
    "projectId": "p4",
    "week": "2026-W5",
    "day": "SEG",
    "title": "Desenvolvimento",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a39",
    "projectId": "p4",
    "week": "2026-W9",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a40",
    "projectId": "p4",
    "week": "2026-W14",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a41",
    "projectId": "p4",
    "week": "2026-W18",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a42",
    "projectId": "p4",
    "week": "2026-W23",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a43",
    "projectId": "p4",
    "week": "2026-W27",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a44",
    "projectId": "p4",
    "week": "2026-W31",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a45",
    "projectId": "p4",
    "week": "2026-W36",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a46",
    "projectId": "p4",
    "week": "2026-W40",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a47",
    "projectId": "p4",
    "week": "2026-W44",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a48",
    "projectId": "p4",
    "week": "2026-W49",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a49",
    "projectId": "p5",
    "week": "2026-W5",
    "day": "SEG",
    "title": "Desenvolvimento",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a50",
    "projectId": "p5",
    "week": "2026-W9",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a51",
    "projectId": "p5",
    "week": "2026-W14",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a52",
    "projectId": "p5",
    "week": "2026-W18",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a53",
    "projectId": "p5",
    "week": "2026-W23",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a54",
    "projectId": "p5",
    "week": "2026-W27",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a55",
    "projectId": "p5",
    "week": "2026-W31",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a56",
    "projectId": "p5",
    "week": "2026-W36",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a57",
    "projectId": "p5",
    "week": "2026-W40",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a58",
    "projectId": "p5",
    "week": "2026-W44",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a59",
    "projectId": "p5",
    "week": "2026-W49",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a60",
    "projectId": "p6",
    "week": "2026-W5",
    "day": "SEG",
    "title": "Desenvolvimento",
    "role": "PM",
    "memberId": "m1",
    "loadDays": 0.5
  },
  {
    "id": "a61",
    "projectId": "p6",
    "week": "2026-W9",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m1",
    "loadDays": 0.5
  },
  {
    "id": "a62",
    "projectId": "p6",
    "week": "2026-W14",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m1",
    "loadDays": 0.5
  },
  {
    "id": "a63",
    "projectId": "p6",
    "week": "2026-W18",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m1",
    "loadDays": 0.5
  },
  {
    "id": "a64",
    "projectId": "p6",
    "week": "2026-W23",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m1",
    "loadDays": 0.5
  },
  {
    "id": "a65",
    "projectId": "p6",
    "week": "2026-W27",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m1",
    "loadDays": 0.5
  },
  {
    "id": "a66",
    "projectId": "p6",
    "week": "2026-W31",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m1",
    "loadDays": 0.5
  },
  {
    "id": "a67",
    "projectId": "p6",
    "week": "2026-W36",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m1",
    "loadDays": 0.5
  },
  {
    "id": "a68",
    "projectId": "p6",
    "week": "2026-W40",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m1",
    "loadDays": 0.5
  },
  {
    "id": "a69",
    "projectId": "p6",
    "week": "2026-W44",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m1",
    "loadDays": 0.5
  },
  {
    "id": "a70",
    "projectId": "p6",
    "week": "2026-W49",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m1",
    "loadDays": 0.5
  },
  {
    "id": "a71",
    "projectId": "p7",
    "week": "2026-W5",
    "day": "SEG",
    "title": "Desenvolvimento",
    "role": "PM",
    "memberId": "m1",
    "loadDays": 0.5
  },
  {
    "id": "a72",
    "projectId": "p7",
    "week": "2026-W9",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m1",
    "loadDays": 0.5
  },
  {
    "id": "a73",
    "projectId": "p7",
    "week": "2026-W14",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m1",
    "loadDays": 0.5
  },
  {
    "id": "a74",
    "projectId": "p7",
    "week": "2026-W18",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m1",
    "loadDays": 0.5
  },
  {
    "id": "a75",
    "projectId": "p7",
    "week": "2026-W23",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m1",
    "loadDays": 0.5
  },
  {
    "id": "a76",
    "projectId": "p7",
    "week": "2026-W27",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m1",
    "loadDays": 0.5
  },
  {
    "id": "a77",
    "projectId": "p7",
    "week": "2026-W31",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m1",
    "loadDays": 0.5
  },
  {
    "id": "a78",
    "projectId": "p7",
    "week": "2026-W36",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m1",
    "loadDays": 0.5
  },
  {
    "id": "a79",
    "projectId": "p7",
    "week": "2026-W40",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m1",
    "loadDays": 0.5
  },
  {
    "id": "a80",
    "projectId": "p7",
    "week": "2026-W44",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m1",
    "loadDays": 0.5
  },
  {
    "id": "a81",
    "projectId": "p7",
    "week": "2026-W49",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m1",
    "loadDays": 0.5
  },
  {
    "id": "a82",
    "projectId": "p8",
    "week": "2026-W5",
    "day": "SEG",
    "title": "Desenvolvimento",
    "role": "PM",
    "memberId": "m1",
    "loadDays": 0.5
  },
  {
    "id": "a83",
    "projectId": "p8",
    "week": "2026-W9",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m1",
    "loadDays": 0.5
  },
  {
    "id": "a84",
    "projectId": "p8",
    "week": "2026-W14",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m1",
    "loadDays": 0.5
  },
  {
    "id": "a85",
    "projectId": "p8",
    "week": "2026-W18",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m1",
    "loadDays": 0.5
  },
  {
    "id": "a86",
    "projectId": "p8",
    "week": "2026-W23",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m1",
    "loadDays": 0.5
  },
  {
    "id": "a87",
    "projectId": "p8",
    "week": "2026-W27",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m1",
    "loadDays": 0.5
  },
  {
    "id": "a88",
    "projectId": "p8",
    "week": "2026-W31",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m1",
    "loadDays": 0.5
  },
  {
    "id": "a89",
    "projectId": "p8",
    "week": "2026-W36",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m1",
    "loadDays": 0.5
  },
  {
    "id": "a90",
    "projectId": "p8",
    "week": "2026-W40",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m1",
    "loadDays": 0.5
  },
  {
    "id": "a91",
    "projectId": "p8",
    "week": "2026-W44",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m1",
    "loadDays": 0.5
  },
  {
    "id": "a92",
    "projectId": "p8",
    "week": "2026-W49",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m1",
    "loadDays": 0.5
  },
  {
    "id": "a93",
    "projectId": "p9",
    "week": "2026-W5",
    "day": "SEG",
    "title": "Desenvolvimento",
    "role": "PM",
    "memberId": "m1",
    "loadDays": 0.5
  },
  {
    "id": "a94",
    "projectId": "p9",
    "week": "2026-W9",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m1",
    "loadDays": 0.5
  },
  {
    "id": "a95",
    "projectId": "p9",
    "week": "2026-W14",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m1",
    "loadDays": 0.5
  },
  {
    "id": "a96",
    "projectId": "p9",
    "week": "2026-W18",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m1",
    "loadDays": 0.5
  },
  {
    "id": "a97",
    "projectId": "p9",
    "week": "2026-W23",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m1",
    "loadDays": 0.5
  },
  {
    "id": "a98",
    "projectId": "p9",
    "week": "2026-W27",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m1",
    "loadDays": 0.5
  },
  {
    "id": "a99",
    "projectId": "p9",
    "week": "2026-W31",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m1",
    "loadDays": 0.5
  },
  {
    "id": "a100",
    "projectId": "p9",
    "week": "2026-W36",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m1",
    "loadDays": 0.5
  },
  {
    "id": "a101",
    "projectId": "p9",
    "week": "2026-W40",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m1",
    "loadDays": 0.5
  },
  {
    "id": "a102",
    "projectId": "p9",
    "week": "2026-W44",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m1",
    "loadDays": 0.5
  },
  {
    "id": "a103",
    "projectId": "p9",
    "week": "2026-W49",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m1",
    "loadDays": 0.5
  },
  {
    "id": "a104",
    "projectId": "p10",
    "week": "2026-W5",
    "day": "SEG",
    "title": "Desenvolvimento",
    "role": "PM",
    "memberId": "m1",
    "loadDays": 0.5
  },
  {
    "id": "a105",
    "projectId": "p10",
    "week": "2026-W9",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m1",
    "loadDays": 0.5
  },
  {
    "id": "a106",
    "projectId": "p10",
    "week": "2026-W14",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m1",
    "loadDays": 0.5
  },
  {
    "id": "a107",
    "projectId": "p10",
    "week": "2026-W18",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m1",
    "loadDays": 0.5
  },
  {
    "id": "a108",
    "projectId": "p10",
    "week": "2026-W23",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m1",
    "loadDays": 0.5
  },
  {
    "id": "a109",
    "projectId": "p10",
    "week": "2026-W27",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m1",
    "loadDays": 0.5
  },
  {
    "id": "a110",
    "projectId": "p10",
    "week": "2026-W31",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m1",
    "loadDays": 0.5
  },
  {
    "id": "a111",
    "projectId": "p10",
    "week": "2026-W36",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m1",
    "loadDays": 0.5
  },
  {
    "id": "a112",
    "projectId": "p10",
    "week": "2026-W40",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m1",
    "loadDays": 0.5
  },
  {
    "id": "a113",
    "projectId": "p10",
    "week": "2026-W44",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m1",
    "loadDays": 0.5
  },
  {
    "id": "a114",
    "projectId": "p10",
    "week": "2026-W49",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m1",
    "loadDays": 0.5
  },
  {
    "id": "a115",
    "projectId": "p11",
    "week": "2026-W5",
    "day": "SEG",
    "title": "Desenvolvimento",
    "role": "PM",
    "memberId": "m1",
    "loadDays": 0.5
  },
  {
    "id": "a116",
    "projectId": "p11",
    "week": "2026-W9",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m1",
    "loadDays": 0.5
  },
  {
    "id": "a117",
    "projectId": "p11",
    "week": "2026-W14",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m1",
    "loadDays": 0.5
  },
  {
    "id": "a118",
    "projectId": "p11",
    "week": "2026-W18",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m1",
    "loadDays": 0.5
  },
  {
    "id": "a119",
    "projectId": "p11",
    "week": "2026-W23",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m1",
    "loadDays": 0.5
  },
  {
    "id": "a120",
    "projectId": "p11",
    "week": "2026-W27",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m1",
    "loadDays": 0.5
  },
  {
    "id": "a121",
    "projectId": "p11",
    "week": "2026-W31",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m1",
    "loadDays": 0.5
  },
  {
    "id": "a122",
    "projectId": "p11",
    "week": "2026-W36",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m1",
    "loadDays": 0.5
  },
  {
    "id": "a123",
    "projectId": "p11",
    "week": "2026-W40",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m1",
    "loadDays": 0.5
  },
  {
    "id": "a124",
    "projectId": "p11",
    "week": "2026-W44",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m1",
    "loadDays": 0.5
  },
  {
    "id": "a125",
    "projectId": "p11",
    "week": "2026-W49",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m1",
    "loadDays": 0.5
  },
  {
    "id": "a126",
    "projectId": "p12",
    "week": "2026-W5",
    "day": "SEG",
    "title": "Desenvolvimento",
    "role": "PM",
    "memberId": "m1",
    "loadDays": 0.5
  },
  {
    "id": "a127",
    "projectId": "p12",
    "week": "2026-W9",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m1",
    "loadDays": 0.5
  },
  {
    "id": "a128",
    "projectId": "p12",
    "week": "2026-W14",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m1",
    "loadDays": 0.5
  },
  {
    "id": "a129",
    "projectId": "p12",
    "week": "2026-W18",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m1",
    "loadDays": 0.5
  },
  {
    "id": "a130",
    "projectId": "p12",
    "week": "2026-W23",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m1",
    "loadDays": 0.5
  },
  {
    "id": "a131",
    "projectId": "p12",
    "week": "2026-W27",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m1",
    "loadDays": 0.5
  },
  {
    "id": "a132",
    "projectId": "p12",
    "week": "2026-W31",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m1",
    "loadDays": 0.5
  },
  {
    "id": "a133",
    "projectId": "p12",
    "week": "2026-W36",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m1",
    "loadDays": 0.5
  },
  {
    "id": "a134",
    "projectId": "p12",
    "week": "2026-W40",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m1",
    "loadDays": 0.5
  },
  {
    "id": "a135",
    "projectId": "p12",
    "week": "2026-W44",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m1",
    "loadDays": 0.5
  },
  {
    "id": "a136",
    "projectId": "p12",
    "week": "2026-W49",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m1",
    "loadDays": 0.5
  },
  {
    "id": "a137",
    "projectId": "p13",
    "week": "2026-W5",
    "day": "SEG",
    "title": "Desenvolvimento",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a138",
    "projectId": "p13",
    "week": "2026-W9",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a139",
    "projectId": "p13",
    "week": "2026-W14",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a140",
    "projectId": "p13",
    "week": "2026-W18",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a141",
    "projectId": "p13",
    "week": "2026-W23",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a142",
    "projectId": "p13",
    "week": "2026-W27",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a143",
    "projectId": "p13",
    "week": "2026-W31",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a144",
    "projectId": "p13",
    "week": "2026-W36",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a145",
    "projectId": "p13",
    "week": "2026-W40",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a146",
    "projectId": "p13",
    "week": "2026-W44",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a147",
    "projectId": "p13",
    "week": "2026-W49",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a148",
    "projectId": "p14",
    "week": "2026-W5",
    "day": "SEG",
    "title": "Desenvolvimento",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a149",
    "projectId": "p14",
    "week": "2026-W9",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a150",
    "projectId": "p14",
    "week": "2026-W14",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a151",
    "projectId": "p14",
    "week": "2026-W18",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a152",
    "projectId": "p14",
    "week": "2026-W23",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a153",
    "projectId": "p14",
    "week": "2026-W27",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a154",
    "projectId": "p14",
    "week": "2026-W31",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a155",
    "projectId": "p14",
    "week": "2026-W36",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a156",
    "projectId": "p14",
    "week": "2026-W40",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a157",
    "projectId": "p14",
    "week": "2026-W44",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a158",
    "projectId": "p14",
    "week": "2026-W49",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a159",
    "projectId": "p15",
    "week": "2026-W1",
    "day": "SEG",
    "title": "Desenvolvimento",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a160",
    "projectId": "p15",
    "week": "2026-W5",
    "day": "SEG",
    "title": "Desenvolvimento",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a161",
    "projectId": "p15",
    "week": "2026-W9",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a162",
    "projectId": "p15",
    "week": "2026-W14",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a163",
    "projectId": "p15",
    "week": "2026-W18",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a164",
    "projectId": "p15",
    "week": "2026-W23",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a165",
    "projectId": "p15",
    "week": "2026-W27",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a166",
    "projectId": "p15",
    "week": "2026-W31",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a167",
    "projectId": "p15",
    "week": "2026-W36",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a168",
    "projectId": "p15",
    "week": "2026-W40",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a169",
    "projectId": "p15",
    "week": "2026-W44",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a170",
    "projectId": "p15",
    "week": "2026-W49",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a171",
    "projectId": "p16",
    "week": "2026-W1",
    "day": "SEG",
    "title": "Desenvolvimento",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a172",
    "projectId": "p16",
    "week": "2026-W5",
    "day": "SEG",
    "title": "Desenvolvimento",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a173",
    "projectId": "p16",
    "week": "2026-W9",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a174",
    "projectId": "p16",
    "week": "2026-W14",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a175",
    "projectId": "p16",
    "week": "2026-W18",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a176",
    "projectId": "p16",
    "week": "2026-W23",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a177",
    "projectId": "p16",
    "week": "2026-W27",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a178",
    "projectId": "p16",
    "week": "2026-W31",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a179",
    "projectId": "p16",
    "week": "2026-W36",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a180",
    "projectId": "p16",
    "week": "2026-W40",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a181",
    "projectId": "p16",
    "week": "2026-W44",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a182",
    "projectId": "p16",
    "week": "2026-W49",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a183",
    "projectId": "p17",
    "week": "2026-W1",
    "day": "SEG",
    "title": "Desenvolvimento",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a184",
    "projectId": "p17",
    "week": "2026-W5",
    "day": "SEG",
    "title": "Desenvolvimento",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a185",
    "projectId": "p17",
    "week": "2026-W9",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a186",
    "projectId": "p17",
    "week": "2026-W14",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a187",
    "projectId": "p17",
    "week": "2026-W18",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a188",
    "projectId": "p17",
    "week": "2026-W23",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a189",
    "projectId": "p17",
    "week": "2026-W27",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a190",
    "projectId": "p17",
    "week": "2026-W31",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a191",
    "projectId": "p17",
    "week": "2026-W36",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a192",
    "projectId": "p17",
    "week": "2026-W40",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a193",
    "projectId": "p17",
    "week": "2026-W44",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a194",
    "projectId": "p17",
    "week": "2026-W49",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a195",
    "projectId": "p18",
    "week": "2026-W1",
    "day": "SEG",
    "title": "Desenvolvimento",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a196",
    "projectId": "p18",
    "week": "2026-W5",
    "day": "SEG",
    "title": "Desenvolvimento",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a197",
    "projectId": "p18",
    "week": "2026-W9",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a198",
    "projectId": "p18",
    "week": "2026-W14",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a199",
    "projectId": "p18",
    "week": "2026-W18",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a200",
    "projectId": "p18",
    "week": "2026-W23",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a201",
    "projectId": "p18",
    "week": "2026-W27",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a202",
    "projectId": "p18",
    "week": "2026-W31",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a203",
    "projectId": "p18",
    "week": "2026-W36",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a204",
    "projectId": "p18",
    "week": "2026-W40",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a205",
    "projectId": "p18",
    "week": "2026-W44",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a206",
    "projectId": "p18",
    "week": "2026-W49",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a207",
    "projectId": "p19",
    "week": "2026-W5",
    "day": "SEG",
    "title": "Desenvolvimento",
    "role": "PM",
    "memberId": "m1",
    "loadDays": 0.5
  },
  {
    "id": "a208",
    "projectId": "p19",
    "week": "2026-W9",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m1",
    "loadDays": 0.5
  },
  {
    "id": "a209",
    "projectId": "p19",
    "week": "2026-W14",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m1",
    "loadDays": 0.5
  },
  {
    "id": "a210",
    "projectId": "p19",
    "week": "2026-W18",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m1",
    "loadDays": 0.5
  },
  {
    "id": "a211",
    "projectId": "p19",
    "week": "2026-W23",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m1",
    "loadDays": 0.5
  },
  {
    "id": "a212",
    "projectId": "p19",
    "week": "2026-W27",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m1",
    "loadDays": 0.5
  },
  {
    "id": "a213",
    "projectId": "p19",
    "week": "2026-W31",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m1",
    "loadDays": 0.5
  },
  {
    "id": "a214",
    "projectId": "p19",
    "week": "2026-W36",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m1",
    "loadDays": 0.5
  },
  {
    "id": "a215",
    "projectId": "p19",
    "week": "2026-W40",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m1",
    "loadDays": 0.5
  },
  {
    "id": "a216",
    "projectId": "p19",
    "week": "2026-W44",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m1",
    "loadDays": 0.5
  },
  {
    "id": "a217",
    "projectId": "p19",
    "week": "2026-W49",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m1",
    "loadDays": 0.5
  },
  {
    "id": "a218",
    "projectId": "p20",
    "week": "2026-W9",
    "day": "SEG",
    "title": "Desenvolvimento",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a219",
    "projectId": "p20",
    "week": "2026-W14",
    "day": "SEG",
    "title": "Desenvolvimento",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a220",
    "projectId": "p20",
    "week": "2026-W18",
    "day": "SEG",
    "title": "Desenvolvimento",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a221",
    "projectId": "p20",
    "week": "2026-W23",
    "day": "SEG",
    "title": "Desenvolvimento",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a222",
    "projectId": "p20",
    "week": "2026-W27",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a223",
    "projectId": "p20",
    "week": "2026-W31",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a224",
    "projectId": "p20",
    "week": "2026-W36",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a225",
    "projectId": "p20",
    "week": "2026-W40",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a226",
    "projectId": "p20",
    "week": "2026-W44",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a227",
    "projectId": "p20",
    "week": "2026-W49",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a228",
    "projectId": "p21",
    "week": "2026-W1",
    "day": "SEG",
    "title": "Desenvolvimento",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a229",
    "projectId": "p21",
    "week": "2026-W5",
    "day": "SEG",
    "title": "Desenvolvimento",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a230",
    "projectId": "p21",
    "week": "2026-W9",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a231",
    "projectId": "p21",
    "week": "2026-W14",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a232",
    "projectId": "p21",
    "week": "2026-W18",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a233",
    "projectId": "p21",
    "week": "2026-W23",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a234",
    "projectId": "p21",
    "week": "2026-W27",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a235",
    "projectId": "p21",
    "week": "2026-W31",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a236",
    "projectId": "p21",
    "week": "2026-W36",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a237",
    "projectId": "p21",
    "week": "2026-W40",
    "day": "SEG",
    "title": "Desenvolvimento",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a238",
    "projectId": "p21",
    "week": "2026-W44",
    "day": "SEG",
    "title": "Desenvolvimento",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a239",
    "projectId": "p21",
    "week": "2026-W49",
    "day": "SEG",
    "title": "Desenvolvimento",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a240",
    "projectId": "p22",
    "week": "2026-W1",
    "day": "SEG",
    "title": "Desenvolvimento",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a241",
    "projectId": "p22",
    "week": "2026-W5",
    "day": "SEG",
    "title": "Desenvolvimento",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a242",
    "projectId": "p22",
    "week": "2026-W9",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a243",
    "projectId": "p22",
    "week": "2026-W14",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a244",
    "projectId": "p22",
    "week": "2026-W18",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a245",
    "projectId": "p22",
    "week": "2026-W23",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a246",
    "projectId": "p22",
    "week": "2026-W27",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a247",
    "projectId": "p22",
    "week": "2026-W31",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a248",
    "projectId": "p22",
    "week": "2026-W36",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a249",
    "projectId": "p22",
    "week": "2026-W40",
    "day": "SEG",
    "title": "Desenvolvimento",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a250",
    "projectId": "p22",
    "week": "2026-W44",
    "day": "SEG",
    "title": "Desenvolvimento",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a251",
    "projectId": "p22",
    "week": "2026-W49",
    "day": "SEG",
    "title": "Desenvolvimento",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a252",
    "projectId": "p23",
    "week": "2026-W27",
    "day": "SEG",
    "title": "Desenvolvimento",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a253",
    "projectId": "p23",
    "week": "2026-W31",
    "day": "SEG",
    "title": "Desenvolvimento",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a254",
    "projectId": "p23",
    "week": "2026-W36",
    "day": "SEG",
    "title": "Desenvolvimento",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a255",
    "projectId": "p23",
    "week": "2026-W40",
    "day": "SEG",
    "title": "Desenvolvimento",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a256",
    "projectId": "p23",
    "week": "2026-W44",
    "day": "SEG",
    "title": "Desenvolvimento",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a257",
    "projectId": "p23",
    "week": "2026-W49",
    "day": "SEG",
    "title": "Desenvolvimento",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a258",
    "projectId": "p24",
    "week": "2026-W1",
    "day": "SEG",
    "title": "Desenvolvimento",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a259",
    "projectId": "p24",
    "week": "2026-W5",
    "day": "SEG",
    "title": "Desenvolvimento",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a260",
    "projectId": "p24",
    "week": "2026-W9",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a261",
    "projectId": "p24",
    "week": "2026-W14",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a262",
    "projectId": "p24",
    "week": "2026-W18",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a263",
    "projectId": "p24",
    "week": "2026-W23",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a264",
    "projectId": "p24",
    "week": "2026-W27",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a265",
    "projectId": "p24",
    "week": "2026-W31",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a266",
    "projectId": "p24",
    "week": "2026-W36",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a267",
    "projectId": "p24",
    "week": "2026-W40",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a268",
    "projectId": "p24",
    "week": "2026-W44",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a269",
    "projectId": "p24",
    "week": "2026-W49",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a270",
    "projectId": "p25",
    "week": "2026-W1",
    "day": "SEG",
    "title": "Desenvolvimento",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a271",
    "projectId": "p25",
    "week": "2026-W5",
    "day": "SEG",
    "title": "Desenvolvimento",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a272",
    "projectId": "p25",
    "week": "2026-W9",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a273",
    "projectId": "p25",
    "week": "2026-W14",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a274",
    "projectId": "p25",
    "week": "2026-W18",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a275",
    "projectId": "p25",
    "week": "2026-W23",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a276",
    "projectId": "p25",
    "week": "2026-W27",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a277",
    "projectId": "p25",
    "week": "2026-W31",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a278",
    "projectId": "p25",
    "week": "2026-W36",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a279",
    "projectId": "p25",
    "week": "2026-W40",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a280",
    "projectId": "p25",
    "week": "2026-W44",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a281",
    "projectId": "p25",
    "week": "2026-W49",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a282",
    "projectId": "p26",
    "week": "2026-W5",
    "day": "SEG",
    "title": "Desenvolvimento",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a283",
    "projectId": "p26",
    "week": "2026-W9",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a284",
    "projectId": "p26",
    "week": "2026-W14",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a285",
    "projectId": "p26",
    "week": "2026-W18",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a286",
    "projectId": "p26",
    "week": "2026-W23",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a287",
    "projectId": "p26",
    "week": "2026-W27",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a288",
    "projectId": "p26",
    "week": "2026-W31",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a289",
    "projectId": "p26",
    "week": "2026-W36",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a290",
    "projectId": "p26",
    "week": "2026-W40",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a291",
    "projectId": "p26",
    "week": "2026-W44",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a292",
    "projectId": "p26",
    "week": "2026-W49",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a293",
    "projectId": "p27",
    "week": "2026-W1",
    "day": "SEG",
    "title": "Desenvolvimento",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a294",
    "projectId": "p27",
    "week": "2026-W5",
    "day": "SEG",
    "title": "Desenvolvimento",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a295",
    "projectId": "p27",
    "week": "2026-W9",
    "day": "SEG",
    "title": "Desenvolvimento",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a296",
    "projectId": "p27",
    "week": "2026-W14",
    "day": "SEG",
    "title": "Desenvolvimento",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a297",
    "projectId": "p27",
    "week": "2026-W18",
    "day": "SEG",
    "title": "Desenvolvimento",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a298",
    "projectId": "p27",
    "week": "2026-W23",
    "day": "SEG",
    "title": "Desenvolvimento",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a299",
    "projectId": "p27",
    "week": "2026-W27",
    "day": "SEG",
    "title": "Desenvolvimento",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a300",
    "projectId": "p27",
    "week": "2026-W31",
    "day": "SEG",
    "title": "Desenvolvimento",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a301",
    "projectId": "p27",
    "week": "2026-W36",
    "day": "SEG",
    "title": "Desenvolvimento",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a302",
    "projectId": "p27",
    "week": "2026-W40",
    "day": "SEG",
    "title": "Desenvolvimento",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a303",
    "projectId": "p27",
    "week": "2026-W44",
    "day": "SEG",
    "title": "Desenvolvimento",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a304",
    "projectId": "p27",
    "week": "2026-W49",
    "day": "SEG",
    "title": "Desenvolvimento",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a305",
    "projectId": "p28",
    "week": "2026-W1",
    "day": "SEG",
    "title": "Desenvolvimento",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a306",
    "projectId": "p28",
    "week": "2026-W5",
    "day": "SEG",
    "title": "Desenvolvimento",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a307",
    "projectId": "p28",
    "week": "2026-W9",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a308",
    "projectId": "p28",
    "week": "2026-W14",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a309",
    "projectId": "p28",
    "week": "2026-W18",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a310",
    "projectId": "p28",
    "week": "2026-W23",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a311",
    "projectId": "p28",
    "week": "2026-W27",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a312",
    "projectId": "p28",
    "week": "2026-W31",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a313",
    "projectId": "p28",
    "week": "2026-W36",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a314",
    "projectId": "p28",
    "week": "2026-W40",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a315",
    "projectId": "p28",
    "week": "2026-W44",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a316",
    "projectId": "p28",
    "week": "2026-W49",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a317",
    "projectId": "p29",
    "week": "2026-W5",
    "day": "SEG",
    "title": "Desenvolvimento",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a318",
    "projectId": "p29",
    "week": "2026-W9",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a319",
    "projectId": "p29",
    "week": "2026-W14",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a320",
    "projectId": "p29",
    "week": "2026-W18",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a321",
    "projectId": "p29",
    "week": "2026-W23",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a322",
    "projectId": "p29",
    "week": "2026-W27",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a323",
    "projectId": "p29",
    "week": "2026-W31",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a324",
    "projectId": "p29",
    "week": "2026-W36",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a325",
    "projectId": "p29",
    "week": "2026-W40",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a326",
    "projectId": "p29",
    "week": "2026-W44",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a327",
    "projectId": "p29",
    "week": "2026-W49",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a328",
    "projectId": "p30",
    "week": "2026-W5",
    "day": "SEG",
    "title": "Desenvolvimento",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a329",
    "projectId": "p30",
    "week": "2026-W9",
    "day": "SEG",
    "title": "Desenvolvimento",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a330",
    "projectId": "p30",
    "week": "2026-W14",
    "day": "SEG",
    "title": "Desenvolvimento",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a331",
    "projectId": "p30",
    "week": "2026-W18",
    "day": "SEG",
    "title": "Desenvolvimento",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a332",
    "projectId": "p30",
    "week": "2026-W23",
    "day": "SEG",
    "title": "Desenvolvimento",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a333",
    "projectId": "p30",
    "week": "2026-W27",
    "day": "SEG",
    "title": "Desenvolvimento",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a334",
    "projectId": "p30",
    "week": "2026-W31",
    "day": "SEG",
    "title": "Desenvolvimento",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a335",
    "projectId": "p30",
    "week": "2026-W36",
    "day": "SEG",
    "title": "Desenvolvimento",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a336",
    "projectId": "p30",
    "week": "2026-W40",
    "day": "SEG",
    "title": "Desenvolvimento",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a337",
    "projectId": "p30",
    "week": "2026-W44",
    "day": "SEG",
    "title": "Desenvolvimento",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a338",
    "projectId": "p30",
    "week": "2026-W49",
    "day": "SEG",
    "title": "Desenvolvimento",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a339",
    "projectId": "p31",
    "week": "2026-W1",
    "day": "SEG",
    "title": "Desenvolvimento",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a340",
    "projectId": "p31",
    "week": "2026-W5",
    "day": "SEG",
    "title": "Desenvolvimento",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a341",
    "projectId": "p31",
    "week": "2026-W9",
    "day": "SEG",
    "title": "Desenvolvimento",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a342",
    "projectId": "p31",
    "week": "2026-W14",
    "day": "SEG",
    "title": "Desenvolvimento",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a343",
    "projectId": "p31",
    "week": "2026-W18",
    "day": "SEG",
    "title": "Desenvolvimento",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a344",
    "projectId": "p31",
    "week": "2026-W23",
    "day": "SEG",
    "title": "Desenvolvimento",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a345",
    "projectId": "p31",
    "week": "2026-W27",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a346",
    "projectId": "p31",
    "week": "2026-W31",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a347",
    "projectId": "p31",
    "week": "2026-W36",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a348",
    "projectId": "p32",
    "week": "2026-W1",
    "day": "SEG",
    "title": "Desenvolvimento",
    "role": "PM",
    "memberId": "m1",
    "loadDays": 0.5
  },
  {
    "id": "a349",
    "projectId": "p32",
    "week": "2026-W5",
    "day": "SEG",
    "title": "Desenvolvimento",
    "role": "PM",
    "memberId": "m1",
    "loadDays": 0.5
  },
  {
    "id": "a350",
    "projectId": "p32",
    "week": "2026-W9",
    "day": "SEG",
    "title": "Desenvolvimento",
    "role": "PM",
    "memberId": "m1",
    "loadDays": 0.5
  },
  {
    "id": "a351",
    "projectId": "p32",
    "week": "2026-W14",
    "day": "SEG",
    "title": "Desenvolvimento",
    "role": "PM",
    "memberId": "m1",
    "loadDays": 0.5
  },
  {
    "id": "a352",
    "projectId": "p32",
    "week": "2026-W18",
    "day": "SEG",
    "title": "Desenvolvimento",
    "role": "PM",
    "memberId": "m1",
    "loadDays": 0.5
  },
  {
    "id": "a353",
    "projectId": "p32",
    "week": "2026-W23",
    "day": "SEG",
    "title": "Desenvolvimento",
    "role": "PM",
    "memberId": "m1",
    "loadDays": 0.5
  },
  {
    "id": "a354",
    "projectId": "p32",
    "week": "2026-W27",
    "day": "SEG",
    "title": "Desenvolvimento",
    "role": "PM",
    "memberId": "m1",
    "loadDays": 0.5
  },
  {
    "id": "a355",
    "projectId": "p32",
    "week": "2026-W31",
    "day": "SEG",
    "title": "Desenvolvimento",
    "role": "PM",
    "memberId": "m1",
    "loadDays": 0.5
  },
  {
    "id": "a356",
    "projectId": "p32",
    "week": "2026-W36",
    "day": "SEG",
    "title": "Desenvolvimento",
    "role": "PM",
    "memberId": "m1",
    "loadDays": 0.5
  },
  {
    "id": "a357",
    "projectId": "p32",
    "week": "2026-W40",
    "day": "SEG",
    "title": "Desenvolvimento",
    "role": "PM",
    "memberId": "m1",
    "loadDays": 0.5
  },
  {
    "id": "a358",
    "projectId": "p32",
    "week": "2026-W44",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m1",
    "loadDays": 0.5
  },
  {
    "id": "a359",
    "projectId": "p32",
    "week": "2026-W49",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m1",
    "loadDays": 0.5
  },
  {
    "id": "a360",
    "projectId": "p33",
    "week": "2026-W1",
    "day": "SEG",
    "title": "Desenvolvimento",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a361",
    "projectId": "p33",
    "week": "2026-W5",
    "day": "SEG",
    "title": "Desenvolvimento",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a362",
    "projectId": "p33",
    "week": "2026-W9",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a363",
    "projectId": "p33",
    "week": "2026-W14",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a364",
    "projectId": "p33",
    "week": "2026-W18",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a365",
    "projectId": "p33",
    "week": "2026-W23",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a366",
    "projectId": "p33",
    "week": "2026-W27",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a367",
    "projectId": "p33",
    "week": "2026-W31",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a368",
    "projectId": "p33",
    "week": "2026-W36",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a369",
    "projectId": "p33",
    "week": "2026-W40",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a370",
    "projectId": "p33",
    "week": "2026-W44",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a371",
    "projectId": "p33",
    "week": "2026-W49",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a372",
    "projectId": "p34",
    "week": "2026-W1",
    "day": "SEG",
    "title": "Desenvolvimento",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a373",
    "projectId": "p34",
    "week": "2026-W5",
    "day": "SEG",
    "title": "Desenvolvimento",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a374",
    "projectId": "p34",
    "week": "2026-W9",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a375",
    "projectId": "p34",
    "week": "2026-W14",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a376",
    "projectId": "p34",
    "week": "2026-W18",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a377",
    "projectId": "p34",
    "week": "2026-W23",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a378",
    "projectId": "p34",
    "week": "2026-W27",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a379",
    "projectId": "p34",
    "week": "2026-W31",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a380",
    "projectId": "p34",
    "week": "2026-W36",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a381",
    "projectId": "p34",
    "week": "2026-W40",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a382",
    "projectId": "p34",
    "week": "2026-W44",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a383",
    "projectId": "p34",
    "week": "2026-W49",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a384",
    "projectId": "p35",
    "week": "2026-W1",
    "day": "SEG",
    "title": "Desenvolvimento",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a385",
    "projectId": "p35",
    "week": "2026-W5",
    "day": "SEG",
    "title": "Desenvolvimento",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a386",
    "projectId": "p35",
    "week": "2026-W9",
    "day": "SEG",
    "title": "Desenvolvimento",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a387",
    "projectId": "p35",
    "week": "2026-W14",
    "day": "SEG",
    "title": "Desenvolvimento",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a388",
    "projectId": "p35",
    "week": "2026-W18",
    "day": "SEG",
    "title": "Desenvolvimento",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a389",
    "projectId": "p35",
    "week": "2026-W23",
    "day": "SEG",
    "title": "Desenvolvimento",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a390",
    "projectId": "p35",
    "week": "2026-W27",
    "day": "SEG",
    "title": "Desenvolvimento",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a391",
    "projectId": "p35",
    "week": "2026-W31",
    "day": "SEG",
    "title": "Desenvolvimento",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a392",
    "projectId": "p35",
    "week": "2026-W36",
    "day": "SEG",
    "title": "Desenvolvimento",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a393",
    "projectId": "p35",
    "week": "2026-W40",
    "day": "SEG",
    "title": "Desenvolvimento",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a394",
    "projectId": "p35",
    "week": "2026-W44",
    "day": "SEG",
    "title": "Desenvolvimento",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a395",
    "projectId": "p35",
    "week": "2026-W49",
    "day": "SEG",
    "title": "Desenvolvimento",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a396",
    "projectId": "p36",
    "week": "2026-W1",
    "day": "SEG",
    "title": "Desenvolvimento",
    "role": "PM",
    "memberId": "m3",
    "loadDays": 0.5
  },
  {
    "id": "a397",
    "projectId": "p36",
    "week": "2026-W5",
    "day": "SEG",
    "title": "Desenvolvimento",
    "role": "PM",
    "memberId": "m3",
    "loadDays": 0.5
  },
  {
    "id": "a398",
    "projectId": "p36",
    "week": "2026-W9",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m3",
    "loadDays": 0.5
  },
  {
    "id": "a399",
    "projectId": "p36",
    "week": "2026-W14",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m3",
    "loadDays": 0.5
  },
  {
    "id": "a400",
    "projectId": "p36",
    "week": "2026-W18",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m3",
    "loadDays": 0.5
  },
  {
    "id": "a401",
    "projectId": "p36",
    "week": "2026-W23",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m3",
    "loadDays": 0.5
  },
  {
    "id": "a402",
    "projectId": "p36",
    "week": "2026-W27",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m3",
    "loadDays": 0.5
  },
  {
    "id": "a403",
    "projectId": "p36",
    "week": "2026-W31",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m3",
    "loadDays": 0.5
  },
  {
    "id": "a404",
    "projectId": "p36",
    "week": "2026-W36",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m3",
    "loadDays": 0.5
  },
  {
    "id": "a405",
    "projectId": "p36",
    "week": "2026-W40",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m3",
    "loadDays": 0.5
  },
  {
    "id": "a406",
    "projectId": "p36",
    "week": "2026-W44",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m3",
    "loadDays": 0.5
  },
  {
    "id": "a407",
    "projectId": "p36",
    "week": "2026-W49",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m3",
    "loadDays": 0.5
  },
  {
    "id": "a408",
    "projectId": "p37",
    "week": "2026-W1",
    "day": "SEG",
    "title": "Desenvolvimento",
    "role": "PM",
    "memberId": "m3",
    "loadDays": 0.5
  },
  {
    "id": "a409",
    "projectId": "p37",
    "week": "2026-W5",
    "day": "SEG",
    "title": "Desenvolvimento",
    "role": "PM",
    "memberId": "m3",
    "loadDays": 0.5
  },
  {
    "id": "a410",
    "projectId": "p37",
    "week": "2026-W9",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m3",
    "loadDays": 0.5
  },
  {
    "id": "a411",
    "projectId": "p37",
    "week": "2026-W14",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m3",
    "loadDays": 0.5
  },
  {
    "id": "a412",
    "projectId": "p37",
    "week": "2026-W18",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m3",
    "loadDays": 0.5
  },
  {
    "id": "a413",
    "projectId": "p37",
    "week": "2026-W23",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m3",
    "loadDays": 0.5
  },
  {
    "id": "a414",
    "projectId": "p37",
    "week": "2026-W27",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m3",
    "loadDays": 0.5
  },
  {
    "id": "a415",
    "projectId": "p37",
    "week": "2026-W31",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m3",
    "loadDays": 0.5
  },
  {
    "id": "a416",
    "projectId": "p37",
    "week": "2026-W36",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m3",
    "loadDays": 0.5
  },
  {
    "id": "a417",
    "projectId": "p37",
    "week": "2026-W40",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m3",
    "loadDays": 0.5
  },
  {
    "id": "a418",
    "projectId": "p37",
    "week": "2026-W44",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m3",
    "loadDays": 0.5
  },
  {
    "id": "a419",
    "projectId": "p37",
    "week": "2026-W49",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m3",
    "loadDays": 0.5
  },
  {
    "id": "a420",
    "projectId": "p38",
    "week": "2026-W1",
    "day": "SEG",
    "title": "Desenvolvimento",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a421",
    "projectId": "p38",
    "week": "2026-W5",
    "day": "SEG",
    "title": "Desenvolvimento",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a422",
    "projectId": "p38",
    "week": "2026-W9",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a423",
    "projectId": "p38",
    "week": "2026-W14",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a424",
    "projectId": "p38",
    "week": "2026-W18",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a425",
    "projectId": "p38",
    "week": "2026-W23",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a426",
    "projectId": "p38",
    "week": "2026-W27",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a427",
    "projectId": "p38",
    "week": "2026-W31",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a428",
    "projectId": "p38",
    "week": "2026-W36",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a429",
    "projectId": "p38",
    "week": "2026-W40",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a430",
    "projectId": "p38",
    "week": "2026-W44",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a431",
    "projectId": "p38",
    "week": "2026-W49",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a432",
    "projectId": "p39",
    "week": "2026-W1",
    "day": "SEG",
    "title": "Desenvolvimento",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a433",
    "projectId": "p39",
    "week": "2026-W5",
    "day": "SEG",
    "title": "Desenvolvimento",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a434",
    "projectId": "p39",
    "week": "2026-W9",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a435",
    "projectId": "p39",
    "week": "2026-W14",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a436",
    "projectId": "p39",
    "week": "2026-W18",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a437",
    "projectId": "p39",
    "week": "2026-W23",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a438",
    "projectId": "p39",
    "week": "2026-W27",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a439",
    "projectId": "p39",
    "week": "2026-W31",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a440",
    "projectId": "p39",
    "week": "2026-W36",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a441",
    "projectId": "p39",
    "week": "2026-W40",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a442",
    "projectId": "p39",
    "week": "2026-W44",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a443",
    "projectId": "p39",
    "week": "2026-W49",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a444",
    "projectId": "p40",
    "week": "2026-W1",
    "day": "SEG",
    "title": "Desenvolvimento",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a445",
    "projectId": "p40",
    "week": "2026-W5",
    "day": "SEG",
    "title": "Desenvolvimento",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a446",
    "projectId": "p40",
    "week": "2026-W9",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a447",
    "projectId": "p40",
    "week": "2026-W14",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a448",
    "projectId": "p40",
    "week": "2026-W18",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a449",
    "projectId": "p40",
    "week": "2026-W23",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a450",
    "projectId": "p40",
    "week": "2026-W27",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a451",
    "projectId": "p40",
    "week": "2026-W31",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a452",
    "projectId": "p40",
    "week": "2026-W36",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a453",
    "projectId": "p40",
    "week": "2026-W40",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a454",
    "projectId": "p40",
    "week": "2026-W44",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a455",
    "projectId": "p40",
    "week": "2026-W49",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a456",
    "projectId": "p41",
    "week": "2026-W1",
    "day": "SEG",
    "title": "Desenvolvimento",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a457",
    "projectId": "p41",
    "week": "2026-W5",
    "day": "SEG",
    "title": "Desenvolvimento",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a458",
    "projectId": "p41",
    "week": "2026-W9",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a459",
    "projectId": "p41",
    "week": "2026-W14",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a460",
    "projectId": "p41",
    "week": "2026-W18",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a461",
    "projectId": "p41",
    "week": "2026-W23",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a462",
    "projectId": "p41",
    "week": "2026-W27",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a463",
    "projectId": "p41",
    "week": "2026-W31",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a464",
    "projectId": "p41",
    "week": "2026-W36",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a465",
    "projectId": "p41",
    "week": "2026-W40",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a466",
    "projectId": "p41",
    "week": "2026-W44",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a467",
    "projectId": "p41",
    "week": "2026-W49",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a468",
    "projectId": "p42",
    "week": "2026-W1",
    "day": "SEG",
    "title": "Desenvolvimento",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a469",
    "projectId": "p42",
    "week": "2026-W5",
    "day": "SEG",
    "title": "Desenvolvimento",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a470",
    "projectId": "p42",
    "week": "2026-W9",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a471",
    "projectId": "p42",
    "week": "2026-W14",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a472",
    "projectId": "p42",
    "week": "2026-W18",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a473",
    "projectId": "p42",
    "week": "2026-W23",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a474",
    "projectId": "p42",
    "week": "2026-W27",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a475",
    "projectId": "p42",
    "week": "2026-W31",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a476",
    "projectId": "p42",
    "week": "2026-W36",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a477",
    "projectId": "p42",
    "week": "2026-W40",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a478",
    "projectId": "p42",
    "week": "2026-W44",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a479",
    "projectId": "p42",
    "week": "2026-W49",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a480",
    "projectId": "p43",
    "week": "2026-W1",
    "day": "SEG",
    "title": "Desenvolvimento",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a481",
    "projectId": "p43",
    "week": "2026-W5",
    "day": "SEG",
    "title": "Desenvolvimento",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a482",
    "projectId": "p43",
    "week": "2026-W9",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a483",
    "projectId": "p43",
    "week": "2026-W14",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a484",
    "projectId": "p43",
    "week": "2026-W18",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a485",
    "projectId": "p43",
    "week": "2026-W23",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a486",
    "projectId": "p43",
    "week": "2026-W27",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a487",
    "projectId": "p43",
    "week": "2026-W31",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a488",
    "projectId": "p43",
    "week": "2026-W36",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a489",
    "projectId": "p43",
    "week": "2026-W40",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a490",
    "projectId": "p43",
    "week": "2026-W44",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a491",
    "projectId": "p43",
    "week": "2026-W49",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a492",
    "projectId": "p44",
    "week": "2026-W1",
    "day": "SEG",
    "title": "Desenvolvimento",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a493",
    "projectId": "p44",
    "week": "2026-W5",
    "day": "SEG",
    "title": "Desenvolvimento",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a494",
    "projectId": "p44",
    "week": "2026-W9",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a495",
    "projectId": "p44",
    "week": "2026-W14",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a496",
    "projectId": "p44",
    "week": "2026-W18",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a497",
    "projectId": "p44",
    "week": "2026-W23",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a498",
    "projectId": "p44",
    "week": "2026-W27",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a499",
    "projectId": "p44",
    "week": "2026-W31",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a500",
    "projectId": "p44",
    "week": "2026-W36",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a501",
    "projectId": "p44",
    "week": "2026-W40",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a502",
    "projectId": "p44",
    "week": "2026-W44",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a503",
    "projectId": "p44",
    "week": "2026-W49",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a504",
    "projectId": "p45",
    "week": "2026-W1",
    "day": "SEG",
    "title": "Desenvolvimento",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a505",
    "projectId": "p45",
    "week": "2026-W5",
    "day": "SEG",
    "title": "Desenvolvimento",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a506",
    "projectId": "p45",
    "week": "2026-W9",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a507",
    "projectId": "p45",
    "week": "2026-W14",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a508",
    "projectId": "p45",
    "week": "2026-W18",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a509",
    "projectId": "p45",
    "week": "2026-W23",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a510",
    "projectId": "p45",
    "week": "2026-W27",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a511",
    "projectId": "p45",
    "week": "2026-W31",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a512",
    "projectId": "p45",
    "week": "2026-W36",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a513",
    "projectId": "p45",
    "week": "2026-W40",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a514",
    "projectId": "p45",
    "week": "2026-W44",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a515",
    "projectId": "p45",
    "week": "2026-W49",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a516",
    "projectId": "p46",
    "week": "2026-W1",
    "day": "SEG",
    "title": "Desenvolvimento",
    "role": "PM",
    "memberId": "m3",
    "loadDays": 0.5
  },
  {
    "id": "a517",
    "projectId": "p46",
    "week": "2026-W5",
    "day": "SEG",
    "title": "Desenvolvimento",
    "role": "PM",
    "memberId": "m3",
    "loadDays": 0.5
  },
  {
    "id": "a518",
    "projectId": "p46",
    "week": "2026-W9",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m3",
    "loadDays": 0.5
  },
  {
    "id": "a519",
    "projectId": "p46",
    "week": "2026-W14",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m3",
    "loadDays": 0.5
  },
  {
    "id": "a520",
    "projectId": "p46",
    "week": "2026-W18",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m3",
    "loadDays": 0.5
  },
  {
    "id": "a521",
    "projectId": "p46",
    "week": "2026-W23",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m3",
    "loadDays": 0.5
  },
  {
    "id": "a522",
    "projectId": "p46",
    "week": "2026-W27",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m3",
    "loadDays": 0.5
  },
  {
    "id": "a523",
    "projectId": "p46",
    "week": "2026-W31",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m3",
    "loadDays": 0.5
  },
  {
    "id": "a524",
    "projectId": "p46",
    "week": "2026-W36",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m3",
    "loadDays": 0.5
  },
  {
    "id": "a525",
    "projectId": "p46",
    "week": "2026-W40",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m3",
    "loadDays": 0.5
  },
  {
    "id": "a526",
    "projectId": "p46",
    "week": "2026-W44",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m3",
    "loadDays": 0.5
  },
  {
    "id": "a527",
    "projectId": "p46",
    "week": "2026-W49",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m3",
    "loadDays": 0.5
  },
  {
    "id": "a528",
    "projectId": "p47",
    "week": "2026-W1",
    "day": "SEG",
    "title": "Desenvolvimento",
    "role": "PM",
    "memberId": "m3",
    "loadDays": 0.5
  },
  {
    "id": "a529",
    "projectId": "p47",
    "week": "2026-W5",
    "day": "SEG",
    "title": "Desenvolvimento",
    "role": "PM",
    "memberId": "m3",
    "loadDays": 0.5
  },
  {
    "id": "a530",
    "projectId": "p47",
    "week": "2026-W9",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m3",
    "loadDays": 0.5
  },
  {
    "id": "a531",
    "projectId": "p47",
    "week": "2026-W14",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m3",
    "loadDays": 0.5
  },
  {
    "id": "a532",
    "projectId": "p47",
    "week": "2026-W18",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m3",
    "loadDays": 0.5
  },
  {
    "id": "a533",
    "projectId": "p47",
    "week": "2026-W23",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m3",
    "loadDays": 0.5
  },
  {
    "id": "a534",
    "projectId": "p47",
    "week": "2026-W27",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m3",
    "loadDays": 0.5
  },
  {
    "id": "a535",
    "projectId": "p47",
    "week": "2026-W31",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m3",
    "loadDays": 0.5
  },
  {
    "id": "a536",
    "projectId": "p47",
    "week": "2026-W36",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m3",
    "loadDays": 0.5
  },
  {
    "id": "a537",
    "projectId": "p47",
    "week": "2026-W40",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m3",
    "loadDays": 0.5
  },
  {
    "id": "a538",
    "projectId": "p47",
    "week": "2026-W44",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m3",
    "loadDays": 0.5
  },
  {
    "id": "a539",
    "projectId": "p47",
    "week": "2026-W49",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m3",
    "loadDays": 0.5
  },
  {
    "id": "a540",
    "projectId": "p48",
    "week": "2026-W1",
    "day": "SEG",
    "title": "Desenvolvimento",
    "role": "PM",
    "memberId": "m1",
    "loadDays": 0.5
  },
  {
    "id": "a541",
    "projectId": "p48",
    "week": "2026-W5",
    "day": "SEG",
    "title": "Desenvolvimento",
    "role": "PM",
    "memberId": "m1",
    "loadDays": 0.5
  },
  {
    "id": "a542",
    "projectId": "p48",
    "week": "2026-W9",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m1",
    "loadDays": 0.5
  },
  {
    "id": "a543",
    "projectId": "p48",
    "week": "2026-W14",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m1",
    "loadDays": 0.5
  },
  {
    "id": "a544",
    "projectId": "p48",
    "week": "2026-W18",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m1",
    "loadDays": 0.5
  },
  {
    "id": "a545",
    "projectId": "p48",
    "week": "2026-W23",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m1",
    "loadDays": 0.5
  },
  {
    "id": "a546",
    "projectId": "p48",
    "week": "2026-W27",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m1",
    "loadDays": 0.5
  },
  {
    "id": "a547",
    "projectId": "p48",
    "week": "2026-W31",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m1",
    "loadDays": 0.5
  },
  {
    "id": "a548",
    "projectId": "p48",
    "week": "2026-W36",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m1",
    "loadDays": 0.5
  },
  {
    "id": "a549",
    "projectId": "p48",
    "week": "2026-W40",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m1",
    "loadDays": 0.5
  },
  {
    "id": "a550",
    "projectId": "p48",
    "week": "2026-W44",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m1",
    "loadDays": 0.5
  },
  {
    "id": "a551",
    "projectId": "p48",
    "week": "2026-W49",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m1",
    "loadDays": 0.5
  },
  {
    "id": "a552",
    "projectId": "p49",
    "week": "2026-W1",
    "day": "SEG",
    "title": "Desenvolvimento",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a553",
    "projectId": "p49",
    "week": "2026-W5",
    "day": "SEG",
    "title": "Desenvolvimento",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a554",
    "projectId": "p49",
    "week": "2026-W9",
    "day": "SEG",
    "title": "Desenvolvimento",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a555",
    "projectId": "p49",
    "week": "2026-W14",
    "day": "SEG",
    "title": "Desenvolvimento",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a556",
    "projectId": "p49",
    "week": "2026-W18",
    "day": "SEG",
    "title": "Desenvolvimento",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a557",
    "projectId": "p49",
    "week": "2026-W23",
    "day": "SEG",
    "title": "Desenvolvimento",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a558",
    "projectId": "p49",
    "week": "2026-W27",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a559",
    "projectId": "p49",
    "week": "2026-W31",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a560",
    "projectId": "p49",
    "week": "2026-W36",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a561",
    "projectId": "p49",
    "week": "2026-W40",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a562",
    "projectId": "p49",
    "week": "2026-W44",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a563",
    "projectId": "p49",
    "week": "2026-W49",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a564",
    "projectId": "p50",
    "week": "2026-W1",
    "day": "SEG",
    "title": "Desenvolvimento",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a565",
    "projectId": "p50",
    "week": "2026-W5",
    "day": "SEG",
    "title": "Desenvolvimento",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a566",
    "projectId": "p50",
    "week": "2026-W9",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a567",
    "projectId": "p50",
    "week": "2026-W14",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a568",
    "projectId": "p50",
    "week": "2026-W18",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a569",
    "projectId": "p50",
    "week": "2026-W23",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a570",
    "projectId": "p50",
    "week": "2026-W27",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a571",
    "projectId": "p50",
    "week": "2026-W31",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a572",
    "projectId": "p50",
    "week": "2026-W36",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a573",
    "projectId": "p50",
    "week": "2026-W40",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a574",
    "projectId": "p50",
    "week": "2026-W44",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a575",
    "projectId": "p50",
    "week": "2026-W49",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a576",
    "projectId": "p51",
    "week": "2026-W1",
    "day": "SEG",
    "title": "Desenvolvimento",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a577",
    "projectId": "p51",
    "week": "2026-W5",
    "day": "SEG",
    "title": "Desenvolvimento",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a578",
    "projectId": "p51",
    "week": "2026-W9",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a579",
    "projectId": "p51",
    "week": "2026-W14",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a580",
    "projectId": "p51",
    "week": "2026-W18",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a581",
    "projectId": "p51",
    "week": "2026-W23",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a582",
    "projectId": "p51",
    "week": "2026-W27",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a583",
    "projectId": "p51",
    "week": "2026-W31",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a584",
    "projectId": "p51",
    "week": "2026-W36",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a585",
    "projectId": "p51",
    "week": "2026-W40",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a586",
    "projectId": "p51",
    "week": "2026-W44",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a587",
    "projectId": "p51",
    "week": "2026-W49",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a588",
    "projectId": "p52",
    "week": "2026-W1",
    "day": "SEG",
    "title": "Desenvolvimento",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a589",
    "projectId": "p52",
    "week": "2026-W5",
    "day": "SEG",
    "title": "Desenvolvimento",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a590",
    "projectId": "p52",
    "week": "2026-W9",
    "day": "SEG",
    "title": "Desenvolvimento",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a591",
    "projectId": "p52",
    "week": "2026-W14",
    "day": "SEG",
    "title": "Desenvolvimento",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a592",
    "projectId": "p52",
    "week": "2026-W18",
    "day": "SEG",
    "title": "Desenvolvimento",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a593",
    "projectId": "p52",
    "week": "2026-W23",
    "day": "SEG",
    "title": "Desenvolvimento",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a594",
    "projectId": "p52",
    "week": "2026-W27",
    "day": "SEG",
    "title": "Desenvolvimento",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a595",
    "projectId": "p52",
    "week": "2026-W31",
    "day": "SEG",
    "title": "Desenvolvimento",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a596",
    "projectId": "p52",
    "week": "2026-W36",
    "day": "SEG",
    "title": "Desenvolvimento",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a597",
    "projectId": "p52",
    "week": "2026-W40",
    "day": "SEG",
    "title": "Desenvolvimento",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a598",
    "projectId": "p52",
    "week": "2026-W44",
    "day": "SEG",
    "title": "Desenvolvimento",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a599",
    "projectId": "p52",
    "week": "2026-W49",
    "day": "SEG",
    "title": "Desenvolvimento",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a600",
    "projectId": "p53",
    "week": "2026-W1",
    "day": "SEG",
    "title": "Desenvolvimento",
    "role": "PM",
    "memberId": "m1",
    "loadDays": 0.5
  },
  {
    "id": "a601",
    "projectId": "p53",
    "week": "2026-W5",
    "day": "SEG",
    "title": "Desenvolvimento",
    "role": "PM",
    "memberId": "m1",
    "loadDays": 0.5
  },
  {
    "id": "a602",
    "projectId": "p53",
    "week": "2026-W9",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m1",
    "loadDays": 0.5
  },
  {
    "id": "a603",
    "projectId": "p53",
    "week": "2026-W14",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m1",
    "loadDays": 0.5
  },
  {
    "id": "a604",
    "projectId": "p53",
    "week": "2026-W18",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m1",
    "loadDays": 0.5
  },
  {
    "id": "a605",
    "projectId": "p53",
    "week": "2026-W23",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m1",
    "loadDays": 0.5
  },
  {
    "id": "a606",
    "projectId": "p53",
    "week": "2026-W27",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m1",
    "loadDays": 0.5
  },
  {
    "id": "a607",
    "projectId": "p53",
    "week": "2026-W31",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m1",
    "loadDays": 0.5
  },
  {
    "id": "a608",
    "projectId": "p53",
    "week": "2026-W36",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m1",
    "loadDays": 0.5
  },
  {
    "id": "a609",
    "projectId": "p53",
    "week": "2026-W40",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m1",
    "loadDays": 0.5
  },
  {
    "id": "a610",
    "projectId": "p53",
    "week": "2026-W44",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m1",
    "loadDays": 0.5
  },
  {
    "id": "a611",
    "projectId": "p53",
    "week": "2026-W49",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m1",
    "loadDays": 0.5
  },
  {
    "id": "a612",
    "projectId": "p54",
    "week": "2026-W1",
    "day": "SEG",
    "title": "Desenvolvimento",
    "role": "PM",
    "memberId": "m1",
    "loadDays": 0.5
  },
  {
    "id": "a613",
    "projectId": "p54",
    "week": "2026-W5",
    "day": "SEG",
    "title": "Desenvolvimento",
    "role": "PM",
    "memberId": "m1",
    "loadDays": 0.5
  },
  {
    "id": "a614",
    "projectId": "p54",
    "week": "2026-W9",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m1",
    "loadDays": 0.5
  },
  {
    "id": "a615",
    "projectId": "p54",
    "week": "2026-W14",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m1",
    "loadDays": 0.5
  },
  {
    "id": "a616",
    "projectId": "p54",
    "week": "2026-W18",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m1",
    "loadDays": 0.5
  },
  {
    "id": "a617",
    "projectId": "p54",
    "week": "2026-W23",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m1",
    "loadDays": 0.5
  },
  {
    "id": "a618",
    "projectId": "p54",
    "week": "2026-W27",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m1",
    "loadDays": 0.5
  },
  {
    "id": "a619",
    "projectId": "p54",
    "week": "2026-W31",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m1",
    "loadDays": 0.5
  },
  {
    "id": "a620",
    "projectId": "p54",
    "week": "2026-W36",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m1",
    "loadDays": 0.5
  },
  {
    "id": "a621",
    "projectId": "p54",
    "week": "2026-W40",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m1",
    "loadDays": 0.5
  },
  {
    "id": "a622",
    "projectId": "p54",
    "week": "2026-W44",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m1",
    "loadDays": 0.5
  },
  {
    "id": "a623",
    "projectId": "p54",
    "week": "2026-W49",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m1",
    "loadDays": 0.5
  },
  {
    "id": "a624",
    "projectId": "p55",
    "week": "2026-W1",
    "day": "SEG",
    "title": "Desenvolvimento",
    "role": "PM",
    "memberId": "m1",
    "loadDays": 0.5
  },
  {
    "id": "a625",
    "projectId": "p55",
    "week": "2026-W5",
    "day": "SEG",
    "title": "Desenvolvimento",
    "role": "PM",
    "memberId": "m1",
    "loadDays": 0.5
  },
  {
    "id": "a626",
    "projectId": "p55",
    "week": "2026-W9",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m1",
    "loadDays": 0.5
  },
  {
    "id": "a627",
    "projectId": "p55",
    "week": "2026-W14",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m1",
    "loadDays": 0.5
  },
  {
    "id": "a628",
    "projectId": "p55",
    "week": "2026-W18",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m1",
    "loadDays": 0.5
  },
  {
    "id": "a629",
    "projectId": "p55",
    "week": "2026-W23",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m1",
    "loadDays": 0.5
  },
  {
    "id": "a630",
    "projectId": "p55",
    "week": "2026-W27",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m1",
    "loadDays": 0.5
  },
  {
    "id": "a631",
    "projectId": "p55",
    "week": "2026-W31",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m1",
    "loadDays": 0.5
  },
  {
    "id": "a632",
    "projectId": "p55",
    "week": "2026-W36",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m1",
    "loadDays": 0.5
  },
  {
    "id": "a633",
    "projectId": "p55",
    "week": "2026-W40",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m1",
    "loadDays": 0.5
  },
  {
    "id": "a634",
    "projectId": "p55",
    "week": "2026-W44",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m1",
    "loadDays": 0.5
  },
  {
    "id": "a635",
    "projectId": "p55",
    "week": "2026-W49",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m1",
    "loadDays": 0.5
  },
  {
    "id": "a636",
    "projectId": "p56",
    "week": "2026-W1",
    "day": "SEG",
    "title": "Desenvolvimento",
    "role": "PM",
    "memberId": "m1",
    "loadDays": 0.5
  },
  {
    "id": "a637",
    "projectId": "p56",
    "week": "2026-W5",
    "day": "SEG",
    "title": "Desenvolvimento",
    "role": "PM",
    "memberId": "m1",
    "loadDays": 0.5
  },
  {
    "id": "a638",
    "projectId": "p56",
    "week": "2026-W9",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m1",
    "loadDays": 0.5
  },
  {
    "id": "a639",
    "projectId": "p56",
    "week": "2026-W14",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m1",
    "loadDays": 0.5
  },
  {
    "id": "a640",
    "projectId": "p56",
    "week": "2026-W18",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m1",
    "loadDays": 0.5
  },
  {
    "id": "a641",
    "projectId": "p56",
    "week": "2026-W23",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m1",
    "loadDays": 0.5
  },
  {
    "id": "a642",
    "projectId": "p56",
    "week": "2026-W27",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m1",
    "loadDays": 0.5
  },
  {
    "id": "a643",
    "projectId": "p56",
    "week": "2026-W31",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m1",
    "loadDays": 0.5
  },
  {
    "id": "a644",
    "projectId": "p56",
    "week": "2026-W36",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m1",
    "loadDays": 0.5
  },
  {
    "id": "a645",
    "projectId": "p56",
    "week": "2026-W40",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m1",
    "loadDays": 0.5
  },
  {
    "id": "a646",
    "projectId": "p56",
    "week": "2026-W44",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m1",
    "loadDays": 0.5
  },
  {
    "id": "a647",
    "projectId": "p56",
    "week": "2026-W49",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m1",
    "loadDays": 0.5
  },
  {
    "id": "a648",
    "projectId": "p57",
    "week": "2026-W1",
    "day": "SEG",
    "title": "Desenvolvimento",
    "role": "PM",
    "memberId": "m1",
    "loadDays": 0.5
  },
  {
    "id": "a649",
    "projectId": "p57",
    "week": "2026-W5",
    "day": "SEG",
    "title": "Desenvolvimento",
    "role": "PM",
    "memberId": "m1",
    "loadDays": 0.5
  },
  {
    "id": "a650",
    "projectId": "p57",
    "week": "2026-W9",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m1",
    "loadDays": 0.5
  },
  {
    "id": "a651",
    "projectId": "p57",
    "week": "2026-W14",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m1",
    "loadDays": 0.5
  },
  {
    "id": "a652",
    "projectId": "p57",
    "week": "2026-W18",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m1",
    "loadDays": 0.5
  },
  {
    "id": "a653",
    "projectId": "p57",
    "week": "2026-W23",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m1",
    "loadDays": 0.5
  },
  {
    "id": "a654",
    "projectId": "p57",
    "week": "2026-W27",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m1",
    "loadDays": 0.5
  },
  {
    "id": "a655",
    "projectId": "p57",
    "week": "2026-W31",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m1",
    "loadDays": 0.5
  },
  {
    "id": "a656",
    "projectId": "p57",
    "week": "2026-W36",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m1",
    "loadDays": 0.5
  },
  {
    "id": "a657",
    "projectId": "p57",
    "week": "2026-W40",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m1",
    "loadDays": 0.5
  },
  {
    "id": "a658",
    "projectId": "p57",
    "week": "2026-W44",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m1",
    "loadDays": 0.5
  },
  {
    "id": "a659",
    "projectId": "p57",
    "week": "2026-W49",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m1",
    "loadDays": 0.5
  },
  {
    "id": "a660",
    "projectId": "p58",
    "week": "2026-W5",
    "day": "SEG",
    "title": "Desenvolvimento",
    "role": "PM",
    "memberId": "m1",
    "loadDays": 0.5
  },
  {
    "id": "a661",
    "projectId": "p58",
    "week": "2026-W9",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m1",
    "loadDays": 0.5
  },
  {
    "id": "a662",
    "projectId": "p58",
    "week": "2026-W14",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m1",
    "loadDays": 0.5
  },
  {
    "id": "a663",
    "projectId": "p58",
    "week": "2026-W18",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m1",
    "loadDays": 0.5
  },
  {
    "id": "a664",
    "projectId": "p58",
    "week": "2026-W23",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m1",
    "loadDays": 0.5
  },
  {
    "id": "a665",
    "projectId": "p58",
    "week": "2026-W27",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m1",
    "loadDays": 0.5
  },
  {
    "id": "a666",
    "projectId": "p58",
    "week": "2026-W31",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m1",
    "loadDays": 0.5
  },
  {
    "id": "a667",
    "projectId": "p58",
    "week": "2026-W36",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m1",
    "loadDays": 0.5
  },
  {
    "id": "a668",
    "projectId": "p58",
    "week": "2026-W40",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m1",
    "loadDays": 0.5
  },
  {
    "id": "a669",
    "projectId": "p58",
    "week": "2026-W44",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m1",
    "loadDays": 0.5
  },
  {
    "id": "a670",
    "projectId": "p58",
    "week": "2026-W49",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m1",
    "loadDays": 0.5
  },
  {
    "id": "a671",
    "projectId": "p59",
    "week": "2026-W5",
    "day": "SEG",
    "title": "Desenvolvimento",
    "role": "PM",
    "memberId": "m1",
    "loadDays": 0.5
  },
  {
    "id": "a672",
    "projectId": "p59",
    "week": "2026-W9",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m1",
    "loadDays": 0.5
  },
  {
    "id": "a673",
    "projectId": "p59",
    "week": "2026-W14",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m1",
    "loadDays": 0.5
  },
  {
    "id": "a674",
    "projectId": "p59",
    "week": "2026-W18",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m1",
    "loadDays": 0.5
  },
  {
    "id": "a675",
    "projectId": "p59",
    "week": "2026-W23",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m1",
    "loadDays": 0.5
  },
  {
    "id": "a676",
    "projectId": "p59",
    "week": "2026-W27",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m1",
    "loadDays": 0.5
  },
  {
    "id": "a677",
    "projectId": "p59",
    "week": "2026-W31",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m1",
    "loadDays": 0.5
  },
  {
    "id": "a678",
    "projectId": "p59",
    "week": "2026-W36",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m1",
    "loadDays": 0.5
  },
  {
    "id": "a679",
    "projectId": "p59",
    "week": "2026-W40",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m1",
    "loadDays": 0.5
  },
  {
    "id": "a680",
    "projectId": "p59",
    "week": "2026-W44",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m1",
    "loadDays": 0.5
  },
  {
    "id": "a681",
    "projectId": "p59",
    "week": "2026-W49",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m1",
    "loadDays": 0.5
  },
  {
    "id": "a682",
    "projectId": "p60",
    "week": "2026-W5",
    "day": "SEG",
    "title": "Desenvolvimento",
    "role": "PM",
    "memberId": "m1",
    "loadDays": 0.5
  },
  {
    "id": "a683",
    "projectId": "p60",
    "week": "2026-W9",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m1",
    "loadDays": 0.5
  },
  {
    "id": "a684",
    "projectId": "p60",
    "week": "2026-W14",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m1",
    "loadDays": 0.5
  },
  {
    "id": "a685",
    "projectId": "p60",
    "week": "2026-W18",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m1",
    "loadDays": 0.5
  },
  {
    "id": "a686",
    "projectId": "p60",
    "week": "2026-W23",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m1",
    "loadDays": 0.5
  },
  {
    "id": "a687",
    "projectId": "p60",
    "week": "2026-W27",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m1",
    "loadDays": 0.5
  },
  {
    "id": "a688",
    "projectId": "p60",
    "week": "2026-W31",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m1",
    "loadDays": 0.5
  },
  {
    "id": "a689",
    "projectId": "p60",
    "week": "2026-W36",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m1",
    "loadDays": 0.5
  },
  {
    "id": "a690",
    "projectId": "p60",
    "week": "2026-W40",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m1",
    "loadDays": 0.5
  },
  {
    "id": "a691",
    "projectId": "p60",
    "week": "2026-W44",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m1",
    "loadDays": 0.5
  },
  {
    "id": "a692",
    "projectId": "p60",
    "week": "2026-W49",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m1",
    "loadDays": 0.5
  },
  {
    "id": "a693",
    "projectId": "p61",
    "week": "2026-W5",
    "day": "SEG",
    "title": "Desenvolvimento",
    "role": "PM",
    "memberId": "m1",
    "loadDays": 0.5
  },
  {
    "id": "a694",
    "projectId": "p61",
    "week": "2026-W9",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m1",
    "loadDays": 0.5
  },
  {
    "id": "a695",
    "projectId": "p61",
    "week": "2026-W14",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m1",
    "loadDays": 0.5
  },
  {
    "id": "a696",
    "projectId": "p61",
    "week": "2026-W18",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m1",
    "loadDays": 0.5
  },
  {
    "id": "a697",
    "projectId": "p61",
    "week": "2026-W23",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m1",
    "loadDays": 0.5
  },
  {
    "id": "a698",
    "projectId": "p61",
    "week": "2026-W27",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m1",
    "loadDays": 0.5
  },
  {
    "id": "a699",
    "projectId": "p61",
    "week": "2026-W31",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m1",
    "loadDays": 0.5
  },
  {
    "id": "a700",
    "projectId": "p61",
    "week": "2026-W36",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m1",
    "loadDays": 0.5
  },
  {
    "id": "a701",
    "projectId": "p61",
    "week": "2026-W40",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m1",
    "loadDays": 0.5
  },
  {
    "id": "a702",
    "projectId": "p61",
    "week": "2026-W44",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m1",
    "loadDays": 0.5
  },
  {
    "id": "a703",
    "projectId": "p61",
    "week": "2026-W49",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m1",
    "loadDays": 0.5
  },
  {
    "id": "a704",
    "projectId": "p62",
    "week": "2026-W5",
    "day": "SEG",
    "title": "Desenvolvimento",
    "role": "PM",
    "memberId": "m1",
    "loadDays": 0.5
  },
  {
    "id": "a705",
    "projectId": "p62",
    "week": "2026-W9",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m1",
    "loadDays": 0.5
  },
  {
    "id": "a706",
    "projectId": "p62",
    "week": "2026-W14",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m1",
    "loadDays": 0.5
  },
  {
    "id": "a707",
    "projectId": "p62",
    "week": "2026-W18",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m1",
    "loadDays": 0.5
  },
  {
    "id": "a708",
    "projectId": "p62",
    "week": "2026-W23",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m1",
    "loadDays": 0.5
  },
  {
    "id": "a709",
    "projectId": "p62",
    "week": "2026-W27",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m1",
    "loadDays": 0.5
  },
  {
    "id": "a710",
    "projectId": "p62",
    "week": "2026-W31",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m1",
    "loadDays": 0.5
  },
  {
    "id": "a711",
    "projectId": "p62",
    "week": "2026-W36",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m1",
    "loadDays": 0.5
  },
  {
    "id": "a712",
    "projectId": "p62",
    "week": "2026-W40",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m1",
    "loadDays": 0.5
  },
  {
    "id": "a713",
    "projectId": "p62",
    "week": "2026-W44",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m1",
    "loadDays": 0.5
  },
  {
    "id": "a714",
    "projectId": "p62",
    "week": "2026-W49",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m1",
    "loadDays": 0.5
  },
  {
    "id": "a715",
    "projectId": "p63",
    "week": "2026-W1",
    "day": "SEG",
    "title": "Desenvolvimento",
    "role": "PM",
    "memberId": "m1",
    "loadDays": 0.5
  },
  {
    "id": "a716",
    "projectId": "p63",
    "week": "2026-W5",
    "day": "SEG",
    "title": "Desenvolvimento",
    "role": "PM",
    "memberId": "m1",
    "loadDays": 0.5
  },
  {
    "id": "a717",
    "projectId": "p63",
    "week": "2026-W9",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m1",
    "loadDays": 0.5
  },
  {
    "id": "a718",
    "projectId": "p63",
    "week": "2026-W14",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m1",
    "loadDays": 0.5
  },
  {
    "id": "a719",
    "projectId": "p63",
    "week": "2026-W18",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m1",
    "loadDays": 0.5
  },
  {
    "id": "a720",
    "projectId": "p63",
    "week": "2026-W23",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m1",
    "loadDays": 0.5
  },
  {
    "id": "a721",
    "projectId": "p63",
    "week": "2026-W27",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m1",
    "loadDays": 0.5
  },
  {
    "id": "a722",
    "projectId": "p63",
    "week": "2026-W31",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m1",
    "loadDays": 0.5
  },
  {
    "id": "a723",
    "projectId": "p63",
    "week": "2026-W36",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m1",
    "loadDays": 0.5
  },
  {
    "id": "a724",
    "projectId": "p63",
    "week": "2026-W40",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m1",
    "loadDays": 0.5
  },
  {
    "id": "a725",
    "projectId": "p63",
    "week": "2026-W44",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m1",
    "loadDays": 0.5
  },
  {
    "id": "a726",
    "projectId": "p63",
    "week": "2026-W49",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m1",
    "loadDays": 0.5
  },
  {
    "id": "a727",
    "projectId": "p64",
    "week": "2026-W1",
    "day": "SEG",
    "title": "Desenvolvimento",
    "role": "PM",
    "memberId": "m1",
    "loadDays": 0.5
  },
  {
    "id": "a728",
    "projectId": "p64",
    "week": "2026-W5",
    "day": "SEG",
    "title": "Desenvolvimento",
    "role": "PM",
    "memberId": "m1",
    "loadDays": 0.5
  },
  {
    "id": "a729",
    "projectId": "p64",
    "week": "2026-W9",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m1",
    "loadDays": 0.5
  },
  {
    "id": "a730",
    "projectId": "p64",
    "week": "2026-W14",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m1",
    "loadDays": 0.5
  },
  {
    "id": "a731",
    "projectId": "p64",
    "week": "2026-W18",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m1",
    "loadDays": 0.5
  },
  {
    "id": "a732",
    "projectId": "p64",
    "week": "2026-W23",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m1",
    "loadDays": 0.5
  },
  {
    "id": "a733",
    "projectId": "p64",
    "week": "2026-W27",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m1",
    "loadDays": 0.5
  },
  {
    "id": "a734",
    "projectId": "p64",
    "week": "2026-W31",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m1",
    "loadDays": 0.5
  },
  {
    "id": "a735",
    "projectId": "p64",
    "week": "2026-W36",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m1",
    "loadDays": 0.5
  },
  {
    "id": "a736",
    "projectId": "p64",
    "week": "2026-W40",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m1",
    "loadDays": 0.5
  },
  {
    "id": "a737",
    "projectId": "p64",
    "week": "2026-W44",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m1",
    "loadDays": 0.5
  },
  {
    "id": "a738",
    "projectId": "p64",
    "week": "2026-W49",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m1",
    "loadDays": 0.5
  },
  {
    "id": "a739",
    "projectId": "p65",
    "week": "2026-W5",
    "day": "SEG",
    "title": "Desenvolvimento",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a740",
    "projectId": "p65",
    "week": "2026-W9",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a741",
    "projectId": "p65",
    "week": "2026-W14",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a742",
    "projectId": "p65",
    "week": "2026-W18",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a743",
    "projectId": "p65",
    "week": "2026-W23",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a744",
    "projectId": "p65",
    "week": "2026-W27",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a745",
    "projectId": "p65",
    "week": "2026-W31",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a746",
    "projectId": "p65",
    "week": "2026-W36",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a747",
    "projectId": "p65",
    "week": "2026-W40",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a748",
    "projectId": "p65",
    "week": "2026-W44",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a749",
    "projectId": "p65",
    "week": "2026-W49",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a750",
    "projectId": "p66",
    "week": "2026-W5",
    "day": "SEG",
    "title": "Desenvolvimento",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a751",
    "projectId": "p66",
    "week": "2026-W9",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a752",
    "projectId": "p66",
    "week": "2026-W14",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a753",
    "projectId": "p66",
    "week": "2026-W18",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a754",
    "projectId": "p66",
    "week": "2026-W23",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a755",
    "projectId": "p66",
    "week": "2026-W27",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a756",
    "projectId": "p66",
    "week": "2026-W31",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a757",
    "projectId": "p66",
    "week": "2026-W36",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a758",
    "projectId": "p66",
    "week": "2026-W40",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a759",
    "projectId": "p66",
    "week": "2026-W44",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a760",
    "projectId": "p66",
    "week": "2026-W49",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a761",
    "projectId": "p67",
    "week": "2026-W5",
    "day": "SEG",
    "title": "Desenvolvimento",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a762",
    "projectId": "p67",
    "week": "2026-W9",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a763",
    "projectId": "p67",
    "week": "2026-W14",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a764",
    "projectId": "p67",
    "week": "2026-W18",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a765",
    "projectId": "p67",
    "week": "2026-W23",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a766",
    "projectId": "p67",
    "week": "2026-W27",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a767",
    "projectId": "p67",
    "week": "2026-W31",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a768",
    "projectId": "p67",
    "week": "2026-W36",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a769",
    "projectId": "p67",
    "week": "2026-W40",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a770",
    "projectId": "p67",
    "week": "2026-W44",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a771",
    "projectId": "p67",
    "week": "2026-W49",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a772",
    "projectId": "p68",
    "week": "2026-W9",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a773",
    "projectId": "p68",
    "week": "2026-W14",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a774",
    "projectId": "p68",
    "week": "2026-W18",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a775",
    "projectId": "p68",
    "week": "2026-W23",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a776",
    "projectId": "p68",
    "week": "2026-W27",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a777",
    "projectId": "p68",
    "week": "2026-W31",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a778",
    "projectId": "p68",
    "week": "2026-W36",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a779",
    "projectId": "p68",
    "week": "2026-W40",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a780",
    "projectId": "p68",
    "week": "2026-W44",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a781",
    "projectId": "p68",
    "week": "2026-W49",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a782",
    "projectId": "p69",
    "week": "2026-W9",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a783",
    "projectId": "p69",
    "week": "2026-W14",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a784",
    "projectId": "p69",
    "week": "2026-W18",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a785",
    "projectId": "p69",
    "week": "2026-W23",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a786",
    "projectId": "p69",
    "week": "2026-W27",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a787",
    "projectId": "p69",
    "week": "2026-W31",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a788",
    "projectId": "p69",
    "week": "2026-W36",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a789",
    "projectId": "p69",
    "week": "2026-W40",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a790",
    "projectId": "p69",
    "week": "2026-W44",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a791",
    "projectId": "p69",
    "week": "2026-W49",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a792",
    "projectId": "p70",
    "week": "2026-W9",
    "day": "SEG",
    "title": "Desenvolvimento",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a793",
    "projectId": "p70",
    "week": "2026-W14",
    "day": "SEG",
    "title": "Desenvolvimento",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a794",
    "projectId": "p70",
    "week": "2026-W18",
    "day": "SEG",
    "title": "Desenvolvimento",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a795",
    "projectId": "p70",
    "week": "2026-W23",
    "day": "SEG",
    "title": "Desenvolvimento",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a796",
    "projectId": "p70",
    "week": "2026-W27",
    "day": "SEG",
    "title": "Desenvolvimento",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a797",
    "projectId": "p70",
    "week": "2026-W31",
    "day": "SEG",
    "title": "Desenvolvimento",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a798",
    "projectId": "p70",
    "week": "2026-W36",
    "day": "SEG",
    "title": "Desenvolvimento",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a799",
    "projectId": "p70",
    "week": "2026-W40",
    "day": "SEG",
    "title": "Desenvolvimento",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a800",
    "projectId": "p70",
    "week": "2026-W44",
    "day": "SEG",
    "title": "Desenvolvimento",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a801",
    "projectId": "p70",
    "week": "2026-W49",
    "day": "SEG",
    "title": "Desenvolvimento",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a802",
    "projectId": "p71",
    "week": "2026-W9",
    "day": "SEG",
    "title": "Desenvolvimento",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a803",
    "projectId": "p71",
    "week": "2026-W14",
    "day": "SEG",
    "title": "Desenvolvimento",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a804",
    "projectId": "p71",
    "week": "2026-W18",
    "day": "SEG",
    "title": "Desenvolvimento",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a805",
    "projectId": "p71",
    "week": "2026-W23",
    "day": "SEG",
    "title": "Desenvolvimento",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a806",
    "projectId": "p71",
    "week": "2026-W27",
    "day": "SEG",
    "title": "Desenvolvimento",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a807",
    "projectId": "p71",
    "week": "2026-W31",
    "day": "SEG",
    "title": "Desenvolvimento",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a808",
    "projectId": "p71",
    "week": "2026-W36",
    "day": "SEG",
    "title": "Desenvolvimento",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a809",
    "projectId": "p71",
    "week": "2026-W40",
    "day": "SEG",
    "title": "Desenvolvimento",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a810",
    "projectId": "p71",
    "week": "2026-W44",
    "day": "SEG",
    "title": "Desenvolvimento",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a811",
    "projectId": "p71",
    "week": "2026-W49",
    "day": "SEG",
    "title": "Desenvolvimento",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a812",
    "projectId": "p72",
    "week": "2026-W23",
    "day": "SEG",
    "title": "Desenvolvimento",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a813",
    "projectId": "p72",
    "week": "2026-W27",
    "day": "SEG",
    "title": "Desenvolvimento",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a814",
    "projectId": "p72",
    "week": "2026-W31",
    "day": "SEG",
    "title": "Desenvolvimento",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a815",
    "projectId": "p72",
    "week": "2026-W36",
    "day": "SEG",
    "title": "Desenvolvimento",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a816",
    "projectId": "p72",
    "week": "2026-W40",
    "day": "SEG",
    "title": "Desenvolvimento",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a817",
    "projectId": "p72",
    "week": "2026-W44",
    "day": "SEG",
    "title": "Desenvolvimento",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a818",
    "projectId": "p72",
    "week": "2026-W49",
    "day": "SEG",
    "title": "Desenvolvimento",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a819",
    "projectId": "p73",
    "week": "2026-W1",
    "day": "SEG",
    "title": "Desenvolvimento",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a820",
    "projectId": "p73",
    "week": "2026-W5",
    "day": "SEG",
    "title": "Desenvolvimento",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a821",
    "projectId": "p73",
    "week": "2026-W9",
    "day": "SEG",
    "title": "Desenvolvimento",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a822",
    "projectId": "p73",
    "week": "2026-W14",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a823",
    "projectId": "p73",
    "week": "2026-W18",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  },
  {
    "id": "a824",
    "projectId": "p73",
    "week": "2026-W23",
    "day": "SEG",
    "title": "Industrialização",
    "role": "PM",
    "memberId": "m2",
    "loadDays": 0.5
  }
] as Activity[]

export const seedState: AppState = { members, projects, activities }
