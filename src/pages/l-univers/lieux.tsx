import React from "react"
import { CHARACTERS } from "../../../data/characters"
import { PAGES, PAGES_DATA } from "../../../data/pages"
import { PLACES, PLACES_DATA } from "../../../data/places"
import { TERMS } from "../../../data/terms"
import { TRIBES } from "../../../data/tribes"
import { VOLUMES } from "../../../data/volumes"
import Character from "../../components/Character"
import { Header } from "../../components/Header"
import { Layout } from "../../components/Layout/Layout"
import Place from "../../components/Place"
import { TableOfContent } from "../../components/TableOfContent"
import Term from "../../components/Term"
import Tribe from "../../components/Tribe"
import PlaceRow from "../../components/_pages/places/PlaceRow"
import PlacesList from "../../components/_pages/places/PlacesList"
import { SectionRow } from "../../components/_rows/SectionRow"

export enum SECTIONS_ID {
  LIEUX_DU_VOLUME_1 = "lieux-du-volume-1",
  LIEUX_DU_VOLUME_2 = "lieux-du-volume-2",
}

const sections: { [key in SECTIONS_ID]: string } = {
  [SECTIONS_ID.LIEUX_DU_VOLUME_1]: "Lieux du volume 1",
  [SECTIONS_ID.LIEUX_DU_VOLUME_2]: "Lieux du volume 2",
}

const page = PAGES.L_UNIVERS_LIEUX
const { title } = PAGES_DATA[page]

export default function Lieux() {
  const volumesPlaces = Object.values(PLACES).reduce(
    (acc, character) => {
      acc[PLACES_DATA[character].volume].push(character)
      return acc
    },
    {
      [VOLUMES.VOLUME_1]: [] as PLACES[],
      [VOLUMES.VOLUME_2]: [] as PLACES[],
    }
  )
  return (
    <Layout pageId={page}>
      <>
        <Header title={title} />
        <div className="container-fluid px-0">
          <SectionRow
            header={{
              level: 1,
              content: title,
            }}
            className="pb-4 bg-none"
          >
            <>
              <TableOfContent
                sections={sections}
                unstyled={false}
                className="mt-5"
              />
            </>
          </SectionRow>
          <SectionRow
            id={SECTIONS_ID.LIEUX_DU_VOLUME_1}
            header={{
              level: 2,
              content: sections[SECTIONS_ID.LIEUX_DU_VOLUME_1],
            }}
            className="pt-5"
          >
            <>
              <PlacesList places={volumesPlaces[VOLUMES.VOLUME_1]} />
            </>
          </SectionRow>
          <PlaceRow place={volumesPlaces[VOLUMES.VOLUME_1][0]}>
            <>
              <p>
                Une planète <b>comme il en existe d'innombrables</b> dans
                l'univers.
              </p>
              <p>
                Les <Term term={TERMS.ZUM} plural={true} /> sont apparus là et{" "}
                c'est de là qu'ils se sont lancé pour{" "}
                <b>rencontrer l'autre et l'inerte</b>.
              </p>
            </>
          </PlaceRow>
          <PlaceRow place={volumesPlaces[VOLUMES.VOLUME_1][1]}>
            <>
              <p>La dernière ville de l'univers.</p>
              <p>
                Ses habitants,{" "}
                <b>
                  les <Term term={TERMS.ZUM} plural={true} /> de la fin de
                  temps, luttent pour conserver leur intégrité le temps
                  d'achever l'
                  <Character character={CHARACTERS.ANGK} />.
                </b>
              </p>
              <p>
                Menacés par l'irresistible force <Term term={TERMS.GRAV} /> d'un
                côté et de <Character character={CHARACTERS.JING_JAM_ZUM} /> et
                sa horde des ombres de l'autre,{" "}
                <b>
                  arriveront-ils à fixer l'univers dans le{" "}
                  <Character character={CHARACTERS.TOUT_UN} />
                </b>{" "}
                ?
              </p>
            </>
          </PlaceRow>
          <SectionRow
            id={SECTIONS_ID.LIEUX_DU_VOLUME_2}
            header={{
              level: 2,
              content: sections[SECTIONS_ID.LIEUX_DU_VOLUME_2],
            }}
            className="pt-5"
          >
            <>
              <PlacesList places={volumesPlaces[VOLUMES.VOLUME_2]} />
            </>
          </SectionRow>
          <PlaceRow place={volumesPlaces[VOLUMES.VOLUME_2][0]}>
            <>
              <p>
                Toutes les civilisations ont envoyé leurs données jusqu'au
                centre de l'univers.
              </p>
              <p>
                Là, un amas d'idées extrèmement denses, les joyaux conceptuels,
                se sont amalgamés pour former le cerveau ultime.
              </p>
              <p>
                C'est autour de lui, le Siège de la Pensée, qu'est construite la{" "}
                <Place place={PLACES.CITE_AUBE} />.
              </p>
              <p>
                C'est lui aussi qui doit servir de conscience à l'
                <Character character={CHARACTERS.ANGK} />.
              </p>
            </>
          </PlaceRow>
          <PlaceRow place={volumesPlaces[VOLUMES.VOLUME_2][1]}>
            <>
              <p>
                <b>La vallée et le lac.</b>
              </p>
              <p>
                L'emplacement confortable, non loin de leur point de chute, que
                la <Tribe tribe={TRIBES.KOLOS} /> et{" "}
                <Character character={CHARACTERS.KRAO} /> ont choisi pour{" "}
                <b>fonder leur ville</b>.
              </p>
            </>
          </PlaceRow>
        </div>
      </>
    </Layout>
  )
}
