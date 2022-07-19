describe('Get Asset by Type', () => {
    context('GET /Asset Type', () => {
      it('should show Asset by Type', () => {
        cy.request({
          method: 'GET', url: 'https://staging-gateway.wrld.xyz/assets/getAssetsByType/land', headers: { "Cookie": "token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTY1Mjc5MDI1NCwiZXhwIjoxNjg0MzI2MjU0fQ.2vIFGELbH54q12-b1SIMwm0Eh7BLmdJMpPEX3E2XYy0" }, failOnStatusCode: false
        }).then(
          (response) => {
            
            const ide = response.body.data
            return ide;
         
  
          }).then(
            (ide) => {
              
              for (let i=0; i<=ide.length; i++){
                cy.request({
                    method: 'GET', url: 'https://staging-gateway.wrld.xyz/assets/getAssetsByType/land', headers: { "Cookie": "token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTY1Mjc5MDI1NCwiZXhwIjoxNjg0MzI2MjU0fQ.2vIFGELbH54q12-b1SIMwm0Eh7BLmdJMpPEX3E2XYy0" }, failOnStatusCode: false
                  }).then(
                    (response) => {
                expect(response.body.data).to.have.property("lat")

            }) 
        
        }
            })
        
      });
    
    })

})