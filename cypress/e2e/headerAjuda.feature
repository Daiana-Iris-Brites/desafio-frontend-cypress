Feature: Header Ajuda

  Scenario: Teste de Funcionalidade da Central de Ajuda - Verificação da Abertura da Modal de Resposta
    Given que que acesso o site https://site.getnet.com.br
    And no menu "Ajuda", clico em "Central de Ajuda"
    And no campo de busca digito a palavra-chave “Boleto”
    When seleciono a opção “Eu concluí a negociação, de que forma receberei meu boleto?”
    Then verifico se a modal foi aberta com a mensagem o texto explicativo a dúvida