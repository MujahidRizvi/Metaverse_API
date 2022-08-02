describe('get Contract information against ID', () => {
    context('Get /getContract information ById', () => {
        it('should successfully get Contract ID', () => {
            cy.request({
                method: 'GET', url: 'https://staging-gateway.wrld.xyz/contracts/getContractsBySeason/Season-1',
                headers: { "Cookie": "token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTY1Mjc5MDI1NCwiZXhwIjoxNjg0MzI2MjU0fQ.2vIFGELbH54q12-b1SIMwm0Eh7BLmdJMpPEX3E2XYy0" },
                failOnStatusCode: false
            }).then(
                (response) => {
                    expect(response.body.data[0].seasonName).contain('Season-1')
                })
        });
    });
});