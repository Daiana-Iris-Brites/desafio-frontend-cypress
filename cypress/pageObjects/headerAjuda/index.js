import { elements as el } from './elements';
class HeaderAjuda {
    noMenuAjudaClicaremCentraldeAjuda() {        
        cy.contains(el.menu).realClick()
        cy.get(el.modalAjuda).should('be.visible')
        cy.wait(2000)
        cy.contains(el.opcao).realClick()
        cy.screenshot('Central de ajuda')
        cy.wait(2000)
        cy.url().should('eq','https://site.getnet.com.br/duvidas/')
    }
}
export default new HeaderAjuda()