export type ArticleData = {
  slug: string
  date: string
  title: string
  tags: string[]
  description: string
}

const articles: ArticleData[] = [
  {
    slug: "un-monde-sans-mort",
    date: "2021-11-26",
    title: "On ne meurt pas vraiment chez les ZUMS",
    description:
      "Dans la société des ZUMS, il n'y a plus de mort ni de tristesse.",
    tags: ["zums", "immortalité", "univers"],
  },
  {
    // 1
    slug: "avoir-plus-d-idees",
    date: "2021-12-08",
    title:
      "Le PSIK : qu'est-ce qui est plus précieux qu'avoir de nouvelles idées ?",
    description:
      "Dans la société des ZUMS, ce qui permet de créer plus d'idées est très valorisé.",
    tags: ["zums", "psik", "idées", "psychédéliques"],
  },
  {
    // 2
    slug: "campagne-ulule-terminee-la-suite",
    date: "2022-01-24",
    title: "Campagne Ulule terminée ! La suite ...",
    description:
      "Ma campagne Ulule s'est achevée avec succès et les contreparties ont été expédiées. " +
      "Maintenant, mon attention est tournée vers le volume 2.",
    tags: ["ulule", "volume 2", "site"],
  },
  {
    // 3
    slug: "tout-un-ou-toute-une",
    date: "2022-02-27",
    title: "Tout-un ou toute-une ?",
    description:
      "Le tout-un est-il masculin ou féminin ? Au regard de son exceptionelle abstraction, " +
      "cette question a-t'elle même un sens ?",
    tags: ["tout-un", "dualité", "abstraction", "hol-adin"],
  },
  /* {
    // 4
    slug: "la-source-de-l-angoisse-existentielle",
    date: "2022-02-2x",
    title: "La source de l'angoisse existentielle",
    description:
      "Qu'est-ce qui nous met en mouvement ? La sensation d'inconfort. " +
      "Quelle est la plus grande source d'inconfort ? Notre fin ? " +
      "Non, la fin de toutes choses",
    tags: ["univers", "philosophie", "angoisse existentielle"],
  }, */
]

export default articles
