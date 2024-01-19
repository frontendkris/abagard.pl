import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import react from "@astrojs/react";
import partytown from "@astrojs/partytown";

// https://astro.build/config
export default defineConfig({
  site: "https://abagard.pl",
  integrations: [
    react(), 
    tailwind(), 
    sitemap(), 
    partytown({
      // Example: Add dataLayer.push as a forwarding-event.
      config: { 
        forward: ["dataLayer.push"] 
      },
    })
  ]
});