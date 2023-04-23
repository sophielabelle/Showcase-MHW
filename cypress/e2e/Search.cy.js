describe('Search Bar', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://mhw-db.com/weapons', {
      fixture: "allWeapons.json"
    })
    cy.visit('https://monsterhunterworldweaponwiki.vercel.app/')
    cy.get('.nav-btns > [href="/all-weapons"] > .nav-btn').click()
    cy.visit('https://monsterhunterworldweaponwiki.vercel.app/all-weapons')
  })

  it('Should have a search box in the nav bar', () => {
    cy.get('nav').find('.search-bar')
  })

  it('Should allow the user to search for different weapons', () => {
    cy.get('.search-bar').type('Buster')
    cy.get('h2').contains('Search Results')
    cy.get('.search-results > :nth-child(1)').find('.weapon-name').contains('Buster Sword 1')
    cy.get('.search-results > :nth-child(2)').find('.weapon-name').contains('Buster Gun Lance 1')
  })

  it('Should show an error message when nothing matches the search', () => {
    cy.get('.search-bar').type('sadf 6678')
    cy.get('h3').contains(`We're sorry there are no weapons matching your search!`)
  })
})