describe('Home Page', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://mhw-db.com/weapons', {
      fixture: "randomWeapon.json"
    })
    cy.visit('http://localhost:3000/')
  })

  it('Should display a welcome introduction message', () => {
    cy.get('.home-instructions').find('h2').should('contain', 'Thanks for Stopping by!')
    cy.get('.home-instructions').find('p').contains('Welcome I created this site in order to provide you a space to learn and keep track of all the weapons that are availabel within Monster Hunter World. You can reasearch armors you are interested in, search through all of them and maybe eventually save them. Have a look around and keep on playing.')
  })

  it('Should display a random weapon image on page load', () => {
    cy.get('.random-weapon').find('img').should('have.attr', 'src').should('contain', 'https://assets.mhw-db.com/weapons/great-sword/83f7ab6e7e5669ec416d772049b8b054e2624c2e.c7bad811e203c9bb55626e414659a4f7.png')
  })

  it('Should have a navigation bar at the top of the screen with a search bar, buttons and title', () => {
    cy.get('nav').find('.search-bar')
    cy.get('h1').contains('Monster Hunter World Weapon Wiki')
    cy.get(':nth-child(1) > .nav-btn')
    cy.get('[href="/all-weapons"] > .nav-btn')
    cy.get(':nth-child(3) > .nav-btn')
  })

})