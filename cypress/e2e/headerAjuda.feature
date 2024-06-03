Feature: Ajuda

  Scenario: Teste de Funcionalidade da Central de Ajuda - Verificação da Abertura da Modal de Resposta
    Dado que que acesso o site https://site.getnet.com.br
    E no menu "Ajuda", clico em "Central de Ajuda"
    E no campo de busca digito a palavra-chave “Boleto”
    Quando seleciono a opção “Eu concluí a negociação, de que forma receberei meu boleto?”
    Então verifico se a modal foi aberta com a mensagem o texto explicativo a dúvida