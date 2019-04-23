const autoprefixer = require('autoprefixer');

module.exports = {
  plugins: [
    autoprefixer({
      grid: true,
      browsers: ['> 0.25%', 'last 3 versions', 'ie 10', 'ie 11'],
    }),
  ],
};
