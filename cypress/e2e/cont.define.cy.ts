describe('contracts defined', () => {
  context('GET /contracts', () => {
    it('should show contracts', () => {
      cy.request({
        method: 'GET', url: 'https://staging-gateway.wrld.xyz/contracts', headers: { "Cookie": "token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTY1Mjc5MDI1NCwiZXhwIjoxNjg0MzI2MjU0fQ.2vIFGELbH54q12-b1SIMwm0Eh7BLmdJMpPEX3E2XYy0" }, failOnStatusCode: false
      }).then(
        (response) => {
        //This line will verify th inputs property i.e. internalType plus the value of internal type i.e. unit256

        expect(response.body.data[0]).to.have.property("id")
        expect(response.body.data[0]).to.have.property("seasonName")
        expect(response.body.data[0]).to.have.property("assetType")
        expect(response.body.data[0]).to.have.property("contractAddress")
        expect(response.body.data[0]).to.have.property("createdBy")
        expect(response.body.data[0]).to.have.property("updatedBy")
        expect(response.body.data[0]).to.have.property("isActive")
        expect(response.body.data[0]).to.have.property("description")
        expect(response.body.data[0]).to.have.property("categoryId")
        expect(response.body.data[0]).to.have.property("payoutAddress")
        expect(response.body.data[0]).to.have.property("sellerFee")
        expect(response.body.data[0]).to.have.property("updatedAt")
        expect(response.body.data[0]).to.have.property("createdAt")
        expect(response.body.data[0]).to.have.property("blockNumber")
        expect(response.body.data[0]).to.have.property("name")
        expect(response.body.data[0]).to.have.property("logoImage")
        expect(response.body.data[0]).to.have.property("featuredImage")
        expect(response.body.data[0]).to.have.property("bannerImage")


        expect(response.body.data[0].contractAbi[0]).to.have.property("inputs")
        expect(response.body.data[0].contractAbi[0]).to.have.property("stateMutability")
        expect(response.body.data[0].contractAbi[0]).to.have.property("type")

        expect(response.body.data[0].contractAbi[0].inputs[0]).to.have.property("internalType")
        expect(response.body.data[0].contractAbi[0].inputs[0]).to.have.property("name")
        expect(response.body.data[0].contractAbi[0].inputs[0]).to.have.property("type")

         /* expect(response.body.data[0].contractAbi[0].inputs[0]).to.have.property("internalType")
          expect(response.body.data[0].contractAbi[0]).to.have.property("stateMutability")
        //Whereas this line will only verify the value inside internalType
          expect(response.body.data[1].contractAbi[1].inputs[0].internalType).contains('uint256')
          expect(response.body.data[0].contractAbi[0].inputs[0]).to.have.keys('internalType', 'name', 'type')
          expect(response.body.data[1].contractAbi[1].inputs[0].type).contain('uint256')
          expect(response.body.data[0].contractAbi[0].inputs[0].name).contain('_mintSupplyLimit')
          expect(response.body.data[0].contractAbi[1]).to.have.property('type').contain('error')
          expect(response.body.data[0].contractAbi[1].name).contain('DroneMintSupplyReached');
          expect(response.status).to.eq(200);*/
        })
    });
  })
  {
    it('should not show contracts', () => {
     cy.request({method: 'GET', url:'https://staging-gateway.wrld.xyz/contracts', headers: {}, failOnStatusCode: false}).then(
       (response) => {
        expect(response.body).contain('Unauthorized') 
       })
 })
 }
})














