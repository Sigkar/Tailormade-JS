const tailorMade = require("../../../dist/tailormade.dev");

test('Feed isn\'t false', () => {
   expect(new tailorMade.Feed()).not.toBeFalsy()
})