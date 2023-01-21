<script>
  import Navigation from '$lib/layout/Navigation.svelte';
  import Footer from '$lib/layout/Footer.svelte';

  // @ts-ignore
  export let data;
  
  // @ts-ignore
   $: url = data.url;
</script>

<style>
  /* your styles go here */
</style>

<Navigation {url} />

<slot />

<Footer />
