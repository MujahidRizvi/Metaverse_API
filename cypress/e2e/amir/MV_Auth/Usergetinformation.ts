

describe('getUserBySessionToken should return user against session token', () => {
    context('Get /getUserBySessionToken', () => {
        it('should successfully getUserBySessionToken', () => {
            cy.request({
                method: 'GET', url: 'https://staging-gateway.wrld.xyz/users/GetUserbySessionToken/?csrf-bypass=true', headers: { "Cookie": "token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjE3LCJpYXQiOjE2NTM1NzEwNjIsImV4cCI6MTY1NDE3NTg2Mn0.jLMA9NbBjkiZVnaZ7BfN3WQu8rrEhhxBzv4ZiL-KNsw" }, body: {
                    providerKey: "0x6ebb625b6dc64614d87fa978e6fa7756843775b9", providerType: "wallet"
                }
            }).then(
                (response) => {
                    expect(response.body.data.id).equals(17)
                })
        });

        it('user only input the providerKey and misses  providerType param', () => {
            cy.request({
                method: 'GET', url: 'https://staging-gateway.wrld.xyz/users/GetUserbySessionToken/?csrf-bypass=true', headers: { "Cookie": "token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjE3LCJpYXQiOjE2NTM1NzEwNjIsImV4cCI6MTY1NDE3NTg2Mn0.jLMA9NbBjkiZVnaZ7BfN3WQu8rrEhhxBzv4ZiL-KNsw" }, body: {
                    providerKey: "0x6ebb625b6dc64614d87fa978e6fa7756843775b9", failOnStatusCode: false
                }
            }).then(
                (response) => {
                    expect(response.status).to.eq(200)
                })
        });

        it('user input the invalid Token', () => {
            cy.request({
                method: 'GET', url: 'https://staging-gateway.wrld.xyz/users/GetUserbySessionToken/?csrf-bypass=true', headers: { "Cookie": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjE3LCJpYXQiOjE2NTM1NzEwNjIsImV4cCI6MTY1NDE3NTg2Mn0.jLMA9NbBjkiZVnaZ7BfN3WQu8rrEhhxBzv4ZiL-KNsw" }, failOnStatusCode: false
                
            }).then(
                (response) => {
                    expect(response.body.error).to.have.property('message')
                    expect(response.body.error.message).contains('Not authenticated.')
                })
        });

        it('user inputs the valid providerType and leaves the providerKey param EMPTY', () => {
            cy.request({
                method: 'GET', url: 'https://staging-gateway.wrld.xyz/users/GetUserbySessionToken/?csrf-bypass=true', headers: { "Cookie": "token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjE3LCJpYXQiOjE2NTM1NzEwNjIsImV4cCI6MTY1NDE3NTg2Mn0.jLMA9NbBjkiZVnaZ7BfN3WQu8rrEhhxBzv4ZiL-KNsw" }, body: {
                    providerKey: "", providerType: "wallet",failOnStatusCode: false
                }
            }).then(
                (response) => {
                    expect(response.status).to.eq(200)
                    expect(response.body.success).to.eq(true)
                })
        });



    });
});