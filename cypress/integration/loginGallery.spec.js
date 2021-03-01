

describe("Login test", () => {
    it ('Visit gallery page', () => {
        cy.visit('/')
        cy.wait(5000)
       
    })
    it("login click", () => {
        cy.get("a[href='/login']").click()
    })

    it("Login with valid email and pass", () => {
        cy.get('#email').type('mejac91@hotmail.com')
        cy.get('#password').type('detelinara1991')
        cy.get('button').click()
    })
it("Logout button", () => {
    cy.get('.ml-auto > :nth-child(3) > .nav-link').click()
})


})