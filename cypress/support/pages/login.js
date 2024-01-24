export class LoginPage {

    constructor() {
        this.url = '/login',
        this.cookies = '#acceptAllMain',
        this.userBox = '#username',
        this.passBox = '#password',
        this.loginBtn = '[data-cy="iniciarsesión"]'
        this.guestUserBtn = '[data-cy="inicioanónimo"]',
        this.forgotPassBtn = '#login_rememberPasswordBtn',
        this.adVideo = '.video-parent-container',
        this.modalBtn = '.modal-btn'
    }

    acceptCookies() {
        cy.get(this.cookies).click();
    }

    assertUrlIsCorrect() {
        cy.url().should('eq', this.url);
    }

    assertGuestUserBtnIsVisible() {
        cy.get(this.guestUserBtn).should('be.visible');
        cy.wait(1000);
    }

    assertAdVideoIsPlayed() {
        cy.get(this.adVideo).should('be.visible');
    }

    clickErrorModalBtn() {
        cy.get(this.modalBtn).click();
    }

    clickGuestUserBtn() {
        cy.get(this.guestUserBtn).click();
    }
}