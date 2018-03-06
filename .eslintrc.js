module.exports = {
  "extends": ["airbnb"],
  "env": {
    "browser": true,
    "node": true,
    "es6": true,
  },
  "rules": {
  // Additional, per-project rules...
  "no-console": 0,
    //Silence LF <> CRLF error
    "linebreak-style": 0
  },
  "parserOptions": {
    "ecmaVersion": 8,
    "ecmaFeatures": {
      "jsx": true
    },
  }
};