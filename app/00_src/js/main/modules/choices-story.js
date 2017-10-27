const choicesStory = {
        initialize() {
            this.bindUI();
            this.setProperties();
            this.bindEvents();
        },

        bindUI() {
            this.ui = {};

            this.ui.choices = document.querySelectorAll('.js-choice');
            this.ui.currentSection  = document.querySelector('#accueil');
            this.ui.footer = document.querySelector('.footer');
            this.ui.menu = document.querySelector('.js-menu');
        },

        setProperties() {
            this.currentSection = "accueil";
            this.openSections = [];
            this.offsetTop = 0;
            this.isLastChoice = false;
            this.isEnd = false;
            this.begin = false;
        },

        bindEvents() {
            this.ui.choices.forEach((el) => {
                el.addEventListener('click', this.onClick.bind(this));
            });
        },

        onClick(e) {
            if (!this.begin) {
                this.begin = true;
                this.disableMenu();
            }
            this.disable(e.target);
            this.open(e.target.dataset.dir);
        },

        disableMenu(){
            this.ui.menu.classList.add('is-hidden');
        },

        disable(btn) {
            this.ui.currentSection.querySelector('.js-choices').classList.add('is-disabled');
            btn.classList.add('is-chosen');
        },

        open(section) {
            this.updateSection(section);

            this.isEnd = this.isLastChoice ? true : false;
            this.cleanChoice();

            this.ui.currentSection.style.order = this.openSections.length;
            if (this.openSections.length%2 === 0) {
                this.ui.currentSection.classList.add('section--dark');
            }

            this.ui.currentSection.classList.add('section-open');

            setTimeout(()=> {
                $('html,body').stop().animate({ scrollTop: this.ui.currentSection.offsetTop }, 500);
            }, 50);

            if(this.isEnd) {
                this.ui.footer.classList.add('section-open');
            }
        },

        updateSection(section) {
                this.currentSection = section;
                this.openSections.push(section);
                this.ui.currentSection = document.querySelector('#'+section);
        },

        cleanChoice() {
            if(!this.isEnd) {
                this.openSections.forEach((el) => {
                    const parent = this.ui.currentSection.querySelector('.js-choices');
                    const child = parent.querySelector('[data-dir="'+el+'"]');
                    parent.removeChild(child);
                });
            }

            if (this.ui.currentSection.querySelectorAll('.js-choice').length === 1) {
                this.ui.currentSection.querySelector('.is-hidden').classList.remove('is-hidden');
                this.isLastChoice = true;
            }
        }
}

module.exports = choicesStory;
