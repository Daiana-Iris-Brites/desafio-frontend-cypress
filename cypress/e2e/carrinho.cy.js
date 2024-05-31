describe('Carrinho', () => {
    it('Adicionar produto ao carrinho com sucesso', () => {
        cy.visit('https://www.saucedemo.com/v1/')
        cy.get('[data-test="username"]').type("standard_user")
        cy.get('[data-test="password"]').type("secret_sauce")
        cy.get('#login-button').click()
        cy.get(':nth-child(1) > .pricebar > .btn_primary').click()
        cy.screenshot('produto adicionado')
        cy.get('.fa-layers-counter').should('be.visible').and('have.text', '1')
        cy.get('#shopping_cart_container').click()
        cy.contains('Sauce Labs Backpack').should('be.visible')
    } )
    it('Remover produto ao carrinho com sucesso na página do produto', () => {
        cy.visit('https://www.saucedemo.com/v1/')
        cy.get('[data-test="username"]').type("problem_user")
        cy.get('[data-test="password"]').type("secret_sauce")
        cy.get('#login-button').click()
        cy.get(':nth-child(1) > .pricebar > .btn_primary').click()
        cy.get('.fa-layers-counter').should('be.visible').and('have.text', '1')
        cy.contains('REMOVE')
        cy.get('.btn_secondary').click()
         // Assert
        cy.get('.shopping_cart_badge')
        .should('not.exist')

        cy.screenshot('produto removido')
    } )
})