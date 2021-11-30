import React from "react"
import articles, { ArticleData } from "../../../data/articles"
import { colors } from "../../../data/colors"
import { pages } from "../../../data/pages"
import { ButtonsMenu } from "../../components/ButtonsMenu"
import { Header } from "../../components/Header"
import { Layout } from "../../components/Layout/Layout"
import MiniRowAbsolute from "../../components/_rows/MiniRowAbsolute"
import "../../styles/global.scss"

const pageId = pages.ARTICLES
const title = "Articles publiés"

export default function () {
  return (
    <Layout pageId={pageId}>
      <>
        <Header title={title} />
        <div className="container-fluid px-0">
          <div className="row px-4">
            <div className="col-12 col-md-10 col-lg-8 col-xl-6">
              <h1>{title}</h1>
              <p className="mb-5">
                Je vous ai déjà dit que l'univers de l'HIGHBS-BOK était{" "}
                <b>vivant</b> ? Tout n'est pas écrit, loin s'en faut. Et même
                sur ce qui est écrit, il y en aurait encore des{" "}
                <b>choses à dire</b> !
              </p>
            </div>
          </div>
          <MiniRowAbsolute id="data-plant" justify="right" />
          <div className="row px-4 pt-4 bg-green">
            <div className="col-12 col-md-10 col-lg-8 col-xl-6">
              <h2>Liste des articles</h2>
              <ButtonsMenu
                buttons={articles.map(article => ({
                  href: `/blog/${article.slug}`,
                  color: colors.light,
                  label: `${article.date} | ${article.title}`,
                }))}
              />
            </div>
          </div>
        </div>
      </>
    </Layout>
  )
}
