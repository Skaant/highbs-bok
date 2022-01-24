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
    tags: ["zums", "immortalité"],
  },
  {
    slug: "avoir-plus-d-idees",
    date: "2021-12-08",
    title:
      "Le PSIK : qu'est-ce qui est plus précieux qu'avoir de nouvelles idées ?",
    description:
      "Dans la société des ZUMS, ce qui permet de créer plus d'idées est très valorisé.",
    tags: ["zums", "psik", "psychédéliques"],
  },
  {
    slug: "campagne-ulule-terminee-la-suite",
    date: "2022-01-24",
    title: "Campagne Ulule terminée ! La suite ...",
    description:
      "Ma campagne Ulule s'est achevée avec succès et les contreparties ont été expédiées. " +
      "Maintenant, mon attention est tournée vers le volume 2.",
    tags: ["ulule", "site"],
  },
]

export default articles
