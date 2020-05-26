// next.config.js
const withOptimizedImages = require("next-optimized-images");
const path = require("path");
module.exports = withOptimizedImages({
  /* config for next-optimized-images */
  imageTrace: {
    color: "#fff",
  },
  webpack(config) {
    config.resolve.alias.images = path.join(__dirname, "images");
    return config;
  },
});
