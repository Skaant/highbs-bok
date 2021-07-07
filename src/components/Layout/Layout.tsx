import React from "react"
import { ReactElement } from "react"
import { Footer } from "./Footer"
import ResponsiveNavbar from "./ResponsiveNavbar"

export function Layout({
  pageId,
  children,
}: {
  pageId?: string
  children: ReactElement
}) {
  return (
    <>
      <div id="layout">
        <ResponsiveNavbar pageId={pageId} />
        {children}
        <Footer />
      </div>
    </>
  )
}
