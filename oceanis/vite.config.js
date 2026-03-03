import { resolve } from "path";

export default {
  root: resolve(__dirname, "src"),
  base: "/pages/oceanis/dist/",
  build: {
    outDir: "../dist",
  },
  server: {
    port: 8080,
  },
};
