describe('Search Bar', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://mhw-db.com/weapons', {
      fixture: "allWeapons.json"
    })
    cy.visit('http://localhost:3000/')
    cy.get('[href="/all-weapons"] > .nav-btn').click()
    cy.visit('http://localhost:3000/all-weapons')
  })

  it('Should have a search bar now in the nav bar', () => {
    cy.get('.search-bar').name('Search Bar')
  })

  it('Should display a random weapon image on page load', () => {
    
  })

  it('Should have a navigation bar at the top of the screen with a search bar, buttons and title', () => {
  
  })

})