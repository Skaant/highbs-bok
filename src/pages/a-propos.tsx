import React from "react"
import { Header } from "../components/Header"
import { Layout } from "../components/Layout/Layout"

const title = "À propos"

export default function () {
  return (
    <Layout pageId="a-propos">
      <>
        <Header title={title} />
        <div className="container-fluid px-0">
          <div className="row px-4 text-center flex-column">
            <h1>{title}</h1>
            <p className="lead">Le projet, l'auteur</p>
          </div>
        </div>
      </>
    </Layout>
  )
}
