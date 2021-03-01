class CreateGallery{
    get title() {
        return cy.get('#title')
    }
    get description() {
        return cy.get('#description')
    }
    get images() {
        return cy.get('.input-group > .form-control')
    }
    get submit() {
        return cy.get('form > :nth-child(4)')
    }
    create(title,description,images){
        this.title.type(title)
        this.description.type(description)
        this.images.type(images)
        this.submit.click()
    }
}
export const createGallery = new CreateGallery ()