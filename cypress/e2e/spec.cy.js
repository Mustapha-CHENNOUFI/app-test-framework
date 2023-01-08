describe('test spec', () => {
  it('signin', () => {
    const credential= {
      usename: 'staphano',
      password: 'stephano2600'
    };
    cy.visit('/signin')
    cy.get('#username').type(credential.usename)
    cy.get('#password').type(credential.password)
    cy.get("button[type='submit']").click()

  })
})