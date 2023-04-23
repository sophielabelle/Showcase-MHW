describe('Search Bar', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://mhw-db.com/weapons', {
      fixture: "allWeapons.json"
    })
    cy.visit('https://monsterhunterworldweaponwiki.vercel.app/')
    cy.get('.nav-btns > [href="/all-weapons"] > .nav-btn').click()
    cy.visit('https://monsterhunterworldweaponwiki.vercel.app/all-weapons')
    cy.get('.weapon-cards > :nth-child(2)').find('.select-btn').click()
  })

  it('Should have an image and title ', () => {
    cy.get('.single-weapon').find('h2').contains('Spiked Blade 1')
    cy.get('.selected-img').should('have.attr', 'src').should('contain', 'https://assets.mhw-db.com/weapons/great-sword/0d620787497df2098bd41bdfa9d198d7fee2288c.ffb68b7ecd402426c09f9645fc75f1c0.png')
    cy.get('.weapon-description > :nth-child(1)').contains('Weapon Type : great sword | Primary Damage Type : sever | Rarity : 3')
    cy.get('.sharpness-container > p').contains('Base Weapon Sharpness Level')
    cy.get('.sharpness-container').find('table')
    cy.get('.weapon-description > :nth-child(3)').contains('The Spiked Blade 1 has an attack base stat of 624 and the main damage type is sever. It has possible additional damage type of sleep and damage strength of 150. The elderseal value is n/a and it has attributes of defense.')
    cy.get('.weapon-description > .active > .nav-btn').contains('Return to All Weapons')
  })

  it('Should have weapon specific details ', () => {
    cy.get('.weapon-description > :nth-child(1)').contains('Weapon Type : great sword | Primary Damage Type : sever | Rarity : 3')
    cy.get('.sharpness-container > p').contains('Base Weapon Sharpness Level')
    cy.get('.sharpness-container').find('table')
    cy.get('.weapon-description > :nth-child(3)').contains('The Spiked Blade 1 has an attack base stat of 624 and the main damage type is sever. It has possible additional damage type of sleep and damage strength of 150. The elderseal value is n/a and it has attributes of defense.')
  })

  it('Should have a home and all weapons button', () => {
    cy.get('nav').find('[href="/"] > .nav-btn').contains('Home')
    cy.get('nav').find('[href="/all-weapons"] > .nav-btn').contains('All Weapons')
  })

  it('Should have a button to take you back to all the weapons', () => {
    cy.get('.weapon-description > .active > .nav-btn').contains('Return to All Weapons')
  })

  it('Should show an error message when a refresh happens that can take the user home', () => {
    cy.visit('https://monsterhunterworldweaponwiki.vercel.app/all-weapons/weapon/69')
    cy.get('.single-error').find('h2').contains('Oh no an error occured! Please return to view all the weapons to make a new selection!')
    cy.get('.single-error > .active > .nav-btn').contains('Return to All Weapons').click().visit('https://monsterhunterworldweaponwiki.vercel.app/all-weapons/')
    cy.get('h2').contains('All MHW Weapons')
  })
})