<script context="module">
  import archieml from 'archieml';
  import Post from '$lib/post/Post.svelte';

  export async function load({ url, fetch }) {
    try {
      const post = await fetch(`${url.origin}${url.pathname}/content.txt`);

      return {
        props: {
          post: archieml.load(await post.text()),
        },
      };
    } catch (e) {
      return {
        status: 404,
        error: 'Post not found',
      };
    }
  }
</script>

<script>
  export let post;

  // custom components
  import Card from '$lib/post/20220130/Card.svelte';

  const components = {
    card: Card,
  };
</script>

<Post {post} {components} />
