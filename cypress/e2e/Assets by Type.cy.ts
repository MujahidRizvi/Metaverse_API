describe('Get Asset by Type', () => {
    context('GET /Asset Type', () => {
      it('should show Asset by Type', () => {
        cy.request({
          method: 'GET', url: 'https://staging-gateway.wrld.xyz/assets/getAssetsByType/land', headers: { "Cookie": "token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTY1Mjc5MDI1NCwiZXhwIjoxNjg0MzI2MjU0fQ.2vIFGELbH54q12-b1SIMwm0Eh7BLmdJMpPEX3E2XYy0" }, failOnStatusCode: false
        }).then(
          (response) => {
          
            expect(response.body.data[0]).to.have.property("id")
            expect(response.body.data[0]).to.have.property("contractId")
            expect(response.body.data[0]).to.have.property("ownerId")
            expect(response.body.data[0]).to.have.property("assetLocation")
            expect(response.body.data[0]).to.have.property("price")
            expect(response.body.data[0]).to.have.property("lat")
            expect(response.body.data[0]).to.have.property("lon")
            expect(response.body.data[0]).to.have.property("assetName")
            expect(response.body.data[0]).to.have.property("seasonName")
            expect(response.body.data[0]).to.have.property("assetType")
            expect(response.body.data[0]).to.have.property("assetStatus")
            expect(response.body.data[0]).to.have.property("imageName")
            expect(response.body.data[0]).to.have.property("animationName")
            expect(response.body.data[0]).to.have.property("isActive")
            expect(response.body.data[0]).to.have.property("createdBy")
            expect(response.body.data[0]).to.have.property("updatedBy")
            expect(response.body.data[0]).to.have.property("description")
            expect(response.body.data[0]).to.have.property("stickerName")
            expect(response.body.data[0]).to.have.property("createdAt")
            expect(response.body.data[0]).to.have.property("updatedAt")
            
          })
      });
    })
    {
      it('should not show Asset by Type', () => {
       cy.request({method: 'GET', url:'https://staging-gateway.wrld.xyz/assets/getAssetsByType/land', headers: {}, failOnStatusCode: false}).then(
         (response) => {
          expect(response.body).contain('Unauthorized') 
         })

         cy.request({method: 'GET', url:'https://staging-gateway.wrld.xyz/assets/getAssetsByType/land', headers: {"Cookie": "token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTY1Mjc5MDI1NCwiZXhwIjoxNjg0MzI2MjU0fQ.2vIFGELbH54q12-b1SIMwm0Eh7BLmdJMpPEX3E21234"}, failOnStatusCode: false}).then(
         (response) => {
          expect(response.body).contain('Unauthorized') 
         })

         cy.request({method: 'GET', url:'https://staging-gateway.wrld.xyz/assets/getAssetsByType/land', headers: {"Cookie":"" }, failOnStatusCode: false}).then(
         (response) => {
          expect(response.body).contain('Unauthorized') 
         })
   })
   }
  })
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  