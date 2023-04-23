describe('Weapons Page', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://mhw-db.com/weapons', {
      fixture: "allWeapons.json"
    })
    cy.visit('https://monsterhunterworldweaponwiki.vercel.app/')
    cy.get('.nav-btns > [href="/all-weapons"] > .nav-btn').click()
    cy.visit('https://monsterhunterworldweaponwiki.vercel.app/all-weapons')
  })

  it('Should have a page title', () => {
    cy.get('h2').contains('All MHW Weapons')
  })

  it('Should display all weapon sections that are avaialble with weapons on them', () => {
    cy.get('.weapon-types > :nth-child(1)').find('h3').contains('GREAT SWORD')
    cy.get(':nth-child(1) > .weapon-cards > :nth-child(1)').contains('Buster Sword 1')
    cy.get('.weapon-cards > :nth-child(2)').contains('Spiked Blade 1')
    cy.get('.weapon-types > :nth-child(2)').find('h3').contains('GUN LANCE')
  })

  it('Should have a card within each weapon type section that has a view button, icon and title', () => {
    cy.get(':nth-child(1) > .weapon-cards > :nth-child(1)').contains('Buster Sword 1')
    cy.get(':nth-child(1) > .weapon-cards > :nth-child(1)').find('.select-btn').contains('View Weapon')
    cy.get(':nth-child(1) > .weapon-cards > :nth-child(1) > .icon').should('have.attr', 'src').should('contain', 'https://assets.mhw-db.com/weapons/great-sword/icons/83b9e1fa727ca6ba922b53a42626a167.26ad6221e21811da5278502fabfc138b33d622bc.png')
  })

  it('Should have a different card that has a view button, icon and title', () => {
    cy.get(':nth-child(2) > .weapon-cards > .weapon-card').contains('Buster Gun Lance 1')
    cy.get(':nth-child(2) > .weapon-cards > .weapon-card').find('.select-btn').contains('View Weapon')
    cy.get(':nth-child(2) > .weapon-cards > .weapon-card > .icon').should('have.attr', 'src').should('contain', 'https://assets.mhw-db.com/weapons/great-sword/icons/83b9e1fa727ca6ba922b53a42626a167.26ad6221e21811da5278502fabfc138b33d622bc.png')
  })

  it('Should be able to navigate to the weapons page from home bottom button', () => {
    cy.get('[href="/"] > .nav-btn').click()
    cy.get('.home-page > [href="/all-weapons"] > .nav-btn').click()
    cy.get('.weapons-page')
  })

})