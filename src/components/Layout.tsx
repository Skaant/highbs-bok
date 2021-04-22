import React from "react"
import { ReactElement } from "react"

export function Layout({
  pageId,
  children,
}: {
  pageId?: string
  children: ReactElement
}) {
  return (
    <>
      <nav className="navbar">
        <div className="container-fluid">
          {pageId !== "accueil" && (
            <a className="navbar-brand" href="/">
              <img src="/highbs-bok-letters.svg" />
            </a>
          )}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbar"
            aria-controls="navbar"
            aria-expanded="false"
            aria-label="Déplier le menu"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbar">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a
                  className={`nav-link ${pageId === "l-univers" && "active"}`}
                  href="/univers"
                >
                  Découvrir l'univers
                </a>
              </li>
              <li className="nav-item">
                <a
                  className={`nav-link ${pageId === "acheter" && "active"}`}
                  href="/acheter"
                >
                  Acheter le livret
                </a>
              </li>
              <li className="nav-item">
                <a
                  className={`nav-link ${pageId === "a-propos" && "active"}`}
                  href="/a-propos"
                >
                  À propos de l'auteur
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {children}
      <script src="/bootstrap.min.js"></script>
    </>
  )
}
