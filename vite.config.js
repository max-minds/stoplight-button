import { defineConfig } from 'vite'
import sveltePlugin from "@sveltejs/vite-plugin-svelte";
import ViteFonts from "vite-plugin-fonts";

function viteHapticSingleFile() {
    return {
        name: "vite:singlefile",
        transformIndexHtml: {
            enforce: "post",
            transform(html, ctx) {
                // Only use this plugin during build
                if (!ctx || !ctx.bundle)
                    return html;
                // Get the bundle
                let extraCode = "";
                for (const [, value] of Object.entries(ctx.bundle)) {
                    const o = value;
                    const a = value;
                    if (o.code) {
                        const reScript = new RegExp(`<script type="module"[^>]*?src="/${value.fileName}"[^>]*?></script>`);
                        const code = `
                            <script type="module">
                                (async function(haptic,window) {
                                    \n//${o.fileName}\n${o.code}\n
                                })((window && window.haptic && window.haptic.widgetInit[widgetId]()) || undefined,window)
                            </script>`;
                        html = html.replace(reScript, (_) => code);
                    }
                    else if (value.fileName.endsWith(".css")) {
                        const reCSS = new RegExp(`<link rel="stylesheet"[^>]*?href="/${value.fileName}"[^>]*?>`);
                        const code = `<!-- ${a.fileName} --><style type="text/css">\n${a.source}\n</style>`;
                        html = html.replace(reCSS, (_) => code);
                    }
                    else {
                        extraCode += "\n<!-- ASSET NOT INLINED: " + a.fileName + " -->\n";
                    }
                }
                return html.replace(/<\/body>/, extraCode + "</body>");
            },
        },
    };
}

export default defineConfig({
  plugins: [
    viteHapticSingleFile(),
    sveltePlugin(),
    // ViteFonts({
    //     google: {
    //       families: ['Roboto']
    //     },
    // }),
  ],
  build: {
    cssCodeSplit: false,
    assetsInlineLimit: 100000000,
    rollupOptions: {
      output: {
        manualChunks: () => "everything.js",
      },
    },
  }
})