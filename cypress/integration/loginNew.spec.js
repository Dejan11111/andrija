import {authLogin} from '../page_objects/loginObjects.js'

describe("Login test", () => {  //describe blok sadrzi vise testova   

//    cy.intercept('POST','https://gallery-api.vivifyideas.com/api/auth/login', (req) => {       
//    }).as('succefullLogins')
//    cy.visit('/login')

   it("Login using POM",() =>{
    cy.intercept('POST','https://gallery-api.vivifyideas.com/api/auth/login', (req) => {       
    }).as('succesfullLogin')
    cy.visit('/login')
    authLogin.login("mejac91@hotmail.com","detelinara1991")
    cy.get('button').click()
    cy.wait('@succesfullLogin').then((interception)=> {
        expect(interception.response.statusCode).to.equal(200)
    })
})   

it('visit gallery', () => {
   cy.visit('/')
})

})