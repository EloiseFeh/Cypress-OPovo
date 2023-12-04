// seuTeste.spec.js
import { SearchPage, SportsPage, CarnavalSearch } from '../page-objects/PageObject-OPovo';

Cypress.on('uncaught:exception', () => {
  return false;
});

describe('Teste de busca no site O Povo', () => {
  it('1 - Realizar Busca', () => {
    SearchPage.visit();
    SearchPage.performSearch('UFC');
    SearchPage.verifySearchResults()
  });

  it('2 - Aplicação de Filtro', () => {
    SearchPage.visit();
    SearchPage.performSearch('UFC');
    CarnavalSearch.verifyResultsNotEmpty();
    SearchPage.applyFilter();
  });

  it('3 - Visitar Caderno de Esportes', () => {
    SearchPage.visit();
    SportsPage.goToSportsPage();
    SportsPage.verifySportsPage();
  });

  it('4 - Autor da última notícia de Carnaval', () => {
    SearchPage.visit();
    SearchPage.performSearch('carnaval');
    CarnavalSearch.verifyVisible();
    CarnavalSearch.verifyLink();
    CarnavalSearch.verifyAuthor('Lucas Barbosa');
  });
});
