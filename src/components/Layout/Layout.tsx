import React from "react"
import { ReactElement } from "react"
import ResponsiveNavbar from "./ResponsiveNavbar"

export function Layout({
  pageId,
  children,
}: {
  pageId?: string
  children: ReactElement
}) {
  return (
    <>
      <div id="layout">
        <ResponsiveNavbar pageId={pageId} />
        {children}
        <footer className="container-fluid bg-deep">
          <div className="row py-5">
            <div className="col-12 col-md-6">
              <div className="mx-auto px-5 py-3" style={{ maxWidth: "400px" }}>
                <ul className="list-unstyled">
                  <li>
                    <a href="/">Accueil</a>
                  </li>
                  <li>
                    <a href="/l-univers">Découvrir l'univers</a>
                    <ul>
                      <li>
                        <a href="/l-univers/sept-eras">
                          Les sept ERAS de l'histoire des ZUMS
                        </a>
                      </li>
                      <li>
                        <a href="/l-univers/glossaire">Glossaire</a>
                      </li>
                      <li>
                        <a href="/l-univers/couleurs">
                          Signification des couleurs
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="/acheter">Acheter le livret</a>
                  </li>
                  <li>
                    <a href="/a-propos">À propos</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-12 col-md-6 col-xl-4">
              <div className="mx-auto px-5 py-3" style={{ maxWidth: "400px" }}>
                <p className="h4">HIGHBS-BOK 2021</p>
                <p>
                  Livret et site par Romaric Ruga (aka.{" "}
                  <a href="https://imrok.fr">IMROK</a>
                  <i>, l'artiste</i>) (aka.{" "}
                  <a href="https://rimarok.com">RIMAROK</a>
                  <i>, le développeur</i>).
                </p>
                <div>
                  <button className="btn btn-light rounded-pill my-2 mx-sm-2 px-3">
                    Contact
                  </button>
                  <button className="btn btn-outline-light rounded-pill bg-deep my-2 mx-sm-2 px-3">
                    Mentions légales
                  </button>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}
