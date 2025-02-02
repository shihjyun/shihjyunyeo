<script>
  import { onMount } from 'svelte';
  import { fade } from 'svelte/transition';

  let { workInfo } = $props();

  // onMount(() => {
  //   preloadImage('works/cover_test/taipei-heat.jpg');
  // });

  let hoveredCover = $state(false);

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

<style lang="scss">
  .work-item {
    margin-bottom: 48px;
    -webkit-tap-highlight-color: transparent;

    h2 {
      font-family: 'PT Mono', monospace;
      color: var(--dark-white);
      margin: 0 0 8px 4px;
      font-size: 16px;
      font-family: 'Roboto Mono', monospace;
    }

    p {
      margin: 0 0 0 4px;
    }
  }
  .work-cover {
    position: relative;
    width: 100%;
    aspect-ratio: 600/100;
    background-color: rgb(97, 97, 97);
    cursor: pointer;
    margin-bottom: 12px;
    overflow: hidden;

    @media screen and (max-width: 767px) {
      aspect-ratio: 300/100;
    }

    .img-element {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 100%;
    }

    .cover {
      opacity: 1;
      transition: opacity 0.3s ease-in-out;

      &.hide {
        opacity: 0;
      }
    }

    .filter {
      height: 100%;
      background: var(--dark);
      opacity: 0.4;
      transition: opacity 0.3s ease-in-out;

      &.hide {
        opacity: 0;
      }
    }
  }
</style>

<!-- svelte-ignore a11y_mouse_events_have_key_events -->
<a href={workInfo.url} target="_blank" rel="noreferrer">
  <div class="work-item">
    <h2>{workInfo.title}</h2>
    <div
      class="work-cover"
      ontouchstart={handleMouseOver}
      onmouseover={handleMouseOver}
      ontouchend={handleMouseLeave}
      onmouseleave={handleMouseLeave}
    >
      {#if workInfo.animation_cover == 'true'}
        {#await preloadImage(`works/cover/${workInfo.slug}.gif`) then value}
          <img class="animation img-element" in:fade|global src={`works/cover/${workInfo.slug}.gif`} alt={workInfo.slug} />
        {/await}
      {/if}
      {#await preloadImage(`works/cover/${workInfo.slug}.jpg`) then value}
        <img
          class="cover img-element"
          class:hide={hoveredCover && workInfo.animation_cover == 'true'}
          in:fade|global
          src={`works/cover/${workInfo.slug}.jpg`}
          alt={workInfo.slug}
        />
      {/await}
      <div class="filter img-element" class:hide={hoveredCover}></div>
    </div>
    <!-- <p>{@html workInfo.description}</p> -->
  </div>
</a>
