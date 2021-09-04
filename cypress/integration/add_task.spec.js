/* global cy*/

describe('Creating a task',()=>{
    it('Displays the task in the list',()=>{
        cy.visit('http://localhost:3000');
        
        cy.get('[data-testid="input_text"]')
        .type('New Task to be added');

        cy.get('[data-testid="sendButton"]')
        .click();

        cy.get('[data-testid="input_text"]')
        .should('have.value','');

        cy.contains('New Task to be added')
    })
})