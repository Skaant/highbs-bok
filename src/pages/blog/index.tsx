import React from "react"
import articles, { ArticleData } from "../../../data/articles"
import { pages } from "../../../data/pages"
import { Header } from "../../components/Header"
import { Layout } from "../../components/Layout/Layout"
import MiniRowAbsolute from "../../components/_rows/MiniRowAbsolute"
import "../../styles/global.scss"

const pageId = pages.BLOG
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
              <ul className="list-unstyled">
                {articles
                  .slice(0)
                  .reverse()
                  .map(
                    ({ slug, title, description, date, tags }: ArticleData) => (
                      <li className="mb-3 card shadow">
                        <a
                          href={`blog/${slug}`}
                          className="p-4 text-dark card-body text-decoration-none"
                        >
                          <h3>{title}</h3>
                          {description}
                          <br />
                          <br />
                          Publié le {date.split("-").reverse().join("/")}
                          {" · "}
                          {tags.length > 0 &&
                            tags.map(tag => (
                              <span className="badge rounded-pill bg-purple text-light me-2">
                                {tag}
                              </span>
                            ))}
                        </a>
                      </li>
                    )
                  )}
              </ul>
            </div>
          </div>
        </div>
      </>
    </Layout>
  )
}
