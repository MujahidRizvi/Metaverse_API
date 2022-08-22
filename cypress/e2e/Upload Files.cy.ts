describe('Automation Test Suite - Fixtures', function () {
  context('get /All Assets by OwnerID', () => {
    this.beforeEach(function () {
      cy.fixture('data').then(function (testdata) {
        this.testdata = testdata;
      })
    })
    it('should show Asset by Owner ID', function () {
      cy.request({
        method: this.testdata.get, url: this.testdata.AssetbyOwner, headers: { "Cookie": this.testdata.tokenA }, failOnStatusCode: false
      }).then(
        (response) => {
          expect(response.body.data).to.have.keys(this.testdata.OwnerIdKeys)

        })
    })
    {
      it('should not show Asset by Owner ID', function () {
        cy.request({ method: this.testdata.get, url: this.testdata.AssetbyOwner, headers: {}, failOnStatusCode: false }).then(
          (response) => {
            expect(response.body).contain(this.testdata.uAuth)
          })

        cy.request({ method: this.testdata.get, url: this.testdata.AssetbyOwner, headers: { "Cookie": this.testdata.invalidToken }, failOnStatusCode: false }).then(
          (response) => {
            expect(response.body).contain(this.testdata.uAuth)
          })
      })
    }
  })
})


