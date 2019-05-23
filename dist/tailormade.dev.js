(function(g,f){typeof exports==='object'&&typeof module!=='undefined'?module.exports=f():typeof define==='function'&&define.amd?define(f):(g=g||self,g.tailormade=f());}(this,function(){'use strict';//NewDom.js
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
};const SetDefaultStyles = function(styles, defaultStyles) {
  const possible = [
    "paddingX",
    "paddingY",
    "textTransform",
    "subtitleColor",
    "subtitleLetterSpacing",
    "titleColor",
    "marginY",
    "marginX",
    "height",
    "width",
    "borderColor",
    "hoverBackground",
    "transforms",
    "transitions"
  ];

  if (Object.keys(defaultStyles).length <= 0) {
    return false;
  }
  for (let i = 0; i < possible.length; i++) {
    try {
      if (!styles[possible[i]]) {
        styles[possible[i]] = defaultStyles[possible[i]];
      }
    } catch (e) {
      return false;
    }
  }

  return styles;
};

var SetDefaults = {
  SetDefaultStyles
};
var SetDefaults_1 = SetDefaults.SetDefaultStyles;/**
 * @author Duncan Pierce <devduncanrocks@gmail.com>
 * @param {mixed} transition_title 
 * @param {mixed} transition_duration 
 * @returns {string}
 *//**
 * @author Duncan Pierce <devduncanrocks@gmail.com>
 * @param {object} options
 * @param {string} target
 * https://codepen.io/sigkar/pen/wbdXWP
 */

class Feed {
  constructor(target, styles = {}, content = {}, options = {}) {
    
    const _defaultStyles = {paddingX: "0px", paddingY: "30px",marginX: "30px",marginY: "auto",height: "auto",width: '80vw',borderColor: "salmon",borderWidth: "10px",borderType: "solid",textTransform: "uppercase",titleColor: "salmon",subtitleColor: "#505050",subtitleLetterSpacing: "1px",transforms: {"translateY":"-50%"},transitions: {"background":"2"}, hoverBackground: "#f0f0f0"};
    this.target = target;
    this.options = options;
    this.options.style = SetDefaults_1(styles, _defaultStyles);
    this.content = content;
    this.init();

  }
  init() {
    this.bootstrapComponent();
    this.generateCSS();
    this.generateHTML();
  }
  bootstrapComponent(){
     this.bootstrapOptions();
     this.bootstrapContent();
  }
  bootstrapContent() {
   if (!this.content.description) this.content.description = "Lorem Ipsum dolor sit amet consectetur Ante ante vestibulum; Proin convallis dui eget; Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam posuere quam sit amet augue molestie convallis.";
   if(!this.content.title) this.content.title = "Lorem Ipsum Dolor";
   if(!this.content.subtitle) this.content.subtitle = "sit amet consectetur";
   if(!this.content.createdAt) this.content.createdAt = "No Timestamp";
  }
  bootstrapOptions() {
    if (!this.options.style) {
      this.options.style = {};
    }

  }
  generateHTML() {
    let _generatedDescription = "";
    if (typeof(this.content.description) === 'object') {
      let descriptionKeys = Object.keys(this.content.description);
      for (let i = 0; i <= descriptionKeys.length; i++) {
        _generatedDescription +=
          "<p class=tailor_feed_paragraph>" +
          this.content.description[descriptionKeys[i].toString()] +
          "</p>";
      }
    } else {
      _generatedDescription +=
        "<p class=tailor_feed_paragraph>" + this.content.description + "</p>";
    }
    this.generatedHtml =
      '<div id="tailor_feed_container"><div id="tailor_feed_status_post_1"><div class="tailor_feed_post"><div class="tailor_feed_profile_container"><div class="tailor_feed_profile_picture"></div></div><div class="tailor_feed_content_container"><div class="tailor_feed_post_content"><h2 class="tailor_feed_post_title">' +
      this.content.title +
      '</h2><h3 class="tailor_feed_post_subtitle">' +
      this.content.subtitle +
      '</h3><div class="tailor_feed_description">' +
      _generatedDescription +
      '<p id="is_edited" style="color:#303030; font-size:12px;">Read More</p></div></div></div><div class="tailor_feed_post_extras"><div id="tailor_feed_comments">Comment</div><div id="tailor_feed_heart">Like</div><div class="tailor_feed_posted_at"><div id="tailor_feed_tx">' +
      this.content.createdAt +
      "</div></div></div></div></div></div>";
  }
  generateCSS() {
    let profilePicture;
    this.content.imageUrl
      ? (profilePicture = "background:url('" + this.content.imageUrl + "')")
      : (profilePicture = "salmon");
    this.generatedCss =
      "#tailor_feed_container{width:100vw;height:auto;padding:" +
      this.options.style.paddingY +
      " " +
      this.options.paddingX +
      ";}.tailor_feed_post_title{letter-spacing:2px;text-transform:uppercase;color:" +
      this.options.style.titleColor +
      ";}#tailor_feed_comments,#tailor_feed_heart,.tailor_feed_post_subtitle{letter-spacing:" +
      this.options.style.subtitleLetterSpacing +
      ";text-transform:" +
      this.options.style.textTransform +
      ";color:" +
      this.options.style.subtitleColor +
      ";}.tailor_feed_post{border-left:10px solid " +
      this.options.style.borderColor +
      ";width:calc(" +
      this.options.style.width +
      " -10px);height:auto;margin:" +
      this.options.style.marginY +
      " " +
      this.options.style.marginX +
      ";background:" +
      this.options.style.background +
      ";display:flex;flex-wrap:wrap;justify-content:space-around;}.tailor_feed_profile_picture{margin: 0px 0px 0px 30px;height:50px;width:50px;" +
      profilePicture +
      ";position:relative;top:50%;" +
      this.options.style.transforms +
      "}.tailor_feed_profile_container{width:calc(50px+30px+30px);}.tailor_feed_content_container{width:calc(100%-50px-30px-30px-20px);padding:0px 20px 0px 0px;}.tailor_feed_post_extras{width:100%;height:auto;background:#dfdfdf;display:flex;flex-wrap:wrap;justify-content:space-between;}.tailor_feed_posted_at{text-transform:" +
      this.options.style.textTransform +
      ";width:40%;background:#d0d0d0;display:flex;justify-content:center;align-items:center;}#tailor_feed_comments,#tailor_feed_heart{padding:15px 0px;margin:10px;width:calc(30%-20px);text-align:center;position:relative;cursor:pointer;" +
      this.options.style.transitions +
      "}#is_edited{cursor:pointer;text-decoration:underline;text-align:right;text-transform:" +
      this.options.style.textTransform +
      ";}#tailor_feed_comments:hover,#tailor_feed_heart:hover{background:" +
      this.options.style.hoverBackground +
      ";}#tailor_feed_tx{text-align:center;color:#505050;}";
  }
  addListeners() {}
}/**
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
	Feed,
	FullMenu,
	GeneratePage
};return main;}));