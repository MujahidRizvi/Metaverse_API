describe('Automation Test Suite - Fixtures', function () {
    context('get /Export Land', () => {
      this.beforeEach(function () {
        cy.fixture('data').then(function (testdata) {
          this.testdata = testdata;
        })
      })
          it('should export land', function()  {
            cy.request({
              method: this.testdata.get, url: this.testdata.ExportLand, headers: { "Cookie": this.testdata.tokenA }, failOnStatusCode: false
            }).then(
              (response) => {
                expect(response.body.data).to.contain.keys(this.testdata.ExportLandKeys)
              
              })
        })
        
      {
        it('should not export land', function()  {
        cy.request({method: this.testdata.get, url: "https://staging-services.wrld.xyz/assets/export/", headers: {}, failOnStatusCode: false}).then(
          (response) => {
            expect(response.status).eq(404) 
          })
    })
    } 
    {  
        it('should not export land', function()  {
        cy.request({method: this.testdata.get, url: "https://staging-services.wrld.xyz/assets/export/", headers: {}, failOnStatusCode: false}).then(
        (response) => {
          expect(response.body).contain("Cannot GET /assets/export/") 
        })
  })
  }
  {  
     it('should not export land', function()  {
    cy.request({method: this.testdata.get, url: this.testdata.InValidURL, headers: {}, failOnStatusCode: false}).then(
    (response) => {
      const parser = new DOMParser();
              const dom = parser.parseFromString(response.body, 'text/html');
              expect(dom.querySelector('title')).to.contain('Error') 
    })
})
}
      })
    })
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      