// IE Specifics
require('es5-shim');
require('es6-shim');

//import modules
const pouet = require('../libs/pouet.js');
const utils = require('../libs/utils.js');
const menuToggler = require('./modules/menu-toggler.js');
const menuGoTos = require('./modules/menu-gotos.js');
const menuColorHandler = require('./modules/menu-color-handler.js');
const cardToggler = require('./modules/card-toggler.js');
const choicesStory = require('./modules/choices-story.js');
const loader = require('./modules/loader.js');
const bannerParallax = require('./modules/banner-parallax.js');

(function ($, pouet, win) {
    $(function () {
        const app = {
            initialize() {
                this.bindUI();
                this.bindEvents();
                this.pouet.initialize(this);
                utils.initialize();

                if (!pouet.utils.isMobileTablet) {
                    this.initDesktopOnlyModules();
                } else {
                    this.initMobileOnlyModules();
                }
                window.scrollTo(0, 0);
                this.initCommonModules();
            },

            bindUI() {
                this.ui = {};
                this.ui.$html = $('html');
                this.ui.$body = $('body');
                this.ui.$win = $(window);
            },

            bindEvents() {
            },

            initDesktopOnlyModules() {
                this.pouet.conditionalLoad('.js-banner', bannerParallax.initialize.bind(bannerParallax));
            },

            initMobileOnlyModules() {
            },

            initCommonModules() {
                this.pouet.conditionalLoad('.js-loader', loader.initialize.bind(loader));
                this.pouet.conditionalLoad('.js-menu-toggler', menuToggler.initialize.bind(menuToggler));
                this.pouet.conditionalLoad('.menu-item a[href^="#"]', menuGoTos.initialize.bind(menuGoTos));
                this.pouet.conditionalLoad('.js-menu a', menuColorHandler.initialize.bind(menuColorHandler));
                this.pouet.conditionalLoad('.js-team-member', cardToggler.initialize.bind(cardToggler));
                this.pouet.conditionalLoad('.js-choice', choicesStory.initialize.bind(choicesStory));
            },

            pouet: {
                ctx: null,

                initialize(ctx) {
                    this.ctx = ctx;

                    this.initModules();
                    this.initVariables();
                    this.checkBrowsers();
                },

                initModules() {
                    pouet.utils.externalLinks();
                },

                initVariables() {
                    pouet.utils.$body = this.ctx.ui.$body;
                    pouet.utils.$html = this.ctx.ui.$html;
                    pouet.utils.$win = this.ctx.ui.$win;
                },

                checkBrowsers() {
                    /*@cc_on
                        if (/^10/.test(@_jscript_version)) {
                            window.isIE10 = true;
                            window.isIE = true;

                            pouet.utils.$body.addClass('is-ie10');
                        }
                    @*/

                    if (navigator.userAgent.indexOf("Trident") !== -1 && navigator.userAgent.indexOf("rv:11") !== -1) {
                        window.isIE11 = true;
                        window.isIE = true;

                        pouet.utils.$body.addClass('is-ie11');
                    }

                    if (!!navigator.userAgent.match(/Version\/[\d\.]+.*Safari/)) {
                        window.isSafari = true;

                        pouet.utils.$body.addClass('is-safari');
                    }
                },

                conditionalLoad(selector, callback) {
                    if (document.querySelectorAll(selector).length) {
                        callback();
                    }
                }
            }
        };

        $(window).on('load', () => {
            app.initialize();
        });
    });

})(jQuery, pouet, window);
