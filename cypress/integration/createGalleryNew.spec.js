import {createGallery} from '../page_objects/createGalleryObjects.js'
import {authLogin} from '../page_objects/loginObjects.js'
const data = require("../fixtures/data.json")

describe("Login test", () => {
    it ('Visit gallery page', () => {
        cy.visit('https://gallery-app.vivifyideas.com/')
        cy.get("a[href='/login']").click()
    })
    // it("login click", () => {
    //     cy.get("a[href='/login']").click()
    //     //cy.get(data.login.submit).click()
    // })

    it("Login using POM",() =>{
        authLogin.login("mejac91@hotmail.com","detelinara1991")
       
    })
    // it("Create gallery using POM",() =>{
    //     createGallery.create(data.login.firstName,data.login.lastName,data.createGalery.url)
        
    // })


    let galleryId = ''
    it("CreateGallery using POM",() =>{
        cy.intercept('POST','https://gallery-api.vivifyideas.com/api/galleries', (req) => {       
        }).as('succesfullCreate')
         cy.get('a[href="/create"]').click()
         createGallery.create(data.login.firstName,data.login.lastName,data.createGalery.url)     
        
        cy.wait('@succesfullCreate').then((interception)=> {
            expect(interception.response.statusCode).to.equal(201)
            galleryId = interception.response.body.id
        })

    })  
    
    it('Delete gallery', () => {
        cy.intercept('DELETE', `https://gallery-api.vivifyideas.com/api/galleries/${galleryId}`, (req) => {
        }).as('succesfullDelete')
        cy.get("a[href='/my-galleries']").click()
        cy.get(`a[href="/galleries/${galleryId}"]`).click()
        cy.contains('Delete Gallery').click()
        cy.wait('@succesfullDelete').then((interception) => {
            expect(interception.response.statusCode).to.equal(200)
        })
})
})
