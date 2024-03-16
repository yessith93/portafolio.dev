import { defineConfig } from 'astro/config'
import tailwind from "@astrojs/tailwind"

import robotsTxt from "astro-robots-txt"

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), robotsTxt()],
  site: 'https://porfolio.dev/',
  i18n: {
    defaultLocale: "es",
    routing: {
      prefixDefaultLocale: false
    },
    locales: ["en", "es", "pt-br"]
  },
})
