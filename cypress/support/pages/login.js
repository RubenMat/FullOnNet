export class LoginPage {

    constructor() {
        this.url = 'https://tivify.tv/login',
        this.cookies = '#acceptAllMain',
        this.guestUserBtn = '[data-cy="inicioanónimo"]',
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