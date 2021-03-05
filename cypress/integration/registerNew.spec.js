import {register} from "../page_objects/registerObjects.js"

describe("Login test", () => {  //describe blok sadrzi vise testova   

    //    cy.intercept('POST','https://gallery-api.vivifyideas.com/api/auth/login', (req) => {       
    //    }).as('succefullLogins')
    //    cy.visit('/login')
    
       it("Register using POM",() =>{
        cy.intercept('POST','https://gallery-api.vivifyideas.com/api/auth/register', (req) => {       
        }).as('succesfullRegister')
        cy.visit('/register')
        register.registration("firstname","lastname","email@dddd.com","password11","password11")

        cy.wait('@succesfullRegister').then((interception)=> {
            expect(interception.response.statusCode).to.equal(200)
        })
    })   

    
})