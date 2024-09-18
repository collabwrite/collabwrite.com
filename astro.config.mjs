import { defineConfig } from 'astro/config'
import sitemap from '@astrojs/sitemap'
import tailwind from '@astrojs/tailwind'
import mdx from '@astrojs/mdx'
import { remarkReadingTime } from './src/utils/remarkReadingTime.ts'
import remarkUnwrapImages from 'remark-unwrap-images'
import rehypeExternalLinks from 'rehype-external-links'
import icon from 'astro-icon'
import robotsTxt from 'astro-robots-txt'

export default defineConfig({
  site: 'https://www.collabwrite.com',
  integrations: [
    tailwind({
      applyBaseStyles: false
    }),
    sitemap(),
    mdx(),
    icon(),
    robotsTxt()
  ],
  markdown: {
    remarkPlugins: [remarkUnwrapImages, remarkReadingTime],
    rehypePlugins: [
      [
        rehypeExternalLinks,
        {
          target: '_blank',
          rel: ['nofollow, noopener, noreferrer']
        }
      ]
    ],
    remarkRehype: {
      footnoteLabelProperties: {
        className: ['']
      }
    }
  }
})
