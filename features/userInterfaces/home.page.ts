import { $ } from '@wdio/globals'
class homePage {
    webviewButton: any;


    public get menuButton() {
        return $('~Credit Calculator');
    }

    async validateHomePage() {
        (await this.menuButton).waitForDisplayed,
            (await this.menuButton).waitForEnabled
    }



    async validateElements() {
        await this.menuButton.waitForDisplayed();


    }



}



export default new homePage();