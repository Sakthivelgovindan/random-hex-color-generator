const validateHexColor = (color) => {
  return /^#[0-9A-F]{6}$/i.test(color)
}

module.exports = {validateHexColor}