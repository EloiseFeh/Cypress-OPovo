// PageObject-OPovo.js
export class SearchPage {
  static visit() {
    cy.visit('https://www.opovo.com.br/busca');
  }

  static performSearch(query) {
    cy.get('#busca').type(query);
    cy.get('.btnBuscaButton').click();
  }

  static applyFilter() {
    cy.get('.styledSelect').click({ force: true });
    cy.get('[rel="last_week"]').click({ force: true });
  }

  static verifySearchResults() {
    cy.get('.caixa-listagem').should('have.length.be.greaterThan', 1);
  }
}

export class SportsPage {
  static visit() {
    cy.visit('https://www.opovo.com.br/esportes');
  }

  static goToSportsPage() {
    cy.get('#icon-menulateral').click();
    cy.get('#container-list-lateral > ul:nth-child(2) > li > div > a').click();
  }

  static verifySportsPage() {
    cy.get('.title-listing').should('include.text', 'Esportes');
  }
}

export class CarnavalSearch {
  static verifyResultsNotEmpty() {
    cy.get('.caixa-listagem').should('not.be.empty');
  }

  static verifyVisible() {
    cy.get('.caixa-listagem').first().should('be.visible');
  }

    static verifyLink() {
    cy.get('.caixa-listagem > h2 > a').first().should('have.attr', 'href');
    }

  static verifyAuthor(authorName) {
    cy.get('.caixa-listagem > h2 > a > div > div > span.ml-2').should('include.text', authorName);
  }
}
