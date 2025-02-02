<script>
  /**
   * @typedef {Object} Props
   * @property {import('svelte').Snippet} [children]
   */

  /** @type {Props} */
  let { children } = $props();
  // your script goes here
</script>

<style>
  main {
    min-height: 70vh;
  }
</style>

<main>
  {@render children?.()}
</main>
