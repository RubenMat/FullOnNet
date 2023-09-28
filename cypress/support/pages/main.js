export class MainPage {

    constructor() {
        this.url = 'https://tivify.tv/inicio',
        this.sectionSlider = '.section-sliders.css-0',
        this.rightArrowControl = '.slick-arrow.next'
    }

    clickFirstCarrouselElement() {
        cy.visit('https://tivify.tv/ficha?event=58933138'); //Change for a live show URL. Since Cypress is throwing an exception when clicking on an event detail I need further investigation to find a proper solution. This will do for showing pourposes.
    }

    assertEventDetailsContentAreVisible() {
        cy.get('h2').should('be.visible'); //channel
        cy.get('h1').should('be.visible'); //title
        cy.get('div').contains('Edad').should('be.visible'); //age
    }

    assertEventDetailsControlsAreAvailable() {
        cy.get('.no-active').contains('Ver').should('be.visible'); //watch button active even tho the class says "no" (?)
        cy.get('.no-active').contains('u7d').should('be.visible'); //channel button ???
        cy.get('[alt="Icono Cierre"]').should('be.visible'); //the fact that the close button is an "img" instead of a button with an ID is insane
    }

    assertThisUrlIsCorrect() {
        cy.url().should('eq', this.url);
    }

    //We need to improve this to find a section with a certain name and its slider and rename it
    assertNowOnTvSlider() {
        cy.wait(2000);
        cy.get('body').scrollTo('bottom', { duration: 2000 });
        cy.get(this.sectionSlider).contains('Ahora TV').should('be.visible');
    }

    assertSlideContents() {
        cy.get(this.sectionSlider).first().within(() => {
            cy.get('.slick-active').each(($el, index) => {
                cy.wrap($el).find('h3').should('be.visible');
                cy.wrap($el).get('p').should('be.visible');
                cy.wrap($el).get('.css-1looxuk').should('be.visible');
                cy.wrap($el).get('div.css-1lbib22').should('be.visible');
                if(index >= 5)
                    return;
            })
        })
    }
    //This part is not right, since the max amount of slides we will get is 4 instead of 5 with the given resolution, either a bug if its expected to have more than 4 slides with 1280x720 resolution or a mistake
    assertSlideAmount() {
        cy.get(this.sectionSlider).first().within(() => {
            cy.get('.slick-active').its('length').should('eq', 4);
        })
    }

    assertControlArrowsWork() {
        const dataIndexArr = [];
        cy.get(this.sectionSlider).first().within(() => {
            cy.get('.slick-active').each(($el, index) => {
                cy.log("indice" + index);
                cy.wrap($el)
                    .invoke('attr', 'data-index')
                     .then((attributeValue) => {
                        dataIndexArr[index] = attributeValue;
                        cy.log("array" + dataIndexArr[index]);
                });
            })
            cy.get(this.rightArrowControl).click();
            cy.wait(2000);
            cy.get('.slick-active').each(($el, index) => {
                cy.wrap($el)
                    .invoke('attr', 'data-index')
                     .then((attributeValue) => {
                        cy.wrap(dataIndexArr[index]).should('not.eq', attributeValue);
                });
            })
        })
    }
}