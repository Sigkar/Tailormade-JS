//NewDom.js
/**
 * @author Duncan Pierce <devduncanrocks@gmail.com>
 * @param {object} options
 * @param {string} type
 * @returns null
 */
const NewDom = function(options, type = "HTML") {
  this.type = type.toUpperCase();
  switch (this.type) {
    case "HTML":
      try {
        this.styleTarget = options.styleTarget;
        this.styles = options.styles;
        this.html = options.html;
        this.targetGenerated = options.targetGenerated;
        this.target = options.target;
      } catch (e) {
        returnFailed(e);
        return false;
      }
      break;
    case "TEXT":
      var tempStamp = Date.now().toString(36);
      this.elementToGenerate = options.element;
      if (options.elementName) {
        this.tailoredElement[name] = options.elementName;
      } else {
        this.tailoredElement[name] = tempStamp;
      }

      break;
    case "ELEMENT":
      break;
    default:
  }
};

NewDom.prototype.tailorComponent = function() {
  try {
    this.addHtmlContent();
    this.addCSSContent();
  } catch (e) {
    returnFailed(e);
  }
};

/**
 * @author Duncan Pierce <devduncanrocks@gmail.com>
 * @description Drops the new content into your target div or tailormade
 * generated div.
 * @constructed_params
 */
NewDom.prototype.addHtmlContent = function() {
  try {
    if (this.targetGenerated) {
      // If we werent supplied with a target, then generate it and append
      this.elementToGenerate = "div";
      this.elementName = this.target;
      this.tailorElement();
      this.currentElement[this.elementToGenerate.toString()].setAttribute("id", this.elementName);
      document.body.appendChild(this.currentElement[this.elementToGenerate.toString()]);
    }
    this._targetHtml = document.getElementById(this.target);
    this._targetHtml.innerHTML += this.html;
  } catch (e) {
    returnFailed(e, "[ADDHTMLCONTENT]\n");
    return false;
  }
};

NewDom.prototype.addCSSContent = function() {
  // --- Generate a new style
  this.elementToGenerate = "style";
  this.elementName = "tailored_generated_style_" + Date.now().toString(36);
  this.tailorElement();
  // --- End generating style

  // --- Generate inner styling text
  this.textToGenerate = this.styles;
  let _currentStyles = this.tailorText();
  this.currentElement[this.elementToGenerate.toString()].appendChild(_currentStyles);
  // --- End generating inner styling text

  // --- Append styling to document
  this.test = document
    .getElementById(this.styleTarget)
    .appendChild(this.currentElement[this.elementToGenerate.toString()]);
  // --- End appending styling to document
};

NewDom.prototype.tailorText = function() {
  try {
    return document.createTextNode(this.textToGenerate);
  } catch (e) {
    returnFailed(e, "[ADDTEXT]\n");
    return false;
  }
};

/**
 * @author Duncan Pierce <devduncanrocks@gmail.com>
 * @description Generates a new element to drop into the DOM securely.
 * @constructed_params {object} this.tailoredElement
 * @constructed_params {object} this.elementToGenerated
 * @returns {null}
 */
NewDom.prototype.tailorElement = function() {
  try {
    if (!this.tailoredElement) {
      this.tailoredElement = {};
    }
    let _stamp = "Tailored_object_" + Date.now().toString(16);

    let _currentObject = this.tailoredElement;

    _currentObject[_stamp.toString()] = {};
    _currentObject = _currentObject[_stamp.toString()];

    this.elementName
      ? (_currentObject["element"] = this.elementName)
      : (_currentObject["element"] = Date.now().toString(32));
    // Add the element to that objects key
    _currentObject[this.elementToGenerate] = document.createElement(
      this.elementToGenerate
    );
    this.tailoredElement[_stamp.toString()] = _currentObject;
    this.currentElement = _currentObject;
  } catch (e) {
    returnFailed(e, "[CREATELEMENT]\n");
    return false;
  }
  return this.tailoredElement;
};

const returnFailed = function(error, customMessage = "") {
  console.assert(
    customMessage +
      "Tailormade failed to generate the target. \nException and Stack Trace:\n" +
      error
  );
};/**
 * @author Duncan Pierce <devduncanrocks@gmail.com>
 * @param {object} options
 * @param {string} target
 */

