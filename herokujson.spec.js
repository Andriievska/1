describe("USER LOGIN IN WITH CYPRESS JSON", function() {
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
    });
});