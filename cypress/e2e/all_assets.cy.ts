describe('Automation Test Suite - Fixtures', function () {
  context('get /All assets', () => {
    this.beforeEach(function () {
      cy.fixture('object_Data').then(function (testdata) {
        this.testdata = testdata;
      })
    })

    //Positive TestCases

    it('should show All assests', function () {
      cy.request({
        method: this.testdata.get, url: this.testdata.allAssests, headers: { "Cookie": this.testdata.btoken }, failOnStatusCode: false
      }).then(
        (response) => {
          expect(response.body.data).to.have.keys(this.testdata.allassests)
          expect(response.body.data.result[0]).to.have.property(this.testdata.resultProperties[0])
          expect(response.status).eq(this.testdata.okStatus);
        })
    })

    {
      it('should not show All assests', function () {
        cy.request({ method: this.testdata.get, url: this.testdata.allAssests, headers: {}, failOnStatusCode: false }).then(
          (response) => {
            expect(response.body).contain(this.testdata.uAuth)
          })
      })
    }
    {
      it('should not show All assests', function () {
        cy.request({ method: this.testdata.get, url: this.testdata.allAssests, headers: { "Cookie": "" }, failOnStatusCode: false }).then(
          (response) => {
            expect(response.body).contain(this.testdata.uAuth)
          })
      })
    }

  })
})
