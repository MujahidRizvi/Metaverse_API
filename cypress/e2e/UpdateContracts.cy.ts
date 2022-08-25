
describe('Automation Test Suite - Fixtures', function () {
    context('get /UpdateAssetSTATUS', () => {
      this.beforeEach(function () {
        cy.fixture('testdata').then(function (testdata) {
          this.testdata = testdata;
        })
      })
        it('should successfully Update the assetstatus infomration', function() {
            cy.request({
                method: 'PUT', url: this.testdata.updatecontracts,
                headers: { "Cookie": this.testdata.token },
                body: {"assetType": this.testdata.land }, 
                failOnStatusCode: false
            }).then(
              (response) => {
                //expect(response.body.data).to.have.property(this.testdata.seasonname).contain(this.testdata.season)
                 //expect(response.body.data).to.have.property(this.testdata.assettype).contain(this.testdata.land)
                  //expect(response.body.data).to.have.property(this.testdata.id).contain(this.testdata.idvalue)
                  expect(response.body.data).to.have.property(this.testdata.id)
                  expect(response.body.data).to.have.property(this.testdata.seasonname)
                })
        })
    })
})