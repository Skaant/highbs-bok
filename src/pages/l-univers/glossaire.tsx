import React from "react"
import { COLORS, COLORS_DATA } from "../../../data/colors"
import { PAGES, PAGES_DATA } from "../../../data/pages"
import { Header } from "../../components/Header"
import { Layout } from "../../components/Layout/Layout"
import { UniversePagesCTA } from "../../components/_ctas/UniversePagesCTA"
import { SectionRow } from "../../components/_rows/SectionRow"
import { ImageRowPositionAbsolute } from "../../components/_rows/ImageRowPositionAbsolute"
import "../../styles/global.scss"
import { SECTIONS_ID as A_PROPOS_SECTIONS_ID } from "../a-propos"
import { TableOfContent } from "../../components/TableOfContent"
import { TERMS, TERMS_DATA } from "../../../data/terms"
import { VOLUMES } from "../../../data/volumes"
import Term from "../../components/Term"
import TermsRow from "../../components/_pages/glossaire/TermsRow"
import { CHARACTERS } from "../../../data/characters"
import Character from "../../components/Character"
import TermsList from "../../components/_pages/glossaire/TermsList"

const pageId = PAGES.L_UNIVERS_GLOSSAIRE
const title = "Glossaire"

export enum SECTIONS_ID {
  TERMES_DU_VOLUME_1 = "termes-volume-1",
  TERMES_DU_VOLUME_2 = "termes-volume-2",
  TERMES_DES_STORYBOARDS = "termes-storyboard",
}

const sections: { [key in SECTIONS_ID]: string } = {
  [SECTIONS_ID.TERMES_DU_VOLUME_1]: "Termes du volume 1",
  [SECTIONS_ID.TERMES_DU_VOLUME_2]: "Termes du volume 2",
  [SECTIONS_ID.TERMES_DES_STORYBOARDS]: "Termes des storyboards",
}

