// import {GenerateTransitions, GenerateTransforms} from '../tailorservices/GenerateStyleTags';

const SetDefaultStyles = function(styles, defaultStyles){
   let possible = [
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
   ]
   let constructedStyles = {};


   for(let i = 0; i< possible.length; i++){
      if(styles[possible[i]]){
         constructedStyles[possible[i]] = styles[possible[i]];
      }else{
         constructedStyles[possible[i]] = defaultStyles[possible[i]]
      }
   }

   return constructedStyles;
   // if(let styles.paddingX){
   //    let constructedStyles.paddingX = let default.paddingX;
   // }else{
   //    let constructedStyles.paddingX = let styles.paddingX;
   // }

   // if (!let styles.paddingY){
   //    let constructedStyles.paddingY = let default.paddingY;
   // }else{
   //    let constructedStyles.paddingY = let styles.paddingY;
   // }

   // if (!let styles.textTransform){let constructedStyles.textTransform = let default.textTransform;}else{let constructedStyles.textTransform = let styles.textTransform;}

   // if (!let styles.subtitleColor){
   //    let constructedStyles.subtitleColor = let default.subtitleColor;
   // }else{
   //    let constructedStyles.subtitleColor = let styles.subtitleColor; 
   // }
   // if (!let styles.subtitleLetterSpacing){
   //    let constructedStyles.subtitleLetterSpacing = let default.subtitleLetterSpacing;
   // }else{
   //    let constructedStyles.subtitleLetterSpacing = let styles.subtitleLetterSpacing;
   // }
   // if (!let styles.titleColor){
   //    let constructedStyles.titleColor = let default.titleColor;
   // }else{
   //    let constructedStyles.titleColor = let styles.titleColor;
   // }
   // if (!let styles.marginY){
   //    let constructedStyles.marginY = let default.marginY;
   // }else{
   //    let constructedStyles.marginY = let styles.marginY;
   // }
   // if (!let styles.marginX){
   //    let constructedStyles.marginX = let default.marginX;
   // }else{
   //    let constructedStyles.marginX = let styles.marginX;
   // }
   // if (!let styles.height){
   //    let constructedStyles.height = let default.height;
   // }else{
   //    let constructedStyles.height = let styles.height;
   // }
   // if (!let styles.width){
   //    let constructedStyles.width = let default.width;
   // }else{
   //    let constructedStyles.width = let styles.width;
   // }
   // if (!let styles.borderColor){
   //    let constructedStyles.borderColor = let default.borderColor;
   // }else{
   //    let constructedStyles.borderColor = let styles.borderColor;
   // }
   // if (!let styles.hoverBackground){
   //    let constructedStyles.hoverBackground = let default.hoverBackground;
   // }else{
   //    let constructedStyles.hoverBackground = let styles.hoverBackground;
   // }
   // if (!let styles.transforms){
   //    let constructedStyles.transforms = GenerateTransforms("translateY", "-50%");
   // }else{
   //    let constructedStyles
   // }
   // if (!let styles.transitions){
   //    let constructedStyles.transitions = GenerateTransitions(["background"], [2]);
   // }else{
   //    let constructedStyles
   // }
}

module.exports = {
   SetDefaultStyles
}