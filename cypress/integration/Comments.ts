beforeEach(() => {
   cy.visit('/')
})

it('comments are initially shown', () => {
   cy.get('ul[data-testid="comments-list"]')
      .children()
      .should('have.length.above', 0)
})

it('should enable and disable text-area on edit button click', () => {
   const curr = 0

   cy.get(`[data-testid="edit-comment-input-${curr}"]`).should('be.disabled')
   cy.get(`button[data-testid="edit-comment-btn-${curr}"]`)
      .should('have.text', 'Edit')
      .click()
   cy.get(`[data-testid="edit-comment-input-${curr}"]`)
      .should('be.enabled')
      .should('have.focus')
   cy.get(`button[data-testid="edit-comment-btn-${curr}"]`)
      .should('have.text', 'Save')
      .click()
   cy.get(`[data-testid="edit-comment-input-${curr}"]`)
      .should('be.disabled')
      .should('not.have.focus')
})

// it('should delete comment from list', () => {
//    cy.get('button[data-testid="delete-comment-btn-0"]').click()
//    cy.get('ul[data-testid="comments-list"]')
//       .children()
//       .should('have.length', '1')
// })

it.only('should edit and save comment', () => {
   const curr = 0

   cy.get(`button[data-testid="edit-comment-btn-${curr}"]`).click()

   cy.get(`[data-testid="edit-comment-input-${curr}"]`)
      .type('Hello world')
      .should('include.value', 'Hello world')
})

it('should save comments in local storage', () => {
   cy.wait(100).should(() => {
      expect(localStorage.getItem('comments')).to.not.be.null
   })
})

it('should show comment score and increment/decrement', () => {
   cy.get('p[data-testid="comment-score-0"]')
      .should('be.visible')
      .invoke('text')
      .then((originalScore) => {
         cy.get('button[data-testid="comment-increment-0"]').click()
         cy.get('p[data-testid="comment-score-0"]')
            .invoke('text')
            .should((incrementedScore) => {
               expect(Number(incrementedScore)).to.eq(Number(originalScore) + 1)
            })

         cy.get('button[data-testid="comment-decrement-0"]').click()
         cy.get('p[data-testid="comment-score-0"]')
            .invoke('text')
            .should((decrementedScore) => {
               expect(Number(decrementedScore)).to.eq(Number(originalScore))
            })
      })
})

it('should find reply button and add new reply comment to list on click', () => {
   cy.get('[data-testid="reply-comment-btn-0"]').click()

   cy.contains('test reply comment').should('be.visible')
})
