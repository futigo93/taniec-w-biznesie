import type { NextConfig } from "next";
import createMDX from "@next/mdx";

const nextConfig: NextConfig = {
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
};

const withMDX = createMDX({
  options: {
    // Lets Keystatic-authored (and hand-written) YAML frontmatter become an
    // `export const frontmatter = {...}` in the compiled module, readable via
    // the same dynamic import() used in src/lib/articles.ts.
    remarkPlugins: ["remark-frontmatter", "remark-mdx-frontmatter"],
  },
});

export default withMDX(nextConfig);
