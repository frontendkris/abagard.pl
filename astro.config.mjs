import { defineConfig } from "astro/config";
import { astroImageTools } from "astro-imagetools";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import react from "@astrojs/react";
import image from "@astrojs/image";
import partytown from "@astrojs/partytown";

// https://astro.build/config
export default defineConfig({
  site: "https://abagard.pl",
  integrations: [
    react(), 
    tailwind(), 
    sitemap(), 
    astroImageTools, 
    image(), 
    partytown({
      // Example: Add dataLayer.push as a forwarding-event.
      config: { 
        forward: ["dataLayer.push"] 
      },
    })
  ]
});