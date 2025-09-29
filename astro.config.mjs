// @ts-check
import { defineConfig } from 'astro/config';
import marp from 'astro-marp';
import { typst } from 'astro-typst';

// https://astro.build/config
export default defineConfig({
  integrations: [
	  typst(),
          marp({
        defaultTheme: 'am_blue'
      })	  
  ],
  // Add .marp files as assets to prevent syntax highlighting errors
  //assetsInclude: ['**/*.marp'],
  // Disable syntax highlighting for .marp files
  //markdown: {
  //  syntaxHighlight: false
  //}
});
