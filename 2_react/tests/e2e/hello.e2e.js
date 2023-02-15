const HelloPage = require('../pages/hello.page')

describe('My hello world page', () => {
    it('toggle', async () => {
        await HelloPage.open()
        await HelloPage.toggleTitleWithInput('hello')
        await expect(HelloPage.helloTitle).toBeExisting()
        await HelloPage.toggleBtn.click()
        await expect(HelloPage.helloTitle).not.toBeExisting()
    })
    it('not toggle', async () => {
        await HelloPage.open()
        await HelloPage.toggleTitleWithInput('dsadsada')
        await expect(HelloPage.helloTitle).not.toBeExisting()
    })
})


