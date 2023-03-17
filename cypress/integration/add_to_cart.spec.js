describe('Home Page', () => {
  beforeEach(() => {
    cy.visit("/");
  });
  it("Adds an item to the cart and increases the cart by 1", () => {
    cy.get('.btn').first().click({ force: true });
    cy.contains("My Cart (1)");
  });
});