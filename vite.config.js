import { defineConfig } from "vite";
import postcssNesting from "postcss-nesting";

export default defineConfig({
  root: "./src",
  build: {
    outDir: "../dist",
    rollupOptions: {
      input: {
        main: "./src/index.html",
        styles: "./src/style.css",
      },
      output: {
        entryFileNames: "assets/js/[name].[hash].js", // Use [name].[hash].js format for JS files
        assetFileNames: "assets/css/[name].css", // Use [name].[ext] format for CSS files
      },
    },
    minify: false,
  },
});
