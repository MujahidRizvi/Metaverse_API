describe('All assests', () => {
  context('GET /All assestsbyID', () => {
    it('should show All assests By ID', () => {
      cy.request({
        method: 'GET', url: 'https://staging-gateway.wrld.xyz/assets/GetById/1', headers: { "Cookie": "token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTY1Mjc5MDI1NCwiZXhwIjoxNjg0MzI2MjU0fQ.2vIFGELbH54q12-b1SIMwm0Eh7BLmdJMpPEX3E2XYy0" }, failOnStatusCode: false
      }).then(
        (response) => {
         
          expect(response.body.data).to.have.property("id")
          expect(response.body.data).to.have.property("contractId")
          expect(response.body.data).to.have.property('assetLocation')
          expect(response.body.data).to.have.property('price')
          expect(response.body.data).to.have.property('lat')
          expect(response.body.data).to.have.property('lon')
          expect(response.body.data).to.have.property('assetName')
          expect(response.body.data).to.have.property('seasonName')
          expect(response.body.data).to.have.property('assetType')
          expect(response.body.data).to.have.property('assetStatus')
          expect(response.body.data).to.have.property('lat')
          expect(response.body.data).to.have.property('animationName')
          expect(response.body.data).to.have.property('isActive')
          expect(response.body.data).to.have.property('createdBy')
          expect(response.body.data).to.have.property('updatedBy')
          expect(response.status).to.eq(200);
        })
    });
  })
  {
    it('should not show All assests By ID', () => {
      cy.request({ method: 'GET', url: 'https://staging-gateway.wrld.xyz/assets/GetById/1', headers: {}, failOnStatusCode: false }).then(
        (response) => {
          expect(response.body).contain('Unauthorized') 
        })
    })
  }
  {
    it('should not show All assests By ID', () => {
      cy.request({ method: 'GET', url: 'https://staging-gateway.wrld.xyz/assets/GetById/1', headers: {"Cookie": ""}, failOnStatusCode: false }).then(
        (response) => {
          expect(response.body).contain('Unauthorized') 
        })
    })
  }
  {
    it('should not show All assests By ID', () => {
      cy.request({ method: 'GET', url: 'https://staging-gateway.wrld.xyz/assets/GetById/1', headers: {"Cookie": "token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTY1Mjc5MDI1NCwiZXhwIjoxNjg0MzI2MjU0fQ.2vIFGELbH54q12"}, failOnStatusCode: false }).then(
        (response) => {
          expect(response.body).contain('Unauthorized') 
        })
    })
  }
})