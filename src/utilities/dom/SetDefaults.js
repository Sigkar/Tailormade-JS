const SetDefaultStyles = function(styles, defaultStyles) {
  const possible = [
    "paddingX",
    "paddingY",
    "textTransform",
    "subtitleColor",
    "subtitleLetterSpacing",
    "titleColor",
    "marginY",
    "marginX",
    "height",
    "width",
    "borderColor",
    "hoverBackground",
    "transforms",
    "transitions"
  ];

  if (Object.keys(defaultStyles).length <= 0) {
    return false;
  }
  for (let i = 0; i < possible.length; i++) {
    try {
      if (!styles[possible[i]]) {
        styles[possible[i]] = defaultStyles[possible[i]];
      }
    } catch (e) {
      return false;
    }
  }

  return styles;
};

module.exports = {
  SetDefaultStyles
};
