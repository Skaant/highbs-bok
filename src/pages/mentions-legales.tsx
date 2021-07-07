import React from "react"
import { Header } from "../components/Header"
import { Layout } from "../components/Layout/Layout"
import { ContentRowWithHeader } from "../components/_rows/ContentRowWithHeader"
import { TableOfContent } from "../components/TableOfContent"

import "../styles/global.scss"
import { pages } from "../../data/pages"

const pageId = pages.MENTIONS_LEGALES
const title = "Mentions légales"

enum sectionsId {
  MENTIONS_OBLIGATOIRES_SITE = "mentions-obligatoires-site",
  MENTIONS_OBLIGATOIRES_LIVRE = "mentions-obligatoires-livre",
  MENTIONS_OBLIGATOIRES_ENTREPRISE = "mentions-obligatoires-entreprise",
}

const sectionsData = {
  [sectionsId.MENTIONS_OBLIGATOIRES_SITE]:
    "Mentions obligatoires du site internet",
  [sectionsId.MENTIONS_OBLIGATOIRES_LIVRE]: "Mentions obligatoires du livre",
  [sectionsId.MENTIONS_OBLIGATOIRES_ENTREPRISE]:
    "Mentions obligatoires de l'entreprise",
}

/** Page mentions légales */
export default function Legals() {
  return (
    <Layout pageId={pageId}>
      <>
        <Header
          title={title}
          metas={[{ name: "robots", content: "no-index" }]}
        />
        <div className="container-fluid px-0">
          <ContentRowWithHeader
            header={{
              level: 1,
              content: title,
            }}
            className="pb-0"
          >
            <TableOfContent
              sections={Object.entries(sectionsData).map(([id, label]) => ({
                id,
                label,
              }))}
            />
          </ContentRowWithHeader>
          <ContentRowWithHeader
            id={sectionsId.MENTIONS_OBLIGATOIRES_SITE}
            header={{
              level: 2,
              content: sectionsData[sectionsId.MENTIONS_OBLIGATOIRES_SITE],
              className: "mb-0",
            }}
            className="pt-0 pb-5"
          >
            <>
              <p className="small mb-5">
                <a href="https://www.service-public.fr/professionnels-entreprises/vosdroits/F31228">
                  Quelles sont les mentions obligatoires sur un site internet ?
                  (service-public.fr)
                </a>
              </p>
              <dl>
                <dt>Nom et prénom</dt>
                <dd>Romaric Ruga</dd>
                <dt>Adresse de domicile</dt>
                <dd>56 rue de Sillery, 51100 Reims</dd>
                <dt>Numéro de téléphone</dt>
                <dd>06 38 24 85 07</dd>
                <dt>Adresse de courrier électronique</dt>
                <dd>romaric.ruga@gmail.com</dd>
                <dt>Hébèrgement du site</dt>
                <dd>
                  OVH, 2 rue Kellermann, 59100 Roubaix (+33-8-203-203-63)
                </dd>
              </dl>
            </>
          </ContentRowWithHeader>
          <ContentRowWithHeader
            id={sectionsId.MENTIONS_OBLIGATOIRES_LIVRE}
            header={{
              level: 2,
              content: sectionsData[sectionsId.MENTIONS_OBLIGATOIRES_LIVRE],
              className: "mb-0",
            }}
            className="py-5 bg-gold"
          >
            <>
              <p className="small mb-5">
                <a href="https://www.service-public.fr/professionnels-entreprises/vosdroits/F22672">
                  Quelles sont les mentions obligatoires sur un livre papier ou numérique ?
                  (service-public.fr)
                </a>
              </p>
              <dl>
                <dt>Nom et adresse de l'éditeur</dt>
                <dd>Romaric Ruga, 56 rue de Sillery, 51100 Reims</dd>
                <dt>Nom (ou raison sociale) et adresse de l'imprimeur</dt>
                <dt>Prix de vente en euros</dt>
                <dd>16 €</dd>
                <dt>Date du dépôt légal</dt>
                <dt>Date de fin du tirage d'impression</dt>
                <dt>ISBN</dt>
              </dl>
            </>
          </ContentRowWithHeader>
          <ContentRowWithHeader
            id={sectionsId.MENTIONS_OBLIGATOIRES_ENTREPRISE}
            header={{
              level: 2,
              content: sectionsData[sectionsId.MENTIONS_OBLIGATOIRES_ENTREPRISE]
            }}
            className="py-5 bg-lightDeep"
          >
            <>
              <dl>
                <dt>Personne</dt>
                <dd>Romaric Ruga</dd>
                <dt>SIRET</dt>
                <dd>822 765 764 00029</dd>
              </dl>
            </>
          </ContentRowWithHeader>
        </div>
      </>
    </Layout>
  )
}
