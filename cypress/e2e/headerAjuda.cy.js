import headerAjuda from '../pages/headerAjuda';
describe('Teste na página de Ajuda do site Getnet', () => {
    beforeEach(() => {
        // Configura o viewport para simular um dispositivo desktop
        cy.viewport(1280, 720),
        cy.clearCookies();

        Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            return false
          })
      });


    it('Teste de Funcionalidade da Central de Ajuda - Verificação da Abertura da Modal de Resposta', () => {
      headerAjuda.visitarPagina();
      headerAjuda.noMenuAjudaClicaremCentraldeAjuda();
      headerAjuda.noCampoBuscaDigitePalavraChave
      headerAjuda.selecionarOpcaonaModal();        // Verifique o título da modal
      headerAjuda.verificarSeModalFoiAbertaComMensagemExplicandoDuvida()
    });
  });