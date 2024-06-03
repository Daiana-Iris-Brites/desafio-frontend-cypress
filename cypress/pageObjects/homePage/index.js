import {textoEsperadoModal as tes} from '../pesquisaPage/textoEsperadoModal';
import { elements as el } from './elements';
class HomePage {
    visitarPagina() {
        cy.visit('/');
        cy.get(el.logo).should('be.visible')
    }
}
export default new HomePage()