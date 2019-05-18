//NewDom.js
/**
 * @author Duncan Pierce <devduncanrocks@gmail.com>
 * @param {object} options
 * @param {string} type
 * @returns null
 */
export const NewDom = function(options, type = "HTML") {
  this.type = type.toUpperCase();
  switch (this.type) {
    case "HTML":
      try {
        if (options.target) {
          this.target = options.target;
        } else {
          this.target = Date.now().toString(36);
          this._targetGenerated = true;
        }
        this.styleTarget = options.styleTarget;
        this.styles = options.styles;
        this.html = options.html;
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
    if (this._targetGenerated) {
      // If we werent supplied with a target, then generate it and append
      this.elementToGenerate = "div";
      this.tailoredElement.name = this.target;
      this.tailorElement();
      document.body.appendChild(this._targetHtml);
    }
    this._targetHtml = document.getElementById(this.target);
    this._targetHtml.innerHTML += this.html;
  } catch (e) {
    returnFailed(e, "[ADDHTMLCONTENT]\n");
    return false;
  }
};

NewDom.prototype.addCSSContent = function() {
  console.log("creating target style");
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
  console.log("[NewDom][TailorText] Generating Text");
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
    console.log("[tailorElement]Generating tailored element\n\n");
    if (!this.tailoredElement) {
      this.tailoredElement = {};
    }
    let _stamp = "Tailored_object_" + Date.now().toString(16);

    let _currentObject = this.tailoredElement;
    console.log(_currentObject);

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
};
