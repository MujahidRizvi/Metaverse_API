

describe('get Contract information against Season', () => {
    context('Get /getContract information BySeason', () => {
        it('should successfully get Contract BySeason', () => {
            cy.request({
                method: 'GET', url: 'https://staging-gateway.wrld.xyz/contracts/getContractById/1',
                headers: { "Cookie": "token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTY1Mjc5MDI1NCwiZXhwIjoxNjg0MzI2MjU0fQ.2vIFGELbH54q12-b1SIMwm0Eh7BLmdJMpPEX3E2XYy0" }, 
                failOnStatusCode: false
            }).then(
                (response) => {
                    expect(response.body.data.seasonName).contain("season-1")
                    expect(response.body.data.id).equals(1)
                    expect(response.body.data.assetType).contain("land")
                  
                })
        });
    });
});