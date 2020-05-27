// next.config.js
const withOptimizedImages = require("next-optimized-images");
const path = require("path");
module.exports = withOptimizedImages({
  /* config for next-optimized-images */
  imageTrace: {
    color: "#fff",
  },
  webp: {
    autoFilter: true,
  },
  webpack(config) {
    config.resolve.alias.images = path.join(__dirname, "images");

    //webpacが.mdファイルを読みこんで、エラーを吐くのに対する対策
    config.module.rules.push({
      test: /\.md$/,
      use: "raw-loader",
    });
    return config;
  },
});
