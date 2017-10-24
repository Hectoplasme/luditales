const menuToggler = {
        initialize() {
            this.bindUI();
            this.setProperties();
            this.bindEvents();
        },

        bindUI() {
            this.ui = {};

            this.ui.menu = document.querySelector('.js-menu');
            this.ui.toggler = this.ui.menu.querySelector('.js-menu-toggler');
        },

        setProperties() {
            this.isOpen = false;
        },

        bindEvents() {
            this.ui.toggler.addEventListener('click', this.onClick.bind(this));
        },

        onClick(e) {
            console.log('click');
            if (this.isOpen) {
                this.close();
                this.isOpen = false;
            } else {
                this.open();
                this.isOpen = true;
            }
        },

        open() {
            this.ui.menu.classList.add('menu-open');
        },

        close() {
            this.ui.menu.classList.remove('menu-open');
        }
}

module.exports = menuToggler;
