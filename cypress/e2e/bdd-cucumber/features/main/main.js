import { MainPage } from '../../../../support/pages/main';
import { LoginPage } from '../../../../support/pages/login'

const { Given, When, Then } = require('@badeball/cypress-cucumber-preprocessor');

const mainPage = new MainPage();
const loginPage = new LoginPage();