export default function Glossaire() {
  const volumesTerms = Object.values(TERMS).reduce(
    (acc, term) => {
      const data = TERMS_DATA[term]
      if (data) {
        acc[data.volume].push(term)
      }
      return acc
    },
    {
      [VOLUMES.VOLUME_1]: [] as TERMS[],
      [VOLUMES.VOLUME_2]: [] as TERMS[],
      storyboards: [] as TERMS[],
    } as { [key in VOLUMES | "storyboards"]: TERMS[] }
  )
  return (
    <Layout pageId={pageId}>
      <>
        <Header title={title} />
        <div className="container-fluid px-0">
          <ImageRowPositionAbsolute
            src="/images/hb1-16-hol-ong.svg"
            style={{ height: "100%", minHeight: "100vh" }}
            imgClassName="h-100"
            gradient="#f8f9fa"
          />
          <SectionRow
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
                  href={`/a-propos#${A_PROPOS_SECTIONS_ID.POURQUOI_UTILISER_DES_MOTS_BIZARRES}`}
                >
                  Pourquoi ?
                </a>
              </p>
              <p>
                Retrouvez ci-dessous{" "}
                <b>la liste des termes employés dans l'HIGHBS-BOK</b>, ainsi que{" "}
                <b>leur définition</b>.
              </p>
              <TableOfContent
                sections={sections}
                unstyled={false}
                className="mt-5"
              />
            </>
          </SectionRow>
          <TermsRow
            id={SECTIONS_ID.TERMES_DU_VOLUME_1}
            title={sections[SECTIONS_ID.TERMES_DU_VOLUME_1]}
            intro={
              <>
                <p>
                  Fresque esquissant l'univers de l'{" "}
                  <Term term={TERMS.HIGHBS_BOK} pageLink={true} />, le volume 1
                  introduit quelques{" "}
                  <b>
                    termes sur le monde des idées et les éléments fondateurs de
                    l'histoire
                  </b>{" "}
                  des <Term term={TERMS.ZUM} plural={true} pageLink={true} />.
                </p>
                <TermsList terms={volumesTerms[VOLUMES.VOLUME_1]} />
              </>
            }
            terms={volumesTerms[VOLUMES.VOLUME_1]}
            descriptions={{
              ERA: (
                <>
                  <p>
                    <b>Immense période de temps</b> de l'histoire des{" "}
                    <Term term={TERMS.ZUM} plural={true} />.
                  </p>
                  <p>
                    De leurs premiers instincts du{" "}
                    <Character character={CHARACTERS.TOUT_UN} /> jusqu'à la
                    conclusion de leur univers,{" "}
                    <b>
                      <a href={PAGES_DATA[PAGES.L_UNIVERS_ERAS].url}>
                        septs ERAS
                      </a>{" "}
                      se succèdent.
                    </b>
                  </p>
                  <p>
                    <i>N'oublions pas notre époque, le présent.</i>
                  </p>
                </>
              ),
              HIGHBS: (
                <>
                  <p>Idée primordiale.</p>
                  <p>
                    Source de tous les motifs, <b>mais sans motif</b>, l'HIGHBS
                    est la prise de conscience par un être du{" "}
                    <Character character={CHARACTERS.TOUT_UN} />.
                  </p>
                  <p>
                    Mais cette idée ne peut être eue <b>que par un être</b> qui
                    est lui-même tout et un !
                  </p>
                  <p>
                    C'est pourquoi, les <Term term={TERMS.ZUM} plural={true} />{" "}
                    ont lancé{" "}
                    <b>
                      l'époustouflant chantier de l'
                      <Character character={CHARACTERS.ANGK} />
                    </b>{" "}
                    :
                  </p>
                  <p>
                    Créer l'être unique, le{" "}
                    <b>réceptacle pour idéer l'HIGHBS</b> et donner à l'univers
                    le <Character character={CHARACTERS.TOUT_UN} />.
                  </p>
                </>
              ),
              HIGHBS_BOK: (
                <>
                  <p>
                    Littéralement, le <b>livre du motif absolu</b>.
                  </p>
                  <p>
                    L'HIGHBS-BOK utilise l'histoire des{" "}
                    <Term term={TERMS.ZUM} plural={true} /> pour délivrer des
                    motifs qui élèvent. <b>Wow.</b>
                  </p>
                  <p>
                    <i>
                      (Storyboards) L'HIGHBS-BOK est un recueil d'{" "}
                      <Term term={TERMS.ABS_SUTRAT} plural={true} />.
                    </i>
                  </p>
                </>
              ),
              HOL_ONG: (
                <>
                  <p>
                    <b>Réseau de conscience collective</b> auxquels sont reliés
                    tous les <Term term={TERMS.ZUM} plural={true} />, les
                    animaux, les végétaux, les minéraux, les corps astraux et
                    les idées.
                  </p>
                  <p>
                    Il existe un nombre incommensurable de mini-HOL-ONGS formés
                    par des groupes locaux de consciences collectives.
                  </p>
                  <p>
                    <i>
                      Sur <Character character={CHARACTERS.GRAND_ARBRE} />, tous
                      les êtres sont dotés d'un <Term term={TERMS.ONG} />,
                      l'organe qui permet de parler en concept et de se
                      connecter les uns aux autres via le{" "}
                      <Term term={TERMS.PRIGHM} />.
                    </i>
                  </p>
                </>
              ),
              KANG: (
                <>
                  <p>Énergie primordiale.</p>
                  <p>
                    <b>Engendreur et destructeur</b>, sa puissance lance
                    indisctinctement les rouages de l'univers.
                  </p>
                  <p>
                    <i>
                      KANG agit directement sur la particule fondamentale, le{" "}
                      <Term term={TERMS.PRIGHM} />
                    </i>
                  </p>
                </>
              ),
              PSIK: (
                <>
                  <p>
                    Ensemble des pratiques, musiques, exercices, substances,
                    discussions, textes ... qui suscitent{" "}
                    <b>des états de conscience modifiée</b>{" "}
                    <i>(tout, finalement)</i>, et donc <b>de nouvelles idées</b>
                    .
                  </p>
                  <p>
                    Sortir de son axe pour s'oberver est le seul moyen de{" "}
                    <b>surmonter ses blocages</b>, de s'émanciper et d'atteindre{" "}
                    un état de calme et stable contentement.
                  </p>
                  <p>
                    La volonté exacerbée par le PSIK, les{" "}
                    <Term term={TERMS.ZUM} plural={true} />{" "}
                    <b>trouvent des idées transcendantes</b> qui,{" "}
                    <Term term={TERMS.ERA} /> après {TERMS_DATA[TERMS.ERA].name}
                    , les emmènent de plus en plus proche de l'
                    <Term term={TERMS.HIGHBS} /> et du{" "}
                    <Character character={CHARACTERS.TOUT_UN} />.
                  </p>
                  <p>
                    <i>
                      Plus sur{" "}
                      <a
                        href={`${PAGES_DATA[PAGES.A_PROPOS].url}#${
                          A_PROPOS_SECTIONS_ID.AU_SUJET_DES_PSYCHEDELIQUES
                        }`}
                      >
                        la page À propos
                      </a>
                      .
                    </i>
                  </p>
                </>
              ),
              VAULT: (
                <>
                  <p>
                    En vivant, les êtres laissent des traces, et dans ses
                    traces,{" "}
                    <b>
                      des traces du <Character character={CHARACTERS.TOUT_UN} />
                    </b>
                    .
                  </p>
                  <p>
                    Depuis leurs <Term term={TERMS.DOM} plural={true} /> et
                    toutes leurs exteriorisations, ils rassemblent leurs idées
                    créatives et transcendantes dans les VAULTS.
                  </p>
                  <p>
                    <i>
                      Beaucoup de VAULTS forment une{" "}
                      <Term term={TERMS.TRIKO_CITE} />.
                    </i>
                  </p>
                </>
              ),
              ZUM: (
                <>
                  <p>
                    Humanoïde de la civilisation de singes, très similaire à la
                    notre, apparue sur TERA.
                  </p>
                  <p>
                    Les ZUMS{" "}
                    <b>se sont portés jusqu'aux confins de l'univers</b> pour
                    chercher le <Character character={CHARACTERS.TOUT_UN} />,
                    puis <b>sont revenus</b> pour créer l'{" "}
                    <Character character={CHARACTERS.ANGK} />.
                  </p>
                </>
              ),
            }}
          />
          <TermsRow
            id={SECTIONS_ID.TERMES_DU_VOLUME_2}
            title={sections[SECTIONS_ID.TERMES_DU_VOLUME_2]}
            intro={
              <>
                <p>
                  Dans le volume 2, <b>c'est la folie</b> !
                </p>
                <p>
                  Lecteur, enchante-toi ! Beaucoup de nouvelles rencontres
                  t'attendent :D
                </p>
                <p>
                  <i>
                    Le volume 2 est en cours d'écriture et les personnages
                    peuvent être amenés à radicalementc changer.
                  </i>
                </p>
                <TermsList terms={volumesTerms[VOLUMES.VOLUME_2]} />
              </>
            }
            terms={volumesTerms[VOLUMES.VOLUME_2]}
            descriptions={{
              PRIGHM: (
                <>
                  <p>Particule primordiale.</p>
                  <p>
                    <b>Transmet le langage conceptuel</b> exceptionnellement
                    bien.
                  </p>
                  <p>
                    Sert de brique, ou plutôt de filament{" "}
                    <i>
                      (voir <Term term={TERMS.MIKO_PRIGHM} />)
                    </i>
                    , au <Term term={TERMS.HOL_ONG} /> et à{" "}
                    <Character character={CHARACTERS.GRAND_ARBRE} />.
                  </p>
                </>
              ),
            }}
          />
          <TermsRow
            id={SECTIONS_ID.TERMES_DES_STORYBOARDS}
            title={sections[SECTIONS_ID.TERMES_DES_STORYBOARDS]}
            intro={
              <>
                <TermsList terms={volumesTerms["storyboards"]} />
              </>
            }
            terms={volumesTerms["storyboards"]}
            descriptions={{
              ABS_SUTRAT: (
                <>
                  <p>
                    Collection de <Term term={TERMS.DATA} /> qui guide vers l'
                    <Term term={TERMS.HIGHBS} />.
                  </p>
                </>
              ),
            }}
          />
          <SectionRow
            header={{
              level: 2,
              content: "Autres pages de l'univers",
            }}
            className="bg-gold"
          >
            <>
              <UniversePagesCTA current={pageId} buttonsColor={COLORS.PURPLE} />
            </>
          </SectionRow>
        </div>
      </>
    </Layout>
  )
}
