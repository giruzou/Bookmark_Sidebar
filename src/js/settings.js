($ => {
    "use strict";

    window.settings = function () {

        /*
         * ################################
         * PUBLIC
         * ################################
         */

        this.opts = {
            classes: {
                tabs: {
                    list: "tabBar",
                    active: "active"
                },
                color: {
                    field: "color"
                },
                checkbox: {
                    box: "checkbox",
                    active: "active",
                    clicked: "clicked",
                    focus: "focus"
                },
                hidden: "hidden",
                configEntry: "configEntry",
                success: "success",
                error: "error",
                loading: "loading",
                revert: "revert",
                gotoFeedback: "gotoFeedback",
                howto: "howto"
            },
            attr: {
                type: "data-type",
                appearance: "data-appearance",
                name: "data-name",
                i18n: "data-i18n",
                value: "data-value",
                tab: "data-tab",
                success: "data-successtext",
                style: "data-style",
                hideOnFalse: "data-hideOnFalse",
                pos: "data-pos",
                bg: "data-bg",
                range: {
                    min: "data-min",
                    max: "data-max",
                    step: "data-step",
                    unit: "data-unit"
                },
                color: {
                    alpha: "data-alpha"
                },
                field: {
                    placeholder: "data-placeholder"
                }
            },
            elm: {
                body: $("body"),
                title: $("head > title"),
                header: $("body > header"),
                tab: $("section#content > div.tab"),
                appearanceLabels: $("ul.appearanceLabels > li"),
                backgroundChanger: $("menu.backgroundChanger > a"),
                appearanceSections: $("div[data-appearance]"),
                copyrightDate: $("a#copyright > span"),
                keyboardShortcutInfo: $("p.shortcutInfo"),
                formElement: $("div.formElement"),
                feedback: {
                    textarea: $("textarea#feedback"),
                    email: $("input#feedbackEmail")
                },
                button: {
                    save: $("div.tab > header > button.save"),
                    restore: $("div.tab > header > button.restore")
                },
                preview: {},
                checkbox: {},
                range: {},
                select: {},
                color: {},
                textarea: {},
                field: {}
            },
            events: {
                checkboxChanged: "moonware-bs-checkboxChanged"
            },
            fontHref: "https://fonts.googleapis.com/css?family=Roboto:100,200,300,400,500,100i,200i,300i,400i,500i",
            manifest: chrome.runtime.getManifest()
        };

        /**
         * Constructor
         */
        this.run = () => {
            initHelpers();

            this.helper.form.init();
            initHeader();
            initLanguage();
            initCopyright();
            initTabs();

            this.helper.model.init(() => {
                this.helper.behaviour.init();
                this.helper.appearance.init();
                this.helper.contribute.init();
                this.helper.help.init();
                initButtonEvents();
            });
        };

        /**
         * Shows the given success message for 1.5s
         *
         * @param {string} i18nStr
         */
        this.showSuccessMessage = (i18nStr) => {
            this.opts.elm.body.attr(this.opts.attr.success, chrome.i18n.getMessage("settings_" + i18nStr));
            this.opts.elm.body.addClass(this.opts.classes.success);
            setTimeout(() => {
                this.opts.elm.body.removeClass(this.opts.classes.success);
            }, 1500);
        };

        /**
         * Returns the html for the loading indicator
         *
         * @returns {jsu}
         */
        this.getLoaderHtml = () => {
            let html = '' +
                '<div class="loading">' +
                ' <div>' +
                '  <div class="circle-clipper left">' +
                '   <div></div>' +
                '  </div>' +
                '  <div class="gap-patch">' +
                '   <div></div>' +
                '  </div>' +
                '  <div class="circle-clipper right">' +
                '   <div></div>' +
                '  </div>' +
                ' </div>' +
                '</div>';

            return $(html);
        };


        /*
         * ################################
         * PRIVATE
         * ################################
         */

        /**
         * Initialises the helper objects
         */
        let initHelpers = () => {
            this.helper = {
                model: new window.ModelHelper(this),
                checkbox: new window.CheckboxHelper(this),
                form: new window.FormHelper(this),
                behaviour: new window.BehaviourHelper(this),
                appearance: new window.AppearanceHelper(this),
                feedback: new window.FeedbackHelper(this),
                contribute: new window.ContributeHelper(this),
                help: new window.HelpHelper(this)
            };
        };


        /**
         * Initialises the copyright text
         */
        let initCopyright = () => {
            let createdDate = +this.opts.elm.copyrightDate.text();
            let currentYear = new Date().getFullYear();

            if (currentYear > createdDate) {
                this.opts.elm.copyrightDate.text(createdDate + " - " + currentYear);
            }
        };

        /**
         * Initialises the header
         */
        let initHeader = () => {
            this.opts.elm.header.prepend('<svg height="48" width="48" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M19.43 12.98c.04-.32.07-.64.07-.98s-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.3-.61-.22l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65C14.46 2.18 14.25 2 14 2h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1c-.23-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98s.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1c.23.09.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65zM12 15.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5z"/></svg>');
        };

        /**
         * Initialises the language variables in the document
         */
        let initLanguage = () => {
            $("[" + this.opts.attr.i18n + "]").forEach((elm) => {
                let val = $(elm).attr(this.opts.attr.i18n);
                let key = val.search(/^(share_userdata_|howto_)/) === 0 ? val : "settings_" + val;
                let msg = chrome.i18n.getMessage(key);
                if (msg) {
                    msg = msg.replace(/\[u\](.*)\[\/u\]/, "<span>$1</span>");
                    msg = msg.replace(/\[a\](.*)\[\/a\]/, "<a href='#'>$1</a>");
                    msg = msg.replace(/\[em\](.*)\[\/em\]/, "<em>$1</em>");
                    $(elm).html(msg);
                } else {
                    $(elm).remove();
                }
            });

            this.opts.elm.title.text(this.opts.elm.title.text() + " - " + this.opts.manifest.short_name);
        };


        /**
         * Initialises the tab bar
         */
        let initTabs = () => {
            let tabBar = $("<ul />").addClass(this.opts.classes.tabs.list).prependTo(this.opts.elm.header);

            this.opts.elm.tab.forEach((elm) => {
                let name = $(elm).attr(this.opts.attr.name);
                $("<li />").attr(this.opts.attr.name, name).html("<a href='#'>" + chrome.i18n.getMessage("settings_tab_" + name) + "</a>").appendTo(tabBar);
            });

            tabBar.find("> li > a").on("click", (e) => {
                e.preventDefault();
                tabBar.children("li").removeClass(this.opts.classes.tabs.active);
                let tabElm = $(e.currentTarget).parent("li");
                let tabName = tabElm.attr(this.opts.attr.name);
                tabElm.addClass(this.opts.classes.tabs.active);

                this.opts.elm.tab.forEach((tab) => {
                    let name = $(tab).attr(this.opts.attr.name);

                    if (name === tabName) {
                        $(tab).removeClass(this.opts.classes.hidden);
                    } else {
                        $(tab).addClass(this.opts.classes.hidden);
                    }
                });

                location.hash = tabName;
                this.opts.elm.body.attr(this.opts.attr.tab, tabName);
            });

            let hash = location.hash ? location.hash.substr(1) : null;
            tabBar.find("> li > a").eq(0).trigger("click");

            if (hash) {
                tabBar.find("> li[" + this.opts.attr.name + "='" + hash + "'] > a").trigger("click");
            }
        };

        /**
         * Initialises the eventhandler for the buttons
         */
        let initButtonEvents = () => {
            this.opts.elm.button.save.on("click", (e) => {
                e.preventDefault();

                switch (this.opts.elm.body.attr(this.opts.attr.tab)) {
                    case "behaviour": {
                        this.helper.behaviour.save();
                        break;
                    }
                    case "appearance": {
                        this.helper.appearance.save();
                        break;
                    }
                    case "feedback": {
                        this.helper.feedback.send();
                        break;
                    }
                }
            });

            this.opts.elm.button.restore.on("click", (e) => {
                e.preventDefault();
                let tabName = this.opts.elm.body.attr(this.opts.attr.tab);

                switch (tabName) {
                    case "behaviour":
                    case "appearance": {
                        chrome.storage.sync.remove([tabName], () => {
                            this.showSuccessMessage("restored_message");
                            setTimeout(() => {
                                location.reload(true);
                            }, 1500);
                        });
                        break;
                    }
                }
            });
        };
    };


    new window.settings().run();

})(jsu);