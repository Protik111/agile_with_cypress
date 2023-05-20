describe('Dropdown', () => {

    it("handling dropdowns in ", () => {

        cy.visit("https://www.startech.com.bd/desktops")


        //clicking on sidebar dropdown menu
        // cy.get("#__next > div > div.MuiBox-root.css-0 > div > nav > div > div > div > ul > div.MuiCollapse-root.MuiCollapse-vertical.MuiCollapse-entered.css-c4sutr > div > div > div > div:nth-child(7) > div.MuiListItemText-root.css-1tsvksn > span").click();

        cy.get("#input-sort").select('Price (Low > High)', {force: true}).should('have.value', 'p.price-ASC')

    })

    it('Dropdown from automation', () => {
        cy.visit("https://staging-ecom.techserve4u.com/")


        cy.get("#header > div.main_nav_container > nav.main_nav > div > div.search_wrapper > input").type("iphone");

        cy.get("#header > div.main_nav_container > nav.main_nav > div > div.search_wrapper > i").click();

        cy.get("#search > div > div > div.col-lg-9.col-md-12 > div.shop_by > div.shop_by_content > div:nth-child(1) > a").click();

        //clicking select menu
        cy.get("#product_details > div > div > div.col-md-9.col-sm-12 > div.row.background_white > div.col-md-6.col-sm-12.product_info.mt-3 > div.attributes > div:nth-child(2) > div > span.ant-select-selection-item").click();

        cy.get('[title="8"]').click()

        cy.get('.ant-select-focused > .ant-select-selector > .ant-select-selection-item').should('have.text', '8')
    })
})