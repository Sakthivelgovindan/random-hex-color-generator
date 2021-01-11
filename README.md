# Random Hex Color Generator

Generate a random hex color.

# Installation

```
npm install --save random-hex-color-generator

```
## Getting Started

```javascript
const { 
    randomHexColor, 
    randomHexColorStartWith, 
    randomHexColorEndWith
} = require('random-hex-color-generator')


// Generate random hex color
randomHexColor() // => OUTPUT --> '#FFE2A3'


// Generate random hex color start with custom hex code
randomHexColorStartWith('00') // => OUTPUT --> '#00AFD2'


// Generate random hex color end with custom hex code
randomHexColorEndWith('FF') // => OUTPUT --> '#2345FF'

```
