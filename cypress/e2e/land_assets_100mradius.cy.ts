describe('All assests', () => {
  context('GET /All assests in 100m radius', () => {
    it('should show All assestsin 100m radius', () => {
      cy.request({
        method: 'GET', url: 'https://staging-gateway.wrld.xyz/assets/getAssetsByTypeAndLatLonRadius/?assetType=land&lat=0.004204819&lon=0.02794890&radius=100', headers: { "Cookie": "token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTY1Mjc5MDI1NCwiZXhwIjoxNjg0MzI2MjU0fQ.2vIFGELbH54q12-b1SIMwm0Eh7BLmdJMpPEX3E2XYy0" }, failOnStatusCode: false
      }).then(
        (response) => {
          //This line will verify th inputs property i.e.  plus the value of internal type i.e. unit256
          expect(response.body.data).to.have.property("result")
          expect(response.body.data).to.have.property("page")
          expect(response.body.data).to.have.property("total")
          expect(response.body.data).to.have.property("totalPages")
          expect(response.body.data.result[0]).to.have.property('imageName')
          expect(response.body.data.result[0]).to.have.property('animationName')
          expect(response.body.data.result[0]).to.have.property('contractId')
          expect(response.body.data.result[0]).to.have.property('ownerId')
          expect(response.body.data.result[0]).to.have.property('assetLocation')
          expect(response.body.data.result[0]).to.have.property('price')
          expect(response.body.data.result[0]).to.have.property('assetName')
          expect(response.body.data.result[0]).to.have.property('assetType')
          expect(response.body.data.result[0]).to.have.property('seasonName')
          expect(response.body.data.result[0]).to.have.property('assetStatus')
          expect(response.body.data.result[0]).to.have.property('isActive')
          expect(response.body.data.result[0]).to.have.property('distance')
          expect(response.body.data.result[0]).to.have.property('lat')
          expect(response.body.data.result[0]).to.have.property('lon')
          expect(response.status).to.eq(200);
        
          
        })
    });
  })
  {
    it('should not show All assests in 100m radius', () => {
      cy.request({ method: 'GET', url: 'https://staging-gateway.wrld.xyz/assets/getAssetsByTypeAndLatLonRadius/?assetType=land&lat=0.004204819&lon=0.02794890&radius=100', headers: {}, failOnStatusCode: false }).then(
        (response) => {
          expect(response.body).contain('Unauthorized') 
        })
    })
  }
  {
    it('should not show All assests in 100m radius', () => {
      cy.request({ method: 'GET', url: 'https://staging-gateway.wrld.xyz/assets/getAssetsByTypeAndLatLonRadius/?assetType=land&lat=0.004204819&lon=0.02794890&radius=100', headers: {"Cookie": ""}, failOnStatusCode: false }).then(
        (response) => {
          expect(response.body).contain('Unauthorized') 
        })
    })
  }
  {
    it('should not show All assests in 100m radius', () => {
      cy.request({ method: 'GET', url: 'https://staging-gateway.wrld.xyz/assets?', headers: {"Cookie": "token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTY1Mjc5MDI1NCwiZXhwIjoxNjg0MzI2MjU0fQ.2vIFGELbH54q12"}, failOnStatusCode: false }).then(
        (response) => {
          expect(response.body).contain('Unauthorized') 
        })
    })
  }
})