import {authLogin} from '../page_objects/loginObjects.js'

describe("Login test", () => {
    it ('Visit gallery page', () => {
        cy.visit('/')
        cy.wait(5000)
       
    })
    it("login click", () => {
        cy.get("a[href='/login']").click()
    })

    it("Login using POM",() =>{
        authLogin.login("mejac91@hotmail.com","detelinara1991")
        cy.get('button').click()
        //   cy.url().should('eq','http://localhost:8000/user/1/edit')       //negative test
           cy.url().should('eq','https://gallery-app.vivifyideas.com/')    //positive test
   
           cy.get('button').should('be.visible')  //VISIBLE
        //   cy.get('button').should('not.be.visible')    //NOT VISIBLE    
       })
    })

    it("Login with valid email and pass", () => {
        cy.get('#email').type('mejac91@hotmail.com')
        cy.get('#password').type('detelinara1991')
        cy.get('button').click()
     //   cy.url().should('eq','http://localhost:8000/user/1/edit')       //negative test
        cy.url().should('eq','https://gallery-app.vivifyideas.com/')    //positive test

        cy.get('button').should('be.visible')  //VISIBLE
     //   cy.get('button').should('not.be.visible')    //NOT VISIBLE    
    })




//it("Logout button", () => {
//    cy.get('.ml-auto > :nth-child(3) > .nav-link').click()
//})



