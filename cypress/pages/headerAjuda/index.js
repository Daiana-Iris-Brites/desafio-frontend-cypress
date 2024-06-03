import {textoEsperadoModal as tes} from './textoEsperadoModal';
import { elements as el } from './elements';
class HeaderAjuda {
    visitarPagina() {
        cy.visit('/');
        cy.get(el.logo).should('be.visible')
    }
    noMenuAjudaClicaremCentraldeAjuda() {        
        cy.get(el.ajuda).realClick()
        cy.get(el.modalAjuda).should('be.visible')
        cy.wait(2000)
        cy.contains('Central de ajuda').realClick()
        cy.screenshot('Central de ajuda')
        cy.wait(2000)
        cy.url().should('eq','https://site.getnet.com.br/duvidas/')
    }
    
    noCampoBuscaDigitePalavraChave() {     
        cy.get(el.campoBusca).type('Boleto{enter}');
    }
    selecionarOpcaonaModal() {
        cy.contains('Eu concluí a negociação, de que forma receberei meu boleto?').click()          
        cy.get(el.modalOpcoesBoleto).should('be.visible'); // Passo 5: Verificar se a modal está abert
    }

    verificarSeModalFoiAbertaComMensagemExplicandoDuvida() {      
        cy.get(el.tituloModal).should('have.text', tes.tituloEsperado);
    //verifica o texto da modal
        cy.get(el.textoModal).should('have.text', tes.textoEsperado)
        cy.screenshot('ModalTextoExplicandoDuvida')
    }
}


export default new HeaderAjuda()