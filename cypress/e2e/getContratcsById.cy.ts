describe('Automation Test Suite - Fixtures', function () {
    context('get /ContactbySeason', () => {
      this.beforeEach(function () {
        cy.fixture('testdata').then(function (testdata) {
          this.testdata = testdata;
        })
      })
        it('should successfully get Contract BySeason', function() {
            cy.request({
                method: 'GET', url: this.testcase.url2,
                headers: { "Cookie": this.testcase.token }, 
                failOnStatusCode: false
            }).then(
                (response) => {
                    expect(response.body.data.seasonName).contain(this.testcase.season)
                    expect(response.body.data.id).equals(1)
                    expect(response.body.data.assetType).contain(this.testcase.land)
                  
                })
        })
    })
})