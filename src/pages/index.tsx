import React from "react"
import { graphql } from "gatsby"
import { Header } from "../components/Header"
import "../styles/global.scss"
import { Layout } from "../components/Layout"

/** Page d'accueil */
export default function Home({ data }) {
  return (
    <Layout pageId="accueil">
      <>
        <Header />
        <img src="/highbs-bok-letters.svg" />
        <h1>{data.site.siteMetadata.title}</h1>
        <p></p>
        <div className="row bg-gold-light position-relative">
          <div className="col-12 col-lg-8">
            <h2 className="mb-3">
              Téléchargez gratuitement le livret démo (5 chapitres / 14) du
              premier volume de l'<span className="lexic">HIGHBS-BOK</span>!
            </h2>
            <p>
              Bientôt disponible entièrement illustrée, au format électronique
              ou papier; découvrez les premiers chapitres de
              <b>la palpitante épopée des ZUMS à travers l'espace</b>.
            </p>
            <p>
              Cliquez
              <a href="/assets/HIGHBS-BOK 1 - livret démo.pdf">sur ce lien</a>,
              pour télécharger le livret démo :D
            </p>
          </div>
        </div>
      </>
    </Layout>
  )
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
