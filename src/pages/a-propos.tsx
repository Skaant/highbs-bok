import React from "react"
import { Header } from "../components/Header"
import { Layout } from "../components/Layout/Layout"

export default function () {
  return (
    <Layout pageId="a-propos">
      <>
        <Header title={"À propos"} />
        <div className="container-fluid px-0">
          <h1></h1>
        </div>
      </>
    </Layout>
  )
}
