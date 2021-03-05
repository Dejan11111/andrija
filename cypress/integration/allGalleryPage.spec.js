
const data = require("../fixtures/data.json")
describe("All galleris", () => {
    it ('Visit gallery page', () => {
        cy.visit('https://gallery-app.vivifyideas.com/')

    })

    
    it("Filter", () => {
        
      cy.get('input[type="text"]').type('kuce')
      cy.get('button.input-button').click()
      cy.wait(2000)

    })   

    it('literate trough kuce',() => {
        cy.get('h2').each((element) => {
            expect(element.text()).to.include('kuce')
        })

    })

        //cy.get('.grid > :nth-child(1)').click()
         //.should('contain', 'kuce')
         //.and('have.class','alert alert-danger')
         //.and('have.css','background-color','rgb(248, 215, 218)')
         //.and('be.visible')
    



   

})    

// describe("Login test", () => {  //describe blok sadrzi vise testova    before(() => {
//     cy.visit('https://gallery-app.vivifyideas.com/')
// })    it('filter', () => {
//     cy.get('input[type="text"]').type('new cat')
//     cy.get('button.input-button').click()
//     cy.wait(2000)
// })    it('iterate trough cars', () => {
//     cy.get('h2').each((element) => {
//         expect(element.text()).to.include('new cat')
//     })
// }) })