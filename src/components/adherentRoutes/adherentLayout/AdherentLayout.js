import React from "react"
import AdherentMenu from "../adherentMenu/AdherentMenu"

function AdherentLayout({ children }) {
  return (
    <>
      <AdherentMenu />
      {children}
    </>
  )
}
export default AdherentLayout
