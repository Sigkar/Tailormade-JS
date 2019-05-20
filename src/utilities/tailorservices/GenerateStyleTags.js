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

/**
 * @author Duncan Pierce <devduncanrocks@gmail.com>
 * @param {mixed} transition_title 
 * @param {mixed} transition_duration 
 * @returns {string}
 */
function GenerateTransforms(transforms_array, transform_value){
   if(!Array.isArray(transforms_array)){
      transforms_array = [transforms_array];
   }
   if(!Array.isArray(transform_value)){
      transform_value = [transform_value];
   }
   if(transforms_array.length !== transform_value.length ){
      return false;
   }

   let _cssTransform = "";
   if(transforms_array.length >= 1){
      for(let i = 0; i<transforms_array.length; i++){
         _cssTransform += transforms_array[i] + "(" + transform_value[i] + ")"
         if(transforms_array[i+1]){
            _cssTransform += " ";
         }
      }
   }else{
      _cssTransform += transforms_array[0] + "(" + transform_value[0] + ")"
   }
   
   let _cssString = "transform:" + _cssTransform + ";-ms-transform:" + _cssTransform + ";-moz-transform:" + _cssTransform + ";-webkit-transform:" + _cssTransform + ";-o-transform:" + _cssTransform + ";";
   return _cssString;
}

module.exports = {
   GenerateTransitions,
   GenerateTransforms
}