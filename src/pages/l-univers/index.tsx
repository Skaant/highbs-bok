import React from "react"
import { colors } from "../../../data/colors"
import { ButtonsMenu } from "../../components/ButtonsMenu"
import { Header } from "../../components/Header"
import { Layout } from "../../components/Layout/Layout"
import { EXTRACT_DOWNLOAD_LINK } from "../../config"
import "../../styles/global.scss"

const title = "Découvrir l'univers"

export default function () {
  return (
    <Layout pageId="l-univers/index">
      <>
        <Header title={title} />
        <div className="container-fluid px-0">
          <div
            className="position-absolute w-100 full-img-container align-items-center"
            style={{ height: "max-content", marginTop: "calc(100px - 10vh)" }}
          >
            <img
              src="/images/hb1-soln-syst.svg"
              className="w-100 cover"
              data-parallax-direction="up"
            />
          </div>
          <div className="row px-4 py-4">
            <div className="col-12 col-md-10 col-lg-8 col-xl-6">
              <h1 className="mb-5">{title}</h1>
              <p className="mb-5">
                Le <span className="bg-gold">tout-un</span> ... que de{" "}
                <b>péripéties</b> ont vécu les ZUMS avant d'en arriver jusque
                là.
              </p>
              <p>
                Imaginez un peu :{" "}
                <b>partis de leur planète TERA à bord d'une forêt spatiale</b>,
                ces créatures proprement fabuleuses{" "}
                <b>
                  ont été ensuite dispersées jusqu'aux frontières de l'univers
                </b>
                .
              </p>
              <p className="mb-5">
                Et ce n'est pas tout !{" "}
                <b>Ils en sont revenus pour former l'ANGK</b> : l'être unique{" "}
                <b>capable de conceptualiser la pensée libératrice</b>, le
                concept ultime : <b>l'HIGHBS</b>.
              </p>
              <p>
                Servez-vous de ces quelques pages pour{" "}
                <b>explorer plus encore l'univers épique des ZUMS</b>.
              </p>
              <ButtonsMenu
                className="mt-5"
                buttons={[
                  {
                    href: "/l-univers/sept-eras",
                    color: colors.purple,
                    label: "Sept ERAS",
                  },
                  {
                    href: "/l-univers/couleurs",
                    color: colors.purple,
                    label: "Les couleurs",
                  },
                  {
                    href: "/l-univers/glossaire",
                    color: colors.purple,
                    label: "Glossaire",
                  },
                  {
                    href: "/l-univers/personnages-et-entites",
                    color: colors.purple,
                    outline: true,
                    disabled: true,
                    label: "Personnages et entités",
                  },
                  {
                    href: "/l-univers/lieux",
                    color: colors.purple,
                    outline: true,
                    disabled: true,
                    label: "Lieux",
                  },
                ]}
              />
            </div>
          </div>
          <div className="row px-4 pt-4">
            <div className="col-10">
              <p className="display-4 text-muted">
                "Lorsqu’il ne restera plus dans cet univers qu’un monde,
                <br />
                qu'une ville : la cité de l’aube,
                <br />
                assiégée par les hordes de l’entropie;
                <br />
                ce sera l’AURO-ERA."
              </p>
              <p className="small">
                - Extrait du livret 1, chapitre 6 : <i>Sept ERAS</i>
              </p>
            </div>
          </div>
          <div className="row px-4 bg-gold">
            <div className="col-12 col-md-10 col-lg-8 col-xl-6">
              <h2>Autres pages du site</h2>
              <ButtonsMenu
                buttons={[
                  {
                    href: "/a-propos",
                    color: colors.light,
                    label: "A propos",
                  },
                  {
                    href: EXTRACT_DOWNLOAD_LINK,
                    color: colors.light,
                    label: "Télécharger l'extrait",
                  },
                  {
                    href: "/acheter",
                    color: colors.purple,
                    label: "Acheter le livret",
                  },
                ]}
              />
            </div>
          </div>
        </div>
      </>
    </Layout>
  )
}
