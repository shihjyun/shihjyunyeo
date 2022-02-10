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

  $: console.log(post);

  import { setContext } from 'svelte';

  import Post from '$lib/post/Post.svelte';

  setContext('url', url);
</script>

<svelte:head>
  <title>{`${post.title} - Steven Yeo`}</title>
  <meta property="og:url" content={url} />
  <meta content={`${post.title} - Steven Yeo`} property="og:title">
  <meta content={post.description} name="description">
  <meta content="article" property="og:type">
  <meta content={`${url}/${post.og_image}`} property="og:image">
  <meta name="twitter:title" content={`${post.title} - Steven Yeo`}>
  <meta name="twitter:description" content={post.description}>
  <meta name="twitter:image" content={`${url}/${post.og_image}`}>
  <meta name="twitter:card" content="summary_large_image">
</svelte:head>

<Post {post} />
