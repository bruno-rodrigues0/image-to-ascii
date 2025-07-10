const asciify = require("asciify-image");

const options = {
  fit:    'box',      // 'box' or 'width' or 'height'
  width:  400,        // Width of the output (number)
  height: 400,        // Height of the output (number)
  color:  true,      // true to output color ASCII, false for black & white
  c_ratio: 2,         // Character aspect ratio (default 2)
  as_string: false,   // true to return as string, false for console output
  px_background: true // true to use background color for pixels
};

asciify('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQr8br4i6uaIGSXcj56kdWnT3PMdVrxsSZT2A&s', options)
  .then(console.log)
  .catch(console.error);