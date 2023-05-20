class Login{
    clickLoginButton() {
        cy.get("#__next > div > div.home > div.header > div > nav > ul > div > li:nth-child(1)").click();
    }

    setEmail(email) {
        cy.get("#email").type(email)
    }

    setPass(password) {
        cy.get("#phone").type(password)
    }

    ClickLoginButtonFromAuthPage() {
        cy.get('#__next > div > div.auth_wrapper2_root > div > div > div > div.form_wrapper > div.submit_container > button').click();
    }
    
    doLogin(email, password) {
        this.clickLoginButton();
        this.setEmail(email);
        this.setPass(password);
        this.ClickLoginButtonFromAuthPage();
    }

    // VerifyAfterLogin() {
    //     cy.get("#user_menu").click();
    //     cy.get("#__next > div > section > section > main > div > div.top_title > h1").contains("You have total 6 projects under TS4U Projects organizations.");
    //     cy.get("User loggedin successfully!")
    // }

    //get token after login
    getTokenByLogin() {

        return cy.request({
            method: 'POST',
            url: 'https://api.agilealm.cloud/api/user/login',
            body: {
                "email": "rafiurprotik111@gmail.com",
                "password": "Test123$"
            }
        }).then((res) => {
            // expect(res.status).to.eq(200);
            console.log('token got');
            return res.body;
        })

    }


    //check login api 
    checkLoginApi() {
        cy.request({
            method: 'POST',
            url: 'https://api.agilealm.cloud/api/user/login',
            body: {
                "email": "rafiurprotik111@gmail.com",
                "password": "Test123$"
            }
        }).then((res) => {
            expect(res.status).to.eq(200)
        })
    }
}

export default Login;