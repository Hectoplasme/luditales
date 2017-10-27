const cardToggler = {
        initialize() {
            console.log('pouet','it works !');
            this.bindUI();
            this.setProperties();
            this.bindEvents();
        },

        bindUI() {
            this.ui = {};

            this.ui.currentCard  = document.querySelector('.js-card');
            this.ui.cardList  = document.querySelector('.js-cardlist');
            this.ui.members = document.querySelectorAll('.js-team-member');
            this.ui.buttonClose = document.querySelectorAll('.js-card-close');

        },

        setProperties() {
            this.isOpen = false;
            this.currentMember = this.ui.currentCard.dataset.member;
        },

        bindEvents() {
            this.ui.members.forEach((el) => {
                el.addEventListener('click', this.onClick.bind(this));
                }
            );
            this.ui.buttonClose.forEach((el) => {
                el.addEventListener('click', this.close.bind(this));
                }
            );

            this.ui.currentCard.addEventListener('click', this.onClickOutside.bind(this));

        },

        onClick(e) {
            this.currentMember = e.target.dataset.member ?  e.target.dataset.member : this.currentMember;
            this.open(this.currentMember);
        },

        onClickOutside(e) {
            if (e.target.classList.contains('card-open')) {
                this.close();
            }
        },

        open(id) {
            this.close();
            this.ui.currentCard = this.ui.cardList.querySelector('#' + this.currentMember);
            if (this.ui.currentCard) {
                this.ui.currentCard.classList.add('card-open');
            }
        },

        close() {
            if (this.ui.currentCard) {
                this.ui.currentCard.classList.remove('card-open');
            }
        }
}

module.exports = cardToggler;
