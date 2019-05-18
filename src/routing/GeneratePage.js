import { GenerateHash } from "../utilities/tailorservices/GenerateHash";

class GeneratePage {
  constructor(_components) {
    console.log(_components);
    const _componentData = {};
    // For each component on this page, gen a nonce
    Object.keys(_components).map(function(objectKey, index, _componentData) {
      _componentData.index = {"hash": GenerateHash(),"component": _components[objectKey]};
      _components[objectKey].init();
    });
    
    
  }
}

export default GeneratePage;