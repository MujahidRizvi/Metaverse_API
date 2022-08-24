describe('Automation Test Suite - Fixtures', function () {
    context('post /Import Land', () => {
      this.beforeEach(function () {
        cy.fixture('data').then(function (testdata) {
          this.testdata = testdata;
        })
      })
          it('should import land', function()  {
            cy.request({
              method: this.testdata.post, url: this.testdata.landimport, 
            }).then(
              (response) => {
                expect(response.body.data).to.contain.keys(this.testdata.LandKeys)
              })
        })
        {
          it('should not import land', function()  {
          cy.request({method: this.testdata.get, url: this.testdata.UploadFiles, failOnStatusCode: false}).then(
            (response) => {
              expect(response.body).contain(this.testdata.uAuth)
            })
            cy.request({method: this.testdata.get, url:this.testdata.InValidURL, failOnStatusCode: false}).then(
            (response) => {
              expect(response.body).contain(this.testdata.MissingParamURL)
            })
      })
      }
      })
    })