describe('Automation Test Suite - Fixtures', function () {
  context('get /All Assets by Type', () => {
    this.beforeEach(function () {
      cy.fixture('data').then(function (testdata) {
        this.testdata = testdata;
      })
    })

    it('should show Asset by Type', function () {
      cy.request({
        method: this.testdata.get, url: this.testdata.AssetbyType, headers: { "Cookie": this.testdata.tokenA }, failOnStatusCode: false
      }).then(
        (response) => {

          expect(response.body.data[0]).to.contain.keys(this.testdata.DataforTypeorSeasonKeys)

        })
    })
    {
      it('should not show Asset by Type', function () {
        cy.request({ method: this.testdata.get, url: this.testdata.AssetbyType, headers: {}, failOnStatusCode: false }).then(
          (response) => {
            expect(response.body).contain(this.testdata.uAuth)
          })

        cy.request({ method: this.testdata.get, url: this.testdata.AssetbyType, headers: { "Cookie": this.testdata.invalidToken }, failOnStatusCode: false }).then(
          (response) => {
            expect(response.body).contain(this.testdata.uAuth)
          })

        cy.request({ method: this.testdata.get, url: this.testdata.AssetbyType, headers: { "Cookie": "" }, failOnStatusCode: false }).then(
          (response) => {
            expect(response.body).contain(this.testdata.uAuth)
          })
      })
    }
  })
})














