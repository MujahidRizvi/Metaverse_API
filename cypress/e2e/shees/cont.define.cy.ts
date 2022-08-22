describe('Automation Test Suite - Fixtures', function () {
  context('get /All Contracts Define', () => {
    this.beforeEach(function () {
      cy.fixture('data').then(function (testdata) {
        this.testdata = testdata;
      })
    })

    it('should show all contracts', function () {
      cy.request({
        method: this.testdata.get, url: this.testdata.Allcontdefine, headers: { "Cookie": this.testdata.tokenA }, failOnStatusCode: false
      }).then(
        (response) => {
          expect(response.body.data.results[0]).to.contain.keys(this.testdata.AllContdefineorAssetTypeKeys)
          expect(response.body.data.results[0].contractAbi[0]).to.contain.keys(this.testdata.ContdefineforAbi)
        })
    })

    {
      it('should not show all contracts', function () {
        cy.request({ method: this.testdata.get, url: this.testdata.Allcontdefine, headers: {}, failOnStatusCode: false }).then(
          (response) => {
            expect(response.body).contain(this.testdata.uAuth)
          })

        cy.request({ method: this.testdata.get, url: this.testdata.Allcontdefine, headers: { "Cookie": "" }, failOnStatusCode: false }).then(
          (response) => {
            expect(response.body).contain(this.testdata.uAuth)
          })

        cy.request({ method: this.testdata.get, url: this.testdata.Allcontdefine, headers: { "Cookie": this.testdata.invalidToken }, failOnStatusCode: false }).then(
          (response) => {
            expect(response.body).contain(this.testdata.uAuth)
          })

      })
    }
  })
})














