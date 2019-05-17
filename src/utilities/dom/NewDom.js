//NewDom.js
/**
   * @author Duncan Pierce <devduncanrocks@gmail.com>
   * @param {string} target
   * @param {string} listener
   * @param {string} changes
   * @param {object} options
   * @returns null
   */
export function NewDom(target, styleTarget, styles, html) {
  this.target = target;
  this.styleTarget = styleTarget;
  this.styles = styles;
  this.html = html;
  console.log('style target: ' +this.styleTarget);
  
  console.log("Initting");
  this.addContent();
  console.log("Returning");
  
}

NewDom.prototype.addContent = function() {
  try {
    document.getElementById(this.target).innerHTML += this.html;
    document.getElementById(this.styleTarget).innerHTML +=
      "<style>" + this.styles + "</style>";
  } catch (e) {
    console.assert(
      "Tailormade failed to generate the target. \nException and Stack Trace:\n" +
        e
    );
  }
};
