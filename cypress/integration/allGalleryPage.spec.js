

describe("Login test", () => {
    it ('Visit gallery page', () => {
        cy.visit('https://gallery-app.vivifyideas.com/')

    })

    it("Search field", () => {
        cy.get('.form-control').click()
    })
})    