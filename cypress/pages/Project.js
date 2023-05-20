import global from "./Global";

const tableHeader = ["ID", "Title", "State", "Type", "Assigned To", "Area", "Iteration", "Actions"];

class Project {
    clickOnProject(locator) {
        cy.get(locator).click();
    }

    clickOnWorkItems() {
        cy.xpath("//span[contains(text(),'Work Items')]").click();
    }

    checkTableHeader() {
        cy.wait(10000)
        cy.xpath(`//thead[@class='ant-table-thead']//tr//th`).should('have.length', 8)
    }

    checkTableHeaderText() {
        cy.xpath(`//th[normalize-space()='ID']`).should('contain', "ID")

        tableHeader.forEach(item => cy.xpath(`//th[normalize-space()='${item}']`).should('contain', item))
    }




    //API methods

     //get all projects for TS4U projects organization
     getProjects(newToken, ts4u_organization) {

        global.getMethod('project/byorganization', ts4u_organization, newToken, 201, 'Projects fetched from api successfully')
    }
}

export default Project;