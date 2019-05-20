const GenerateTransitions = require("./GenerateStyleTags")
  .GenerateTransitions;
const GenerateTransforms = require("./GenerateStyleTags")
  .GenerateTransforms;

describe("[Generating Styles Suite]", () => {
   describe("Transitions", () => {
     test("Generate Single Item Array(s)", () => {
       expect(GenerateTransitions(["top"], [2])).toBe(
         "transition:top 0.2s;-ms-transition:top 0.2s;-moz-transition:top 0.2s;-webkit-transition:top 0.2s;-o-transition:top 0.2s;"
       );
     });
 
     test("Generate Two Item Option Arrays, Single Item Duration Array", () => {
       expect(GenerateTransitions(["left", "top"], [2])).toBe(
         "transition:left 0.2s, top 0.2s;-ms-transition:left 0.2s, top 0.2s;-moz-transition:left 0.2s, top 0.2s;-webkit-transition:left 0.2s, top 0.2s;-o-transition:left 0.2s, top 0.2s;"
       );
     });
 
     test("Generate One Item Option Array, One Number no array", () => {
       expect(GenerateTransitions(["top"], 2)).toBe(
         "transition:top 0.2s;-ms-transition:top 0.2s;-moz-transition:top 0.2s;-webkit-transition:top 0.2s;-o-transition:top 0.2s;"
       );
     });
 
     test("Generate Single String, One Number Duration Array", () => {
       expect(GenerateTransitions("top", [2])).toBe(
         "transition:top 0.2s;-ms-transition:top 0.2s;-moz-transition:top 0.2s;-webkit-transition:top 0.2s;-o-transition:top 0.2s;"
       );
     });
 
     test("Generate Single String, Single Number", () => {
       expect(GenerateTransitions("top", 2)).toBe(
         "transition:top 0.2s;-ms-transition:top 0.2s;-moz-transition:top 0.2s;-webkit-transition:top 0.2s;-o-transition:top 0.2s;"
       );
     });
   });
   describe("Transforms", () => {
     test("Generate Double Array", () => {
       expect(
         GenerateTransforms(["translateX", "translateY"], ["-50%", "50%"])
       ).toBe(
         "transform:translateX(-50%) translateY(50%);-ms-transform:translateX(-50%) translateY(50%);-moz-transform:translateX(-50%) translateY(50%);-webkit-transform:translateX(-50%) translateY(50%);-o-transform:translateX(-50%) translateY(50%);"
       );
     });
   });
 });
 