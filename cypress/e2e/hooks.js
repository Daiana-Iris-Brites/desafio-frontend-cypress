export const setupTest = () => {
    beforeEach(() => {
        cy.viewport(1280, 720);
        cy.clearCookies();

    
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false
            })
    });
};
