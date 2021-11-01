import React from "react"
import { colors } from "../../data/colors"
import { pages } from "../../data/pages"
import { ButtonsMenu } from "../components/ButtonsMenu"
import { Header } from "../components/Header"
import { Layout } from "../components/Layout/Layout"
import { Section, TableOfContent } from "../components/TableOfContent"
import { ExtraitAcheterCTA } from "../components/_ctas/ExtraitAcheterCTA"
import { ContentRowWithHeader } from "../components/_rows/ContentRowWithHeader"
import "../styles/global.scss"

const pageId = pages.A_PROPOS
const title = "À propos"

export enum sectionsId {
  QU_EST_CE_QUE_L_HIGHBS_BOK = "qu-est-ce-que-l-highbs-bok",
  POURQUOI_LIRE_CE_LIVRE = "pourquoi-lire-ce-livre",
  UN_PROCESSUS_D_AMELIORATION_CONTINUE = "un-processus-d-amelioration-continue",
  HIGHBS_EGAL_ILLUMINATION = "highbs-egal-illumination",
  POURQUOI_UTILISER_DES_MOTS_BIZARRES = "pourquoi-utiliser-des-mots-bizarres",
  AU_SUJET_DES_PSYCHEDELIQUES = "au-sujet-des-psychedeliques",
  INSPIRATIONS = "inspirations",
  ENTRER_EN_CONTACT = "entrer-en-contact",
}

const sections: Section[] = [
  {
    id: sectionsId.QU_EST_CE_QUE_L_HIGHBS_BOK,
    label: "Qu'est-ce que l'HIGHBS-BOK ?",
  },
  { id: sectionsId.POURQUOI_LIRE_CE_LIVRE, label: "Pourquoi lire ce livre ?" },
  {
    id: sectionsId.UN_PROCESSUS_D_AMELIORATION_CONTINUE,
    label: "Un processus d'amélioration continue",
  },
  { id: sectionsId.HIGHBS_EGAL_ILLUMINATION, label: "HIGHBS = illumination ?" },
  {
    id: sectionsId.POURQUOI_UTILISER_DES_MOTS_BIZARRES,
    label: "Pourquoi utiliser des mots bizarres ?",
  },
  {
    id: sectionsId.AU_SUJET_DES_PSYCHEDELIQUES,
    label: "Au sujet des psychédéliques",
  },
  { id: sectionsId.INSPIRATIONS, label: "Inspirations" },
  { id: sectionsId.ENTRER_EN_CONTACT, label: "Entrer en contact" },
]

export default function () {
  return (
    <Layout pageId={pageId}>
      <>
        <Header title={title} />
        <div className="container-fluid px-0">
          <ContentRowWithHeader
            header={{
              level: 1,
              content: title,
            }}
            className="pb-4"
          >
            <>
              <TableOfContent sections={sections} />
            </>
          </ContentRowWithHeader>
          <ContentRowWithHeader
            id={sections[0].id}
            header={{
              level: 2,
              content: sections[0].label,
            }}
            className="pt-4"
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
          </ContentRowWithHeader>
          <ContentRowWithHeader
            id={sections[1].id}
            header={{
              level: 2,
              content: sections[1].label,
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
          </ContentRowWithHeader>
          <ContentRowWithHeader
            id={sections[2].id}
            header={{
              level: 2,
              content: sections[2].label,
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
          </ContentRowWithHeader>
          <ContentRowWithHeader
            id={sections[3].id}
            header={{
              level: 2,
              content: sections[3].label,
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
          </ContentRowWithHeader>
          <ContentRowWithHeader
            id={sections[4].id}
            header={{
              level: 2,
              content: sections[4].label,
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
                    color: colors.gold,
                  },
                ]}
              />
            </>
          </ContentRowWithHeader>
          <ContentRowWithHeader
            id={sections[5].id}
            header={{
              level: 2,
              content: sections[5].label,
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
                Le PSIK est un terme générique cherchant à saisir cette
                multiplicité de formes, tout en identifiant de façon générique
                le concept de psychoactivité.
              </p>
            </>
          </ContentRowWithHeader>
          <ContentRowWithHeader
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
                Cependant, les ZUMS ont choisi de vivre cette démarche à fond,
                dans le but d'outrepasser les défis de chaque ERA.
              </p>
              <p>
                Le postulat défendu par l'HIGHBS-BOK est qu'
                <b>avec des idées</b>, on trouve{" "}
                <b>des solutions à tous les problèmes</b> et on peut{" "}
                <b>réaliser les choses les plus folles</b>.
              </p>
              <ExtraitAcheterCTA
                primaryBtnColor={colors.light}
                secondaryBtnColor={colors.gold}
              />
            </>
          </ContentRowWithHeader>
          <ContentRowWithHeader
            id={sections[6].id}
            header={{
              level: 2,
              content: sections[6].label,
            }}
          >
            <>
              <p>
                J'ai lu quelques livres spirituels et philosophiques, mais rien
                que de très classiques.
              </p>
              <p>
                Ceux qui pourraient le plus se référer à cet ouvrage sont : le{" "}
                <b>Tao-Te-King</b>, le <b>Mahabaratha</b> et la Gîta, le{" "}
                <b>Sutra des Dix Terres</b>, ainsi que d'autres plus connus mais
                que je ne souhaite pas citer ici.
              </p>
            </>
          </ContentRowWithHeader>
          <ContentRowWithHeader
            id={sections[7].id}
            header={{
              level: 2,
              content: sections[7].label,
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
          </ContentRowWithHeader>
        </div>
      </>
    </Layout>
  )
}
