# Desafio teste erb Getnet

>DESAFIO AUTOMAÇÃO

Passos:

1. Acessar o site: hbps://site.getnet.com.br/
2. No menu "Ajuda", clicar em "Central de Ajuda"
3. No campo de busca digite a palavra-chave “Boleto”
4. Selecionar a opção “Eu concluí a negociação, de que forma receberei meu
boleto?”
5. Verificar se a modal foi aberta com a mensagem o texto explicaGvo a dúvida
selecionada.

---
## Índice

- [Tecnologias utilizadas](#tecnologias-utilizadas)
- [Executar o teste](#executar-o-teste)
- [Relatórios de testes](#relatórios-de-testes)
- [Considerações Finais](#considerações-finais)
---
## Tecnologias utilizadas
---
Para o desafio, foram ultilizadas as seguintes tecnologias:
- Cypress: Framework de automação de teste end-to-end para aplicações web.
- GitHub Actions: Plataforma de automação que permite executar fluxos de trabalho baseados em eventos no GitHub.
- Cucumber (BDD)
- Report com:
   - Mocha JUnit Reporter: Reporter do Mocha para gerar relatórios XML compatíveis com JUnit.
   - Cypress Mochawesome Reporter: Reporter do Cypress para gerar relatórios HTML detalhados dos testes.
   - Cypress Multi Reporter: Pacote que permite a geração de múltiplos relatórios a partir de uma única execução dos testes.
---

## Executar o teste

Para abrir o Cypress no navegador Chrome:
```bash
  $ npm run cy:open:chrome

```
Para rodar os testes no navegador Chrome em modo headless:
```bash
  $ npm run cy:run:chrome

```
## Integração Contínua
Este projeto utiliza GitHub Actions para integração contínua. As ações estão configuradas para rodar os testes Cypress sempre que ocorrer um push no repositório.

---
## Relatórios de testes 
Este projeto utiliza os seguintes relatórios para fornecer informações sobre os testes:

 - Mocha JUnit Reporter: Este reporter gera um arquivo XML compatível com JUnit para facilitar a integração com sistemas de CI/CD.
 - Cypress Mochawesome Reporter: Este reporter gera um relatório HTML detalhado dos testes.
 - Cypress Multi Reporter: Este reporter permite a geração de múltiplos relatórios a partir de uma única execução dos testes.

Ao executar os testes, os relatórios HTML estão sendo gravados dentro do diretório *reports/html/index.html*. Nesse report HTML, está registrada a execução dos casos de testes, juntamente com as descrições de sucesso/falha no testes executados.

---
## Considerações Finais
 Foi uma ótima oportunidade para desenvolver meu conhecimento com a ferramenta Cypress. Como o tempo para desenvolver foi curto, acho importante levantar pontos de melhoria que identifiquei:

### Oportunidades de melhorias da automação de teste: 
- É possível configurar vídeos para o report
- Nos elementos, ao acompanhar o desenvolvimento do time, a troca é muito construtiva no dia a dia. Seria interessante ao ver melhorias no desenvolvimento e possíveis cenários automatizados, solicitar para o time a colocar do atributo de data-teste para facilitar na criação dos testes. 

