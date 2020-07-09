import React from "react"
import BibliothecaireMenu from "../bibliothecaireMenu/BibliothecaireMenu"

function BibliothecaireLayout({ children }) {
  return (
    <>
      <BibliothecaireMenu />
      {children}
    </>
  )
}
export default BibliothecaireLayout
