export class MainPage {

    constructor() {
        this.url = 'https://tivify.tv/inicio',
        this.menuInicio = '#navbar_item_Inicio',
        this.menuMiEspacio = '#navbar_item_Mi Espacio',
        this.menuCanales = '#navbar_item_Canales',
        this.menuCine = '#navbar_item_Cine',
        this.menuProgramas = '#navbar_item_Programas u7d',
        this.menuSeries = '#navbar_item_Series u7d',
        this.menuContent = '#navbar_item_Más contenido',
        this.menuGuia = '#navbar_item_Guía plataformas',
        this.searchIcon = '.search-icon',
        this.sectionSlider = '.section-sliders.css-0',
        this.rightArrowControl = '.slick-arrow.next'
    }

    assertThisUrlIsCorrect() {
        cy.url().should('eq', this.url);
    }
}