import * as React from "react"
import { colors } from "../../../../data/colors"
import { ButtonsMenu } from "../../../components/ButtonsMenu"

type BuyOptionsProps = {
  options: Array<{
    link: string
    title: string
    content: Array<string | React.FC>
    details?: string[]
    label: string
    bgColor?: colors
    textColor?: colors
    accentColor?: colors
  }>
}

function BuyOptions({ options }: BuyOptionsProps) {
  return (
    <ul className="list-unstyled">
      {options.map(
        ({
          link,
          title,
          content,
          details,
          label,
          bgColor,
          textColor,
          accentColor,
        }) => (
          <li
            className={`${
              bgColor ? `bg-${bgColor} ` : "bg-light "
            }px-4 px-md-5 py-1 py-md-4 rounded mt-5 shadow`}
          >
            <a
              href={link}
              className={`${
                textColor ? `text-${textColor} ` : "text-dark"
              } text-decoration-none`}
            >
              <h3
                className={`mt-5 mb-4 mb-md-5 ${
                  accentColor ? `text-${accentColor}` : ""
                }`}
              >
                {title}
              </h3>
              <ul>
                {content.map((item, index) => (
                  <li key={index} className="fit-small">
                    {typeof item === "string" ? item : item({})}
                  </li>
                ))}
              </ul>
              {details &&
                details.map((item, index) => (
                  <p
                    key={index}
                    className={`fit-small ${
                      index ? "mt-2 mt-md-3" : "mt-4 mt-md-5"
                    }`}
                  >
                    <i>{item}</i>
                  </p>
                ))}
              <ButtonsMenu
                className="mt-4 mt-md-5"
                buttons={[
                  {
                    href: link,
                    label: label,
                    color: accentColor || colors.purple,
                  },
                ]}
              />
            </a>
          </li>
        )
      )}
    </ul>
  )
}

export default BuyOptions
