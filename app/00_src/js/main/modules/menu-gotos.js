const menuGoTos = {
        initialize() {
            console.log('menu');
            this.bindUI();
            this.setProperties();
            this.bindEvents();
        },

        bindUI() {
            this.ui = {};

            this.ui.menu = document.querySelector('.js-menu');
            this.ui.menuLinks = document.querySelectorAll('.js-menu a[href^="#"]');
            this.ui.footerMenuLinks = document.querySelectorAll('.js-footer-menu a[href^="#"]');
            this.ui.sections = document.querySelectorAll('.js-section');
            this.ui.body = document.body;
            this.ui.currentSection = document.querySelector('#accueil');
        },

        setProperties() {
            this.isOpen = false;
        },

        bindEvents() {
            this.ui.menuLinks.forEach((el) => {
                    el.addEventListener('click', this.onClick.bind(this));
                }
            );
            this.ui.footerMenuLinks.forEach((el) => {
                    el.addEventListener('click', this.enableMenu.bind(this));
                }
            );
        },

        onClick(e) {
            e.preventDefault();
            if (!this.isOpen) {
                this.isOpen = true;
                this.ui.body.classList.add('sections-open');
                this.ui.sections.forEach((el) => {
                    el.classList.add('section-open');
                });
            }
            this.goTo(e);
        },

        enableMenu(e) {
            this.ui.menu.classList.remove('is-hidden');
            this.isOpen = true;
            this.goTo(e);
        },

        goTo(e) {
            e.preventDefault();
            this.ui.currentSection = document.querySelector('#' + e.target.href.split('#')[1]);
            setTimeout(()=> {
                $('html,body').stop().animate({ scrollTop: this.ui.currentSection.offsetTop }, 500);
            }, 50);
        }
}

module.exports = menuGoTos;
