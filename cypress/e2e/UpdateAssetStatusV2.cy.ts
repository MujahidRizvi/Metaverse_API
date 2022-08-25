describe('Automation Test Suite - Fixtures', function () {
    context('PUT /ContactbySeason', () => {
      this.beforeEach(function () {
        cy.fixture('testdata').then(function (testdata) {
          this.testdata = testdata;
        })
      })
      
      it('should update asset status', function () {
        cy.request({
          method: this.testdata.put,
          url: this.testdata.updateasset,
          headers: { Cookie: this.testdata.token },
          body: { assetStatus: this.testdata.assetstatus },
          failOnStatusCode: false
        }).then(
                (response) => {
                  //expect(response.body.data).to.have.property(this.testdata.seasonname)
                  expect(response.body.data.assetStatus).to.contain(this.testdata.assetstatus)
                  //expect(response.body.data).to.contain.keys(this.testdata.seasonname).keys(this.testdata.season)
                  // expect(response.body.data).to.have.property(this.testdata.assettype).contain(this.testdata.land)
                   // expect(response.body.data).to.have.key(this.testdata.id).contain(this.testdata.idvalue)
                  })
                })
            })
        })
                
           