import { LoginPage } from '../../../../support/pages/login'
import { MainPage } from '../../../../support/pages/main';

const users = require('../../../../data/users.json');

const { Given, When, Then } = require('@badeball/cypress-cucumber-preprocessor');
const loginPage = new LoginPage();
const mainPage = new MainPage();

Given('I login as a guest user', () => {
  cy.visit('/login');
  loginPage.acceptCookies();
  loginPage.assertGuestUserBtnIsVisible();
  loginPage.clickGuestUserBtn();
});

When('I see the ad video and get redirected', () => {
  loginPage.assertAdVideoIsPlayed();
  loginPage.clickErrorModalBtn();
});

Then('I should see the main page', () => {
  mainPage.assertThisUrlIsCorrect();
});
