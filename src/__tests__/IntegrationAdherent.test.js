import React from "react"
// import ReactDOM from "react-dom"
// import App from "./App"
import ListeActive from "../components/gestionAdherents/listeAdherents/listeActive/listeactive"
import ListeBanni from "../components/gestionAdherents/listeAdherents/listeBanni/listebanni"
import { render,fireEvent, cleanup} from "@testing-library/react"
import user from "@testing-library/user-event"
import { Router } from "react-router-dom"
import { createMemoryHistory } from "history"


import {
    fetchadherentsActive as mockfetchAdherentsActive,
    fetchadherentsBanni as  mockfetchAdherentsBanni
  } from "../services/adherents.service"
jest.mock("../services/adherents.service" )
 //jest.spyOn(livres, 'fetchbooksActive')

 

describe("test intergration adherent", () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })


  test("test the integration of active adherents liste and adherent ",async () => {
    const mockdeleteMember = jest.fn()
    localStorage.setItem("user","admin")
    const mockMembersWithOneMember = [
        {id :"3",
        cin:"07480808",
        nom:"Rania",
        prenom:"Arbi",
        dateNaissance:"1996-08-05", 
        email:"raniabelarbi@gmail.com",
        etat :"active"
        },
    ]
    const history = createMemoryHistory({ initialEntries: ["/"] })
    const {getByTestId, getByText} = render(
      <Router history={history}> <ListeActive activeadherents={mockMembersWithOneMember} deleteMember={mockdeleteMember} /></Router>
    )
    mockfetchAdherentsActive.mockResolvedValue(mockMembersWithOneMember)
    const promise = Promise.resolve({
      success: true,
    })
    
    const  DeleteAdhButton = getByTestId("deleteAdh")
    user.click(DeleteAdhButton)
    expect(mockdeleteMember).toHaveBeenCalled()
    
    })
    test("test the integration of active adherents and adherent with button bannir  ",async () => {
        const mockBannirMember = jest.fn()
        localStorage.setItem("user","admin")
        const mockMembersWithOneMember = [
            {id :"3",
            cin:"07480808",
            nom:"Rania",
            prenom:"Arbi",
            dateNaissance:"1996-08-05", 
            email:"raniabelarbi@gmail.com",
            etat :"active"
            },
        ]
        const history = createMemoryHistory({ initialEntries: ["/"] })
        const {getByTestId, getByText} = render(
          <Router history={history}> <ListeActive activeadherents={mockMembersWithOneMember} BannirMember={mockBannirMember} /></Router>
        )
        mockfetchAdherentsActive.mockResolvedValue(mockMembersWithOneMember)
        const promise = Promise.resolve({
          success: true,
        })
    
        const  BannirAdhButton = getByTestId("BannirAdh")
        user.click(BannirAdhButton)
        expect(mockBannirMember).toHaveBeenCalled()
        
        })
        test("test the integration of bannis adherents and adherent with button Activer  ",async () => {
            const mockActiverMember = jest.fn()
            localStorage.setItem("user","admin")
            const mockMembersWithOneMember = [
                {id :"5",
                cin:"07480702",
                nom:"Marwa",
                prenom:"Chrigui",
                dateNaissance:"1993-06-15", 
                email:"marwachrigui@gmail.com",
                etat :"banni"
                },
            ]
            const history = createMemoryHistory({ initialEntries: ["/"] })
            const {getByTestId, getByText} = render(
              <Router history={history}> <ListeBanni banniAdherents={mockMembersWithOneMember} ActiverMember={mockActiverMember} /></Router>
            )
            mockfetchAdherentsBanni.mockResolvedValue(mockMembersWithOneMember)
            const promise = Promise.resolve({
              success: true,
            })
        
            const  ActiverAdhButton = getByTestId("ActiveAdh")
            user.click(ActiverAdhButton)
            expect(mockActiverMember).toHaveBeenCalled()
            
            })
        

test("test the integration active book list and update form",async () => {
const mockupdateAdherent =jest.fn()
localStorage.setItem("user","admin")
const mockMembersWithOneMember = [
    {id :"3",
    cin:"07480808",
    nom:"Rania",
    prenom:"Arbi",
    dateNaissance:"1996-08-05", 
    email:"raniabelarbi@gmail.com",
    etat :"active"
    },
]
const history = createMemoryHistory({ initialEntries: ["/"] })
const {getByTestId, getByText} = render(
  <Router history={history}>  <ListeActive activeadherents={mockMembersWithOneMember}  ModifierMember={mockupdateAdherent} /></Router>
)
mockfetchAdherentsActive.mockResolvedValue(mockMembersWithOneMember)
const promise = Promise.resolve({
  success: true,
})

expect(getByTestId("UpdateAdh")).toBeTruthy()
const ModifierAdherentVisibleButton = getByTestId("UpdateAdh");
fireEvent.click(ModifierAdherentVisibleButton);

const  ModifierAdherentButton = getByTestId("ModifierAdherent")
 fireEvent.click(ModifierAdherentButton);
expect(mockupdateAdherent).toHaveBeenCalled()


})


afterEach(cleanup);

 })
