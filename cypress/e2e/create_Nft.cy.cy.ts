

describe('Automation Test Suite - Fixtures', function () {
  context('post /NFT', () => {
    this.beforeEach(function () {
      cy.fixture('object_Data').then(function (testdata) {
        this.testdata = testdata;
      })
    })
    it('should create a new contract', function ()  {
      cy.request({method: this.testdata.post, url: this.testdata.contrctURL, body:  { seasonName: this.testdata.Season-1, assetType: this.testdata.land, contractAddress: "", sellerFee:"" }, failOnStatusCode: false}).then(
        (response) => {
          expect(response.body.data).to.contain.keys(this.testdata.contractProperty),
          expect(response.body.contractAbi).to.contain.keys(this.testdata.inputs),
          expect(response.body.inputs).to.have.property(this.testdata.contractInputs),
          expect(response.body.type).to.have.property(this.testdata.type),
          expect(response.body.internalType).to.have.property(this.testdata.internalType),
          expect(response.body.name).to.have.property(this.testdata.name)
          expect(response.body).contain(this.testdata.okStatus)
          //expect(response.status).to.eq(422) 
        })
    });
  })
  {
    it('should not create contract if seasonName is missing ', function () {
      cy.request({method: this.testdata.post, url: this.testdata.contrctURL, body:  {  assetType: this.testdata.land, contractAddress: "", sellerFee:"" }, failOnStatusCode: false}).then(
       (response) => {
        expect(response.body).contain(this.testdata.uAuth)
       })
 })
 } 
 {
  it('should not create contract if assetType is missing ',function ()  {
    cy.request({method: this.testdata.post, url: this.testdata.contrctURL, body:  {  seasonName: this.testdata.Season-1, contractAddress: "", sellerFee: "" }, failOnStatusCode: false}).then(
     (response) => {
      expect(response.body).contain(this.testdata.uAuth)
     })
})
} 
{
  it('should not create contract if contractAddress is missing ',function ()  {
    cy.request({method: this.testdata.post, url: this.testdata.contrctURL, body:  {  seasonName: this.testdata.Season-1, assetType: this.testdata.land,  sellerFee: "" }, failOnStatusCode: false}).then(
     (response) => {
      expect(response.body).contain(this.testdata.uAuth)
     })
})
} 
{
  it('should not create contract if sellerFee is missing ', function () {
    cy.request({method: this.testdata.post, url: this.testdata.contrctURL, body:  {seasonName: this.testdata.Season-1, assetType: this.testdata.land, contractAddress: ""}, failOnStatusCode: false}).then(
     (response) => {
      expect(response.body).contain(this.testdata.uAuth)
     
     })
})
} 
  
});
