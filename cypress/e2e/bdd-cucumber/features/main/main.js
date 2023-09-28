import { MainPage } from '../../../../support/pages/main';
import { LoginPage } from '../../../../support/pages/login'

const { Given, When, Then } = require('@badeball/cypress-cucumber-preprocessor');

const mainPage = new MainPage();
const loginPage = new LoginPage();

Given('I login as a guest user', () => {
  cy.viewport(1280, 720);
  cy.visit('https://tivify.tv/login');
  loginPage.acceptCookies();
  loginPage.assertGuestUserBtnIsVisible();
  loginPage.clickGuestUserBtn();
  loginPage.clickErrorModalBtn();
});

When('I see the now on TV slider', () => {
    mainPage.assertNowOnTvSlider();
});

When('I access to an event detail page', () => {
    mainPage.clickFirstCarrouselElement();
});

Then('I should see title, channel, description, score and age range', () => {
    mainPage.assertEventDetailsContentAreVisible();
});

Then('I should see available controls', () => {
    mainPage.assertEventDetailsControlsAreAvailable();
});

Then('I should see title, hour, play button, access button and a progress bar', () => {
    mainPage.assertSlideContents();
});

Then('I should see at least 5 assets', () => {
    mainPage.assertSlideAmount();
});

Then('I should be able to see more slides using the control arrows', () => {
    mainPage.assertControlArrowsWork();
});