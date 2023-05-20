const BASE_URL = 'https://api.agilealm.cloud/api';

class Global {

    // typeInputData() {
    //     cy.get('#enter_title').type('test')
    //     cy.get('#description').type('test')
    //     // cy.get('#unassingned').focus().select('Rafiur Rahman Protik', {force:true})
    //     // cy.get('#unassingned').focus("Rafiur Rahman Protik")
    //     // .invoke("val")
    //     // .should("eq", "Rafiur Rahman Protik")
    //     cy.get('#effort').type('1 hour')
    //     cy.get('#business_value').type('sample')
    //     cy.get('.save').click();
    // }

    getMethod(secondUrl, slug_id, newToken, statusCode, log) {
        cy.request({
            method: 'GET',
            url: `${BASE_URL}/${secondUrl}/${slug_id}`,
            headers: {
                authorization: 'Bearer ' + newToken
            }
        }).then((res) => {
            expect(res.status).to.eq(statusCode)
            cy.log(log)
        })
    }
}

const global = new Global();

export default global;