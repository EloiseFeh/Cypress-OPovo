Cypress.on('uncaught:exception', () => {
    return false
})

describe('Teste de busca no site O Povo', () => {
  it('1 - Realizar Busca', () =>{
    cy.visit('https://www.opovo.com.br/busca');
    cy.get('#busca').type('UFC');
    cy.get('.btnBuscaButton').click();
    cy.get('.caixa-listagem').should('have.length.be.greaterThan', 1);
  })

  it('2 - Aplicação de Filtro', () =>{
    cy.visit('https://www.opovo.com.br/busca');
    cy.get('#busca').type('UFC');
    cy.get('.btnBuscaButton').click();
    cy.get('.styledSelect').click({force: true});
    cy.get('[rel="last_week"]').click({force: true});
    cy.get('.caixa-listagem').should('not.be.empty');
  })

  it('3 - Visitar Caderno de Esportes', () =>{
    cy.visit('https://www.opovo.com.br/esportes');
    cy.get('.title-listing').should('include.text', 'Esportes')
  })

  it('4 - Autor da última notícia de Carnaval', () =>{
    cy.visit('https://www.opovo.com.br/busca');
    cy.get('#busca').type('carnaval');
    cy.get('.btnBuscaButton').click();
    cy.get('.caixa-listagem').first().should('be.visible')
    cy.get('.caixa-listagem > h2 > a').first().should('have.attr', 'href');
    cy.get('#listagem > div:nth-child(1) > h2 > a > div > div > span.ml-2').should('include.text', 'Lucas Barbosa');
  })
})