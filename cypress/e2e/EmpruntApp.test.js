describe("My First Test", () => {
    it("Does not do much!", () => {
      expect(true).to.equal(true)
      // expect(true).to.equal(false)
    })
     it("successfully loads", () => {
     // cy.visit('http://localhost:3000')
      cy.visit("/")
    })
  //houni just 7abit njareb kifeh ya3ml conexxion tet3ada mrigla lel page d'accueil
  it("successfully display the login page ", () => {
  //nemchiw lel page login
        cy.visit("/login")
  //l'url lezmha te5ou login
      cy.url().should("include", "/login")
        cy.wait(3000)
        // ytapi username w password 
      cy.get('#normal_login_username').type("intissarchrigui@gmail.com")
      cy.get('#normal_login_password').type("07480700")
      cy.wait(3000)
      //ytapi bouton submit(log in ) ynajem ya3mlha b 3 méthodes soit get btnloula, soit bel contains soit bel findByTestId
    //  cy.get('.ant-btn > span').click()
    //  cy.contains(/log in/i).click()

    cy.findByTestId("submit").click()
      cy.url().should("include", "/memberPage/home")
      
    
     })
// houni chna3mlou scénario de réussite ta3 emprunt depuis la page connexion
     it.only("successfully display the login page and do emprunt", () => {
  //nemchiw lel page login
      cy.visit("/login")
      //l'url lezmha te5ou login
      cy.url().should("include", "/login")
      cy.wait(3000)
       // ytapi username w password 
    cy.get('#normal_login_username').type("intissarchrigui@gmail.com")
    cy.get('#normal_login_password').type("07480700")
    cy.wait(3000)
     //ytapi bouton submit(log in ) ynajem ya3mlha b 3 méthodes soit get btnloula, soit bel contains soit bel findByTestId
    cy.findByTestId("submit").click()
    cy.wait(3000)
       cy.visit("/memberPage/listelivres")
        //l'url lezmha te5ou memberPage/listelivres
     cy.url().should("include", "/memberPage/listelivres")
       cy.wait(3000)
       //cy.get(".emprunt:first-child .libelle" ) .should("have.value", "Jamais sans ma fille")
  /*      cy.get('libelle')
  .find('div')
  // .should(cb) callback function will be retried
  .should(($div) => {
    expect($div).to.have.text('Jamais sans ma fille')
  }) */
 
      // cy.get("[data-testid=Emprunter]").click()
      // yekliki 3al bouton emprunter w lezmou yet2aked eli hiya raj3et retourner ba3d manzel aleha 
       cy.contains(/Emprunter/i).click()
       cy.get("[data-testid=Retourner]").should("contain", "Retourner")
      /* cy.contains(/Retourner/i).click()
       cy.get("[data-testid=Emprunter]").should("contain", "Emprunter")*/

  // cy.contains(/Emprunter/i).click()
     //  cy.get('.ant-btn > span').click()
     //  cy.findByTestId("submit").click()
    // cy.get('#normal_login_username').type("intissarchrigui@gmail.com")
    // cy.get('#normal_login_password').type("07480700")
   //  cy.wait(3000)
    // cy.get('.ant-btn > span') .should("have.value", "Retourner")
     // cy.findByLabelText(/Emprunter/i).should("have.value", "Retourner")
     // cy.contains(/Emprunter/i).should("have.value", "Retourner")
      //cy.get(".emprunt:first-child .libelle" ) .should("have.value", "Jamais sans ma fille")
    
     // cy.contains.previous(/Emprunter/i).should("have.value", "Jamais sans ma fille")
 //  cy.get(''"aria-label="libelle"').should("have.value", "Jamais sans ma fille")
   //  cy.get('.ant-btn > span').click()
   //  cy.contains(/log in/i).click()
  // cy.findByTestId("submit").click()
 
 
     
   
    })

/*
  
    it.only("should show an error message if there's an error in adding task", () => {
    cy.server()
    cy.route({
      method: "POST",
      url: "https://heroku-boot-todoapp-seif.herokuapp.com/tasks/",
      status: 500,
      response: {},
    })
      cy.visit("/teacher")
    cy.get(":nth-child(2) > a").click() // use selecetor
    cy.url().should("include", "/tasks")
    cy.wait(1000)
  
    cy.findByLabelText(/title/i).clear().type("learn react")
    cy.wait(1000)
    cy.findByLabelText(/duration/i)
      .clear()
      .type("3h")
    cy.wait(1000)
    
    cy.findByTestId("submit").click()
  
    cy.findByText(/an error occurred.* add task/i)
  })
  
  
  })
  
   */
  
  
})
  
  
  