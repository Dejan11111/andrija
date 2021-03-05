describe("Login test", () => {  //describe blok sadrzi vise testova   

     before(() => {
    cy.request('POST','https://gallery-api.vivifyideas.com/api/auth/login',
    { email:"mejac91@hotmail.com", password:"detelinara1991"}
    )
    .its('body').then((identity) => {
        window.localStorage.setItem('token',identity.access_token);
    })
})   

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