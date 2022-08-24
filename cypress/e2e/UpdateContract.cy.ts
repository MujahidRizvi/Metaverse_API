describe('Automation Test Suite - Fixtures', function () {
    context('get /ContactbySeason', () => {
      this.beforeEach(function () {
        cy.fixture('testdata').then(function (testdata) {
          this.testdata = testdata;
        })
      })
      
        it('should successfully Update Contract ID', function() {
            cy.request({
                method: 'PUT', url: this.testcase.url3,
                headers: { "Cookie": this.testcase.token },
                body: {"assetType": this.testdata.land }, failOnStatusCode: false
        }).then(
                (response) => {
                  expect(response.body.data).to.have.property(this.testcase.seasonname).contain(this.testcase.season)
                   expect(response.body.data).to.have.property(this.testcase.assettype).contain(this.testcase.land)
                    expect(response.body.data).to.have.key(this.testcase.id).contain(this.testcase.idvalue)
                  })
                })
            })
        })
                
           