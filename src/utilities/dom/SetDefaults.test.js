const SetDefaultStyles = require("./SetDefaults").SetDefaultStyles;

describe("[Default Styles Suite]", () => {
   const _defaultStyles = {paddingX: "0px", paddingY: "30px",marginX: "30px",marginY: "auto",height: "auto",width: '80vw',borderColor: "salmon",borderWidth: "10px",borderType: "solid",textTransform: "uppercase",titleColor: "salmon",subtitleColor: "#505050",subtitleLetterSpacing: "1px",transforms: {"translateY":"-50%"},transitions: {"background":"2"}, hoverBackground: "#f0f0f0"}
   test("Expect styles not to be false", () => {
      let styles = SetDefaultStyles({}, _defaultStyles);
      expect(styles).not.toBeFalsy()
   });

   test("Expect the script to return false if the params aren't set correctly", () => {
      expect(SetDefaultStyles({}, {})).toBeFalsy()
   });

   test("Expect string values of style to be equal to the object", () => {
      let styles = SetDefaultStyles({
         paddingX: '20px',
         paddingY: '20px'
      }, _defaultStyles);
      expect(styles.toString()).toBe({ paddingX: '20px',paddingY: '20px',textTransform: 'uppercase',subtitleColor: '#505050',subtitleLetterSpacing: '1px',titleColor: 'salmon',marginY: 'auto',marginX: '30px',height: 'auto',width: '80vw',borderColor: 'salmon',hoverBackground: '#f0f0f0',transforms: { translateY: '-50%' },transitions: { background: '2' } }.toString());
   });
   
})