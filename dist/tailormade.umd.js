(function (global, factory) {
   typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
   typeof define === 'function' && define.amd ? define(factory) :
   (global = global || self, global.tailormade = factory());
}(this, function () { 'use strict';

   /**
    * @author Duncan Pierce <devduncanrocks@gmail.com>
    * @param {object} options
    * @param {string} target
    */
   class FullMenu {
      constructor(target, options = { "styles": { "background": "#f46842", "fontfamily": "Arial", "import": false, "importlink": "none", "transition": { "transition": "top 0.2s" }, "position": { "type": "fixed", "startat": "top", "offset": "200%" } }, "content": { "links": { "Home": "/home", "About": "/about", "Contact": "/contact", }, "logo": { "src": "https://logo.com/image", "alt": "Site's Logo" }, "title": "Tailormade Menu" } }) {
         this.options = options;
         this.target = target;
         this.init();
      }
      init() {
         this.generateHTML();
         this.generateCSS();
         this.addContent();
      }
      generateHTML() {
         this.menuStyles = this.target + "_tailor_menu_styling";
         this.menuToggle = this.target + "_toggle";
         this.genhtml = '<div class=TailorMenu><div id=TailorMenuOptions><ul><a href=""><li>Home</a><a href=""><li>Contact</a><a href=""><li>About</a></ul></div><div id=TailorMenuLogo></div></div><div id=open-tailor-menu><div id=TailorMenuPosition></div><div id=TailorMenuText>MENU</div></div>';
         this.genhtml += "<div id='" + this.menuStyles + "'></div><div id='" + this.menuToggle + "'></div>";
         
      }
      generateCSS() {
         this.targetString = "#" + this.target;
         this.gencss = "";
         this.gencss += "#" + this.target + "{font-family:" + this.options.styles.fontfamily + ";}";
         if (this.options.styles.import) {
            this.gencss += "@import(" + this.options.styles.importlink + ")";
         }
         this.gencss += this.targetString + " .TailorMenu {width: 100%;height: 100%;position: " + this.options.styles.position.type + ";" + this.options.styles.position.startat;
         if (this.options.styles.position.startat === "top" || this.options.styles.position.startat === "left") {
            this.gencss += "-";
         }
         this.gencss += this.options.styles.position.offset + ";background:" + this.options.styles.background + ";transition:" + this.options.styles.transition.transition + ";-ms-transition:" + this.options.styles.transition.transition + ";-moz-transition:" + this.options.styles.transition.transition + ";-webkit-transition:" + this.options.styles.transition.transition + ";-o-transition:" + this.options.styles.transition.transition + ";overflow-y:scroll;}";
         this.gencss += this.targetString + "_toggle{position: " + this.options.styles.position.type + ";top: 20px;right: 20px;color: #000;font-size: 12px;cursor: pointer;transition: background-color .2s, font-size .2s ease-in, right .2s ease-in, top .2s ease-in;-ms-transition: background-color .2s, font-size .2s ease-in, right .2s ease-in, top .2s ease-in;-moz-transition: background-color .2s, font-size .2s ease-in, right .2s ease-in, top .2s ease-in;-webkit-transition: background-color .2s, font-size .2s ease-in, right .2s ease-in, top .2s ease-in;-o-transition: background-color .2s, font-size .2s ease-in, right .2s ease-in, top .2s ease-in;padding: 4px}";
         this.gencss += this.targetString + "_toggle:hover{font-size: 15px;right: 17px;top: 17px;background-color: #f0f0f0}";
         this.gencss += this.targetString + " .TailorMenu ul {list-style-type: none;font-size: 24px}";
         this.gencss += this.targetString + " .TailorMenu ul li {padding: 10px 0}";
         this.gencss += this.targetString + " .TailorMenu ul a {color: #fff;text-decoration: none;transition: transform .2s}#TailorMenuLogo {background: url(http://chittagongit.com/images/image-placeholder-icon/image-placeholder-icon-15.jpg);width: 30vw;height: 30vw;background-size: contain;position: absolute;right: 10vw;top: 50%;transform: translateY(-50%)}";
      }
      addContent() {
         this.menuOpen = false;
         this.menuOpen = changeMenu(this.target, this.menuOpen);
         document.getElementById(this.target).innerHTML += this.genhtml;
         document.getElementById(this.menuStyles).innerHTML += "<style>" + this.gencss + "</style>";
         document.getElementById(this.menuToggle).addEventListener("click", function () {
            this.menuOpen = changeMenu(this.target, this.menuOpen);
         });
      }
   }

   const changeMenu = function(menuListener, menuopen){
      if(!menuopen){
        document.getElementById(menuListener).innerHTML = "<style>.TailorMenu{top:0px !important;}</style>";
        return true;
      }
      document.getElementById(menuListener).innerHTML = "<style>.TailorMenu{top:-200% !important;}</style>";
      menuopen = false;
   };

   var main = {
   	FullMenu
   };

   return main;

}));
