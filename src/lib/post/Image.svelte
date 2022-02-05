<script>
  export let value;

  import { getContext } from 'svelte';

  const url = getContext('url');
</script>

<style lang="scss">
  figure {
    width: 100%;
    margin-bottom: 36px;

    img {
      margin-bottom: 16px;
    }

    figcaption {
      text-align: center;
      font-weight: 300;
      font-size: var(--text-sm);
      color: var(--gray);
    }
  }
</style>

<figure>
  <img src={`${url.origin}${url.pathname}/${value.src}`} alt={value.alt} />
  {#if value.caption}
    <figcaption>{value.caption}</figcaption>
  {/if}
</figure>
