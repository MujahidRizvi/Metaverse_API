describe('get Contract information against ID', () => {
    context('PUT /getContract information ById', () => {
        it('should successfully Update Contract ID', () => {
            cy.request({
                method: 'PUT', url: 'https://staging-gateway.wrld.xyz/contracts/update/1',
                headers: { "Cookie": "token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTY1Mjc5MDI1NCwiZXhwIjoxNjg0MzI2MjU0fQ.2vIFGELbH54q12-b1SIMwm0Eh7BLmdJMpPEX3E2XYy0" },
                body: {"assetType": "land"}, failOnStatusCode: false
            }).then(
                (response) => {
                   //expect(response.body.data).to.have.property("seasonName")
                  expect(response.body.data).to.have.property('seasonName').contain('season-1')
                   expect(response.body.data).to.have.property('assetType').contain('land')
                    expect(response.body.data).to.have.key('id').contain('1')
                })
        });
    });
});