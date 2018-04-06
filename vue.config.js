const fs = require('fs');

module.exports = {
  lintOnSave: true,

  // Load vars.scss across all .vue components once
  css: {
    loaderOptions: {
      sass: {
        data: fs.readFileSync('src/assets/styles/vars.scss', 'utf-8')
      }
    }
  }
};
