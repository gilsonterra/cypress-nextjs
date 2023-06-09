const PRODUCT_ID = '16';
const PRODUCT_NAME = 'HYALURONIC ACID SERUM';

describe('Fluxo checkout', () => {
  beforeEach(() => {
    cy.viewport(1900, 1600);
    cy.visit('/');
  });

  it('Clicar na categoria "Laptops" e verificar se tem 5 produtos', () => {
    cy.contains('LAPTOPS').click();
    cy.get(`.product-item`).should('have.length', 5);
  });

  it('Selecionando alguns produtos e conferindo se estão na página de checkout', () => {
    cy.get('[data-cy="checkout-cart"]').should('have.text', 0);

    cy.get(`[data-cy="btn-buy-${PRODUCT_ID}"]`).click();
    cy.get('[data-cy="checkout-cart"]').should('have.text', 1);
    cy.get('[data-cy="checkout-cart"]').click();
    cy.contains(PRODUCT_NAME).should('have.length', 1);
  });

  it('Selecionando +100 produtos e conferindo se bate com o valor do icone do carrinho', () => {
    cy.get('[data-cy="checkout-cart"]').should('have.text', 0);
    for (let i = 1; i <= 99; i++) {
      cy.get(`[data-cy="btn-buy-${PRODUCT_ID}"]`).click();
      cy.get('[data-cy="checkout-cart"]').should('have.text', i);
    }
    cy.get(`[data-cy="btn-buy-${PRODUCT_ID}"]`).click();
    cy.get('[data-cy="checkout-cart"]').should('not.have.text', 100);
    cy.get('[data-cy="checkout-cart"]').should('have.text', '+99');
  });
});
