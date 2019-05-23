const tailorMade = require("../../../dist/tailormade.dev");

console.log(new tailorMade.Feed());

test('Feed isn\'t false', () => {
   expect(new tailorMade.Feed()).not.toBeFalsy()
})