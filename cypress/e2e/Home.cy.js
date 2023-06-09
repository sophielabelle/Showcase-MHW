describe('Home Page', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://mhw-db.com/weapons', {
      fixture: "randomWeapon.json"
    })
    cy.visit('https://monsterhunterworldweaponwiki.vercel.app/')
  })

  it('Should display a welcome introduction message', () => {
    cy.get('.home-instructions').find('h2').should('contain', 'Thanks for Stopping by!')
    cy.get('.home-instructions').find('p').contains('This site was created in order to provide a space to learn and keep track of all the weapons available within Monster Hunter World. They are all viewable on the All Weapons page and can be searched if there is a perticular one you are interested in. Each weapon card can be clicked on to view more in depth details. Have a look around and keep on playing!')
  })

  it('Should display a random weapon image on page load with a button to access its details and its name', () => {
    cy.get('.random-weapon').find('img').should('have.attr', 'src').should('contain', 'https://assets.mhw-db.com/weapons/great-sword/83f7ab6e7e5669ec416d772049b8b054e2624c2e.c7bad811e203c9bb55626e414659a4f7.png')
    cy.get('.random-weapon > p').contains('Buster Sword 1')
    cy.get('.select-btn').contains('View Weapon')
  })

  it('Should display the random weapons details after the button is clicked', () => {
    cy.get('.select-btn').contains('View Weapon').click()
    cy.get('h2').contains('Buster Sword 1')
    cy.get('.selected-img').should('have.attr', 'src').should('contain', 'https://assets.mhw-db.com/weapons/great-sword/83f7ab6e7e5669ec416d772049b8b054e2624c2e.c7bad811e203c9bb55626e414659a4f7.png')
    cy.get('.weapon-description > :nth-child(1)').contains('Weapon Type : great sword | Primary Damage Type : sever | Rarity : 1')
    cy.get('.sharpness-container > p').contains('Base Weapon Sharpness Level')
    cy.get('.sharpness-container').find('table')
    cy.get('.weapon-description > :nth-child(3)').contains('The Buster Sword 1 has an attack base stat of 384 and the main damage type is sever. It has possible additional damage type of n/a and damage strength')
    cy.get('.weapon-description > .active > .nav-btn').click().visit('https://monsterhunterworldweaponwiki.vercel.app/')
  })

  it('Should have a navigation bar at the top of the screen with a button and title', () => {
    cy.get('nav').find('h1').contains('Monster Hunter World Weapon Wiki')
    cy.get('.nav-btns > [href="/all-weapons"] > .nav-btn').contains('All Weapons')
  })

  it('Should show an error message when the fetch is not working correctly', () => {
    cy.intercept('GET', 'https://mhw-db.com/weapons', {
      statusCode: 404
    })
    cy.get('.random-weapon > p').contains(`We're sorry there was a 404 error. Please try to reload the page.`)
    cy.get('.nav-btns > [href="/all-weapons"] > .nav-btn').click()
    cy.get('.error-page').contains(`We're sorry there was a 404 error. Please try to reload the page.`)
  })
})