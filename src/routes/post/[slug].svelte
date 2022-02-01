<script context="module">
  import archieml from 'archieml';
  import Post from '$lib/post/Post.svelte';

  export async function load({ url, params, fetch }) {
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

  import {setContext} from 'svelte'

  setContext('url', url)

</script>

<Post {post} />
