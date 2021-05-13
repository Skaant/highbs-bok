import React from "react"
import { Header } from "../components/Header"
import { Layout } from "../components/Layout/Layout"

import "../styles/global.scss"

const title = "Mentions légales"

/** Page mentions légales */
export default function Legals() {
  return (
    <Layout pageId="acheter">
      <>
        <Header title={title} />
        <div className="container-fluid px-0">
          <div className="row px-4 pb-4 align-content-center">
            <div className="col-12 col-md-10 col-lg-8 col-xl-6">
              <h1>{title}</h1>
            </div>
          </div>
        </div>
      </>
    </Layout>
  )
}
