System.config({
  "paths": {
    "*": "*.js",
    "app/*": "scripts/*.js",
    "github:*": "jspm_packages/github/*.js"
  }
});

System.config({
  "map": {
    "jquery": "github:components/jquery@2.1.3"
  }
});

