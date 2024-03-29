import vercel from '@sveltejs/adapter-vercel';
import sveltePreprocess from 'svelte-preprocess';
import autoprefixer from 'autoprefixer';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    // default options are shown
    adapter: vercel({
      // if true, will deploy the app using edge functions
      // (https://vercel.com/docs/concepts/functions/edge-functions)
      // rather than serverless functions
      edge: false,

      // an array of dependencies that esbuild should treat
      // as external when bundling functions
      external: [],

      // if true, will split your app into multiple functions
      // instead of creating a single one for the entire app
      split: false
    })
  },

  preprocess: sveltePreprocess({
    scss: true,
    postcss: { plugins: autoprefixer() },
    preserve: ['ld+json'],
  }),

	alias: {
		'$static': 'static/*',
    '$lib': 'src/lib/*'
	}
};

export default config;
