import Login from "../../pages/Login";

describe('User login', () => {
    const login = new Login();

    beforeEach(() => {
        cy.visit('/');

    }, [])

    it("Get token from the login", () => {
        const token = login.getTokenByLogin();
        token.then(body => {
            const newToken = body.token;
            cy.log('Token generated');
        })
    })

    it("Get status by login", () => {
        login.checkLoginApi();
        cy.log("Login API is working successfully");

    })
})