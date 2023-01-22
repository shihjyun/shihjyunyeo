<script>
  export let value
</script>

<style>
  ul {
    list-style-position: outside;
    list-style-type: disc;
    margin: -18px 0 28px 18px;
  }

  li {
    line-height: 1.4;
    padding: 2px;
  }
</style>

<ul>
  {#each value as text}
     <li>{@html text}</li>
  {/each}
</ul>