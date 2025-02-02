<script>
  
  /**
   * @typedef {Object} Props
   * @property {any} data
   * @property {import('svelte').Snippet} [children]
   */

  /** @type {Props} */
  let { data, children } = $props();
  
  // @ts-ignore
   let url = $derived(data.url);
</script>

<style>
  /* your styles go here */
</style>


{@render children?.()}