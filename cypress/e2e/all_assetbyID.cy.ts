describe('Automation Test Suite - Fixtures', function () {
  context('get /All assets', () => {
    this.beforeEach(function () {
      cy.fixture('object_Data').then(function (testdata) {
        this.testdata = testdata;
      })
    })
    it('should show All assests By ID',function () {
      cy.request({
        method: this.testdata.get, url: this.testdata.allAssestsByID,  headers: { "Cookie": this.testdata.btoken }, failOnStatusCode: false
      }).then(
        (response) => {
         
          expect(response.body.data).to.contain.keys(this.testdata.resultPropertiesByID)
          expect(response.status).eq(this.testdata.okStatus);
        })
    });
  })
  {
    it('should not show All assests By ID',function () {
      cy.request({method: this.testdata.get, url: this.testdata.allAssestsByID, headers: {}, failOnStatusCode: false }).then(
        (response) => {
          expect(response.body).contain(this.testdata.uAuth)
        })
    })
  }
  {
    it('should not show All assests By ID', function (){
      cy.request({ method: this.testdata.get, url: this.testdata.allAssestsByID, headers: {"Cookie": ""}, failOnStatusCode: false }).then(
        (response) => {
          expect(response.body).contain(this.testdata.uAuth)
        })
    })
  }
  {
    it('should not show All assests By ID', function () {
      cy.request({ method: this.testdata.get, url: this.testdata.allAssestsByID, headers: { "Cookie": this.testdata.invalidbtoken }, failOnStatusCode: false }).then(
        (response) => {
          expect(response.body).contain(this.testdata.uAuth)
        })
    })
  }
})