class FullMenu {
  constructor(
    target=" ",
    options = {
      init: true,
      styles: {
        background: "#f46842",
        fontfamily: "Arial",
        import: false,
        importlink: "none",
        transition: { transition: "top 0.2s" },
        position: { type: "fixed", startat: "top", offset: "200%" }
      },
      content: {
        links: { Home: "/home", About: "/about", Contact: "/contact" },
        logo: { src: "https://logo.com/image", alt: "Site's Logo" },
        title: "Tailormade Menu"
      }
    }
  ) {
    this.options = options;
    this._targetGenerated = false;
    
    if(!target){
      this.target = "tailored-"+Date.now().toString(36);
      this._targetGenerated = true;
    }else{
      this.target = target;
    }
    
  }
  init() {
    this.generateHTML();
    this.generateCSS();
    this.addListeners();
  }
  generateHTML() {
    this.menuStyles = this.target + "_tailor_menu_styling";
    this.menuToggle = this.target + "_toggle";
    this.genhtml =
      '<div class=TailorMenu><div id=TailorMenuOptions><ul><a href=""><li>Home</li></a><a href=""><li>Contact</li></a><a href=""><li>About</li></a></ul></div><div id=TailorMenuLogo></div></div><div id=' +
      this.target +
      "-open-tailor-menu><div id=TailorMenuPosition></div><div id=TailorMenuText>MENU</div></div>";
    this.genhtml +=
      "<div id='" +
      this.menuStyles +
      "'></div><div id='" +
      this.menuToggle +
      "'></div>";
  }
  generateCSS() {
    this.targetString = "#" + this.target;
    this.gencss = "";
    this.gencss +=
      "#" +
      this.target +
      "{font-family:" +
      this.options.styles.fontfamily +
      ";}";
    if (this.options.styles.import) {
      this.gencss += "@import(" + this.options.styles.importlink + ")";
    }
    this.gencss +=
      this.targetString +
      " .TailorMenu {width: 100%;height: 100%;position: " +
      this.options.styles.position.type +
      ";" +
      this.options.styles.position.startat +
      ":";
    if (
      this.options.styles.position.startat === "top" ||
      this.options.styles.position.startat === "left"
    ) {
      this.gencss += "-";
    }
    this.gencss +=
      this.options.styles.position.offset +
      ";background:" +
      this.options.styles.background +
      ";transition:" +
      this.options.styles.transition.transition +
      ";-ms-transition:" +
      this.options.styles.transition.transition +
      ";-moz-transition:" +
      this.options.styles.transition.transition +
      ";-webkit-transition:" +
      this.options.styles.transition.transition +
      ";-o-transition:" +
      this.options.styles.transition.transition +
      ";overflow-y:scroll;}" +
      this.targetString +
      "_toggle{position: " +
      this.options.styles.position.type +
      ";top: 20px;right: 20px;color: #000;font-size: 12px;cursor: pointer;transition: background-color .2s, font-size .2s ease-in, right .2s ease-in, top .2s ease-in;-ms-transition: background-color .2s, font-size .2s ease-in, right .2s ease-in, top .2s ease-in;-moz-transition: background-color .2s, font-size .2s ease-in, right .2s ease-in, top .2s ease-in;-webkit-transition: background-color .2s, font-size .2s ease-in, right .2s ease-in, top .2s ease-in;-o-transition: background-color .2s, font-size .2s ease-in, right .2s ease-in, top .2s ease-in;padding: 4px}" +
      this.targetString +
      "_toggle:hover{font-size: 15px;right: 17px;top: 17px;background-color: #f0f0f0}" +
      this.targetString +
      " .TailorMenu ul {list-style-type: none;font-size: 24px}" +
      this.targetString +
      " .TailorMenu ul li {padding: 10px 0}";
    this.targetString +
      " .TailorMenu ul a {color: #fff;text-decoration: none;transition: transform .2s}#TailorMenuLogo {background: url('http://chittagongit.com/images/image-placeholder-icon/image-placeholder-icon-15.jpg');width: 30vw;height: 30vw;background-size: contain;position: absolute;right: 10vw;top: 50%;transform: translateY(-50%)}";
  }
  async addListeners() {
    let menuOpen = false;
    let target = this.target;
    let menuToggle = this.menuToggle;

    // Construct the New Dom Object
    this.dom = new NewDom(
      {
        target: this.target,
        styleTarget: this.menuStyles,
        styles: this.gencss,
        html: this.genhtml,
        targetGenerated: this._targetGenerated
      },
      "HTML"
    );
    // Add the DOM object to HTML Content
    this.dom.tailorComponent();

    document
      .getElementById(target + "-open-tailor-menu")
      .addEventListener("click", function() {
        menuOpen = changeMenu(target, menuToggle, menuOpen);
      });
  }
}

const changeMenu = function(target, menuListener, menuopen) {
  if (!menuopen) {
    document.getElementById(menuListener).innerHTML =
      "<style>.TailorMenu{top:0px !important;}</style>";
    return true;
  }
  document.getElementById(menuListener).innerHTML =
    "<style>.TailorMenu{top:-200% !important;}</style>";
  menuopen = false;
};/**
 * @Author Duncan Pierce <devduncanrocks@gmail.com>
 */
function GenerateHash(base = 36){
      return Math.random().toString(base).replace('0.', 'tailor');
}class GeneratePage {
  constructor(_components) {
    
    Object.keys(_components).map(function(objectKey, index, _componentData) {
      if(!_components[objectKey].options.target){
        let hash = GenerateHash();
        
        _components[objectKey].options.target = hash;
      }
      if(_components[objectKey].options.init){
        _components[objectKey].init();
      }
    });

  }
}var main = {
	FullMenu,
	GeneratePage
};export default main;