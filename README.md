# Random Hex Color Generator

Generate a random hex color.

# Installation

```
npm install random-hex-color-generator

or

yarn add random-hex-color-generator
```

## Getting Started

```javascript
const { 
    randomHexColor, 
    randomHexColorStartWith, 
    randomHexColorEndWith,
    randomHexColorStartAndEndWith,
    randomHexColorWithArray,
    randomHexColorWithArrayOfObject,
    randomHexColorArrayStartWith,
    randomHexColorArrayEndWith,
} = require('random-hex-color-generator')


// Generate random hex color
randomHexColor() // => OUTPUT --> '#FFE2A3'


// Generate random hex color start with custom hex code
randomHexColorStartWith('00') // => OUTPUT --> '#00AFD2'


// Generate random hex color end with custom hex code
randomHexColorEndWith('FF') // => OUTPUT --> '#2345FF'


// Generate random hex color start and end with custom hex code
randomHexColorStartAndEndWith('AA','FF') // => OUTPUT --> '#AA23FF'


// Generate random hex color array 
randomHexColorWithArray() // => OUTPUT --> ['#BF0966', '#81BFE8', '#002B3A']


// Generate random hex color array using array length 
randomHexColorWithArray(2) // => OUTPUT --> ['#9CD84D', '#440343']

// Generate random hex color array value start with
randomHexColorArrayStartWith("FF", 2) // => OUTPUT --> ['#FFD84D', '#FF0343']


// Generate random hex color with array of object
randomHexColorWithArrayOfObject() // => OUTPUT --> [{ key: 1, value: '#95DD11' }]


// Generate random hex color with array of object using array length 
randomHexColorWithArrayOfObject(2) // => OUTPUT --> [{ key: 1, value: '#9CD84D' },{ key: 2, value: '#440343'}]


// Generate random hex color array value end with
randomHexColorArrayEndWith("FF", 2) // => OUTPUT --> ['#23D8FF', '#5103FF']

```
