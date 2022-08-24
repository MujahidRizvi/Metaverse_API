describe('Automation Test Suite - Fixtures', function () {
  context('post /Import Land', () => {
    this.beforeEach(function () {
      cy.fixture('testdata').then(function (testdata) {
        this.testdata = testdata;
      })
    })
        it('should import land', function()  {
          cy.request({
            method: this.testdata.post, url: this.testdata.landimport, body: this.testdata.importBody, headers: {"Cookie":this.testdata.btoken}, failOnStatusCode: false
          }).then(
            (response) => {
              expect(response.body.data[1].id).to.equal(this.testdata.LandKeys)
            })
      })
      {
        it('should not export land', function()  {
        cy.request({method: this.testdata.post, url: this.testdata.landimport, body: this.testdata.importBody, headers: {}, failOnStatusCode: false}).then(
          (response) => {
           // expect(response.body).contain(this.testdata.uAuth)
          })
          cy.request({method: this.testdata.post, url: this.testdata.landimport, body:{}, headers: {"Cookie":this.testdata.btoken}, failOnStatusCode: false}).then(
          (response) => {
            expect(response.body.error.code).to.eql(422)
          })
    })
    }
    })
  })