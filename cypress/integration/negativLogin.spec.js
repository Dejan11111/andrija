
describe("Login test", () => {
    it ('Visit gallery page', () => {
        cy.visit('/')
        
       
    })
    it("login click", () => {
        cy.get("a[href='/login']").click()
    })

    it("Login with incorrect email", () => {
        cy.get('#email').type('mejac91hotmail.com')       
        cy.get('#password').type('detelinara1991')      
        cy.get('button[type="submit"]').click()
        cy.get('#email').clear()
        cy.get('#password').clear()
    })
    

    it("Login with incorrect email", () => {
        cy.get('#email').type('mejac91@hotmail.')
        cy.get('#password').type('detelinara1991')
        cy.get('button[type="submit"]').click()
        cy.get('#email').clear()
        cy.get('#password').clear()
    })

    it("Login with incorrect email", () => {
        cy.get('#email').type('blabla')
        cy.get('#password').type('detelinara1991')
        cy.get('button[type="submit"]').click()
        cy.get('#email').clear()
        cy.get('#password').clear()
    })

    it("Login without email", () => {
        
        cy.get('#password').type('detelinara1991')
        cy.get('button[type="submit"]').click()
        cy.get('#password').clear()
        
    })

    it("Login with incorrect password, 8 characters but no numbers", () => {
        cy.get('#email').type('mejac91@hotmail.com')       
        cy.get('#password').type('detelinara')      
        cy.get('button[type="submit"]').click()
        cy.get('#email').clear()
        cy.get('#password').clear()
    })

    it("Login with incorrect password less than 8 characters ", () => {
        cy.get('#email').type('mejac91@hotmail.com')       
        cy.get('#password').type('trasssd')      
        cy.get('button[type="submit"]').click()
        cy.get('#email').clear()
        cy.get('#password').clear()
    })

    it("Login with incorrect password", () => {
        cy.get('#email').type('mejac91@hotmail.com')       
        cy.get('#password').type('12344')      
        cy.get('button[type="submit"]').click()
        cy.get('#email').clear()
        cy.get('#password').clear()
    })

    it("Login without password", () => {
        cy.get('#email').type('mejac91@hotmail.com')                   
        cy.get('button[type="submit"]').click()
        cy.get('#email').clear()
        
    })



})