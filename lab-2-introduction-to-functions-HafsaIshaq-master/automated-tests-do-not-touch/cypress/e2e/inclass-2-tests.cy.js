describe('index is loaded correctly (debugging)', () => {
  it('passes', () => {
    cy.visit('http://localhost:8080')
  })
})

describe('Project Setup correctly', ()=> {
  it('Check to see if multiplication is correct.', ()=> {
    // open the page.
    cy.visit('http://localhost:8080')

    // get and test the elements

    let firstValue;
    let secondValue;
    // get the first value
    cy.get('#first-value').then($element => {
      cy.log($element.text())
      firstValue = $element.text();
      // get the second value. ( chained)
      return  cy.get('#second-value')
      
    }).then($element => {
      secondValue =  $element.text();
      let expected = firstValue * secondValue;
      cy.log(firstValue)
      cy.log(secondValue)
      cy.log(expected)
      // check if the result is the same.
      cy.get('#result').contains(expected)
    });
  

  })
})
