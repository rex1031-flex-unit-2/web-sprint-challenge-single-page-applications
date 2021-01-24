

describe('checking form inputs and data submission', ()=>{
    beforeEach(() =>{
        cy.visit('http://localhost:3002/pizzaForm');
    });

    it('adding form data and sumbitting the form', () => {
        cy.get("[data-cy=name]").type('Pizza Order').should('have.value', 'Pizza Order');
        cy.get('[data-cy=size]').select('Medium').should('have.value', 'm');
        cy.get('[type="checkbox"]').check().should('be.checked')
        cy.get('[data-cy=specialInstructions]').type('Extra Sauce Please!').should('have.value', 'Extra Sauce Please!')
        cy.get('[data-cy=submit]').click()

    })

});