import vercel from '@sveltejs/adapter-vercel';
import autoprefixer from 'autoprefixer';
import sveltePreprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  extensions: ['.svelte'],
  // options passed to svelte.preprocess (https://svelte.dev/docs#svelte_preprocess)
  preprocess: [
    sveltePreprocess({
      postcss: {
        plugins: [autoprefixer()],
      },
    }),
  ],
  kit: {
    adapter: vercel(),
    target: '#svelte',
  },
};

export default config;
