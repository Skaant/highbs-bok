import React from "react"
import { CHARACTERS, CHARACTERS_DATA } from "../../../data/characters"
import { COLORS } from "../../../data/colors"
import { PAGES, PAGES_DATA } from "../../../data/pages"
import { TERMS } from "../../../data/terms"
import { VOLUMES } from "../../../data/volumes"
import CharactersList from "../../components/_pages/personnages-et-entites/CharactersList"
import { Header } from "../../components/Header"
import { Layout } from "../../components/Layout/Layout"
import { TableOfContent } from "../../components/TableOfContent"
import Term from "../../components/Term"
import { UniversePagesCTA } from "../../components/_ctas/UniversePagesCTA"
import CharacterRow from "../../components/_pages/personnages-et-entites/CharacterRow"
import { SectionRow } from "../../components/_rows/SectionRow"
import { ImageRowPositionAbsolute } from "../../components/_rows/ImageRowPositionAbsolute"
import "../../styles/global.scss"
import Era from "../../components/Era"
import { ERAS } from "../../../data/eras"
import Character from "../../components/Character"
import { PLACES, PLACES_DATA } from "../../../data/places"
import Place from "../../components/Place"
import Tribe from "../../components/Tribe"
import { TRIBES } from "../../../data/tribes"

export enum SECTIONS_ID {
  PERSONNAGES_ET_ENTITES_DU_VOLUME_1 = "personnages-et-entites-du-volume-1",
  PERSONNAGES_ET_ENTITES_DU_VOLUME_2 = "personnages-et-entites-du-volume-2",
}

const sections: { [key in SECTIONS_ID]: string } = {
  [SECTIONS_ID.PERSONNAGES_ET_ENTITES_DU_VOLUME_1]:
    "Personnages et entités du volume 1",
  [SECTIONS_ID.PERSONNAGES_ET_ENTITES_DU_VOLUME_2]:
    "Personnages et entités du volume 2",
}

const page = PAGES.L_UNIVERS_PERSONNAGES_ET_ENTITES
const { title } = PAGES_DATA[page]

