import Login from "../../pages/Login";

describe('User login', () => {
    const login = new Login();

    it('do login', () => {
        cy.visit('');
        login.clickLoginButton();
        login.setEmail('rafiurprotik111@gmail.com');
        login.setPass('Test123$');
        login.ClickLoginButtonFromAuthPage();
    })

    it("Login with fixture", () => {
        cy.visit('');
        cy.fixture('userLoginData').then((data) => {
            login.clickLoginButton();
            login.setEmail(data.email);
            login.setPass(data.password);
            login.ClickLoginButtonFromAuthPage();
        })
    })

    it("Login with fixture and singleMethod", () => {
        cy.visit('');
        cy.fixture('userLoginData').then((data) => {
            login.doLogin(data.email, data.password);
            cy.log("Logged in with doLogin method")
        })
    })

    it.only("Get token from the login", () => {
        cy.visit('/');
        login.getTokenByLogin();
    })
})