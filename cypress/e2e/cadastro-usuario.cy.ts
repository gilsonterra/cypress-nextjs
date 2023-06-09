describe('Fluxo cadastro de usuário', () => {
  beforeEach(() => {
    cy.viewport('macbook-11');
    cy.visit('/');
  });

  it('Preenchendo o formulário completo e enviando dados', () => {
    cy.contains('Cadastre-se').click();

    cy.get('[data-cy="name"]').type('Nome Teste Cypress');
    cy.get('[data-cy="surname"]').type('Sobrenome Teste Cypress');
    cy.get('[data-cy="address"]').type('Endereço Teste Cypress');

    cy.contains('Salvar').click();

    cy.get('[data-cy="message"]')
      .should('be.visible')
      .should('have.text', 'Dados enviados com sucesso!');
  });

  it('Clicando no botão salvar sem preencher os campos obrigatórios', () => {
    cy.contains('Cadastre-se').click();

    cy.get('[data-cy="name"]').type('Nome Teste Cypress');

    cy.contains('Salvar').click();

    cy.contains('Campo Sobrenome é obrigatório!').should('have.length', 1);
    cy.contains('Campo Endereço é obrigatório!').should('have.length', 1);

    cy.get('[data-cy="message"]')
      .should('be.visible')
      .should('have.text', 'Verifique os campos obrigatórios!');
  });
});
