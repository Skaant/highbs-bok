import React from "react"
import { PAGES, PAGES_DATA } from "../../../data/pages"

export default function ResponsiveNavbar({
  pageId,
  alternativeColor = false,
}: {
  pageId: string
  alternativeColor?: boolean
}) {
  return (
    <nav className="navbar navbar-expand-md position-absolute w-100">
      <div className="container-fluid justify-content-between">
        <a className="navbar-brand" href="/">
          <div className="position-absolute rounded-circle bg-deep">&nbsp;</div>
          <img src="/highbs-bok-letters.svg" />
        </a>
        <button
          id="navbar-collapser"
          className="navbar-toggler btn btn-purple mx-2 px-3 rounded-pill shadow"
          type="button"
          title="Déplier le menu"
        >
          Menu
        </button>
        <div id="navbar-collapsible" className="collapse navbar-collapse">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a
                className={`nav-link btn ${
                  pageId === PAGES.ACHETER ? "btn-deep" : "btn-purple"
                }  my-2 mx-sm-2 px-3 rounded-pill shadow`}
                href={PAGES_DATA[PAGES.ACHETER].url}
              >
                {PAGES_DATA[PAGES.ACHETER].title}
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link btn ${
                  alternativeColor
                    ? "btn-light"
                    : pageId === PAGES.L_UNIVERS
                    ? "btn-deep"
                    : "btn-outline-purple"
                } my-2 mx-sm-2 px-3 rounded-pill shadow`}
                href={PAGES_DATA[PAGES.L_UNIVERS].url}
              >
                {PAGES_DATA[PAGES.L_UNIVERS].title}
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link btn ${
                  alternativeColor
                    ? "btn-light"
                    : pageId === PAGES.BLOG
                    ? "btn-deep"
                    : "btn-outline-purple"
                } my-2 mx-sm-2 px-3 rounded-pill shadow`}
                href={PAGES_DATA[PAGES.BLOG].url}
              >
                {PAGES_DATA[PAGES.BLOG].title}
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link btn ${
                  alternativeColor
                    ? "btn-light"
                    : pageId === PAGES.A_PROPOS
                    ? "btn-deep"
                    : "btn-outline-purple"
                } my-2 mx-sm-2 px-3 rounded-pill shadow`}
                href={PAGES_DATA[PAGES.A_PROPOS].url}
              >
                {PAGES_DATA[PAGES.A_PROPOS].title}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
