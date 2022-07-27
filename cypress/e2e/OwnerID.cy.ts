  describe('Get Asset by Owner ID', () => {
      context('GET /Owner ID', () => {
        it('should show Asset by Owner ID', () => {
          cy.request({
            method: 'GET', url: 'https://staging-gateway.wrld.xyz/assets/getAssetsByOwner/:id', headers: { "Cookie": "token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTY1Mjc5MDI1NCwiZXhwIjoxNjg0MzI2MjU0fQ.2vIFGELbH54q12-b1SIMwm0Eh7BLmdJMpPEX3E2XYy0" }, failOnStatusCode: false
          }).then(
            (response) => {
            //This line will verify th inputs property i.e. internalType plus the value of internal type i.e. unit256
              expect(response.body.data).to.have.property("result")
              expect(response.body.data).to.have.property("total")
              expect(response.body.data).to.have.property("page")
              expect(response.body.data).to.have.property("totalPages")
            
            })
        });
      })
      {
        it('should not show Asset by Owner ID', () => {
        cy.request({method: 'GET', url:'https://staging-gateway.wrld.xyz/assets/getAssetsByOwner/:id', headers: {}, failOnStatusCode: false}).then(
          (response) => {
            expect(response.body).contain('Unauthorized') 
          })

          cy.request({method: 'GET', url:'https://staging-gateway.wrld.xyz/assets/getAssetsByOwner/:id', headers: {"Cookie": "token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTY1Mjc5MDI1NCwiZXhwIjoxNjg0MzI2MjU0fQ.2vIFGELbH54q12-b1SIMwm0Eh7BLmdJMpPEX3E21234"}, failOnStatusCode: false}).then(
          (response) => {
            expect(response.body).contain('Unauthorized') 
          })
    })
    }
    })
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    