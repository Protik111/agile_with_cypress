import Login from "../../pages/Login";
import Organization from "../../pages/Organization";

describe('User organization', () => {
    const org = new Organization();
    const login = new Login();

    beforeEach(() => {
        cy.visit('/');
    });

    it('Checking organization menus count', () => {
        cy.fixture('userLoginData').then((data) => {
            login.doLogin(data.email, data.password);
            // cy.log("Logged in with doLogin method")
        })
        org.checkLeftMenusCount();
    })

    it('Checking organization menus text', () => {
        cy.fixture('userLoginData').then((data) => {
            login.doLogin(data.email, data.password);
            // cy.log("Logged in with doLogin method")
        })
        org.checkLeftMenusText();
    })
})