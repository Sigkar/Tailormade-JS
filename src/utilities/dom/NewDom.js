import {AppendChild} from './AppendChild';

class NewDom{
   /**
    * @author Duncan Pierce <devduncanrocks@gmail.com>
    * @param {string} target 
    * @param {string} listener 
    * @param {string} changes 
    * @param {object} options 
    * @returns null
    */
   
   async constructor(target, listener, changes, options = {}, replace=false){
      this.target = document.getElementById(target);
      this.listener = listener;
      this.changes = changes;
      this.replace = replace;
      this.options = options;
      await waitForHTMLDOM().then(function(){
         switch(options.change){
            case "appendChild":
               try{
                  let newDom = document.createElement(options.element.toUpperCase());
                  let newDomNodeContent = document.createTextNode(this.changes);
                  newDomNode.appendChild(newDomNodeContent);
                  this.newDom = newDom;
                  console.log(this.newDom);
                  //AppendChild(this.target, this.newDom);
               }catch(e){
                  console.assert("Tailormade failed to generate the target " + this.target +"\nException and Stack Trace:\n" + e);
               }
   
            break;
            default:
               try{
                  
               }catch(e){
   
               }
         }
      })
   }
   async waitForHTMLDOM(){  
      document.addEventListener("DOMContentLoaded",function(){
         return;
      });
   }

}

export default NewDom;