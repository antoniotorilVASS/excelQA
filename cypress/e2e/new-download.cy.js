const tiendas = ["002", "004"];

describe('empty spec', () => {
    beforeEach(() => {
        cy.log('I run before every test in every spec file!!!!!!')
        cy.visit('http://localhost:8080/login')
        cy.get('input[id="userName"]').clear().type('30094971')
        cy.get('input[id="userPassword"]').clear().type('EyJ2023..')
        cy.get('.login-btn').should('be.visible').click()
    })
    afterEach('conect', () => {
        cy.reload()
    })
    it('conect', () => {
        tiendas.forEach(myFunction);
        function myFunction(index) {
            cy.get('.select').select(index)
            cy.get('.mx-input').clear({force: true }).type('2022-08-01 ~ 2022-08-15')
            cy.get('.mx-datepicker-btn').should('be.visible').click()
            cy.wait(8000)
            cy.get('.pagination > label')
            cy.get('.button').should('be.visible').click()
        }
    })
})