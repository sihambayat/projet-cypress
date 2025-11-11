/// <reference types="cypress" />

describe('Inscription complète sur AutomationExercise', () => {

  const email = `test00000111@mail.com`;
  const name = 'Siham';
  const password = 'Test1234';

  it('Cas1: Créer un nouveau compte avec tous les champs', () => {
    cy.visit('https://automationexercise.com');

    // Cliquer sur Signup / Login
    cy.contains('Signup / Login').click();

    // Étape 1 : nom et email
    cy.get('input[data-qa="signup-name"]').type(name);
    cy.get('input[data-qa="signup-email"]').type(email);
    cy.get('button[data-qa="signup-button"]').click();

    // Étape 2 : remplir les détails du compte
    cy.get('#id_gender1').check();          // Sexe
    cy.get('#password').type(password);     // Mot de passe
    cy.get('#days').select('1');            // Jour de naissance
    cy.get('#months').select('January');    // Mois de naissance
    cy.get('#years').select('2000');        // Année de naissance
    cy.get('#newsletter').check();          // S’abonner à la newsletter
    cy.get('#optin').check();               // Recevoir des offres

    // Informations personnelles
    cy.get('#first_name').type('Siham');
    cy.get('#last_name').type('Bayat');
    cy.get('#company').type('MaSociete');
    cy.get('#address1').type('123 Rue Exemple');
    cy.get('#address2').type('Appartement 4B');
    cy.get('#country').select('Canada');
    cy.get('#state').type('Québec');
    cy.get('#city').type('Montréal');
    cy.get('#zipcode').type('H1A1A1');
    cy.get('#mobile_number').type('5141234567');

    // Cliquer sur Create Account
    cy.get('button[data-qa="create-account"]').click();

    // Vérifier que le compte est créé
    cy.contains('Account Created!', { timeout: 10000 }).should('be.visible');


  });


 


});
