describe('All assests', () => {
  context('GET /All assests', () => {
    it('should show All assests', () => {
      cy.request({
        method: 'GET', url: 'https://staging-gateway.wrld.xyz/assets', headers: { "Cookie": "token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTY1Mjc5MDI1NCwiZXhwIjoxNjg0MzI2MjU0fQ.2vIFGELbH54q12-b1SIMwm0Eh7BLmdJMpPEX3E2XYy0" }, failOnStatusCode: false
      }).then(
        (response) => {  

          
          //This line will verify th inputs property i.e.  plus the value of internal type i.e. unit256
          expect(response.body.data).to.have.property("result")
          expect(response.body.data).to.have.property("page")
          expect(response.body.data).to.have.property("total")
          expect(response.body.data).to.have.property("totalPages")
          expect(response.body.data.result[0]).to.have.property('id').equals(1)
          //expect(response.body.data.result[0].id).to.equal(1)
          expect(response.body.data.result[1].imageName).contain('https://staging-assets.wrld.xyz/staging/WLM3mCfReZUXlJ7DN4e5.png')
          //expect(response.body.data.result[1]).to.have.property('imageName')
          expect(response.body.data.result[2]).to.have.property('animationName')
          expect(response.body.data.result[3]).to.have.property('assetLocation')
          expect(response.body.data.result[4]).to.have.property('price')
          expect(response.body.data.result[5]).to.have.property('assetName')
          expect(response.body.data.result[6]).to.have.property('seasonName')
          expect(response.body.data.result[7]).to.have.property('assetStatus')
          expect(response.body.data.result[8]).to.have.property('isActive')
          expect(response.body.data.result[9]).to.have.property('lat')
          expect(response.body.data.result[10]).to.have.property('lon')
          expect(response.body.data.result[11]).to.have.property('createdBy')
          expect(response.body.data.result[12]).to.have.property('updatedBy')
          expect(response.status).to.eq(200);
        })
    });
  })
  {
    it('should not show All assests', () => {
      cy.request({ method: 'GET', url: 'https://staging-gateway.wrld.xyz/assets?', headers: {}, failOnStatusCode: false }).then(
        (response) => {
          expect(response.body).contain('Unauthorized') 
        })
    })
  }
  {
    it('should not show All assests', () => {
      cy.request({ method: 'GET', url: 'https://staging-gateway.wrld.xyz/assets?', headers: {"Cookie": ""}, failOnStatusCode: false }).then(
        (response) => {
          expect(response.body).contain('Unauthorized') 
        })
    })
  }
  {
    it('should not show All assests', () => {
      cy.request({ method: 'GET', url: 'https://staging-gateway.wrld.xyz/assets?', headers: {"Cookie": "token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTY1Mjc5MDI1NCwiZXhwIjoxNjg0MzI2MjU0fQ.2vIFGELbH54q12"}, failOnStatusCode: false }).then(
        (response) => {
          expect(response.body).contain('Unauthorized') 
        })
    })
  }
})