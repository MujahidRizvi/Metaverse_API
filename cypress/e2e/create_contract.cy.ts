describe('Automation Test Suite - Fixtures', function () {
  const now = new Date();
  context('post /CreateContract', () => {
    this.beforeEach(function () {
      cy.fixture('object_Data').then(function (testdata) {
        this.testdata = testdata;
      })
    })
    it('should create a new contract', function () {
      cy.request({
        method: this.testdata.post,
        url: this.testdata.contrctURL, body: { seasonName: "Season-1", assetType: "land", contractAddress: now, sellerFee: "2.0" }, headers: { "Cookie": this.testdata.btoken }, failOnStatusCode: false
      }).then(
        (response) => {
          expect(response.body.data).to.contain.keys(this.testdata.contractProperty)
          expect(response.status).eq(this.testdata.okStatus);
          // expect(response.status).to.eq(422) 
        })
    })
  })
  {
    it('should not create contract if seasonName is missing ', function () {
      cy.request({ method: this.testdata.post, url: this.testdata.contrctURL, body: { assetType: "land", contractAddress: now, sellerFee: "2.0" }, failOnStatusCode: false }).then(
        (response) => {
          expect(response.body).contain(this.testdata.uAuth)
        })
    })
  }
  {
    it('should not create contract if assetType is missing ', function () {
      cy.request({ method: this.testdata.post, url: this.testdata.contrctURL, body: { seasonName: "Season-1", contractAddress: now, sellerFee: "2.0" }, failOnStatusCode: false }).then(
        (response) => {
          expect(response.body).contain(this.testdata.uAuth)
        })
    })
  }
  {
    it('should not create contract if contractAddress is missing ', function () {
      cy.request({ method: this.testdata.post, url: this.testdata.contrctURL, body: { assetType: "land", contractAddress: now, sellerFee: "2.0" }, failOnStatusCode: false }).then(
        (response) => {
          expect(response.body).contain(this.testdata.uAuth)
        })
    })
  }
  it('should not create contract if sellerFee is missing ', function () {
    cy.request({ method: this.testdata.post, url: this.testdata.contrctURL, body: { seasonName: "Season-1", assetType: "land", contractAddress: now }, failOnStatusCode: false }).then(
      (response) => {
        expect(response.body).contain(this.testdata.uAuth)

      })
  })
}
)
