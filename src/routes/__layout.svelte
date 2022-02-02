<script context="module">
  export async function load({ url }) {
    try {
      return {
        props: {
          url,
        },
      };
    } catch (e) {
      return {
        status: 404,
        error: 'Post not found',
      };
    }
  }
</script>

<script>
  export let url;

  import Navigation from '$lib/layout/Navigation.svelte';
  import Footer from '$lib/layout/Footer.svelte';
</script>

<style>
  /* your styles go here */
</style>

<Navigation {url} />

<slot />

<Footer />
