import React from "react"
import { ReactElement } from "react"
import ResponsiveNavbar from "./ResponsiveNavbar"

export function Layout({
  pageId,
  children,
}: {
  pageId?: string
  children: ReactElement
}) {
  return (
    <div id="layout">
      <ResponsiveNavbar pageId={pageId} />
      {children}
      <footer className="py-2 text-center">
        HIGHBS-BOK 2021 - Livret et site par Romaric Ruga (aka.{" "}
        <a href="https://imrok.fr">IMROK</a>
        <i>, l'artiste</i>) (aka. <a href="https://rimarok.com">RIMAROK</a>
        <i>, le développeur</i>).
      </footer>
      <script src="/bootstrap.min.js"></script>
    </div>
  )
}
