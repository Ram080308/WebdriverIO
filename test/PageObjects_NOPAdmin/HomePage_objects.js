class HomePage
{
    get adminTab() {return $("//a[@Id='menu_admin_viewAdminModule']")}
    get userMgmtTab() {return $("//a[@Id='menu_admin_UserManagement']")}
    get usersTab() {return $("//a[@Id='menu_admin_viewSystemUsers']")}

    // Action methods
    async clickUsersTab()
    {
        await (await this.adminTab).waitForDisplayed
        await browser.moveToElement(this.adminTab)
        await browser.pause(3000)
    }
}

module.exports = new  HomePage()