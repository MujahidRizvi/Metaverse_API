describe('Get Asset by Season Name', () => {
  context('GET /Season Name', () => {
    it('should show Asset by Season Name', () => {
      cy.request({
        method: 'GET', url: 'https://staging-gateway.wrld.xyz/assets/getAssetsBySeason/season-1', headers: { "Cookie": "token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTY1Mjc5MDI1NCwiZXhwIjoxNjg0MzI2MjU0fQ.2vIFGELbH54q12-b1SIMwm0Eh7BLmdJMpPEX3E2XYy0" }, failOnStatusCode: false
      }).then(
        (response) => {
          expect(response.body.data[0]).to.have.keys("id","contractId","ownerId","assetLocation","price","lat","lon","assetName","seasonName","assetType","assetStatus","imageName","animationName","isActive","createdBy","updatedBy","description","stickerName","createdAt","updatedAt")
          
        })
    });
  })
  {
    it('should not show Asset by Season Name', () => {
     cy.request({method: 'GET', url:'https://staging-gateway.wrld.xyz/assets/getAssetsBySeason/season-1', headers: {}, failOnStatusCode: false}).then(
       (response) => {
        expect(response.body).contain('Unauthorized')
       })

       cy.request({method: 'GET', url:'https://staging-gateway.wrld.xyz/assets/getAssetsBySeason/season-1', headers: {"Cookie": ""}, failOnStatusCode: false}).then(
       (response) => {
        expect(response.body).contain('Unauthorized')
       })

       cy.request({method: 'GET', url:'https://staging-gateway.wrld.xyz/assets/getAssetsBySeason/season-1', headers: {"Cookie": "token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTY1Mjc5MDI1NCwiZXhwIjoxNjg0MzI2MjU0fQ.2vIFGELbH54q12-b1SIMwm0Eh7BLmdJMpPEX3E21234"}, failOnStatusCode: false}).then(
        (response) => {
         expect(response.body).contain('Unauthorized')
        })

 })
 }
})