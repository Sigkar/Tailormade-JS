/**
 * @Author Duncan Pierce <devduncanrocks@gmail.com>
 */
export function GenerateHash(length = 36){
      return Math.random().toString(length).replace('0.', '');
}