import React from "react"

export default function ResponsiveNavbar({ pageId }) {
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
                  pageId === "l-univers/index"
                    ? "btn-deep"
                    : "btn-outline-purple"
                } my-2 mx-sm-2 px-3 rounded-pill shadow`}
                href="/l-univers"
              >
                L'univers
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link btn ${
                  pageId === "a-propos" ? "btn-deep" : "btn-outline-purple"
                } my-2 mx-sm-2 px-3 rounded-pill shadow`}
                href="/a-propos"
              >
                À propos
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link btn ${
                  pageId === "acheter" ? "btn-deep" : "btn-purple"
                }  my-2 mx-sm-2 px-3 rounded-pill shadow`}
                href="/acheter"
              >
                Acheter
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
