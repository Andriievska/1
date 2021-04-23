
describe('USER LOGIN IN POSITIVE VALID EMAIL AND PASSWORD', function() {
    it('Verify Title Of The Login Page', function () {
        cy.visit("https://the-internet.herokuapp.com/login");
        cy.title().should('eq', 'The Internet')
    });

    it('Fill an Email and  Password field', function () {
        cy.get('form').within(() => {
            cy.get('input').first().type('tomsmith');
            cy.get('input').last().type('SuperSecretPassword!');
            cy.root().submit()
        });
        cy.url().should('not.contain', 'login');
        cy.contains('div#flash.flash.success', ' You logged into a secure area!').should('have.class', 'flash success');
        cy.contains('h4.subheader', 'Welcome to the Secure Area. When you are done click logout below.').should('have.class', 'subheader');
        cy.get('.icon-2x.icon-signout').click()
    });
});
describe('USER LOGIN IN NEGATIVE INVALID EMAIL AND VALID PASSWORD', function() {
    it('Verify Title Of The Login Page', function () {
        cy.visit("https://the-internet.herokuapp.com/login");
        cy.title().should('eq', 'The Internet')
    });
    it('Fill an Email and  Password field', function () {
        cy.get('form').within(() => {
            cy.get('input').first().type('timsm')
            cy.get('input').last().type('SuperSecretPassword!');
            cy.root().submit()
        });
        cy.url().should('contain', 'login');
        cy.contains('div#flash.flash.error', ' Your username is invalid!');
    });
});
describe('USER LOGIN IN NEGATIVE VALID EMAIL AND INVALID PASSWORD', function() {
    it('Verify Title Of The Login Page', function () {
        cy.visit("https://the-internet.herokuapp.com/login");
        cy.title().should('eq', 'The Internet')
    });
    it('Fill an Email and  Password field', function () {
        cy.get('form').within(() => {
            cy.get('input').first().type('tomsmith')
            cy.get('input').last().type('NotSecretPassword!');
            cy.root().submit()

        });
        cy.url().should('contain', 'login');
        cy.contains('div#flash.flash.error', ' Your password is invalid!');
    });
});