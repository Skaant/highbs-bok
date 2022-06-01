import React from "react"
import articles, { ArticleData } from "../../../data/articles"
import ARTICLES_ELEMENTS from "../../../data/articles.components"
import { PAGES, PAGES_DATA } from "../../../data/pages"
import { TERMS } from "../../../data/terms"
import { Header } from "../../components/Header"
import { Layout } from "../../components/Layout/Layout"
import Term from "../../components/Term"
import MiniRowAbsolute from "../../components/_rows/MiniRowAbsolute"
import "../../styles/global.scss"

const page = PAGES.BLOG

export default function () {
  return (
    <Layout pageId={page}>
      <>
        <Header title={PAGES_DATA[page].title} />
        <div className="container-fluid px-0">
          <div className="row px-4">
            <div className="col-12 col-md-10 col-lg-8 col-xl-6">
              <h1>{PAGES_DATA[page].title}</h1>
              <p className="mb-5">
                Je vous ai déjà dit que l'univers de l'{" "}
                <Term term={TERMS.HIGHBS_BOK} /> était <b>vivant</b> ? Tout
                n'est pas écrit, loin s'en faut. Et même sur ce qui est écrit,
                il y en aurait encore des <b>choses à dire</b> !
              </p>
            </div>
          </div>
          <MiniRowAbsolute id="data-plant" justify="right" />
          <div className="row px-4 pt-4 bg-green">
            <div className="col-12 col-md-10 col-lg-8 col-xl-6">
              <h2
                className="display-2 text-light"
                style={{
                  marginTop: "8rem",
                  marginBottom: "6rem",
                }}
              >
                Articles publiés
              </h2>
              <ul className="list-unstyled">
                {articles
                  .slice(0)
                  .reverse()
                  .map(
                    ({
                      index,
                      slug,
                      title,
                      description,
                      date,
                      tags,
                    }: ArticleData) => (
                      <li className="mb-3 card shadow">
                        <a
                          href={`/blog/${slug}`}
                          className="p-4 text-dark card-body text-decoration-none"
                        >
                          <h3>{ARTICLES_ELEMENTS[index]?.title || title}</h3>
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
