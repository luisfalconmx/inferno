import { defineConfig } from "vite";
import { extname, relative, resolve } from "path";
import { glob } from "glob";
import { fileURLToPath } from "node:url";
import { libInjectCss } from "vite-plugin-lib-inject-css";
import dts from "vite-plugin-dts";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    dts({
      tsconfigPath: resolve(__dirname, "tsconfig.app.json"),
      exclude: ["**/*.stories.ts", "**/*.test.ts"],
    }),
    libInjectCss(),
  ],
  build: {
    lib: {
      entry: resolve(__dirname, "src/main.ts"),
      name: "andromeda",
      fileName: "andromeda",
      formats: ["es"],
    },
    rollupOptions: {
      external: ["vue"],
      input: Object.fromEntries(
        glob
          .sync("src/**/*.{vue,ts}", {
            ignore: [
              "src/**/*.stories.ts",
              "src/**/*.test.ts",
              "src/**/*.d.ts",
            ],
          })
          .map((file) => [
            relative("src", file.slice(0, file.length - extname(file).length)),
            fileURLToPath(new URL(file, import.meta.url)),
          ])
      ),
      output: {
        inlineDynamicImports: false,
        assetFileNames: "assets/[name][extname]",
        entryFileNames: "[name].js",
      },
    },
  },
});
