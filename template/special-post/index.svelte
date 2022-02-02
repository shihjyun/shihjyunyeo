<script context="module">
  import archieml from 'archieml';

  export async function load({ url, fetch }) {
    try {
      const post = await fetch(`${url.origin}${url.pathname}/content.txt`);

      return {
        props: {
          url,
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
  export let url;
  export let post;

  import { setContext } from 'svelte';

  import Post from '$lib/post/Post.svelte';

  setContext('url', url);

  // custom components
  // import ExampleComponent from '$lib/post/***/ExampleComponent.svelte';

  const components = {
    'example-component': ExampleComponent,
  };
</script>

<Post {post} {components} />
