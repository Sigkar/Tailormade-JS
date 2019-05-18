import { GenerateHash } from "../utilities/tailorservices/GenerateHash";

class GeneratePage {
  constructor(_components) {
     console.log(_components);
    let _componentData = {};
    Object.keys(_components).map(function(objectKey, index) {
      _componentData[index] = {"hash": new GenerateHash(),"component": _components[objectKey]};
    });
   this.componentData = _componentData;
    console.log("Components:");
    console.log(this.components);
  }
}

export default GeneratePage;