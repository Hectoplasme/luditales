const pouet = require('../../libs/pouet.js');
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

            this.offsetLinks.push(this.ui.toggler.getBoundingClientRect().top);
            this.ui.links.forEach((el) => {
                this.offsetLinks.push(el.getBoundingClientRect().top);
            });
        },

        bindEvents() {
            window.addEventListener('scroll', this.onScroll.bind(this));
            //this.ui.toggler.addEventListener('click', this.onClick.bind(this));
        },

        onScroll(e) {
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
            this.ui.sections.forEach((el) => {
                this.sectionPositions.push(el.getBoundingClientRect().top);
            });
        },

        testColor(el, i) {
            for (var j = 0; j < this.sectionPositions.length - 1; j++) {
                if (this.offsetLinks[i] > this.sectionPositions[j] && this.offsetLinks[i] < this.sectionPositions[j+1]) {
                    console.log(this.ui.sections[j].style.order, 'order');
                    if (this.ui.body.classList.contains('sections-open') && j%2 === 0 || !this.ui.body.classList.contains('sections-open') && this.ui.sections[j].style.order%2 === 0) {
                        //console.log('dark', i);
                        if (i === 0 ) {
                            this.ui.toggler.classList.remove('is-dark');
                        }
                        else {
                            this.ui.links[i-1].classList.remove('is-dark');
                        }
                    } else {
                        //console.log('light', i);
                        if(i === 0) {
                            this.ui.toggler.classList.add('is-dark');
                        } else {
                            this.ui.links[i-1].classList.add('is-dark');
                        }

                    }
                }
            }
        },

        close() {
            //this.ui.menu.classList.remove('menu-open');
        }
}

module.exports = menuColorHandler;
