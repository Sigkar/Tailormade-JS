import { NewDom } from "../../utilities/dom/NewDom";
import {
  GenerateTransitions,
  GenerateTransforms
} from "../../utilities/tailorservices/GenerateStyleTags";
/**
 * @author Duncan Pierce <devduncanrocks@gmail.com>
 * @param {object} options
 * @param {string} target
 * https://codepen.io/sigkar/pen/wbdXWP
 */

class Feed {
  constructor(target, options = {}, content = {}) {
    this.target = target;
    this.options = options;
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
   if(!this.content.title) this.content.title = "Lorem Ipsum Dolor"
   if(!this.content.subtitle) this.content.subtitle = "sit amet consectetur";
   if(!this.content.createdAt) this.content.createdAt = "No Timestamp";
  }
  bootstrapOptions() {
    if (!this.options.style) {
      this.options.style = {};
    }
    if (!this.options.style.paddingX) this.options.style.paddingX = "0px";
    if (!this.options.style.paddingY) this.options.style.paddingY = "30px";
    if (!this.options.style.textTransform)
      this.options.style.textTransform = "uppercase";
    if (!this.options.style.subtitleColor)
      this.options.style.subtitleColor = "#505050";
    if (!this.options.style.subtitleLetterSpacing)
      this.options.style.subtitleLetterSpacing = "1px";
    if (!this.options.style.titleColor)
      this.options.style.titleColor = "salmon";
    if (!this.options.style.marginY) this.options.style.marginY = "30px";
    if (!this.options.style.marginX) this.options.style.marginX = "auto";
    if (!this.options.style.height) this.options.style.height = "auto";
    if (!this.options.style.width) this.options.style.width = "80vw";
    if (!this.options.style.borderColor)
      this.options.style.borderColor = "salmon";
    if (!this.options.style.hoverBackground)
      this.options.style.hoverBackground = "#f0f0f0";
    if (!this.options.style.transforms)
      this.options.style.transforms = GenerateTransforms("translateY", "-50%");
    if (!this.options.style.transitions)
      this.options.style.transitions = GenerateTransitions(["background"], [2]);
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
      console.log(this.generatedHtml);
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
    console.log(this.generatedCss);
  }
  addListeners() {}
}

export default Feed;
