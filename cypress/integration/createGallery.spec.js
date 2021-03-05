//const locators = require("../fixtures/locators.json")
import {createGallery} from '../page_objects/createGalleryObjects.js'
import {authLogin} from '../page_objects/loginObjects.js'


const data = require("../fixtures/data.json")

describe("Login test", () => {
    it ('Visit gallery page', () => {
        cy.visit('https://gallery-app.vivifyideas.com/')
       
    })
    it("login click", () => {
        //cy.get("a[href='/login']").click()
        cy.get(data.login.submit).click()
    })

    it("Login using POM",() =>{
        authLogin.login("mejac91@hotmail.com","detelinara1991")
    })

    it("Create gallery click", () => {       
        cy.get(data.createGalery.createButton).click()
    })

    it("Create gallery using POM",() =>{
        createGallery.create(data.login.firstName,data.login.lastName,data.createGalery.url)
        
    })

    //it("Login with valid email and pass", () => {
     //   cy.get('#email').type('mejac91@hotmail.com')
      //  cy.get('#password').type('detelinara1991')
      //  cy.get("button[type='submit']").click()
//    })
//it("Logout button", () => {
//    cy.get('.ml-auto > :nth-child(3) > .nav-link').click()
//})


})