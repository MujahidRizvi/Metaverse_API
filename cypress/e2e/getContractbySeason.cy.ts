describe('Automation Test Suite - Fixtures', function () {
    context('get /ContactbySeason', () => {
      this.beforeEach(function () {
        cy.fixture('testdata').then(function (testdata) {
          this.testdata = testdata;
        })
      })

        it('should successfully get Contract ID', function() {
            cy.request({
                method: this.testdata.get, url: this.testdata.url,
                headers: { "Cookie": this.testdata.token },
                failOnStatusCode: false
            }).then(
                (response) => {

                 expect(response.body.data[0]).to.contain.keys(this.testdata.seasonname)
                 
                })
        })
    })
})
    

