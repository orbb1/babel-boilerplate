describe('Homepage', () => {
  it('Visits home page', () => {
    cy.visit('/');
    const h1 = cy.get('h1');
    h1.should('have.text', 'Blanc');
  });
});
