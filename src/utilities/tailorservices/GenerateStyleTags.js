/**
 * @author Duncan Pierce <devduncanrocks@gmail.com>
 * @param {mixed} transition_title 
 * @param {mixed} transition_duration 
 * @returns {string}
 */
function GenerateTransitions(transition_title, transition_duration_in_tenths){
   
   transition_duration_in_tenths /= Math.pow(10, 1);
   let transition = "";
   if(transition_title.length >= 1 && Array.isArray(transition_title)){
      for(let i = 0; i<transition_title.length; i++){
         transition += transition_title[i] + " " + transition_duration_in_tenths + "s"
         if(transition_title[i+1]){
            transition+=", ";
         }
      }
   }else{
      if(Array.isArray(transition_title)){transition_title = transition_title[0]}
      transition = transition_title + " " + transition_duration_in_tenths + "s"
   }
   
   let _cssString = "transition:" + transition + ";-ms-transition:" + transition + ";-moz-transition:" + transition + ";-webkit-transition:" + transition + ";-o-transition:" + transition + ";";
   return _cssString;
}

module.exports = {
   GenerateTransitions
}