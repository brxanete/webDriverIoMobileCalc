import { Given, When, Then } from '@wdio/cucumber-framework';

import { expect } from '@wdio/globals';
import homePage from '../userInterfaces/home.page.ts';


Given(/^El usuario esta en la pagina de inicio$/, async () => {
   await homePage.closeAdd();

});

Given(/^El usuario valida el boton de menu$/, async () => {
   await homePage.validateMenuButton();

});

When(/^El usuario valida el titulo de la app$/, async () => {
   await homePage.validateBannerTitle();

});

When(/^El usuario valida el subtitulo valor del prestamo$/, async () => {
   await homePage.validateValueOfLoanSubtitle();
});

When(/^El usuario valida el campo de texto monto del prestamo$/, async () => {
   



});






// Resto de tus definiciones de pasos

