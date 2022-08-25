describe('Automation Test Suite - Fixtures', function () {
    context('get /ContactbySeason', () => {
      this.beforeEach(function () {
        cy.fixture('testdata').then(function (testdata) {
          this.testdata = testdata;
        })
      })
        it('should successfully get Contract BySeason', function() {
            cy.request({
                method: 'GET', url: this.testdata.url2,
                headers: { "Cookie": this.testdata.token }, 
                failOnStatusCode: false
            }).then(
                (response) => {
                    expect(response.body.data.seasonName).contain(this.testdata.season)
                    expect(response.body.data.id).equals(1)
                    expect(response.body.data.assetType).contain(this.testdata.land)
                  
                })
        })
    })
})