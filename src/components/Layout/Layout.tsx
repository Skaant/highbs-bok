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
        <footer className="container-fluid">
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
                        <a href="/l-univers"></a>
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
                <h2 className="h4">HIGHBS-BOK 2021</h2>
                <p>
                  Livret et site par Romaric Ruga (aka.{" "}
                  <a href="https://imrok.fr">IMROK</a>
                  <i>, l'artiste</i>) (aka.{" "}
                  <a href="https://rimarok.com">RIMAROK</a>
                  <i>, le développeur</i>).
                </p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}
