beforeEach(() => {
   cy.visit('/')
})

it('comments are initially shown', () => {
   cy.get('ul[data-testid="comments-list"]')
      .children()
      .should('have.length.above', 0)
})

it('should enable and disable input on edit button click', () => {
   const curr = 0

   cy.get(`input[data-testid="edit-comment-input-${curr}"]`).should(
      'be.disabled'
   )
   cy.get(`button[data-testid="edit-comment-btn-${curr}"]`)
      .click()
      .should('have.text', 'Save')
   cy.get(`input[data-testid="edit-comment-input-${curr}"]`)
      .should('be.enabled')
      .should('have.focus')
   cy.get(`button[data-testid="edit-comment-btn-${curr}"]`)
      .click()
      .should('have.text', 'Edit')
   cy.get(`input[data-testid="edit-comment-input-${curr}"]`)
      .should('be.disabled')
      .should('not.have.focus')
})

it('should delete comment from list', () => {
   cy.get('button[data-testid="delete-comment-btn-0"]').click()
   cy.get('ul[data-testid="comments-list"]')
      .children()
      .should('have.length', '1')
})

it('should edit and save comment', () => {
   const curr = 0

   cy.get(`button[data-testid="edit-comment-btn-${curr}"]`).click()

   cy.get(`input[data-testid="edit-comment-input-${curr}"]`)
      .type('Hello world')
      .should('include.value', 'Hello world')
})

it('should save comments in local storage', () => {
   cy.wait(100).should(() => {
      expect(localStorage.getItem('comments')).to.not.be.null
   })
})
