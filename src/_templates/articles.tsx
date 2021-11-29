import React from "react"
import { colors } from "../../data/colors"
import { pages } from "../../data/pages"
import { ButtonsMenu } from "../components/ButtonsMenu"
import { Header } from "../components/Header"
import { Layout } from "../components/Layout/Layout"
import "../../styles/global.scss"

const pageId = pages.ARTICLES
const title = "Articles publiés"

export default function ({ articles }: { articles: ArticleData[] }) {
  return (
    <Layout pageId={pageId}>
      <>
        <Header title={title} />
        <div className="container-fluid px-0">
          <div className="row px-4 bg-gold">
            <div className="col-12 col-md-10 col-lg-8 col-xl-6">
              <h1>{title}</h1>
              <p className="mb-5">
                Je vous ai déjà dit que l'univers de l'HIGHBS-BOK était vivant ?
                Tout n'est pas écrit, loin s'en faut. Et même sur ce qui est
                écrit, il y en aurait encore des choses à dire !
              </p>
            </div>
          </div>
          <div className="row px-4 pt-4 bg-gold">
            <div className="col-12 col-md-10 col-lg-8 col-xl-6">
              <h2>Liste des articles</h2>
              <ButtonsMenu
                buttons={articles.map(article => ({
                  href: "/",
                  color: colors.light,
                  label: "A propos",
                }))}
              />
            </div>
          </div>
        </div>
      </>
    </Layout>
  )
}
