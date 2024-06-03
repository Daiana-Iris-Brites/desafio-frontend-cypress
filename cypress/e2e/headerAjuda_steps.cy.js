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


    it('Given que que acesso o site https://site.getnet.com.br', () => {
      headerAjuda.visitarPagina();
    });

    it('And no menu "Ajuda", clico em "Central de Ajuda"', () => {
      headerAjuda.noMenuAjudaClicaremCentraldeAjuda();
    });

    it('And no campo de busca digito a palavra-chave “Boleto”', () => {
      const palavraChave = 'Boleto'
      headerAjuda.noCampoBuscaDigitePalavraChave(palavraChave);  
    });

    it('When seleciono a opção “Eu concluí a negociação, de que forma receberei meu boleto?”', () => {
      headerAjuda.selecionarOpcaonaModal();   
    });

    it('Then verifico se a modal foi aberta com a mensagem o texto explicativo a dúvida', () => {
      headerAjuda.verificarSeModalFoiAbertaComMensagemExplicandoDuvida()
    });
  });