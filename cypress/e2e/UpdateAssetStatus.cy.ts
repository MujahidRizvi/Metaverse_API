
describe('Automation Test Suite - Fixtures', function () {
    context('get /UpdateAssetSTATUS', () => {
      this.beforeEach(function () {
        cy.fixture('testdata').then(function (testdata) {
          this.testdata = testdata;
        })
      })
        it('should successfully Update the assetstatus infomration', function() {
            cy.request({
                method: 'GET', url: this.testcase.updateasset,
                headers: { "Cookie": this.testcase.token },
                body: {"assetType": this.testdata.land }, 
                failOnStatusCode: false
            }).then(
                (response) => {


                })
        })
    })
})