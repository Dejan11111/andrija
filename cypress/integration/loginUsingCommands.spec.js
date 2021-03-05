describe("Login test", () => {  //describe blok sadrzi vise testova   
    before(() => {
        cy.loginCommand()
    })
    // before(() => {
    // cy.loginCommand('mejac91@hotmail.com','detelinara1991')
   
//})   

it('visit gallery', () => {
   cy.visit('/')
})

//  it('filter', () => {
//     cy.get('input[type="text"]').type('new cat')
//     cy.get('button.input-button').click()
//     cy.wait(2000)
// })  
//   it('iterate trough cars', () => {
//     cy.get('h2').each((element) => {
//         expect(element.text()).to.include('new cat')
//     })
// })

})