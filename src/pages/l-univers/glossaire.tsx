import React from "react"
import { Header } from "../../components/Header"
import { Layout } from "../../components/Layout/Layout"

const title = "Glossaire"

export default function Glossaire() {
  return (
    <Layout pageId="l-univers/glossaire">
      <>
        <Header title={title} />
        <div className="container-fluid px-0">
          <div className="row px-4 text-center align-content-center">
            <div className="col-12 col-md-10 col-lg-8 col-xl-6">
              <h1>{title}</h1>
              <p className="lead">
                Définition des termes spécifiques à l'HIGHBS-BOK
              </p>
            </div>
          </div>
          <div className="row px-4 align-content-center">
            <div className="col-12 col-md-10 col-lg-8 col-xl-6">
              <p className="mb-4">
                Quelques mots écrits en majuscule se baladent dans l'HIGHBS-BOK,
                et pour cause : ce sont des concepts propres à l'univers ! Mais
                rassurez-vous, la plupart sont transparents ;)
              </p>
              <h2 className="mt-5">Liste des termes</h2>
              <table className="table">
                <tbody>
                  <tr id="ANGK">
                    <td>
                      <b>ANGK</b>
                    </td>
                    <td>
                      Le dernier être avant le HOL-ADIN, il doit mettre un terme
                      définitif à l’univers.
                    </td>
                  </tr>

                  <tr id="ERA">
                    <td>
                      <b>ERA</b>
                    </td>
                    <td>
                      Très longue période de temps, période de l’histoire des
                      ZUMS dans l’HIGHBS-BOK.
                    </td>
                  </tr>

                  <tr id="GRAND-ARBRE">
                    <td>
                      <b>GRAND-ARBRE</b>
                    </td>
                    <td>La forêt spatiale dans laquelle vivent les ZUMS.</td>
                  </tr>

                  <tr id="HOL-ONG">
                    <td>
                      <b>HOL-ONG</b>
                    </td>
                    <td>
                      Somme des consciences, réseau de conscience collective.
                    </td>
                  </tr>

                  <tr id="HIGHBS">
                    <td>
                      <b>HIGHBS</b>
                    </td>
                    <td>Abstraction absolue, illumination.</td>
                  </tr>

                  <tr id="HIGHBS-BOK">
                    <td>
                      <b>HIGHBS-BOK</b>
                    </td>
                    <td>Livre du motif/de l’abstraction absolu(e).</td>
                  </tr>

                  <tr id="KANG">
                    <td>
                      <b>KANG</b>
                    </td>
                    <td>
                      Force motrice de l’univers, l’écoulement du temps, le
                      mouvement.
                    </td>
                  </tr>

                  <tr id="TERA">
                    <td>
                      <b>TERA</b>
                    </td>
                    <td>Planète d’origine des ZUMS.</td>
                  </tr>

                  <tr id="PSIK">
                    <td>
                      <b>PSIK</b>
                    </td>
                    <td>Substances ou pratiques psychoactives.</td>
                  </tr>

                  <tr id="VAULT">
                    <td>
                      <b>VAULT</b>
                    </td>
                    <td>
                      Bâtiment ZUM dédié à la création et au stockage de la
                      donnée, atelier, musée.
                    </td>
                  </tr>

                  <tr id="ZUMS">
                    <td>
                      <b>ZUMS</b>
                    </td>
                    <td>
                      La civilisation de singes, très semblable à la nôtre, qui
                      s’est portée jusqu’aux confins de l’univers.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </>
    </Layout>
  )
}
