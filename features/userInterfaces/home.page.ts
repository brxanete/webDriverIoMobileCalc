import { $ } from '@wdio/globals'
class homePage {
    webviewButton: any;


    public get menuButton() {
        return $('//android.widget.ImageButton[@content-desc="Credit Calculator"]');
    }

    public get bannerTitle() {
        return $('//android.widget.TextView[@text="Calculate Credit"]')
    }

    public get optionsButton() {
        return $('//android.widget.ImageView[@content-desc="More options"]')
    }

    public get loanValueSubtitle() {
        return $('//android.widget.TextView[@resource-id="com.cristhian.calculadorcredito:id/tvMonto"]')
    }

    public get loanAmountInput() {
        return $('//android.widget.EditText[@resource-id="com.cristhian.calculadorcredito:id/etMonto"]')
    }

    public get loanInterestSubtitle() {
        return $('//android.widget.TextView[@resource-id="com.cristhian.calculadorcredito:id/tvInteres"]')
    }

    public get periodInterestList() {
        return $('//android.widget.Spinner[@resource-id="com.cristhian.calculadorcredito:id/spTipoInteres"]')
    }

    public get interestInput() {
        return $('//android.widget.EditText[@resource-id="com.cristhian.calculadorcredito:id/etInteres"]')
    }

    public get closeAddButton() {
        return $('//android.widget.ImageButton[@content-desc="Interstitial close button"]')
    }

    
    async closeAdd() {
        try {
            await (await this.closeAddButton).waitForDisplayed({ timeout: 10000 });

            if (await this.closeAddButton.isEnabled()) {
                await this.closeAddButton.click();
            }
        } catch (error) {
            console.log('El botón de cerrar anuncio no está presente, continuando con la ejecución.');
        }
    }



    async validateMenuButton() {
        await (await this.menuButton).waitForExist({ timeout: 5000 });
        await (await this.menuButton).waitForDisplayed({ timeout: 5000 });
        await (await this.menuButton).waitForEnabled({ timeout: 5000 });

    }

    async validateBannerTitle() {
        await (await this.menuButton).waitForExist({ timeout: 5000 });
        await (await this.menuButton).waitForDisplayed({ timeout: 5000 });
        await (await this.menuButton).waitForEnabled({ timeout: 5000 });

    }

    async validateValueOfLoanSubtitle() {
        await (await this.loanValueSubtitle).waitForExist({ timeout: 5000 });
        await (await this.loanValueSubtitle).waitForDisplayed({ timeout: 5000 });
        await (await this.loanValueSubtitle).waitForEnabled({ timeout: 5000 });

    }

    async validateLoanAmountInput() {
        await (await this.loanValueSubtitle).waitForExist({ timeout: 5000 });
        await (await this.loanValueSubtitle).waitForDisplayed({ timeout: 5000 });
        await (await this.loanValueSubtitle).waitForEnabled({ timeout: 5000 });

    }



}



export default new homePage();