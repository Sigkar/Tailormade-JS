const SetDefaultStyles = require("./SetDefaults").SetDefaultStyles;

describe("[Default Styles Suite]", () => {
   let _defaultStyles = {paddingX: "0px", paddingY: "30px",marginX: "30px",marginY: "auto",height: "auto",width: '80vw',borderColor: "salmon",borderWidth: "10px",borderType: "solid",textTransform: "uppercase",titleColor: "salmon",subtitleColor: "#505050",subtitleLetterSpacing: "1px",transforms: {"translateY":"-50%"},transitions: {"background":"2"}, hoverBackground: "#f0f0f0"}
   let styles = SetDefaultStyles({}, _defaultStyles);
   test("Expect style to be truthy", () => {
      expect(styles).toBeTruthy();
    });
})