import React from "react"
import articles from "../../../data/articles"
import ARTICLES_ELEMENTS from "../../../data/articles.components"
import { PAGES, PAGES_DATA } from "../../../data/pages"

export function Footer() {
  return (
    <footer className="container-fluid bg-deep">
      <div className="row py-5">
        <div className="col-12 col-md-6 col-xl-4">
          <div className="mx-auto px-5 py-3">
            <ul className="list-unstyled">
              <li>
                <a href="/">Accueil</a>
              </li>
              <li>
                <a href="/acheter">Acheter le livret</a>
              </li>
              <li>
                <a href="/l-univers">Découvrir l'univers</a>
                <ul className="list-unstyled ps-4 py-3">
                  {[
                    PAGES.L_UNIVERS_PERSONNAGES_ET_ENTITES,
                    PAGES.L_UNIVERS_ERAS,
                    PAGES.L_UNIVERS_COULEURS,
                    PAGES.L_UNIVERS_GLOSSAIRE,
                    PAGES.L_UNIVERS_LIEUX,
                    PAGES.L_UNIVERS_TRIBUS_DE_L_EVEIL,
                  ].map(page => {
                    const { title, url } = PAGES_DATA[page]
                    return (
                      <li key={page}>
                        <a href={url}>{title}</a>
                      </li>
                    )
                  })}
                </ul>
              </li>
              <li>
                <a href="/blog">Blog</a>
                <ul className="list-unstyled ps-4 py-3">
                  {}
                  {articles
                    .sort((a, b) => (a.date < b.date ? 1 : -1))
                    .slice(articles.length - 5)
                    .map(({ index, title, slug }) => (
                      <li key={slug}>
                        <a href={`/blog/${slug}`}>
                          {ARTICLES_ELEMENTS[index + articles.length - 5]
                            ?.title || title}
                        </a>
                      </li>
                    ))}
                </ul>
              </li>
              <li>
                <a href="/a-propos">À propos</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-12 col-md-6 col-xl-4">
          <div className="mx-auto px-5 py-3">
            <p className="h4 my-4">HIGHBS-BOK 2021</p>
            <p>
              Livret et site par Romaric Ruga (aka.{" "}
              <a href="https://imrok.fr">IMROK</a>
              <i>, l'artiste</i>) (aka.{" "}
              <a href="https://rimarok.com">RIMAROK</a>
              <i>, le développeur</i>).
            </p>
            <div className="pt-3">
              <button
                id="footer__contact"
                className="btn btn-light rounded-pill my-2 me-3 px-3"
              >
                Contact
              </button>
              <a
                href="/mentions-legales"
                className="btn btn-outline-light rounded-pill bg-deep my-2 px-3"
              >
                Mentions légales
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
