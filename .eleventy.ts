/* from https://www.jetbrains.com/guide/javascript/tutorials/eleventy-tsx/setup/ */
import { renderToString } from "jsx-async-runtime";


export default async function (eleventyConfig: any)
{
  /*
   * eleventy-plugin-mdx setup
   *
   * we're ESM now but eleventy-plugin-mdx is CJS so it seems we need mdxPlugin.default
   *                                                                  ━━━━━━━━━━━━━━━━━
   *
   * also need explicit addWatchTarget so --watch rebuilds .tsx components used by .mdx file
   */
  const mdxPlugin = await import("@jamshop/eleventy-plugin-mdx")
  eleventyConfig.addPlugin(mdxPlugin.default);
  eleventyConfig.addWatchTarget("main/**/*.tsx");


  /* from https://www.jetbrains.com/guide/javascript/tutorials/eleventy-tsx/setup/ */
  eleventyConfig.addExtension(["11ty.jsx", "11ty.ts", "11ty.tsx"],
    {
      key: "11ty.js",
    }
  );
  eleventyConfig.addTransform("tsx", async (content: any) =>
  {
    return await renderToString(content);
  });


  /* inspired by https://www.lenesaile.com/en/blog/organizing-the-eleventy-config-file */
  return {
    dir: {
      input:   "main",
      output:  "public",
      data:    "_data",
      layouts: "_layouts",
    },
  };
}
