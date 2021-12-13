import React from "react"
import { ReactElement } from "react"
import { Footer } from "./Footer"
import ResponsiveNavbar from "./ResponsiveNavbar"

export function Layout({
  pageId,
  children,
  navbarAlternativeColor,
}: {
  pageId?: string
  children: ReactElement
  navbarAlternativeColor?: boolean
}) {
  return (
    <>
      <div id="layout">
        <ResponsiveNavbar
          pageId={pageId}
          alternativeColor={navbarAlternativeColor}
        />
        {children}
        <Footer />
      </div>
    </>
  )
}
