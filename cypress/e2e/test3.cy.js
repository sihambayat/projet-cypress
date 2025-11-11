 it('Cas3 : Ajoute un produit au panier et vérifie le panier', () => {
  cy.visit('https://automationexercise.com');

  // Aller à la page Products
  cy.contains('Products').click();

  // Trouver le produit "Blue Top" et cliquer sur Add to cart
  cy.contains('.single-products .productinfo', 'Blue Top')
    .should('be.visible')
    .parent() // selon l’arborescence
    .within(() => {
      cy.contains('Add to cart').click();
    });

  // Vérifier que le message d’ajout s’affiche
  cy.get('.modal-content')
    .should('be.visible')
    .and('contain.text', 'Your product has been added to cart');

  // Cliquer sur View Cart
  cy.contains('View Cart').click();

  // Vérifier que la page Cart affiche le produit attendu
  cy.url().should('include','/view_cart');
  cy.get('tbody') // ou le container de lignes
    .should('contain.text', 'Blue Top')
    .and('contain.text', 'Rs. 500');  

  // Vérifier la quantité = 1
  cy.get('td.cart_quantity button.disabled')
  .should('contain.text', '1');

});


