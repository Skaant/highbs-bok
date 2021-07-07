import React from "react"

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
                <a href="/l-univers">Découvrir l'univers</a>
                <ul className="list-unstyled ps-4 py-3">
                  <li>
                    <a href="/l-univers/sept-eras">
                      Les sept ERAS de l'histoire des ZUMS
                    </a>
                  </li>
                  <li>
                    <a href="/l-univers/glossaire">Glossaire</a>
                  </li>
                  <li>
                    <a href="/l-univers/couleurs">Signification des couleurs</a>
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
          <div className="mx-auto px-5 py-3">
            <p className="h4">HIGHBS-BOK 2021</p>
            <p>
              Livret et site par Romaric Ruga (aka.{" "}
              <a href="https://imrok.fr">IMROK</a>
              <i>, l'artiste</i>) (aka.{" "}
              <a href="https://rimarok.com">RIMAROK</a>
              <i>, le développeur</i>).
            </p>
            <div>
              <button
                id="footer__contact"
                className="btn btn-light rounded-pill my-2 mx-sm-2 px-3"
              >
                Contact
              </button>
              <a
                href="/mentions-legales"
                className="btn btn-outline-light rounded-pill bg-deep my-2 mx-sm-2 px-3"
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
