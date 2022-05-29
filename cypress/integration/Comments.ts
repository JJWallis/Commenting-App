beforeEach(() => {
   cy.visit('/')
})

it('comments are initially shown', () => {
   cy.get('ul[data-testid="comments-list"]')
      .children()
      .should('have.length.above', 0)
})
