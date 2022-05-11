import React from "react"
import { COLORS } from "../../data/colors"
import { PAGES } from "../../data/pages"
import { TERMS } from "../../data/terms"
import { ButtonsMenu } from "../components/ButtonsMenu"
import { Header } from "../components/Header"
import { Layout } from "../components/Layout/Layout"
import { TableOfContent } from "../components/TableOfContent"
import Term from "../components/Term"
import { ExtraitAcheterCTA } from "../components/_ctas/ExtraitAcheterCTA"
import { SectionRow } from "../components/_rows/SectionRow"
import "../styles/global.scss"

const pageId = PAGES.A_PROPOS
const title = "À propos"

export enum SECTIONS_ID {
  QU_EST_CE_QUE_L_HIGHBS_BOK = "qu-est-ce-que-l-highbs-bok",
  POURQUOI_LIRE_CE_LIVRE = "pourquoi-lire-ce-livre",
  UN_PROCESSUS_D_AMELIORATION_CONTINUE = "un-processus-d-amelioration-continue",
  HIGHBS_EGAL_ILLUMINATION = "highbs-egal-illumination",
  POURQUOI_UTILISER_DES_MOTS_BIZARRES = "pourquoi-utiliser-des-mots-bizarres",
  AU_SUJET_DES_PSYCHEDELIQUES = "au-sujet-des-psychedeliques",
  INSPIRATIONS = "inspirations",
  ENTRER_EN_CONTACT = "entrer-en-contact",
}

export const sections = {
  [SECTIONS_ID.QU_EST_CE_QUE_L_HIGHBS_BOK]: "Qu'est-ce que l'HIGHBS-BOK ?",
  [SECTIONS_ID.POURQUOI_LIRE_CE_LIVRE]: "Pourquoi lire ce livre ?",
  [SECTIONS_ID.UN_PROCESSUS_D_AMELIORATION_CONTINUE]:
    "Un processus d'amélioration continue",
  [SECTIONS_ID.HIGHBS_EGAL_ILLUMINATION]: "HIGHBS = illumination ?",
  [SECTIONS_ID.POURQUOI_UTILISER_DES_MOTS_BIZARRES]:
    "Pourquoi utiliser des mots bizarres ?",
  [SECTIONS_ID.AU_SUJET_DES_PSYCHEDELIQUES]: "Au sujet des psychédéliques",
  [SECTIONS_ID.INSPIRATIONS]: "Inspirations",
  [SECTIONS_ID.ENTRER_EN_CONTACT]: "Entrer en contact",
}

