describe('Comprobar pestañas enlaces pantallas y box menú', () => {
    context('Conexión', () => {
        before('Comprobar pestañas enlaces pantallas', () => {
            cy.visit("/login")
            cy.get('#userName').type("30094971")
            cy.get('#userPassword').type("EyJ2024..")
            cy.get('.login-btn').click()
        })
        it('Comprobar pestañas enlaces pantallas', () => {
            cy.get('.icon-menu-hamburger').click()
            cy.get('#navMenu > :nth-child(2)').click()
            cy.get('.icon-menu-hamburger').click()
            cy.get('#navMenu > :nth-child(3)').click()
            cy.get('.icon-menu-hamburger').click()
            cy.get('#navMenu > :nth-child(4)').click()
            cy.get('.icon-menu-hamburger').click()
            cy.get('#navMenu > :nth-child(5)').click()
            cy.get('.icon-menu-hamburger').click()
            cy.get('#navMenu > :nth-child(6)').click()
            cy.get('.icon-menu-hamburger').click()
            cy.get('#navMenu > :nth-child(7)').click()
        })
    })
})