describe('Automation Test Suite - Fixtures', function () {
  const now = Math.floor(Math.random()*10)+1;
  context('post /CreateContract', () => {
    this.beforeEach(function () {
      cy.fixture('object_Data').then(function (testdata) {
        this.testdata = testdata;
      })
    })
    it('should create a new contract', function () {
      cy.request({
        method: this.testdata.put,
        url: this.testdata.UpdateAssetByID,
        headers: { Cookie: this.testdata.btoken },
        body: { ownerId: now },
        failOnStatusCode: false
      }).then(
        (response) => {
          expect(response.body.data).to.contain.keys("ownerId")
          expect(response.status).eq(this.testdata.okStatus);
          // expect(response.status).to.eq(422) 
        })
    })
  })
  {
    it('should not create contract if ownerId is missing ', function () {
      cy.request({
         method: this.testdata.put,
          url: this.testdata.UpdateAssetByID,
          headers: { "Cookie": this.testdata.btoken },
           failOnStatusCode: false
           }).then(
        (response) => {
          expect(response.status).eq(this.testdata.unprocessableEntityStatus);
        })
    })
  }
  {
    it('should not create contract if Token is missing ', function () {
      cy.request({ method: this.testdata.put, url: this.testdata.UpdateAssetByID, body: { ownerId: now } ,failOnStatusCode: false }).then(
        (response) => {
          expect(response.body).contain(this.testdata.uAuth)
        })
    })
  }
}
)
