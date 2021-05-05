export enum eras {
  presentEra = "presentEra",
  paleoEra = "paleoEra",
  primaEra = "primaEra",
  expansionEra = "expansionEra",
  dispersionEra = "dispersionEra",
  contractionEra = "contractionEra",
  auroEra = "auroEra",
  angkEra = "angkEra",
}

export const erasData = new Map<eras, { name: string; description: string }>([
  [
    eras.presentEra,
    {
      name: "Présent",
      description: `Volontairement plongé dans les flots PSIK, le narrateur introduit la SAGA ZUMA : l'histoire des ZUMS.`,
    },
  ],
  [
    eras.paleoEra,
    {
      name: "PALEO-ERA",
      description: `
        C'était avant l'avènement du HOL-ONG, le réseau de conscience collective.
      `,
    },
  ],
  [
    eras.primaEra,
    {
      name: "PRIMA-ERA",
      description: `Partis de leur planète-mère TERA, les ZUMS colonisèrent rapidement tout leur système solaire.`,
    },
  ],
  [
    eras.expansionEra,
    {
      name: "EXPANSION-ERA",
      description: "Les ZUMS partent à la conquête de l'univers.",
    },
  ],
  [
    eras.dispersionEra,
    {
      name: "DISPERSION-ERA",
      description:
        "Les ZUMS et la vie arrivent au bord de l'univers. Qu'y a t'il après ?",
    },
  ],
  [
    eras.contractionEra,
    {
      name: "CONTRACTION-ERA",
      description: `Par la force des joyaux conceptuels-trous noirs, l'univers commence à se rétracter.`,
    },
  ],
  [
    eras.auroEra,
    {
      name: "AURO-ERA",
      description: `La dernière ville de l'univers, le berceau de l'être suprème.`,
    },
  ],
  [
    eras.angkEra,
    {
      name: "ANGK-ERA",
      description: `Le moment est venu pour le clôtureur de connaître la vérité.`,
    },
  ],
])
