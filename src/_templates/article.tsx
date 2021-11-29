import React from "react"
import { pages } from "../../data/pages"
import { Header } from "../components/Header"
import { Layout } from "../components/Layout/Layout"
import "../../styles/global.scss"
import { ArticleData } from "../../data/articles"
import { MDXRenderer } from "gatsby-plugin-mdx"

const pageId = pages.ARTICLES
const title = "Articles publiés"

export default function ({ slug, title, body }: ArticleData & { body: any }) {
  return (
    <Layout pageId={slug}>
      <>
        <Header title={title} />
        <div className="container-fluid px-0">
          <div className="row px-4 bg-gold">
            <div className="col-12 col-md-10 col-lg-8 col-xl-6">
              <h1>{title}</h1>
              <p className="mb-5">
                <MDXRenderer>{body}</MDXRenderer>
              </p>
            </div>
          </div>
        </div>
      </>
    </Layout>
  )
}
