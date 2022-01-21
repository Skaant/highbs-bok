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
            }px-5 py-4 rounded mt-5 shadow`}
          >
            <a
              href={link}
              className={`${
                textColor ? `text-${textColor} ` : "text-dark"
              } text-decoration-none`}
            >
              <h3
                className={`my-5 ${accentColor ? `text-${accentColor}` : ""}`}
              >
                {title}
              </h3>
              <ul>
                {content.map((item, index) => (
                  <li key={index}>
                    {typeof item === "string" ? item : item({})}
                  </li>
                ))}
              </ul>
              {details &&
                details.map((item, index) => (
                  <p key={index} className={index ? "mt-3" : "mt-5"}>
                    <i>{item}</i>
                  </p>
                ))}
              <ButtonsMenu
                className="mt-5"
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
