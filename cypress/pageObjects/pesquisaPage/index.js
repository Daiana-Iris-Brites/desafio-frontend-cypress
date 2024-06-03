import {textoEsperadoModal as tes} from '../pesquisaPage/textoEsperadoModal';
import { elements as el } from './elements';
class PesquisaPage {
       noCampoBuscaDigitePalavraChave() {     
        cy.get(el.campoBusca).type(el.inputPalavraChave+'{enter}');
    }
    selecionarOpcaonaModal() {
        cy.contains('Eu concluí a negociação, de que forma receberei meu boleto?').click()          
        cy.get(el.modalOpcoesBoleto).should('be.visible'); 
    }

    verificarSeModalFoiAbertaComMensagemExplicandoDuvida() {      
        cy.get(el.tituloModal).should('have.text', tes.tituloEsperado);
        cy.get(el.textoModal).should('have.text', tes.textoEsperado)
        cy.screenshot('ModalTextoExplicandoDuvida')
    }
}
export default new PesquisaPage()