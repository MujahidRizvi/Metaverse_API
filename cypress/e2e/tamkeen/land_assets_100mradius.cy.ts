describe('Automation Test Suite - Fixtures', function () {
  context('get /All assets', () => {
    this.beforeEach(function () {
      cy.fixture('object_Data').then(function (testdata) {
        this.testdata = testdata;
      })
    })
    it('should show All assestsin 100m radius', function () {
      cy.request({
        method: this.testdata.get, url: this.testdata.radiusURL, headers: { "Cookie": this.testdata.btoken }, failOnStatusCode: false
      }).then(
        (response) => {
          expect(response.body.data).to.contain.keys(this.testdata.allassests)
          expect(response.body.data.result[0]).to.have.property(this.testdata.landProperties[0])
          expect(response.status).eq(this.testdata.okStatus);
        })
    });
  })
  {
    it('should not show All assests in 100m radius', function () {
      cy.request({ method: this.testdata.get, url: this.testdata.radiusURL, headers: {}, failOnStatusCode: false }).then(
        (response) => {
          expect(response.body).contain(this.testdata.uAuth)
        })
    })
  }
  {
    it('should not show All assests in 100m radius', function () {
      cy.request({ method: this.testdata.get, url: this.testdata.radiusURL, headers: { "Cookie": "" }, failOnStatusCode: false }).then(
        (response) => {
          expect(response.body).contain(this.testdata.uAuth)
        })
    })
  }
})