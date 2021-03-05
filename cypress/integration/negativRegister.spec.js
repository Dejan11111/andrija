import {register} from "../page_objects/registerObjects.js"
const data = require("../fixtures/data.json")
describe("Registration test", () => {
    it('Visit gallery page', () => {
        cy.visit('/')
    })

        it("Registration click", () => {
            cy.get('a[href="/register"]').click()
        })

       it("Registration Faild,first name missing", () => {
           register.registration(
               data.register.firstNameToShort,
               data.register.lastName,
               data.register.email,
                data.register.password,
                data.register.passwordComfirmation,
                data.register.acceptTerms,
                data.register.submit
           )
           cy.get("#last-name").clear()
           cy.get("#email").clear()
           cy.get("#password").clear()
           cy.get("#password-confirmation").clear()
           cy.get(data.register.acceptTerms).click()
            
       })

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
         

        it("Registration Faild,invalid format email", () => {
            register.registration(
                data.register.firstName,
                data.register.lastName,
                data.register.emailWithoutCom,
                data.register.password,
                data.register.passwordComfirmation,
                data.register.acceptTerms,
                data.register.submit
            )
         
            cy.get("#first-name").clear()
            cy.get("#last-name").clear()
            cy.get("#email").clear()
            cy.get("#password").clear()
            cy.get("#password-confirmation").clear()
            
            
            
        })

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

        // it("Registracija faild,email ",() =>{
        //     register.registration(
        //         data.register.firstName,
        //         data.register.lastName,
        //         data.register.email,
        //         data.register.password,
        //         data.register.passwordComfirmationFail,
        //         data.register.submit,
        //         data.register.acceptTerms
        //     )
        //     cy.get(data.register.passwordMissmatch).should('contain',"The password confirmation does not match.")
        // })

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