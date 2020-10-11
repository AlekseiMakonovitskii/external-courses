const { SearchSource } = require("jest");

function searchString(str, str2) {
  if (str.indexOf(str2) >= 0) {
    return true;
  } 
    
  return false;
}

module.exports = searchString;
