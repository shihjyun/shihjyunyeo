<script>
  
  /**
   * @typedef {Object} Props
   * @property {any} tagType
   * @property {import('svelte').Snippet} [children]
   */

  /** @type {Props} */
  let { tagType, children } = $props();
</script>

<style>
  span {
    font-size: var(--text-xs);
    color: white;
    border: white solid 0px;
    border-radius: 5px;
    padding: 2px 8px;
    margin: 3px 3px 3px 3px;
    -webkit-box-shadow: 3px 3px 3px -2px rgb(185, 185, 185);
    -moz-box-shadow: 3px 3px 3px -2px rgb(185, 185, 185);
    box-shadow: 3px 3px 3px -2px rgb(185, 185, 185);
    user-select: none;
  }

  @media (min-width: 650px) {
    span {
      font-size: var(--text-sm);
      color: white;
      border: white solid 0px;
      border-radius: 5px;
      padding: 2px 8px;
      margin: 3px 3px 3px 3px;
      -webkit-box-shadow: 3px 3px 3px -2px rgb(185, 185, 185);
      -moz-box-shadow: 3px 3px 3px -2px rgb(185, 185, 185);
      box-shadow: 3px 3px 3px -2px rgb(185, 185, 185);
    }
  }
</style>

<span style="background-color: var({tagType})">{@render children?.()}</span>
