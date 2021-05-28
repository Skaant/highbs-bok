import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Helmet } from "react-helmet"

export function Header({ title }) {
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
      <title>
        {title} | {data.site.siteMetadata.title}
      </title>
      <link
        rel="icon"
        href="/highbs-bok.svg"
        sizes="any"
        type="image/svg+xml"
      />
      <script src="/bootstrap.min.js" defer={true}></script>
    </Helmet>
  )
}
