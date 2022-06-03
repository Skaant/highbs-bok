import React from "react"
import articles from "../../../data/articles"
import { CHARACTERS } from "../../../data/characters"
import { COLORS } from "../../../data/colors"
import { ERAS } from "../../../data/eras"
import { PAGES, PAGES_DATA } from "../../../data/pages"
import { PLACES } from "../../../data/places"
import { TERMS } from "../../../data/terms"
import { TRIBES } from "../../../data/tribes"
import { ButtonsMenu } from "../../components/ButtonsMenu"
import Character from "../../components/Character"
import Color from "../../components/Color"
import Era from "../../components/Era"
import Figure from "../../components/Figure"
import { Header } from "../../components/Header"
import { Layout } from "../../components/Layout/Layout"
import Place from "../../components/Place"
import { TableOfContent } from "../../components/TableOfContent"
import Term from "../../components/Term"
import Tribe from "../../components/Tribe"
import { ExtraitAcheterCTA } from "../../components/_ctas/ExtraitAcheterCTA"
import { UniversePagesCTA } from "../../components/_ctas/UniversePagesCTA"
import { SectionRow } from "../../components/_rows/SectionRow"
import "../../styles/global.scss"

const INDEX = 4

export default function () {
  const { slug, title, date } = articles[INDEX]
  return (
    <Layout pageId={slug} navbarAlternativeColor={true}>
      <>
        <Header title={title} />
        <div className="container-fluid px-0">
          <SectionRow className="col-12 col-md-10 col-lg-8 col-xl-6 spaced pb-0 bg-dark_turquoize">
            <ButtonsMenu
              className="mt-0"
              buttons={[
                {
                  href: "/blog",
                  label: "Retour aux articles",
                  color: COLORS.LIGHT,
                },
              ]}
            />
          </SectionRow>
          <SectionRow
            header={{
              level: 1,
              content: title,
              className: "mb-4",
            }}
            className="pt-4 bg-dark_turquoize text-light"
          >
            <>
              <p className="mb-6 font-size-initial">
                Publié le {date.split("-").reverse().join("/")}
              </p>
              <p>
                La conception du volume 2 est en cours,{" "}
                <b>l'univers s'enrichit et se structure</b>.
              </p>
              <p>
                L'apparition de <b>nouveaux personnages et concepts</b> nous
                oblige à nous lancer ...{" "}
              </p>
              <p className="display-2 my-5">
                À la recherche d'une plus grande accessibilité.
              </p>
              <Figure
                src="/images/articles/4/expans-skigh-layers.jpg"
                alt="Paysage de l'EXPANS-ERA. Un ZUM sur le dos d'un oiseau survole un territoire fait de plusieurs couches de flux superposés."
                caption={() => (
                  <>
                    Paysage de l' <Era era={ERAS.EXPANS_ERA} /> .<br />
                    On voit plusieurs couches de flux se superposer les unes aux
                    autres
                  </>
                )}
              />
              <p>
                Ce point d'attention sur l'accessibilité de l'univers se traduit
                notamment par :
              </p>
              <ul>
                <li className="mb-3">
                  L'<b>organisation en catégories des termes</b> spécifiques à
                  l'univers de l' <Term term={TERMS.HIGHBS_BOK} /> (ex:{" "}
                  <a
                    href={
                      PAGES_DATA[PAGES.L_UNIVERS_PERSONNAGES_ET_ENTITES].url
                    }
                    className="text-turquoize"
                  >
                    {PAGES_DATA[PAGES.L_UNIVERS_PERSONNAGES_ET_ENTITES].title}
                  </a>
                  ,{" "}
                  <a
                    href={PAGES_DATA[PAGES.L_UNIVERS_ERAS].url}
                    className="text-turquoize"
                  >
                    {PAGES_DATA[PAGES.L_UNIVERS_ERAS].title}
                  </a>
                  ,{" "}
                  <a
                    href={PAGES_DATA[PAGES.L_UNIVERS_GLOSSAIRE].url}
                    className="text-turquoize"
                  >
                    {PAGES_DATA[PAGES.L_UNIVERS_GLOSSAIRE].title}
                  </a>
                  ,{" "}
                  <a
                    href={PAGES_DATA[PAGES.L_UNIVERS_LIEUX].url}
                    className="text-turquoize"
                  >
                    {PAGES_DATA[PAGES.L_UNIVERS_LIEUX].title}
                  </a>
                  ...),
                </li>{" "}
                <li className="mb-3">
                  Leurs <b>définitions rapide et détaillée</b> (au survol de la
                  souris et sur{" "}
                  <a
                    href={PAGES_DATA[PAGES.L_UNIVERS].url}
                    className="text-turquoize"
                  >
                    leurs pages dédiées
                  </a>
                  ),
                </li>{" "}
                <li className="mb-3">
                  Leur <b>apparence visuelle cohérente</b> (un terme = une
                  couleur, police spécifique pour les termes en{" "}
                  <Term term={TERMS.ABS_LANG} />
                  ).
                </li>
                <li className="mb-3">
                  Et la <b>référence systématique</b> à ces termes dans le
                  contenu des pages (badges cliquables communs à toutes les
                  catégories).
                </li>
              </ul>
              <p>
                Commençons rapidement par parler du nouveau contenu du site,
                avant de passer en revue les diverses{" "}
                <b>modifications de l'interface graphique</b>.
              </p>
            </>
          </SectionRow>
          <SectionRow
            header={{
              level: 2,
              content: "Ajout de nouveau contenu",
            }}
          >
            <></>
          </SectionRow>
          <SectionRow
            header={{
              level: 3,
              content: "Éléments du volume 2, pas encore fixés",
            }}
          >
            <>
              <p>
                Comme dit plus haut, je suis entré dans la phase de conception
                de l'HIGHBS-BOK volume 2.
              </p>
              <p>
                Le premier texte est posé,{" "}
                <b>ajoutant plein de nouveaux éléments à l'univers</b>.
              </p>
              <p>
                Trois nouvelles pages catégories sont accessibles sur le site :
              </p>
              <ul>
                <li>
                  La formidable page{" "}
                  <a
                    href={
                      PAGES_DATA[PAGES.L_UNIVERS_PERSONNAGES_ET_ENTITES].url
                    }
                    className="text-turquoize"
                  >
                    {PAGES_DATA[PAGES.L_UNIVERS_PERSONNAGES_ET_ENTITES].title}
                  </a>
                </li>
              </ul>
              <p>
                <i>
                  Le CTA "Pages de l'univers" s'enrichit de trois nouveaux
                  boutons :
                </i>
              </p>
              <UniversePagesCTA />
              <p>
                Bien entendu, il reste à étoffer certains des 14 chapitres, et
                sans nul doute les affiner ensuite plusieurs fois.
              </p>
              <p>
                Parce qu'ils ne sont pas encore <i>fixés</i> et{" "}
                <b>pourraient être amené à changer</b> avant la publication du
                volume 2, ces termes sont signalés par un petit badge "S" en
                haut à gauche.
              </p>
              <p>
                Exemple (au 03/06/22) :{" "}
                <Character character={CHARACTERS.ZA_ZOZ} />
              </p>
              <Figure
                src="/images/articles/4/lieux-de-potente-flemme.jpg"
                alt="Un bâtiment monumental, dressé vers le Tout-Un, lieu de potente flemme."
                caption={() => (
                  <>
                    Extrait d'un storyboard de 2018 :<br />
                    <i>"Lieux démesurés dédiés à la création.</i>
                    <br />
                    <i>"Propice au rêve.</i>
                    <br />
                    <i>
                      "<b>Ces fameux temples de la potente flemme.</b>"
                    </i>
                  </>
                )}
              />
            </>
          </SectionRow>
          <SectionRow
            header={{
              level: 3,
              content: "Contenu du volume 1 adapté",
            }}
          >
            <>
              <p>
                <b>Pour suivre l'évolution générique</b> des termes, même{" "}
                <b>le contenu du volume 1 a été remanié</b>.
              </p>
              <p>
                Changement notable,{" "}
                <b>
                  les noms de personnages ou entités n'utilisant pas l'{" "}
                  <Term term={TERMS.ABS_LANG} /> est maintenant écrit en
                  minuscule
                </b>{" "}
                (avec les premières lettres en capital).
              </p>
              <p>Cela réduit la quantité de termes à définir !</p>
              <p>
                <b>Concernés :</b> <Character character={CHARACTERS.TOUT_UN} />,{" "}
                <Character character={CHARACTERS.GRAND_ARBRE} />.
              </p>
              <p>
                Notons aussi les furieuses améliorations des pages{" "}
                <a
                  href={PAGES_DATA[PAGES.L_UNIVERS_COULEURS].url}
                  className="text-turquoize"
                >
                  {PAGES_DATA[PAGES.L_UNIVERS_COULEURS].title}
                </a>{" "}
                et{" "}
                <a
                  href={PAGES_DATA[PAGES.L_UNIVERS_GLOSSAIRE].url}
                  className="text-turquoize"
                >
                  {PAGES_DATA[PAGES.L_UNIVERS_GLOSSAIRE].title}
                </a>{" "}
                (détaillées plus bas) qui décrivent mieux leurs objets.
              </p>
            </>
          </SectionRow>
          <SectionRow
            header={{
              level: 2,
              content: "Modification de l'interface graphique du site",
            }}
            className="bg-light_gold"
          >
            <>
              <p>
                Au niveau du site lui-même, j'ai lancé quelques gros chantiers
                pour faciliter la <b>navigation dans l'univers</b>, et pour le
                rendre
                <b>plus rapidement compréhensible</b>.
              </p>
              <p>
                Les sites internet sont géniaux pour ça : on peut constamment
                mettre à jour contenu et structure.
              </p>
              <p>
                Passons en revue ces différentes améliorations de l'interface
                graphique.
              </p>
            </>
          </SectionRow>
          <SectionRow
            header={{
              level: 3,
              content: "Badges sémantiques",
            }}
            className="bg-light_gold"
          >
            <>
              <p>
                Tous les termes de l' <Term term={TERMS.HIGHBS_BOK} /> , sont
                maintenant affichés en utilisant des badges-liens colorés.
              </p>
              <p>
                <b>
                  En survolant les badges, un petit résumé du concept apparaît
                </b>
                , ce qui peut être très utile pour se souvenir des mots en{" "}
                <Term term={TERMS.ABS_LANG} />.
              </p>
              <p>
                Ces derniers sont désormais{" "}
                <b>rendus avec une police spécifique</b>.
              </p>
              <p>
                En cliquant sur un badge vous êtes{" "}
                <b>amené à la page de la catégorie du terme</b> (personnages,
                lieux, <Term term={TERMS.ERA} plural={true} /> ...), à hauteur
                de sa définition.
              </p>
              <p>
                Exemples : <Character character={CHARACTERS.BALTAZUM} />,{" "}
                <Era era={ERAS.PRIMA_ERA} />,
                <Place place={PLACES.CITE_AUBE} />, <Term term={TERMS.PSIK} />,
                <Color color={COLORS.BLUE} />, <Tribe tribe={TRIBES.NOV} />.
              </p>
              <p>
                Les pages existantes ont été revues pour intégrer ces badges, se
                transformant maintenant en petites mosaïques de couleur.
              </p>
              <p>
                Chaque terme à la sienne, pour{" "}
                <b>accélérer sa saisie par l'oeil</b> :D
              </p>
              <p>
                Pour conclure, les{" "}
                <b>
                  termes du volume 2 et des storyboards sont légèrement
                  transparents et portent un petit sur-badge
                </b>
                , pour signifier leur absence d'usage, de fixation.
              </p>
            </>
          </SectionRow>
          <SectionRow
            header={{
              level: 3,
              content: "Modification des pages de l'univers",
            }}
            className="bg-light_gold"
          >
            <>
              <Figure
                src="/images/articles/4/bz-siege-de-la-pensee.jpg"
                alt="Baltazum regarde le Siège de la Pensée disparaître avec le jour naissant."
                caption={() => (
                  <>
                    <Character character={CHARACTERS.BALTAZUM} /> de la{" "}
                    <Era era={ERAS.CONTRACTION_ERA} /> regarde le jour se lever.
                    <br />
                    Bientôt le <Place place={PLACES.SIEGE_PENSEE} /> s'éteindra
                    et laissera la place au temps de l'action.
                    <i>
                      En contrebas, quelques{" "}
                      <Term term={TERMS.DOM} plural={true} />
                    </i>
                  </>
                )}
              />
              <p>
                <a
                  href={PAGES_DATA[PAGES.L_UNIVERS_GLOSSAIRE].url}
                  className="text-turquoize"
                >
                  Le glossaire
                </a>{" "}
                a vécu quelques changements :
              </p>
              <ul>
                <li>Bien entendu, les termes apparaissent avec leur badge.</li>
                <li>
                  Les descriptions peuvent être mises en forme, et acceptent
                  l'usage de badges.
                </li>
                <li>
                  Enfin, il est désormais lisible sur mobile car les deux
                  cellules d'une ligne apparaissent l'une en dessous de l'autre.
                </li>
              </ul>
              <p>
                <a
                  href={PAGES_DATA[PAGES.L_UNIVERS_COULEURS].url}
                  className="text-turquoize"
                >
                  La page des couleurs
                </a>{" "}
                a elle beneficié des mêmes changements.
              </p>
              <p>
                <b>La modification visuelle satisfaisante</b> vient des
                références à tous les termes (toutes catégories confondues)
                utilisant une couleur.
              </p>
              <p>
                <a
                  href={PAGES_DATA[PAGES.L_UNIVERS_ERAS].url}
                  className="text-turquoize"
                >
                  La page <Term term={TERMS.ERA} plural={true} />
                </a>{" "}
                liste maintenant les personnages qui s'y manifestent.
              </p>
            </>
          </SectionRow>
          <SectionRow
            header={{
              level: 2,
              content: "Voilà, c'est tout pour aujourd'hui !",
            }}
          >
            <>
              <p>
                Je continue <b>vivement mais sagement</b> à la création du
                volume 2, et vous donne rendez-vous très bientôt à ce sujet.
              </p>
              <p>
                En attendant, téléchargez l'extrait du volume 1 et procurez-vous
                en un exemplaire !
              </p>
              <ExtraitAcheterCTA />
            </>
          </SectionRow>
        </div>
      </>
    </Layout>
  )
}
