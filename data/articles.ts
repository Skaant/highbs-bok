export type ArticleData = {
  slug: string
  date: string
  title: string
  tags: string[]
  description: string
}

const articles: ArticleData[] = [
  {
    slug: "les-zums-ne-meurent-plus",
    date: "2021-11-28",
    title: "Les ZUMS ne meurent plus",
    description:
      "Dans la société des ZUMS, il n'y a plus de mort ni de tristesse.",
    tags: ["zums", "immortalité"],
  },
]
