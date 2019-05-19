// Use jest if thou wish.
// Unit tests mainly need to go on the code end.
const GenerateTransitions = require("../src/utilities/tailorservices/GenerateStyleTags").GenerateTransitions;
const tailorMade = require('../dist/tailormade.dev');



describe("[FullMenu Suite]", () => {
   const fullMenuString = new tailorMade.FullMenu("test");
   test("Sets the target string correctly", () => {
     expect(fullMenuString.target).toBe("test") 
   })
   test("If the string is set then the target isnt generated and is false", () => {
      expect(fullMenuString._targetGenerated).toBeFalsy()
    })

})

describe("[GenerateTransitions Suite] [Loc: ./src/utilities/tailorServices/GenerateStyleTags]", () => {
  test("[GenerateTransitions] Generate Single Item Array(s)", () => {
    expect(GenerateTransitions(["top"], [2])).toBe(
      "transition:top 0.2s;-ms-transition:top 0.2s;-moz-transition:top 0.2s;-webkit-transition:top 0.2s;-o-transition:top 0.2s;"
    );
  });

  test("[GenerateTransitions] Generate Two Item Option Arrays, Single Item Duration Array", () => {
    expect(GenerateTransitions(["left", "top"], [2])).toBe(
      "transition:left 0.2s, top 0.2s;-ms-transition:left 0.2s, top 0.2s;-moz-transition:left 0.2s, top 0.2s;-webkit-transition:left 0.2s, top 0.2s;-o-transition:left 0.2s, top 0.2s;"
    );
  });

  test("[GenerateTransitions] Generate One Item Option Array, One Number no array", () => {
    expect(GenerateTransitions(["top"], 2)).toBe(
      "transition:top 0.2s;-ms-transition:top 0.2s;-moz-transition:top 0.2s;-webkit-transition:top 0.2s;-o-transition:top 0.2s;"
    );
  });

  test("[GenerateTransitions] Generate Single String, One Number Duration Array", () => {
    expect(GenerateTransitions("top", [2])).toBe(
      "transition:top 0.2s;-ms-transition:top 0.2s;-moz-transition:top 0.2s;-webkit-transition:top 0.2s;-o-transition:top 0.2s;"
    );
  });

  test("[GenerateTransitions] Generate Single String, Single Number", () => {
    expect(GenerateTransitions("top", 2)).toBe(
      "transition:top 0.2s;-ms-transition:top 0.2s;-moz-transition:top 0.2s;-webkit-transition:top 0.2s;-o-transition:top 0.2s;"
    );
  });
});

