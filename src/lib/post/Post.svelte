<script>

  import Image from './Image.svelte';
  import List from './List.svelte';
  let { post, components = {} } = $props();

</script>

<style lang="scss">
  article {
    max-width: 500px;
    margin: 0 auto;
    color: var(--text-base-gray);
  }

  header {
    margin: 100px 0 32px 0;
    > h1 {
      font-size: var(--text-md-2);
      font-weight: 500;
      line-height: 1.2;
      margin-bottom: 12px;
    }

    > .info > * {
      font-size: var(--text-sm);
      font-family: 'Fira Mono', 'Noto Sans TC';
    }
  }

  .content {
    > p {
      line-height: 1.5;
      margin-bottom: 28px;
    }

    > h2 {
      font-size: var(--text-base-2);
      font-weight: 500;
      line-height: 1.5;
      margin: 36px 0 12px 0;
    }

    > hr {
      max-width: 10%;
      margin: 48px 0;
    }

    :global(strong) {
      font-weight: 500;
    }

    :global(a) {
      padding: 0 1px;
      border-bottom: 1px solid var(--light-gray);
      color: var(--purple);
    }

    :global(a:hover) {
      border-bottom: 1px solid var(--light-purple);
    }

    :global(code) {
      font-size: 14px;
      font-family: 'Fira Mono', 'Noto Sans TC';
      padding: 0 4px;
      color: #2d2d2d;
      background-color: var(--light-gray);
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
    <h1>{@html post.title}</h1>
    <div class="info">
      <span>{post.date}</span><span style:margin="0 10px">x</span><category>{post.category}</category>
    </div>
  </header>
  <div class="content">
    {#each post.content as {type, value}}
      {#if type === 'text'}
        <p>{@html value}</p>
      {:else if type === 'heading2'}
        <h2>{@html value}</h2>
      {:else if type === 'horizon-rule'}
        <hr />
      {:else if type === 'image'}
        <Image {value} />
      {:else if type === 'list'}
        <List {value} />
      {:else if type === 'component'}
        <!-- custom component -->
        {@const SvelteComponent = components[value]}
        <SvelteComponent />
      {/if}
    {/each}
  </div>
</article>
