// @ts-check
import { defineConfig } from 'astro/config';
import remarkMath from 'remark-math';
import remarkDirective from 'remark-directive';
import { remarkAdmonitions } from './src/plugins/remark-admonitions.mjs';
import rehypeKatex from 'rehype-katex';

export default defineConfig({
  markdown: {
    remarkPlugins: [remarkMath, remarkDirective, remarkAdmonitions],
    rehypePlugins: [rehypeKatex],
    shikiConfig: {
      theme: 'rose-pine-moon',
      wrap: true,
    },
  },
});