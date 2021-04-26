import React from "react"
import { Header } from "../../components/Header"
import { Layout } from "../../components/Layout/Layout"

export default function () {
  return (
    <Layout pageId="l-univers/index">
      <>
        <Header title={"Découvrez l'univers des ZUMS"} />
        <div className="container-fluid px-0">
          <h1>Découvrez l'univers des ZUMS</h1>
        </div>
      </>
    </Layout>
  )
}
