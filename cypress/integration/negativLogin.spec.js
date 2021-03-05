import {authLogin} from '../page_objects/loginObjects.js'

const data = require("../fixtures/data.json")

describe("Login test", () => {
    it ('Visit gallery page', () => {
        cy.visit('/')
              
    })
    it("login click", () => {
        cy.get(data.login.loginButton).click()
    })

     it("Login using POM,incorrect email missing A",() =>{
         authLogin.login(data.login.emailWithoutA,data.login.password,data.login.submit)
        cy.get('#email').clear()
        cy.get('#password').clear()
     })

    
    it("Login using POM,email without COM",() =>{
        authLogin.login(data.login.emailWithoutCom,data.login.password,data.login.submit)
       cy.get('#email').clear()
       cy.get('#password').clear()
    })


    it("Login with incorrect email", () => {
        authLogin.login(data.login.emailIncorect,data.login.password,data.login.submit)
         cy.get('#email').clear()
         cy.get('#password').clear()
    })

    it("Login without email(empty string)", () => {
        authLogin.login(" ",data.login.password,data.login.submit)
         cy.get('#email').clear()
         cy.get('#password').clear()
        
     })

     it("Login with incorrect password, 8 characters but no numbers", () => {
        authLogin.login(data.login.email,data.login.passwordMissNumber,data.login.submit)
         cy.get('#email').clear()
         cy.get('#password').clear()
     })

     it("Login with incorrect password less than 8 characters ", () => {
         authLogin.login(data.login.email,data.login.passwordToShort,data.login.submit)
         cy.get('#email').clear()
         cy.get('#password').clear()
     })

     

    it("Login without password(empty string)", () => {
        authLogin.login(data.login.email," ",data.login.submit)
                
    })



 })