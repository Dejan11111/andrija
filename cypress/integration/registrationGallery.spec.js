describe("Registration test", () => {
    it('Visit gallery page', () => {
        cy.visit('/')
    })

        it("Registration click", () => {
            cy.get('a[href="/register"]').click()
        })

        it("Registration Faild", () => {
         
            cy.get("#last-name").clear()
            cy.get("#last-name").type('Mejac')

            cy.get("#email").clear().type('mejac91@hotmail.com')
            cy.get("#password").type('detelinara1991')
            cy.get("#password-confirmation").type('detelinara1991')
            cy.get('input[type="checkbox"]').check()
            cy.get('button[type="submit"]').click()
        })

        it("Registration", () => {
            cy.get('input[id="first-name"]').type('Dejan')
            
            cy.get("#last-name").clear()
            cy.get("#last-name").type('Mejac')

            cy.get("#email").type('mejac91@hotmail.com')
            cy.get("#password").type('detelinara1991')
            cy.get("#password-confirmation").type('detelinara1991')
            cy.get('input[type="checkbox"]').check()
            cy.get('button[type="submit"]').click()
        })

    })
    
