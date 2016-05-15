// !minifyOnSave
// minifyOnSave: false
// !minOnSave
// minOnSave: false
module.exports = {
  "extends": "airbnb",
  "installedESLint": true,
  "plugins": ["react"],
  "ecmaVersion": 5,
  "ecmaFeatures": {
    "jsx": false,
    "modules": false,
    "arrowFunctions": false,
    "classes": true,
    "spread": true,
  },
  "env": {
    "browser": true,
    "jquery": true
  },
  "globals": {
    "Materialize": true,
    "intervalID": true
  },
};
