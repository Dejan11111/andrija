import {register} from "../page_objects/registerObjects"
const data = require("../fixtures/data.json")
describe("Registration test", () => {
    it('Visit gallery page', () => {
        cy.visit('/')
    })

        it("Registration click", () => {
            cy.get('a[href="/register"]').click()
        })

//   //      it("Registration Faild,first name missing", () => {
//   //       
            
//   //          cy.get("#last-name").type('Mejac')
//    //         cy.get("#email").type('mejac91@hotmail.com')
//   //          cy.get("#password").type('detelinara1991')
//   //          cy.get("#password-confirmation").type('detelinara1991')
//   //          cy.get('input[type="checkbox"]').check()
//   //          cy.get('button[type="submit"]').click()
//   //          cy.get("#last-name").clear()
//    //         cy.get("#email").clear()
//   //          cy.get("#password").clear()
//   //          cy.get("#password-confirmation").clear()
            
//    //     })

//    //     it("Registration Faild,last name missing", () => {
         
            
//     //        cy.get("#first-name").type('Dejan')
//   //          cy.get("#email").type('mejac91@hotmail.com')
//    //         cy.get("#password").type('detelinara1991')
//    //         cy.get("#password-confirmation").type('detelinara1991')
//    //         cy.get('input[type="checkbox"]').check()
//    //         cy.get('button[type="submit"]').click()
//    //         cy.get("#first-name").clear()
//     //        cy.get("#email").clear()
//     //        cy.get("#password").clear()
//     //        cy.get("#password-confirmation").clear()
            
//         })

//         it("Register using POM",() =>{
//             register.register("mejac91@hotmail.com","detelinara1991")
//         })

//         it("Registration Faild,invalid format email", () => {
         
//             cy.get("#first-name").type(data.login.firstName())
//             cy.get("#last-name").type(data.login.lastName())
//             cy.get("#email").type(data.login.emailWithout())
//             cy.get("#password").type(data.login.password())
//             cy.get("#password-confirmation").type(data.login.passwordComfirmation())
//             cy.get('input[type="checkbox"]').check()
//             cy.get('button[type="submit"]').click()
//             cy.get("#first-name").clear()
//             cy.get("#last-name").clear()
//             cy.get("#email").clear()
//             cy.get("#password").clear()
//             cy.get("#password-confirmation").clear()
            
            
            
//         })

//         it("Registration Faild,invalid format email", () => {
         
//             cy.get("#first-name").type('Dejan')
//             cy.get("#last-name").type('Mejac')
//             cy.get("#email").type('mejac91@hotmail.')
//             cy.get("#password").type('detelinara1991')
//             cy.get("#password-confirmation").type('detelinara1991')
//             cy.get('input[type="checkbox"]').check()
//             cy.get('button[type="submit"]').click()
//             cy.get("#first-name").clear()
//             cy.get("#last-name").clear()
//             cy.get("#email").clear()
//             cy.get("#password").clear()
//             cy.get("#password-confirmation").clear()
            
            
            
//         })

//         it("Registration Faild,invalid format password", () => {
         
//             cy.get("#first-name").type('Dejan')
//             cy.get("#last-name").type('Mejac')
//             cy.get("#email").type('mejac91@hotmail.com')
//             cy.get("#password").type('ttttt')
//             cy.get("#password-confirmation").type('ttttt')
//             cy.get('input[type="checkbox"]').check()
//             cy.get('button[type="submit"]').click()
//             cy.get("#first-name").clear()
//             cy.get("#last-name").clear()
//             cy.get("#email").clear()
//             cy.get("#password").clear()
//             cy.get("#password-confirmation").clear()
            
            
            
//         })

//         it("Registration Faild,password missing", () => {
         
//             cy.get("#first-name").type('Dejan')
//             cy.get("#last-name").type('Mejac')
//             cy.get("#email").type('mejac91@hotmail.com')            
//             cy.get("#password-confirmation").type('detelinara1991')
//             cy.get('input[type="checkbox"]').check()
//             cy.get('button[type="submit"]').click()
//             cy.get("#first-name").clear()
//             cy.get("#last-name").clear()
//             cy.get("#email").clear()           
//             cy.get("#password-confirmation").clear()
            
            
            
//         })

//         it("Registration Faild,invalid confirmed password", () => {
         
//             cy.get("#first-name").type('Dejan')
//             cy.get("#last-name").type('Mejac')
//             cy.get("#email").type('mejac91@hotmail.com')
//             cy.get("#password").type('blablabla')
//             cy.get("#password-confirmation").type('blabla123')
//             cy.get('input[type="checkbox"]').check()
//             cy.get('button[type="submit"]').click()
//             cy.get("#first-name").clear()
//             cy.get("#last-name").clear()
//             cy.get("#email").clear()
//             cy.get("#password").clear()
//             cy.get("#password-confirmation").clear()
            
            
            
//         })

//         it("Registration Faild,missing checkbox ", () => {
         
//             cy.get("#first-name").type('Dejan')
//             cy.get("#last-name").type('Mejac')
//             cy.get("#email").type('mejac91@hotmail.com')
//             cy.get("#password").type('ttttt')
//             cy.get("#password-confirmation").type('ttttt')       
//             cy.get('button[type="submit"]').click()
//             cy.get("#first-name").clear()
//             cy.get("#last-name").clear()
//             cy.get("#email").clear()
//             cy.get("#password").clear()
//             cy.get("#password-confirmation").clear()
            
            
            
//         })

        // it("Registration Faild,missing confirmed password", () => {
         
        //     cy.get(register.registration.firstName).type('Dejan')
        //     cy.get("#last-name").type('Mejac')
        //     cy.get("#email").type('mejac91@hotmail.com')
        //     cy.get("#password").type('blablabla')
        //     cy.get("#password-confirmation").type('bicebice1')           
        //     cy.get('input[type="checkbox"]').check()
        //     cy.get('button[type="submit"]').click()
        //     cy.get("#first-name").clear()
        //     cy.get("#last-name").clear()
        //     cy.get("#email").clear()
        //     cy.get("#password").clear()
            
                      
        // })

        it("Registracija using POM",() =>{
            register.registration("first-name","last-name","email","password","password-confirmation")
          //  cy.get(register.registration.passwordMissmatch).should('contain',"error messages")
        })

        // it("Registration Faild,blank space on first name", () => {
         
            
        //     cy.get("#first-name").type('     ')
        //     cy.get("#last-name").type('Mejac')
        //     cy.get("#email").type('mejac91@hotmail.com')
        //     cy.get("#password").type('detelinara1991')
        //     cy.get("#password-confirmation").type('detelinara1991')
        //     cy.get('input[type="checkbox"]').check()
        //     cy.get('button[type="submit"]').click()
        //     cy.get("#first-name").clear()
        //     cy.get("#last-name").clear()
        //     cy.get("#email").clear()
        //     cy.get("#password").clear()
        //     cy.get("#password-confirmation").clear()
            
        // })

       

    })