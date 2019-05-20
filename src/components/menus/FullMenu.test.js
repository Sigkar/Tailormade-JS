const tailorMade = require("../../../dist/tailormade.dev");

describe("FullMenu", () => {
  const fullMenuString = new tailorMade.FullMenu("test");
  test("Sets the target string correctly", () => {
    expect(fullMenuString.target).toBe("test");
  });
  test("If the string is set then the target isnt generated and is false", () => {
    expect(fullMenuString._targetGenerated).toBeFalsy();
  });
});
