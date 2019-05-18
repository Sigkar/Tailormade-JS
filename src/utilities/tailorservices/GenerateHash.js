/**
 * @Author Duncan Pierce <devduncanrocks@gmail.com>
 */
export class GenerateHash{
   constructor(length = 36){
      this.length = length;
      return this._generateHash();
   }
   _generateHash(){
      return Math.random().toString(this.length).replace('0.', '');
   }
}