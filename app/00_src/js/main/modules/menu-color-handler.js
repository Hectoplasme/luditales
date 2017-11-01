const menuColorHandler = {
        initialize() {
            this.bindUI();
            this.setProperties();
            this.bindEvents();
        },

        bindUI() {
            this.ui = {};

            this.ui.menu = document.querySelector('.js-menu');
            this.ui.toggler = this.ui.menu.querySelector('.js-menu-toggler');
            this.ui.links = this.ui.menu.querySelectorAll('.js-menu a');
            this.ui.footer = document.querySelector('.footer');
            this.ui.sections = document.querySelectorAll('.js-section');
            this.ui.body = document.body;
        },

        setProperties() {
            this.sectionPositions = [];
            this.offsetLinks = [];
            this.open = false;
        },

        bindEvents() {
            window.addEventListener('scroll', this.onScroll.bind(this));
        },

        onScroll(e) {
            if (!this.open) {
                this.open = true;
                this.offsetLinks.push(this.ui.toggler.getBoundingClientRect().top);
                this.ui.links.forEach((el) => {
                    this.offsetLinks.push(el.getBoundingClientRect().top);
                });
            }
            if (this.ui.footer.classList.contains('section-open')) {
                this.getOffset();
                this.testColor(this.ui.toggler, 0);
                this.ui.links.forEach((el, i) => {
                    this.testColor(el, i + 1);
                });
            }
        },

        getOffset() {
            this.sectionPositions = [];
            this.ui.sections.forEach((el,i) => {
                this.sectionPositions.push({index: i, top: el.getBoundingClientRect().top});
            });
            this.sectionPositions.sort((a,b) =>
                (a.top > b.top) ? 1 : ((b.top > a.top) ? -1 : 0)
            );
        },

        testColor(el, i) {
            for (var j = 0; j < this.sectionPositions.length - 1; j++) {
                if (this.offsetLinks[i] > this.sectionPositions[j].top && this.offsetLinks[i] < this.sectionPositions[j+1].top) {
                    if (this.ui.body.classList.contains('sections-open') && j%2 === 0 || !this.ui.body.classList.contains('sections-open') && this.ui.sections[this.sectionPositions[j].index].style.order%2 === 0) {
                        if (i === 0 ) {
                            this.ui.toggler.classList.remove('is-dark');
                        } else {
                            this.ui.links[i-1].classList.remove('is-dark');
                        }
                    } else {
                        if(i === 0) {
                            this.ui.toggler.classList.add('is-dark');
                        } else {
                            this.ui.links[i-1].classList.add('is-dark');
                        }
                    }
                }
            }
        }
}

module.exports = menuColorHandler;
