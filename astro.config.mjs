import { defineConfig } from 'astro/config'
import tailwind from "@astrojs/tailwind"

import robotsTxt from "astro-robots-txt"

const LIVE_URL = "https://yessith93.github.io/"
// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), robotsTxt()],
  site: LIVE_URL,
  // base: '/portafolio.dev',
})
