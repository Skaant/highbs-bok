import React, { ReactElement } from "react"
import { COLORS } from "../../../../data/colors"
import { TERMS } from "../../../../data/terms"
import Color from "../../Color"
import Term from "../../Term"

function ColorLink({ color }: { color: COLORS }) {
  return <Color color={color} pageLink={true} />
}

const colorDescriptions: { [color in COLORS]?: ReactElement } = {
  GOLD: (
    <>
      <p>
        Couleur de l'<b>idéal</b>, du <b>parfait</b>, du sacré, de l'impalpable
        mystère.
      </p>
      <p>
        Aussi la couleur du <b>soleil</b>.
      </p>
    </>
  ),
  LIGHT_GOLD: (
    <>
      <p>
        <i>
          Variation de <ColorLink color={COLORS.GOLD} />
        </i>
        .
      </p>
      <p>
        Soit une <b>alternative</b> à <ColorLink color={COLORS.GOLD} />, pour
        contraster, soit une puissance diminuée, moins forte.
      </p>
    </>
  ),
  BLUE: (
    <>
      <p>
        Couleur de l'<b>eau</b> et de l'<b>écoulement serein</b>.
      </p>
    </>
  ),
  LIGHT_BLUE: (
    <>
      <p>
        <i>
          Variation de <ColorLink color={COLORS.BLUE} />.
        </i>
      </p>
      <p>
        Un <b>courant plus doux</b>, de l'<b>humidité</b> plutôt que de l'eau.
      </p>
      <p>
        Un <b>ruisseau</b>, un <b>torrent</b> plutôt qu'une rivière, un fleuve.
      </p>
    </>
  ),
  DEEP: (
    <>
      <p>
        La couleur de l'<b>espace</b>, du <b>vide</b>, du{" "}
        <b>primordial masqué, destructeur au besoin</b>.
      </p>
      <p>
        Le fond de <ColorLink color={COLORS.BLUE} />.
      </p>
      <p>
        Là où l'<b>énergie est rare</b> ou s'<b>écoule mal</b> ou{" "}
        <b>lentement</b>.
      </p>
    </>
  ),
  LIGHT_DEEP: (
    <>
      <p>
        <i>
          Variation de <ColorLink color={COLORS.DEEP} />.
        </i>
      </p>
      <p>
        <b>Latence</b> (proximité) <b>du vide</b>, profondeur{" "}
        <b>moins agressive</b>.
      </p>
    </>
  ),
  JEWEL: (
    <>
      <p>
        <b>Pureté sous-absolue</b>, presque parfaite, allant vers.
      </p>
      <p>
        <b>Processus</b> de <b>purification</b>.
      </p>
      <p>
        <b>Stabilité</b>, solidité du diamant (voir <Term term={TERMS.ADAMAI} />
        ).
      </p>
      <p>
        Dans un <b>état de contentement constant</b>,{" "}
        <b>volonté inébranlable</b>, béatitude.
      </p>
    </>
  ),
  SKIN: (
    <>
      <p>
        <b>Animaux</b>, formes de <b>vie</b>{" "}
        <i>
          mobile (par opposition à <ColorLink color={COLORS.GREEN} />, les
          arbres).
        </i>
      </p>
      <p>
        La <b>force d'amour</b>.
      </p>
    </>
  ),
  DARK_SKIN: (
    <>
      <p>
        <i>
          Variation de <ColorLink color={COLORS.SKIN} />.
        </i>
      </p>
      <p>
        <b>Contraste</b> des membres sur le corps.
      </p>
    </>
  ),
  GREEN: (
    <>
      <p>
        Les <b>arbres</b>, la <b>végétation</b>.
      </p>
      <p>
        <b>Abondance de vie</b>, strates multiples, foisonnement.
      </p>
      <p>
        Peut être{" "}
        <b>
          <i>envahissant</i>
        </b>
        .
      </p>
    </>
  ),
  PURPLE: (
    <>
      <p>
        L'<b>esprit</b>, le <b>psychédélique</b>, le rêve à sens, la créativité.
      </p>
      <p>
        Le <ColorLink color={COLORS.BLUE} /> / <ColorLink color={COLORS.DEEP} />{" "}
        <b>de l'âme</b> (conscience/esprit).
      </p>
      <p>
        <b>Imagination débridée</b>, <b>complétude</b> par pas-de-côté, confort
        et vertiges.
      </p>
    </>
  ),
  LIGHT_PURPLE: (
    <>
      <p>
        <i>
          Variation <b>mutée</b> de <ColorLink color={COLORS.PURPLE} />.
        </i>
      </p>
      <p>
        <b>Nectar</b>, <b>elixir</b>.
      </p>
      <p>
        <b>Psychdélisme radical</b> (à la racine).
      </p>
    </>
  ),
  TURQUOIZE: (
    <>
      <p>
        <b>Forme primordiale des idées</b>, des concepts.
      </p>
      <p>
        <b>Légéreté</b>, <b>impalpable</b> presque (vraiment impalpable en{" "}
        <ColorLink color={COLORS.GOLD} />
        ).
      </p>
    </>
  ),
  DARK_TURQUOIZE: (
    <>
      <p>
        <i>
          Variation de <ColorLink color={COLORS.TURQUOIZE} />.
        </i>
      </p>
      <p>
        Idée <b>ancrée dans la matière.</b>
      </p>
    </>
  ),
  ORANGE: (
    <>
      <p>
        <b>Puissance/énergie vive</b>.
      </p>
    </>
  ),
}

export default colorDescriptions
