import React from "react"
import { Header } from "../../components/Header"
import { Layout } from "../../components/Layout/Layout"

const title = "Signification des couleurs"

export default function Couleurs() {
  return (
    <Layout pageId="l-univers/colors">
      <>
        <Header title={title} />
        <div className="container-fluid px-0">
          <img
            src="/images/hb-rivers.svg"
            className="position-absolute w-100 h-100"
            style={{ zIndex: -1 }}
          />
          <div className="row px-4 text-center align-content-center">
            <div className="col-12 col-md-10 col-lg-8 col-xl-6">
              <h1>{title}</h1>
              <p className="lead">
                Comme le <a href="/l-univers/glossaire">glossaire</a>, mais pour
                les couleurs.
              </p>
            </div>
          </div>
          <div className="">
            
          </div>
        </div>
      </>
    </Layout>
  )
}
