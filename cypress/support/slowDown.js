Cypress.Commands.overwrite('visit', (originalFn, url, options) => {
  return originalFn(url, options).then(() => {
    cy.wait(500); // pause after each visit
  });
});

Cypress.Commands.overwrite('click', (originalFn, subject, options) => {
  return originalFn(subject, options).then(() => {
    cy.wait(300); // pause after each click
  });
});

Cypress.Commands.overwrite('type', (originalFn, subject, text, options) => {
  return originalFn(subject, text, options).then(() => {
    cy.wait(200); // pause after typing
  });
});
