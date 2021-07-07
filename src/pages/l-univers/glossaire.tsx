import React from "react"
import { colors } from "../../../data/colors"
import { pages } from "../../../data/pages"
import { Header } from "../../components/Header"
import { Layout } from "../../components/Layout/Layout"
import { UniversePagesCTA } from "../../components/_ctas/UniversePagesCTA"
import { ContentRowWithHeader } from "../../components/_rows/ContentRowWithHeader"
import { ImageRowPositionAbsolute } from "../../components/_rows/ImageRowPositionAbsolute"
import "../../styles/global.scss"
import { sectionsId as A_PROPOS_SECTIONS_ID } from "../a-propos"

const pageId = pages.L_UNIVERS_GLOSSAIRE
const title = "Glossaire"

export default function Glossaire() {
  return (
    <Layout pageId={pageId}>
      <>
        <Header title={title} />
        <div className="container-fluid px-0">
          <ImageRowPositionAbsolute
            src="/images/hb1-16-hol-ong.svg"
            style={{ height: "100%", minHeight: "100vh" }}
            imgClassName="h-100"
          />
          <ContentRowWithHeader
            header={{
              level: 1,
              content: title,
            }}
            className="pb-4"
          >
            <>
              <p className="mb-5">
                Il y a <b>quelques mots étranges</b>, écrits <b>en majuscule</b>
                , dans l'HIGHBS-BOK.{" "}
                <a
                  href={`/a-propos/${A_PROPOS_SECTIONS_ID.POURQUOI_UTILISER_DES_MOTS_BIZARRES}`}
                >
                  Pourquoi ?
                </a>
              </p>
              <p>
                Retrouvez ci-dessous{" "}
                <b>la liste des termes employés dans l'HIGHBS-BOK</b>, ainsi que{" "}
                <b>leur définition</b>.
              </p>
            </>
          </ContentRowWithHeader>
          <ContentRowWithHeader className="pt-4">
            <table
              className="table table--first-row-right"
              style={{ background: "#f8f9facc" }}
            >
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
                    Très longue période de temps, période de l’histoire des ZUMS
                    dans l’HIGHBS-BOK.
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
          </ContentRowWithHeader>
          <ContentRowWithHeader
            header={{
              level: 2,
              content: "Autres pages de l'univers",
            }}
            className="bg-gold"
          >
            <>
              <UniversePagesCTA current={pageId} buttonsColor={colors.purple} />
            </>
          </ContentRowWithHeader>
        </div>
      </>
    </Layout>
  )
}
