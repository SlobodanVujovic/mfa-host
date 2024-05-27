import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import federation from '@originjs/vite-plugin-federation';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'remoteModules',
      remotes: [
        {
          // This name can be anything, but it will be used as the module name from whom we will import remote components in
          // some host component (App.tsx). We also need to declare this module in modules.ds.ts.
          // Each remote module name must be unique.
          tralalaBody: {
            // Static (hardcoded) URL to the remote module. In this case externalType must have value 'url'.
            // external: 'http://localhost:5173/assets/remoteBody.js',

            // Dynamic URL to the remote module. In this case externalType must have value 'promise'.
            external: `Promise.resolve(import.meta.env.VITE_TRALALA_BODY_URL)`,
            from: 'vite',
            externalType: 'promise',
          },
        },
        {
          tralalaFooter: {
            // external: 'http://localhost:5174/assets/remoteFooter.js',
            external: `Promise.resolve(import.meta.env.VITE_TRALALA_FOOTER_URL)`,
            from: 'vite',
            externalType: 'promise',
          },
        },
      ],
      shared: ['react', 'react-dom'],
    }),
  ],
  preview: {
    host: 'localhost',
    port: 5000,
    strictPort: true,
  },
  build: {
    target: 'esnext',
    minify: false,
    cssCodeSplit: false,
  },
});
