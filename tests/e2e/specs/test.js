// https://docs.cypress.io/api/introduction/api.html

// const getHome = () => cy.get('.home');

describe('WHEN I visit the Home page', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('SHOULD have correct title', () => {
    cy.title().should('eq', 'Case Consulting, Inc.');
  });

  describe('Navigation', () => {
    it('', () => {});
  });
});
