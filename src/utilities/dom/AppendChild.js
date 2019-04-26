
class AppendChild {
   constructor(target, node, options={}){
      this.target = target;
      this.node = node;
      this.options = options
   }
   addChild(){
      document.getElementById(this.target).appendChild(this.node);
   }
}

export default AppendChild;