export default function Glossaire() {
  const volumesCharacters = Object.values(CHARACTERS).reduce(
    (acc, character) => {
      acc[CHARACTERS_DATA[character].volume].push(character)
      return acc
    },
    {
      [VOLUMES.VOLUME_1]: [] as CHARACTERS[],
      [VOLUMES.VOLUME_2]: [] as CHARACTERS[],
    }
  )
  return (
    <Layout pageId={page}>
      <>
        <Header title={title} />
        <div className="container-fluid px-0">
          <ImageRowPositionAbsolute
            src="/images/razette-kami-baltazum.svg"
            style={{
              marginTop: "20vh",
              overflow: "unset",
            }}
            imgStyle={{ maxWidth: "992px" }}
          />
          <SectionRow
            header={{
              level: 1,
              content: title,
            }}
            className="pb-4 bg-none"
          >
            <>
              <p>
                Apprennez-en plus sur les <b>personnages épiques</b> et les{" "}
                <b>entités mystérieuses</b> de l'univers des{" "}
                <Term term={TERMS.ZUM} plural={true} />.
              </p>
              <TableOfContent
                sections={sections}
                unstyled={false}
                className="mt-5"
              />
            </>
          </SectionRow>
          <SectionRow
            id={SECTIONS_ID.PERSONNAGES_ET_ENTITES_DU_VOLUME_1}
            header={{
              level: 2,
              content: sections[SECTIONS_ID.PERSONNAGES_ET_ENTITES_DU_VOLUME_1],
            }}
            className="pt-5"
          >
            <>
              <p>
                Dans le volume 1, on découvre{" "}
                <b>
                  des{" "}
                  <a href={PAGES_DATA[PAGES.L_UNIVERS_GLOSSAIRE].url}>
                    concepts vertigineux
                  </a>
                </b>{" "}
                parmi lesquels notemment,{" "}
                <b>
                  les{" "}
                  <a href={PAGES_DATA[PAGES.L_UNIVERS_ERAS].url}>
                    sept <Term term={TERMS.ERA} plural={true} link={false} />
                  </a>{" "}
                  de l'histoire des <Term term={TERMS.ZUM} plural={true} />
                </b>
                .
              </p>
              <p>
                Les personnages sont un peu en second plan, mais{" "}
                <b>
                  ceux introduits ici nous suivront sans doute jusqu'au bout de
                  l'histoire
                </b>
                .
              </p>
              <CharactersList
                characters={volumesCharacters[VOLUMES.VOLUME_1]}
              />
            </>
          </SectionRow>
          <CharacterRow character={volumesCharacters[VOLUMES.VOLUME_1][0]}>
            <>
              <p>
                <b>L'être* absolu</b> que les{" "}
                <Term term={TERMS.ZUM} plural={true} /> tente éperdument de
                manifester <b>pour fusionner</b> à l'intérieur de lui**.
              </p>
              <p className="small mb-2">
                *Ou le non-être, ou les deux et aucun des deux.
              </p>
              <p className="small">*Neutre.</p>
            </>
          </CharacterRow>
          <CharacterRow character={volumesCharacters[VOLUMES.VOLUME_1][1]}>
            <>
              <p>
                Un <Term term={TERMS.ZUM} outline={true} /> de la{" "}
                <Era era={ERAS.CONTRACTION_ERA} />.
              </p>
              <p>
                Comme toutes les autres créatures qui habitent{" "}
                <Place place={PLACES.GRAND_ARBRE} pageLink={true} />
                et son réseau conceptuel, le <Term term={TERMS.HOL_ONG} />,
                Baltazum n'a de cesse d'avoir de nouvelles idées et de les
                exterioriser.
              </p>
              <p>
                Ainsi, ils essaient d'augmenter les connaissances qui circulent
                sur le <Term term={TERMS.HOL_ONG} /> et espèrent, par
                abstraction, dériver l' <Term term={TERMS.HIGHBS} />.
              </p>
            </>
          </CharacterRow>
          <CharacterRow character={volumesCharacters[VOLUMES.VOLUME_1][2]}>
            <>
              <p>
                Pour réaliser l'
                <Term term={TERMS.HIGHBS} />, la conscience du{" "}
                <Character character={CHARACTERS.TOUT_UN} pageLink={true} />,
                les <Term term={TERMS.ZUM} plural={true} /> pensent devoir
                d'abord créer un être unique.
              </p>
              <p>
                Chantier ultime au coeur de la{" "}
                <Place place={PLACES.CITE_AUBE} />,{" "}
                <b>
                  l'ANGK pourra-t'il être conçu avant que l'ombre ne submerge la
                  ville et ne relance un nouveau cycle de l'univers
                </b>{" "}
                ?
              </p>
            </>
          </CharacterRow>
          <CharacterRow character={volumesCharacters[VOLUMES.VOLUME_1][3]}>
            <>
              <p>
                Bien que peu mis en avant dans le volume 1, le narrateur est{" "}
                <b>ce personnage presque omniscient</b> qui raconte l'
                <Term term={TERMS.HIGHBS_BOK} />.
              </p>
              <p>
                Comme l'
                <Term term={TERMS.ERA} /> <Era era={ERAS.PRESENT} /> nous invite
                à <b>nous rattacher à notre ancrage ici et maintenant</b>, le
                narrateur nous rappelle qu'
                <b>une histoire n'existe que parce qu'elle est lue</b>.
              </p>
              <p>
                <i>
                  Se pourrait-il qu'il devienne un jour acteur de cette histoire
                  ?
                </i>
              </p>
            </>
          </CharacterRow>
          <SectionRow
            id={SECTIONS_ID.PERSONNAGES_ET_ENTITES_DU_VOLUME_2}
            header={{
              level: 2,
              content: "Personnages et entités du volume 2",
            }}
          >
            <>
              <p>
                Le volume 2 n'étant pas encore sorti, son contenu est à même
                d'évoluer.
              </p>
              <CharactersList
                characters={volumesCharacters[VOLUMES.VOLUME_2]}
              />
            </>
          </SectionRow>
          <CharacterRow character={volumesCharacters[VOLUMES.VOLUME_2][0]}>
            <>
              <p>
                <Term term={TERMS.KAMI} outline={true} /> du jardin de{" "}
                <Character character={CHARACTERS.BALTAZUM} pageLink={true} />.
              </p>
            </>
          </CharacterRow>
          <CharacterRow character={volumesCharacters[VOLUMES.VOLUME_2][1]}>
            <>
              <p>
                Un <Term term={TERMS.ZUM} /> de la{" "}
                <Era era={ERAS.PALEO_ERA} outline={true} />.
              </p>
              <p>
                Membre de la <Tribe tribe={TRIBES.PSIK} />, il va contribuer à
                faire émerger le <Term term={TERMS.HOL_ONG} /> et{" "}
                <Place place={PLACES.GRAND_ARBRE} pageLink={true} />.
              </p>
            </>
          </CharacterRow>
          <CharacterRow character={volumesCharacters[VOLUMES.VOLUME_2][2]}>
            <>
              <p>
                <Term term={TERMS.KAMI} /> de la{" "}
                <Tribe tribe={TRIBES.PSIK} outline={true} />.
              </p>
            </>
          </CharacterRow>
          <CharacterRow character={volumesCharacters[VOLUMES.VOLUME_2][3]}>
            <>
              <p>
                Candidat à l'exil pour aider la vie à coloniser des terres
                inertes ou inexplorées, générées par l'{" "}
                <Term term={TERMS.EXPANS} />.
              </p>
              <p>
                Membre de la <Tribe tribe={TRIBES.KOLOS} /> à l'{" "}
                <Era era={ERAS.EXPANS_ERA} />, avec ses compagnons ils fondent
                un nouvel établissement ailleurs.
              </p>
              <p>
                De la part la succession ecologique des{" "}
                <Term term={TERMS.TRIBU} plural={true} pluralSign={"s"} />
              </p>
            </>
          </CharacterRow>
          <CharacterRow character={volumesCharacters[VOLUMES.VOLUME_2][4]}>
            <>
              <p>Meneuse du nuage de l'ombre.</p>
              <p>
                Epaulée par{" "}
                <Character character={CHARACTERS.NUK_NOK} pageLink={true} />,
                elle assiège la <Place place={PLACES.CITE_AUBE} />.
              </p>
              <p>
                Elle espère ainsi rendre à l'univers la vie qu'elle considère
                sequestrée par les <Term term={TERMS.ZUM} plural={true} /> de la
                fin des temps.
              </p>
            </>
          </CharacterRow>
          <CharacterRow character={volumesCharacters[VOLUMES.VOLUME_2][5]}>
            <>
              <p>
                <Term term={TERMS.KAMI} /> de l'entropie, force opposée au{" "}
                <Term term={TERMS.GRAV} />.
              </p>
            </>
          </CharacterRow>
          <SectionRow
            header={{
              level: 2,
              content: "Autres pages de l'univers",
            }}
            className="bg-light"
          >
            <>
              <UniversePagesCTA current={page} buttonsColor={COLORS.PURPLE} />
            </>
          </SectionRow>
        </div>
      </>
    </Layout>
  )
}
