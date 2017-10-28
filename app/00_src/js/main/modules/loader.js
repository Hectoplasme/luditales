const imagesLoaded = require('imagesLoaded');
const loader = {
        initialize() {
            this.bindUI();
            this.setProperties();
            this.bindEvents();
        },

        bindUI() {
            this.ui = {};
            this.ui.body = document.body;
        },

        setProperties() {
        },

        bindEvents() {
            $('body').imagesLoaded( this.onImagesLoaded.bind(this));
        },

        onImagesLoaded(e) {
            this.ui.body.classList.remove('is-loading');
        }
}

module.exports = loader;
