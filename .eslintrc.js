module.exports = {
  "extends": "airbnb",
  // "installedESLint": true,
  // // "plugins": ["react"],
  // "ecmaVersion": 6,
  // "ecmaFeatures": {
  //   "jsx": false,
  //   "modules": false,
  //   "arrowFunctions": false,
  //   "classes": true,
  //   "spread": true,
  // },
  // "env": {
  //   "browser": true,
  //   "jquery": true,
	// 	"worker": true,
	// 	"serviceworker": true,
  // },
  "rules": {
    // "indent": [ "error", "tab" ],
    // "linebreak-style": [ "error", "windows" ],
    // "quotes": [ "error", "single" ],
    // "semi": [ "error", "always" ]
    // "newline-per-chained-call": ["off"],
    "no-unused-vars": ["off"],
    "max-len": ["off", 100, 4],
    "no-var": ["off"],
    // "prefer-arrow-callback": ["off"],
    "no-undef": ["off"],
    "prefer-arrow-callback": ["off"]
  },
  "globals": {
    "Materialize": true,
    "intervalID": true,
    "jQuery" : true
  },
};
