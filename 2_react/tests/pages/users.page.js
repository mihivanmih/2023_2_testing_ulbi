const Page = require('./page');

class UsersPage extends Page {
    
    get loadingTitle () {
        return $('#users-loading');
    }
    get usersLit () {
        return $('#users-list');
    }
    get usersItems () {
       // return browser.react$$('User')
        return $$('.user-del')
    }
    
    // async testUsersItems() {
    //     const usersCount = await this.usersItems.length
    //     if(!usersCount) {
    //         throw new Error('Пользователи не найдены')
    //     }
    //     await this.usersItems[0].click()
    // }
    
    async loadData() {
        try {
            await this.open()
            await this.loadingTitle.waitForDisplayed({timeout: 2000})
            await this.usersLit.waitForDisplayed({timeout: 2000})
        } catch (e) {
            throw new Error('Не удалось загрузить пользователей')
        }
    }
    
    async deleteUser() {
        try {
            const usersCount = await this.usersItems.length

            if(!usersCount) {
                throw new Error('Пользователи не найдены')
            }

            await this.usersItems[0].click()

            const usersCountAfterDelete = await this.usersItems.length

            if(usersCount - usersCountAfterDelete !== 1) {
                throw new Error('Удаление не произошло')
            }

        } catch (e) {
            throw new Error('Не удалось загрузить пользователей ' + e.messages)
        }
    }
    
    open () {
        return super.open('/users-test');
    }
}

module.exports = new UsersPage();
