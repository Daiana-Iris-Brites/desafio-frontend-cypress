import headerAjuda from '../pageObjects/headerAjuda';
import homePage from '../pageObjects/homePage';
import pesquisaPage from '../pageObjects/pesquisaPage';
import { setupTest } from './hooks';
describe('Teste na página de Ajuda do site Getnet', () => {
  
    setupTest();

    it('Given que que acesso o site https://site.getnet.com.br', () => {
      homePage.visitarPagina();
    });

    it('And no menu "Ajuda", clico em "Central de Ajuda"', () => {
      headerAjuda.noMenuAjudaClicaremCentraldeAjuda();
    });

    it('And no campo de busca digito a palavra-chave “Boleto”', () => {
      const palavraChave = 'Boleto'
      pesquisaPage.noCampoBuscaDigitePalavraChave(palavraChave);  
    });

    it('When seleciono a opção “Eu concluí a negociação, de que forma receberei meu boleto?”', () => {
      pesquisaPage.selecionarOpcaonaModal();   
    });

    it('Then verifico se a modal foi aberta com a mensagem o texto explicativo a dúvida', () => {
      pesquisaPage.verificarSeModalFoiAbertaComMensagemExplicandoDuvida()
    });
  });