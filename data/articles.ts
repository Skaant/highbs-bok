export type ArticleData = {
  index: number
  slug: string
  date: string
  title: string
  tags: string[]
  description: string
}

const articles: ArticleData[] = [
  {
    index: 0,
    slug: "un-monde-sans-mort",
    date: "2021-11-26",
    title: "Les ZUMS ne meurent pas",
    description:
      "Dans la société des ZUMS, il n'y a plus de mort ni de tristesse.",
    tags: ["zums", "immortalité", "univers"],
  },
  {
    index: 1,
    slug: "avoir-plus-d-idees",
    date: "2021-12-08",
    title: "PSIK, le nectar des idées",
    description:
      "Dans la société des ZUMS, ce qui permet de créer plus d'idées est très valorisé.",
    tags: ["zums", "psik", "idées", "psychédéliques"],
  },
  {
    index: 2,
    slug: "campagne-ulule-terminee-la-suite",
    date: "2022-01-24",
    title: "Campagne Ulule réussie, et après ?",
    description:
      "Ma campagne Ulule s'est achevée avec succès et les contreparties ont été expédiées. " +
      "Maintenant, mon attention est tournée vers le volume 2.",
    tags: ["ulule", "volume 2", "site"],
  },
  {
    index: 3,
    slug: "tout-un-ou-toute-une",
    date: "2022-02-27",
    title: "Tout-Un, tout-un ou toute-une ?",
    description:
      "Le tout-un est-il masculin ou féminin ? Au regard de son exceptionelle abstraction, " +
      "cette question a-t'elle même un sens ?",
    tags: ["tout-un", "dualité", "abstraction", "hol-adin"],
  },
  {
    index: 4,
    slug: "mise-a-jour-site-2-2-univers-renforce",
    date: "2022-06-03",
    title: "Mise-à-jour du site 2.2: univers renforcé",
    description:
      "Connexe à la conception du volume 2, cette mise-à-jour axée sémantique revoit toutes les pages. " +
      "La section l-univers a été enrichie des pages : personnages, lieux et tribus. " +
      "Toutes les mentions à un élément de l'univers pointent vers sa définition et affichent un résumé au survol.",
    tags: [
      "mise-a-jour",
      "univers",
      "semantique",
      "personnages",
      "lieux",
      "tribus",
    ],
  },
]

export default articles
