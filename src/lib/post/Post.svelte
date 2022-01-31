<script>
  export let post;
  export let components = {};
</script>

<style lang="scss">
  article {
    max-width: 500px;
    margin: 0 auto;
    color: var(--text-base-gray);
  }

  header {
    margin: 48px 0 0 0;
    > h1 {
      font-size: var(--text-lg);
      font-weight: 500;
      line-height: 1.2;
      margin-bottom: 12px;
    }

    > .info > * {
      font-family: 'Fira Mono', 'Noto Sans TC';
    }
  }

  .content {
    > p {
      line-height: 1.5;
      margin-bottom: 32px;
    }

    > h2 {
      font-size: var(--text-base-2);
      font-weight: 500;
      line-height: 1.5;
      margin-bottom: 12px;
    }

    > hr {
      max-width: 75%;
      margin: 48px auto;
    }
  }

  @media screen and (max-width: 768px) {
    article {
      padding: 0 24px;
    }

    .content {
      > hr {
        max-width: 85%;
        margin: 32px auto;
      }
    }
  }
</style>

<article>
  <header>
    <h1>{post.title}</h1>
    <div class="info">
      <span>{post.date}</span><span style:margin="0 10px">x</span><category>{post.category}</category>
    </div>
  </header>
  <div class="content">
    {#each post.content as item}
      {#if item.type === 'text'}
        <p>{@html item.value}</p>
      {:else if item.type === 'heading2'}
        <h2>{@html item.value}</h2>
      {:else if item.type === 'horizon-rule'}
        <hr />
      {:else if item.type === 'component'}
        <!-- custom component -->
        <svelte:component this={components[item.value]} />
      {/if}
    {/each}
  </div>
</article>
