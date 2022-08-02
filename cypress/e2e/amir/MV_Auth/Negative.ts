

describe('Signup New User api', () => {
    context('POST /signUp', () => {
        it('should successfully signUp a new user', () => {
            cy.request('POST', 'https://staging-gateway.wrld.xyz/auth/login?csrf-bypass=true', {providerKey:"0x6ebb625b6dc64614d87fa978e6fa7756843775b9", providerType:"wallet"}).then(
  (response) => {
    // response.body is automatically serialized into JSON
    //console.log(response.body)
    //expect(response.body.data).to.have.keys('userId', 'providerId', 'userScreenName', 'email', 'nonce')
    //expect(response.body.data).to.have.property('userId')
    expect(response.body.data.userId).equals(16)
    
    //expect(response.status).to.eq(422)
    
   
  }
)

        });
    });
});
