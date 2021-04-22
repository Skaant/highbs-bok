import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Helmet } from "react-helmet"

export function Header() {
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
  return <Helmet>
    <meta charSet="utf-8" />
    <title>{data.site.siteMetadata.title}</title>
  </Helmet>
}