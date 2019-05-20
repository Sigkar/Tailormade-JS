import { GenerateHash } from "../utilities/tailorservices/GenerateHash";

class GeneratePage {
  constructor(_components) {
    
    Object.keys(_components).map(function(objectKey, index, _componentData) {
      if(!_components[objectKey].options.target){
        let hash = GenerateHash()
        
        _components[objectKey].options.target = hash;
      }
      if(_components[objectKey].options.init){
        _components[objectKey].init();
      }
    });

  }
}

export default GeneratePage;