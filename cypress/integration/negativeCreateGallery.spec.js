import {authLogin} from '../page_objects/loginObjects.js'
import {createGallery} from '../page_objects/createGalleryObjects.js'
describe("Login test", () => {
    it ('Visit gallery page', () => {
        cy.visit('https://gallery-app.vivifyideas.com/')

    })
    it("login click", () => {
        cy.get("a[href='/login']").click()
    })

    it("Login using POM",() =>{
        authLogin.login("mejac91@hotmail.com","detelinara1991")
    })
describe("CreateGallery",() => {
    
    it("Create gallery click", () => {
        cy.get(".mr-auto > :nth-child(3) > .nav-link").click()
    })
      
    it("Create gallery-Empty TITLE",() =>{
        createGallery.create("       ","descriptionJa","https://static.beta.rs/thumbs/rotko-plavo-zuto.585x371.jpg")
        cy.get('#title').clear()
        cy.get("#description").clear()
        cy.get('.input-group > .form-control').clear()
    })

    it("Create gallery-Empty URL",() =>{
        createGallery.create("Titlele","descriptonJa","   ")
        cy.get('#title').clear()
        cy.get("#description").clear()
        cy.get('.input-group > .form-control').clear()
    })

    it("Create gallery-Invalid Format URL",() =>{
        createGallery.create("Titlele","descriptonJa","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5D4AheVG9PcQ0LaBmYdIoDNgYWOtJ7yEtTA&usqp=CAU")
        cy.get('#title').clear()
        cy.get("#description").clear()
        cy.get('.input-group > .form-control').clear()
    })

})
  

})    
