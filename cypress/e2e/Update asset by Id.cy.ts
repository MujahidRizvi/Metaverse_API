describe('Automation Test Suite - Fixtures', function () {
  context('put /Update Assets by Id', () => {
    this.beforeEach(function () {
      cy.fixture('data').then(function (testdata) {
        this.testdata = testdata;
      })
    })

    it('should update Asset by Id', function () {
      cy.request({
        method: this.testdata.put, url: this.testdata.UpdateAssetbyId, body: { "description": "ayes" }, headers: { "Cookie": this.testdata.tokenA }, failOnStatusCode: false
      }).then(
        (response) => {

          expect(response.body.data).to.contain.keys(this.testdata.UpdtaeassetbyIdKeys)

        })
    })
    {
      it('should not update Asset by Id', function () {
        cy.request({ method: this.testdata.put, url: this.testdata.UpdateAssetbyId, headers: {}, failOnStatusCode: false }).then(
          (response) => {
            expect(response.body).contain(this.testdata.uAuth)
          })

        cy.request({ method: this.testdata.put, url: this.testdata.UpdateAssetbyId, headers: { "Cookie": this.testdata.invalidToken }, failOnStatusCode: false }).then(
          (response) => {
            expect(response.body).contain(this.testdata.uAuth)
          })

        cy.request({ method: this.testdata.put, url: this.testdata.UpdateAssetbyId, headers: { "Cookie": "" }, failOnStatusCode: false }).then(
          (response) => {
            expect(response.body).contain(this.testdata.uAuth)
          })
      })
    }
  })
})

