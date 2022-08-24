import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import vue from "@astrojs/vue";
import { remarkReadingTime } from "./src/plugins/reading-time.mjs";
import mdx from "@astrojs/mdx";
import netlify from "@astrojs/netlify/edge-functions";

// https://astro.build/config
export default defineConfig({
  output: "server",
  adapter: netlify({
    dist: new URL("./dist/", import.meta.url),
  }),
  markdown: {
    remarkPlugins: [remarkReadingTime],
  },
  integrations: [
    tailwind(),
    vue({
      template: {
        compilerOptions: {
          isCustomElement: () => true,
        },
      },
    }),
    mdx({
      remarkPlugins: [remarkReadingTime],
    }),
  ],
});
