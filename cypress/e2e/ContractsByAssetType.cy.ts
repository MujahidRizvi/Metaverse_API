describe('Automation Test Suite - Fixtures', function () {
  context('get /Contracts by Asset Type', () => {
    this.beforeEach(function () {
      cy.fixture('data').then(function (testdata) {
        this.testdata = testdata;
      })
    })

      it('should show all contracts by asset type', function() {
        cy.request({
          method: this.testdata.get, url: this.testdata.ContractsbyAssetType, headers: { "Cookie": this.testdata.tokenA }, failOnStatusCode: false
        }).then(
          (response) => {
  
          expect(response.body.data[0]).to.contain.keys(this.testdata.AllContdefineorAssetTypeKeys)
            
          })
      })
    {
      it('should not show all contracts by asset type', function() {
       cy.request({method: this.testdata.get, url: this.testdata.ContractsbyAssetType, headers: {}, failOnStatusCode: false}).then(
         (response) => {
          expect(response.body).contain(this.testdata.uAuth) 
         })

         cy.request({method: this.testdata.get, url: this.testdata.ContractsbyAssetType, headers: {"Cookie": ""}, failOnStatusCode: false}).then(
           (response) => {
            expect(response.body).contain(this.testdata.uAuth)
           })
    
           cy.request({method: this.testdata.get, url:this.testdata.ContractsbyAssetType, headers: {"Cookie": this.testdata.invalidToken}, failOnStatusCode: false}).then(
            (response) => {
             expect(response.body).contain(this.testdata.uAuth)
            })
   })
   }
  })
})
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  