import React from "react"
import { graphql } from "gatsby"
import { Header } from "../components/Header"
import '../styles/global.scss'

/** Page d'accueil */
export default function Home({data}) {
  return <div>
    <Header />
    <h1>{data.site.siteMetadata.title}</h1>
    <p></p>
  </div>
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`