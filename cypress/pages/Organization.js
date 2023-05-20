const organizationMenus = ["TS4U_Projects", "IT_Training_Aug_22", "Test_Organization", "Test_Organization_2", "Lork_Test", "Feb_2023_IT_Bootcamp",];


// const name= "rafiur_rahman";
// console.log(name.split("_").join(" "))

class Organization {
    // constructor(menus) {
    //     this.menus = menus;
    // }

    checkLeftMenusCount() {
        cy.xpath('//*[@id="__next"]/div/section/aside/div/ul/li').should("have.length", 9)
    }

    checkLeftMenusText() {
        // cy.get("#TS4U_Projects > span > div")
        // cy.get('#IT_Training_Aug_22 > span > div')
        // cy.get('#Test_Organization > span > div')
        // #My_SQE_Sandbox_ > span > div

        organizationMenus.forEach(ele => cy.get(`#${ele} > span > div`).should('be.visible').and('contain', ele.split("_").join(" ")))
    }

    
}

export default Organization;