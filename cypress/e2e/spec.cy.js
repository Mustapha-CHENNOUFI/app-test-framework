describe('test spec', () => {
  it('signin', () => {
    const credential= {
      usename: 'staphano',
      password: 'stephano26'
    };
    cy.visit('http://localhost:3000/signin')
    cy.get('#username').type(credential.usename)
    cy.get('#password').type(credential.password)
    cy.get("button[type='submit']").click()

  })
})