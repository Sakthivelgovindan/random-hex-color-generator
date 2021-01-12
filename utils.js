const validateHexColor = (color) => {
  return /^#[0-9A-F]{6}$/i.test(color);
};

const generateStaticString = (padLength) => {
  let staticString = "";
  for (let i = 0; i < padLength; i++) {
    staticString = staticString + "F";
  }
  return staticString;
};

const generateRandomNumber = () => {
  return Math.floor(Math.random() * 10) + 1;
};
module.exports = { validateHexColor, generateStaticString, generateRandomNumber };
