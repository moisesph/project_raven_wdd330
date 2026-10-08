# Raeven

It helps you to calculate your montly savings .
[raven-5m7j.onrender.com](https://raven-5m7j.onrender.com)

## Tecnologies

#install
npm install -D vite-plugin-html-inject
npm install -D typescript
npm
npm install bootstrap @popperjs/core
npm install -D sass
(To avoid too many alerts:

)

import { defineConfig } from 'vite';

export default defineConfig({
css: {
preprocessorOptions: {
scss: {
api: 'modern-compiler',
silenceDeprecations: ['color-functions', 'global-builtin', 'import'],
},
},
},
});
