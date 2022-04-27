export enum CHARACTERS {
  TOUT_UN = "TOUT_UN",
  BALTAZUM = "BALTAZUM",
  ANGK = "ANGK",
}

type CharacterData = {
  name: string
}

export const CHARACTERS_DATA: { [key in CHARACTERS]: CharacterData } = {
  TOUT_UN: { name: "Tout-un" },
  BALTAZUM: { name: "Baltazum" },
  ANGK: { name: "ANGK" },
}
