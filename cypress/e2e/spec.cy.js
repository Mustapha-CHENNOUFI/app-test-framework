describe('User Sign-up and Login', () => {
  it('Redirect unauthenticated user to signin page', () => {
    cy.visit('/personal');
    cy.location('href').then( (url) => { cy.log(url) });
    cy.location('pathname').should('equal','/signin');

  })

  it('Sign-up', () => {
    const userInfo= {
      firstName: "Mustapha",
      lastName: "Chennoufi",
      username: "Stoupha1996",
      password: "s3cret",
    };
    cy.visit('/signup');
    cy.get('h1[data-test="signup-title"]').should("be.visible")
    .and("contain", "Sign Up");
    cy.get('#firstName').type(userInfo.firstName);
    cy.get('#lastName').type(userInfo.lastName);
    cy.get('#username').type(userInfo.username);
    cy.get('#password').type(userInfo.password);
    cy.get('#confirmPassword').type(userInfo.password);
    cy.get('.MuiButton-label').should('be.visible').click();
    cy.intercept('POST', 'http://localhost:3001/signup').as('user');
    cy.log(user);

    cy.get('#username').type(userInfo.username);
    cy.get('#password').type(userInfo.password);
    cy.get("button[type='submit']").should('be.visible').click();
    //cy.get("div[role='dialog']").screenshot('onboarding-dialog');
    cy.get('[data-test="user-onboarding-next"]').click();

  })
})