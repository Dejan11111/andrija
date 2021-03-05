import {register} from "../page_objects/registerObjects.js"
const data = require("../fixtures/data.json")
describe("Registration test", () => {
    it('Visit gallery page', () => {
        cy.visit('/')
    })

        it("Registration click", () => {
            //cy.get('a[href="/register"]').click()
            cy.get(data.register.registrationClick).click()

        })

        it("Registracija using POM",() =>{
            register.registration("first-name","last-name","email","password","password-confirmation","acceptTerms")
          //  cy.get(register.registration.passwordMissmatch).should('contain',"error messages")

        })


        // it("Registration Faild", () => {
         
            
        //     cy.get("#last-name").type('Mejac')
        //     cy.get("#email").type('mejac91@hotmail.com')
        //     cy.get("#password").type('detelinara1991')
        //     cy.get("#password-confirmation").type('detelinara1991')
        //     cy.get('input[type="checkbox"]').check()
        //     cy.get('button[type="submit"]').click()
        //     cy.get("#last-name").clear()
        //     cy.get("#email").clear()
        //     cy.get("#password").clear()
        //     cy.get("#password-confirmation").clear()
        // })

        // it("Registration", () => {
        //     cy.get('input[id="first-name"]').type('Dejan')
            
        //     cy.get("#last-name").clear()
        //     cy.get("#last-name").type('Mejac')

        //     cy.get("#email").type('mejac91@hotmail.com')
        //     cy.get("#password").type('detelinara1991')
        //     cy.get("#password-confirmation").type('detelinara1991')
        //     cy.get('input[type="checkbox"]').check()
        //     cy.get('button[type="submit"]').click()
        // })

    })
    
