import Login from "../../pages/Login";
import Project from "../../pages/Project";

const BASE_URL = 'https://api.agilealm.cloud/api';


describe('User login', () => {
    const login = new Login();
    const project = new Project();

    //@desc get all projects for "TS4U Projects" organization
    //@method GET
    it('Get projects for TS4U Projects Organization', () => {

        const ts4u_organization = 'TS4U-Projects';

        const token = login.getTokenByLogin();
        token.then(body => {
            const newToken = body.token;
            // console.log('newToken', newToken);

            // const token = "20eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MmJjMzdlMjQ5NWFhMDk1N2QzMjVjZGUiLCJlbWFpbCI6InJhZml1cnByb3RpazExMUBnbWFpbC5jb20iLCJpYXQiOjE2ODQ1NjcxMjAsImV4cCI6MTY4NTE3MTkyMH0.6FzsIHHBswpmMt_yIucWqK5CPQqnMyTo-SdyhDEZr5M"

            cy.request({
                method: 'GET',
                url: `${BASE_URL}/project/byorganization/${ts4u_organization}`,
                headers: {
                    authorization: 'Bearer ' + newToken
                }
            }).then((res) => {
                expect(res.status).to.eq(201)
                cy.log("Projects fetched from api successfully")
            })

            // project.getProjects(newToken, ts4u_organization)

        })
    })
})