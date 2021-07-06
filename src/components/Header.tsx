import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Helmet } from "react-helmet"

export function Header({
  title,
  metas,
}: {
  title: string
  metas?: { [key: string]: any }[]
}) {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )
  return (
    <Helmet>
      <meta charSet="utf-8" />
      {metas?.map((meta, index) => (
        <meta key={index} {...meta} />
      ))}
      <title>
        {title} | {data.site.siteMetadata.title}
      </title>
      <link
        rel="icon"
        href="/highbs-bok.svg"
        sizes="any"
        type="image/svg+xml"
      />
      <script src="/script.js" defer={true}></script>
    </Helmet>
  )
}
