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
    date: "2021-11-28",
    title: "Un monde sans mort",
    description:
      "Dans la société des ZUMS, il n'y a plus de mort ni de tristesse.",
    tags: ["zums", "immortalité"],
  },
]

export default articles
