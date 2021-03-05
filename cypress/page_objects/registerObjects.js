class Register{
    get firstName() {
        return cy.get('#first-name')
    }
    get lastName() {
        return cy.get('#last-name')
    }
    get email() {
        return cy.get('#email')
    }
    get password() {
        return cy.get('#password')
    }
       
    get passwordComfirmation() {
        return cy.get('#password-confirmation')
    }
    
    get acceptTerms(){
        return cy.get('.form-check-input')
    }
    get submit() {
        return cy.get('.btn')
    }
    registration(firstName,lastName,email,password,passwordComfirmation){
        this.firstName.type(firstName)
        this.lastName.type(lastName)
        this.email.type(email)
        this.password.type(password)
        this.passwordComfirmation.type(passwordComfirmation)
        this.acceptTerms.check()
        this.submit.click()
    }
}
export const register = new Register ()