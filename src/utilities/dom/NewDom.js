//NewDom.js
/**
   * @author Duncan Pierce <devduncanrocks@gmail.com>
   * @param {object} options
   * @param {string} type
   * @returns null
   */
export const NewDom = function(options, type="HTML") {

  this.type = type.toUpperCase();
  switch(this.type){
    case "HTML":
      try{
        this.target = options.target;
        this.styleTarget = options.styleTarget;
        this.styles = options.styles;
        this.html = options.html;
        console.log("[NewDom] Generating this")
      }catch(e){
        returnFailed(e);
        return false;
      }
    break;
    case "TEXT":
      var tempStamp = Date.now().toString(36);
      this.elementToGenerate = options.element;
      if(options.elementName){
         this.tailoredElement[name] = options.elementName;
      }else{
        this.tailoredElement[name] = tempStamp;
      }

    break;
    case "ELEMENT":

    break;
    default:

  }
}

/**
 * @author Duncan Pierce <devduncanrocks@gmail.com>
 * @description Drops the new content into your target div or tailormade
 * generated div.
 * @constructed_params 
 */
NewDom.prototype.addHtmlContent = function() {
  console.log("[NewDom][addHtmlContent] Adding HTML");
  try {
    document.getElementById(this.target).innerHTML += this.html;
    this.elementToGenerate = "style";
    this.currentElement = this.tailorElement();
    // console.log("[NewDom][addHtmlContent] Creating element");
    // console.log(this.currentElement);

    // this.textToGenerate = this.styles;
    // this.currentText = this.tailorText();

    // console.log("[NewDom][addHtmlContent] Creating currentText");
    // console.log(this.currentText);
    
    // console.log("[NewDom][addHtmlContent] Appending Current Text to Current Element");
    // this.currentElement.appendChild(this.currentText);

    // console.log("[NewDom][addHtmlContent] Adding element to style target");
    // this.test = document.getElementById(this.styleTarget).appendChild(this.currentElement);

    this.test = this.createStyleSheet();
    console.log("Test:" + this.test);
  } catch (e) {
    returnFailed(e, "[ADDHTMLCONTENT]\n");
    return false;
  }
};


NewDom.prototype.tailorText = function(){
  console.log("[NewDom][TailorText] Generating Text");
  try{
    document.createTextNode(this.textToGenerate);
  }catch(e){
    returnFailed(e, "[ADDTEXT]\n");
    return false;
  }
}

/**
 * @author Duncan Pierce <devduncanrocks@gmail.com>
 * @description Generates a new element to drop into the DOM securely.
 * @constructed_params {object} this.tailoredElement
 * @constructed_params {object} this.elementToGenerated
 * @returns {null}
 */
NewDom.prototype.tailorElement = function(){
  console.log("[NewDom][TailorElement] Generating Element");
  try{
    if(!this.tailoredElement){
      this.tailoredElement = {}
    }
    if(!this.tailoredElement.name){
      this.tailoredElement[name] = Date.now().toString(36);
    }
    this.tailoredElement.name["element"] = document.createElement(this.elementToGenerate);
  }catch(e){
    returnFailed(e, "[CREATELEMENT]\n");
    return false;
  }
}

NewDom.prototype.createStyleSheet = function() {
  this._style = document.createElement('style');
  this._styleSheet = this.style.styleSheet;
  if (this._styleSheet) {
      this._styleSheet.cssText = this.styles;
  }
  else {
      this._style.appendChild(document.createTextNode(this.styles));
  }
  this._style.type = 'text/css';
  return this._style;
}

const returnFailed = function(error, customMessage=""){
  console.assert(
    customMessage + 
    "Tailormade failed to generate the target. \nException and Stack Trace:\n" +
      error
  );
}