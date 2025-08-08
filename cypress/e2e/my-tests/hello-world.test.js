/// <reference types="cypress" />

describe('Basic Tests', () => {

    it('Correct Header', () => {
        cy.visit('https://dondoricent.netlify.app')

        // Mocha
        cy.contains('Full-Stack Developer / QA Engineer').should('exist') // .should is an assertion

        cy.contains('Contact Me')

        //cy.get - used to target attributes

        cy.get('div')

        cy.get('#about').click()

        cy.get('#projects').click()

        //cy.should 

        cy.contains('or want to collaborate?').should('exist')

        // cy.viewport

        cy.viewport(1280, 720) // can also check certain products i.e. iphone size or mac size

        cy.viewport('ipad-mini')

        

    })

})