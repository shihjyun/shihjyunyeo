<script>
  export let value
</script>

<style>
  ul {
    list-style-position: inside;
    list-style-type: disc;
    margin-bottom: 28px;
  }
</style>

<ul>
  {#each value as text}
     <li>{@html text}</li>
  {/each}
</ul>