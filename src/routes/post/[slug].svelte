<script context="module">
  export async function load({ page }) {
    try {
      const post = await import(`../../../posts/${page.params.slug}/${page.params.slug}.md`)

      console.log(post)
      return {
        props: {
          post: post.default,
          metadata: post.metadata,
        },
      }
    } catch (e) {
      return {
        status: 404,
        error: 'Post not found',
      }
    }
  }
</script>

<script>
  export let post, metadata
</script>

<style>
  /* your styles go here */
</style>

<svelte:component this={post} />
