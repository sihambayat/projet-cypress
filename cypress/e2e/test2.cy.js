/// <reference types="cypress" />

describe('Cas2 : Authentification / Login', () => {

  const email = `test00000111@mail.com`;
  const name = 'Siham';
  const password = 'Test1234';

  it('Se connecter avec un compte existant', () => {
    cy.visit('https://automationexercise.com');

    // Cliquer sur Signup / Login
    cy.contains('Signup / Login').click();

    // Vérifier que la section Login est visible
    cy.get('h2').should('contain.text', 'Login to your account');

    // Saisir email et mot de passe
    cy.get('input[data-qa="login-email"]').type(email);
    cy.get('input[data-qa="login-password"]').type(password);

    // Cliquer sur Login
    cy.get('button[data-qa="login-button"]').click();

    // Vérifier que la connexion a réussi
    cy.contains(`Logged in as`).should('be.visible');

    // Optionnel : Déconnexion après test
    cy.contains('Logout').click();
    cy.contains('Signup / Login').should('be.visible');
  });
});
