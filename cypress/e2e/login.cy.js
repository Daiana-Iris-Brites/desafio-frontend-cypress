describe("Login", () => {
    it ('Realizar login com sucesso', () =>{
        cy.visit('https://www.saucedemo.com/v1/')
        cy.get('[data-test="username"]').type("standard_user")
        cy.get('[data-test="password"]').type("secret_sauce")
        cy.get('#login-button').click()
        cy.url().should('eq','https://www.saucedemo.com/v1/inventory.html')
        cy.screenshot('login com sucesso')

    })
    it ('Realizar login com credenciais inválidas', () =>{
        cy.visit('https://www.saucedemo.com/v1/')
        cy.get('[data-test="username"]').type("admin")
        cy.get('[data-test="password"]').type("admin")
        cy.get('#login-button').click()
        cy.screenshot('erro credenciais invalidas')
        cy.get('[data-test="error"]').should('contain','Username and password do not match any user in this service')
        cy.url().should('eq','https://www.saucedemo.com/v1/')

    })
})
