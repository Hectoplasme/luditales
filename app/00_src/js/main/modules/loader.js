const imagesLoaded = require('imagesLoaded');
const loader = {
        initialize() {
            console.log('pouet','it works !');
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
            $('#container').imagesLoaded( this.onImagesLoaded.bind(this));
        },

        onImagesLoaded(e) {
            console.log('loaded');
            this.ui.body.classList.remove('is-loading');
        }
}

module.exports = loader;
