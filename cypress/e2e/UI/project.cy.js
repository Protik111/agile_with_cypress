import Login from "../../pages/Login";
import Project from "../../pages/Project";

describe('Work Items table datacheck', () => {
    const login = new Login();
    const project = new Project();

    beforeEach(() => {
        cy.visit('');
    })

    it("check", () => {
        // cy.visit('');
        cy.fixture('userLoginData').then((data) => {
            login.doLogin(data.email, data.password);
            cy.log("Logged in with doLogin method")
        })

        project.clickOnProject("#__next > div > section > section > main > div > div.project_card_wrapper > div:nth-child(2)");

        //work items menu
        project.clickOnWorkItems();


        project.checkTableHeader();
        project.checkTableHeaderText();

    })
})