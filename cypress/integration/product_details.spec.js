describe('Home Page', () => {
  beforeEach(() => {
    cy.visit("/");
  });
  it("Gets the product page when a product is clicked.", () => {
    cy.get("[alt='Giant Tea']").click();
    cy.get(".product-detail").should("be.visible");
  });
});