export default function () {
  return (
    <Layout pageId={pageId}>
      <>
        <Header title={title} />
        <div className="container-fluid px-0">
          <SectionRow
            header={{
              level: 1,
              content: title,
            }}
            className="pb-4"
          >
            <>
              <TableOfContent sections={sections} />
            </>
          </SectionRow>
          <SectionRow
            id={SECTIONS_ID.QU_EST_CE_QUE_L_HIGHBS_BOK}
            header={{
              level: 2,
              content: sections[SECTIONS_ID.QU_EST_CE_QUE_L_HIGHBS_BOK],
            }}
            className="pt-4 bg-light_gold"
          >
            <>
              <p>
                Ouvrage <b>synthétique</b>, l'HIGHBS-BOK prétend seulement être
                une <b>actualisation de la forme</b> donnée aux idées (images,
                mythes et histoires), pour continuer à les faire vivre.
              </p>
              <p>
                L'HIGHBS-BOK est également un recueil d'
                <b>associations d'idées inédites</b> (les associations, pas les
                idées). Science-fiction, ésotérisme, permaculture, aventure,
                poèsie se rejoignent pour dessiner une saga utopique et
                complète.
              </p>
              <p>
                Comme nous tous plus ou moins consciemment, les ZUMS cherchent
                le <span className="bg-gold">tout-un</span>. La façon dont ils y
                arrivent nécessite forcément des idées transcendantes.
              </p>
              <ExtraitAcheterCTA />
            </>
          </SectionRow>
          <SectionRow
            id={SECTIONS_ID.POURQUOI_LIRE_CE_LIVRE}
            header={{
              level: 2,
              content: sections[SECTIONS_ID.POURQUOI_LIRE_CE_LIVRE],
            }}
          >
            <>
              <p>
                Parce que ça fait pas de mal de s'aérer un peu l'esprit, de
                contempler le tout, le un et le rien.
              </p>
              <p>
                Jodorowsky pour booster la créativité propose dans son
                interview, <i>Psychomagie</i>, de méditer en se voyant remplir
                l'univers;
              </p>
              <p>
                Parce que ce sont les idées qu'on a qui créent tous les temps,
                je vous propose quelques idées fabuleuses pour egayer votre
                imaginaire du futur.
              </p>
            </>
          </SectionRow>
          <SectionRow
            id={SECTIONS_ID.UN_PROCESSUS_D_AMELIORATION_CONTINUE}
            header={{
              level: 2,
              content:
                sections[SECTIONS_ID.UN_PROCESSUS_D_AMELIORATION_CONTINUE],
            }}
            className="bg-turquoize"
          >
            <>
              <p>
                Comme au jardin, dans la création je crois aussi fort à l'action
                continue d'amélioration.
              </p>
              <p>Nous vivons et nos expériences nous transforment.</p>
              <p>
                En conséquence, comme pour tout le reste, j'ai envie de dire :
                pourvu que le temps nourrisse l'HIGHBS-BOK.
              </p>
            </>
          </SectionRow>
          <SectionRow
            id={SECTIONS_ID.HIGHBS_EGAL_ILLUMINATION}
            header={{
              level: 2,
              content: sections[SECTIONS_ID.HIGHBS_EGAL_ILLUMINATION],
            }}
            className="bg-gold"
          >
            <>
              <p>
                Si l'on ne peut dire vrai ou faux,
                <br />
                si l'on ne peut dire juste ou pas juste,
                <br />
                beau ou pas beau,
                <br />
                comment décrire l'idée ultime ?
              </p>
              <p>Dès qu'on y pose des mots on en perd l'essence.</p>
              <p>L'HIGHBS c'est être très très high mon pote.</p>
            </>
          </SectionRow>
          <SectionRow
            id={SECTIONS_ID.POURQUOI_UTILISER_DES_MOTS_BIZARRES}
            header={{
              level: 2,
              content:
                sections[SECTIONS_ID.POURQUOI_UTILISER_DES_MOTS_BIZARRES],
            }}
          >
            <>
              <p>
                Pour certains termes, je voulais légèrement ré-initialiser les
                idées courantes qu'on a dans la tête pour{" "}
                <b>se permettre d'imaginer d'autres choses autour du mot</b>.
              </p>
              <p>
                Depuis mes premiers storyboards, j'ai beaucoup réduit ces mots
                couramment écrits en majuscule, mais ceux qui restent sont bien
                expliqués dans le livret et sur le site.
              </p>
              <ButtonsMenu
                buttons={[
                  {
                    href: "/l-univers/glossaire",
                    label: "Se rendre au glossaire",
                    color: COLORS.GOLD,
                  },
                ]}
              />
            </>
          </SectionRow>
          <SectionRow
            id={SECTIONS_ID.AU_SUJET_DES_PSYCHEDELIQUES}
            header={{
              level: 2,
              content: sections[SECTIONS_ID.AU_SUJET_DES_PSYCHEDELIQUES],
            }}
            className="pt-5 pb-4 bg-purple text-light"
          >
            <>
              <p>
                Il existe beaucoup de façons d'entrer dans des états
                psychédéliques. <b>Certaines sont légales, d'autres non</b>.
              </p>
              <p>
                Cet ouvrage cherche à questionner leur emploi, indépendamment de
                leurs spécificités.
              </p>
              <p>
                Le <Term term={TERMS.PSIK} outline={true} /> est un terme
                générique cherchant à saisir cette multiplicité de formes, tout
                en identifiant de façon générique le concept de psychoactivité.
              </p>
            </>
          </SectionRow>
          <SectionRow
            header={{
              level: 3,
              content: "La psychoactivité, un mode de vie ?",
            }}
            className="pt-0 pb-5 bg-purple text-light"
          >
            <>
              <p>
                La psychoactivité, c'est-à-dire : le fait de générer des idées
                en quantité amplifiée et en qualité transformée (par rapport à
                un fantasmé état de sobriété); est un ensemble d'états
                aujourd'hui peu connu et relativement mal perçu.
              </p>
              <p>
                Cependant, les <Term term={TERMS.ZUM} plural={true} /> ont
                choisi de vivre cette démarche à fond, dans le but d'outrepasser
                les défis de chaque <Term term={TERMS.ERA} />.
              </p>
              <p>
                Le postulat défendu par l'
                <Term term={TERMS.HIGHBS_BOK} /> est qu'
                <b>avec des idées</b>, on trouve{" "}
                <b>des solutions à tous les problèmes</b> et on peut{" "}
                <b>réaliser les choses les plus folles</b>.
              </p>
              <ExtraitAcheterCTA
                primaryBtnColor={COLORS.LIGHT}
                secondaryBtnColor={COLORS.GOLD}
              />
            </>
          </SectionRow>
          <SectionRow
            id={SECTIONS_ID.INSPIRATIONS}
            header={{
              level: 2,
              content: sections[SECTIONS_ID.INSPIRATIONS],
            }}
          >
            <>
              <p>
                J'ai lu quelques livres spirituels et philosophiques, mais rien
                que de très classiques.
              </p>
              <p>
                Ceux qui pourraient le plus se référer à cet ouvrage sont : le{" "}
                <b>Sutra des Dix Terres</b>, le <b>Tao-Te-King</b> ou encore le{" "}
                <b>Mahabaratha</b>.
              </p>
            </>
          </SectionRow>
          <SectionRow
            id={SECTIONS_ID.ENTRER_EN_CONTACT}
            header={{
              level: 2,
              content: sections[SECTIONS_ID.ENTRER_EN_CONTACT],
            }}
            className="bg-skin text-light"
          >
            <>
              <p>Contactez-moi via mes réseaux :</p>
              <ul>
                <li>
                  <a
                    href="https://www.instagram.com/imrok.le.bleu/"
                    className="text-light"
                  >
                    Instagram
                  </a>
                  ,
                </li>
                <li>
                  <a
                    href="https://www.youtube.com/user/romaricruga/"
                    className="text-light"
                  >
                    YouTube
                  </a>
                  ,
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/romaricruga/"
                    className="text-light"
                  >
                    LinkedIn
                  </a>
                </li>
              </ul>
            </>
          </SectionRow>
        </div>
      </>
    </Layout>
  )
}
