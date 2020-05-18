import React from "react"
import BibliothecaireMenu from "../bibliothecaireMenu/BibliothecaireMenu"

function AdminLayout({ children }) {
  return (
    <>
      <BibliothecaireMenu />
      {children}
    </>
  )
}
export default AdminLayout
