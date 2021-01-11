const { validateHexColor } = require("./utils");

// Generate random hex color
function randomHexColor() {
  return "#" + ((Math.random() * 0xffffff) << 0).toString(16).padStart(6, "0").toUpperCase();
}

// Generate random hex color start with custom hex code
function randomHexColorStartWith(start) {
  if (start) {
    const staticLength = start.length;
    const padLength = 6 - staticLength;

    let staticString = "";
    for (let i = 0; i < padLength; i++) {
      staticString = staticString + "F";
    }

    const hexColor =
      "#" + start + ((Math.random() * `0x${staticString}`) << 0).toString(16).padStart(padLength, "0").toUpperCase();
    return validateHexColor(hexColor) ? hexColor : randomHexColor();
  } else {
    return "#FF" + ((Math.random() * 0xffff) << 0).toString(16).padStart(4, "0").toUpperCase();
  }
}

// Generate random hex color end with custom hex code
function randomHexColorEndWith(end) {
  if (end) {
    const staticLength = end.length;
    const padLength = 6 - staticLength;

    let staticString = "";
    for (let i = 0; i < padLength; i++) {
      staticString = staticString + "F";
    }
    const hexColor = (
      "#" +
      ((Math.random() * `0x${staticString}`) << 0).toString(16).padStart(padLength, "0") +
      end
    ).toUpperCase();
    return validateHexColor(hexColor) ? hexColor : randomHexColor();
  } else {
    return "#" + ((Math.random() * 0xffff) << 0).toString(16).padStart(4, "0") + "DD".toUpperCase();
  }
}

module.exports = { randomHexColor, randomHexColorStartWith, randomHexColorEndWith };
