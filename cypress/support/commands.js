Cypress.Commands.add('loginCommand',() => {
    cy.request({
        method:'POST',
        url: 'https://gallery-api.vivifyideas.com/api/auth/login',
        body: {

            email: Cypress.env("user_email"),
            password: Cypress.env("user_password"),
        }
    })
    .its('body')
    .then((identity) => {
        window.localStorage.setItem('token',identity.access_token);
    })
});