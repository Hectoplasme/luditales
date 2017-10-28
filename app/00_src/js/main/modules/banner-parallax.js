const bannerParallax = {
        initialize() {
            this.bindUI();
            this.setProperties();
            this.bindEvents();
        },

        bindUI() {
            this.ui = {};

            this.ui.banner = document.querySelector('.js-banner');
            this.ui.bannerBg = this.ui.banner.querySelector('.js-banner-bg');
            this.ui.bannerFg = this.ui.banner.querySelector('.js-banner-fg');
        },

        setProperties() {
            this.width = this.ui.banner.offsetWidth;
            this.height = this.ui.banner.offsetHeight;
            this.centerX = this.width / 2;
            this.centerY = this.height / 2;
            this.mouseX = 0;
            this.mouseY = 0;
            this.positionX = 0;
            this.positionY = 0;
            this.gap = 10;
        },

        bindEvents() {
            this.ui.banner.addEventListener('mousemove', this.onHover.bind(this));
        },

        onHover(e) {
            this.mouseX = e.screenX;
            this.mouseY = e.screenY;

            this.positionX = ((this.mouseX - this.centerX) * this.gap / this.width);
            this.positionY = ((this.mouseY - this.centerY) * (this.gap / 2) / this.height);
            this.ui.bannerBg.style.transform = 'translate(' + this.positionX + 'px, ' + -this.positionY + 'px)';
            this.ui.bannerFg.style.transform = 'translate(' + -this.positionX + 'px, ' + this.positionY + 'px)';
        }
}

module.exports = bannerParallax;
