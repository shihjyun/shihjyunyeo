<script>
  import { onMount } from 'svelte';
  import { fade } from 'svelte/transition';

  // onMount(() => {
  //   preloadImage('works/cover_test/taipei-heat.jpg');
  // });

  let hoveredCover = false;

  function handleMouseOver() {
    hoveredCover = true;
  }

  function handleMouseLeave() {
    hoveredCover = false;
  }

  const preloadImage = (src) =>
    new Promise((resolve, reject) => {
      const image = new Image();
      image.onload = resolve;
      image.onerror = reject;
      image.src = src;
    });
</script>

<style>
  .work-item {
    position: relative;
    width: 100%;
    aspect-ratio: 600/100;
    background-color: rgb(97, 97, 97);
    cursor: pointer;
    margin-bottom: 48px;
  }

  .img-element {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  .cover {
    opacity: 1;
    transition: opacity 0.3s ease-in-out;
  }

  .cover.hide {
    opacity: 0;
  }

  .filter {
    background: var(--dark);
    opacity: 0.4;
    transition: opacity 0.3s ease-in-out;
  }

  .filter.hide {
    opacity: 0;
  }
</style>

<!-- svelte-ignore a11y-mouse-events-have-key-events -->
<div class="work-item" on:mouseover={handleMouseOver} on:mouseleave={handleMouseLeave}>
  {#await preloadImage('works/cover_test/taipei-heat.gif') then value}
    <img class="animation img-element" in:fade src="works/cover_test/taipei-heat.gif" />
  {/await}
  {#await preloadImage('works/cover_test/taipei-heat.jpg') then value}
    <img class="cover img-element" class:hide={hoveredCover} in:fade src="works/cover_test/taipei-heat.jpg" />
  {/await}
  <div class="filter img-element" class:hide={hoveredCover} />
</div>
