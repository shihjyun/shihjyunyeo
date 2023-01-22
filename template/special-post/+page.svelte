<script>
  export let data;

  const url = data.url;
  const post = data.post;

  import { setContext } from 'svelte';

  import Post from '$lib/post/Post.svelte';

  setContext('url', url);

  // custom components
  import ExampleComponent from '$lib/post/test-special/ExampleComponent.svelte';

  const components = {
    'example-component': ExampleComponent,
  };
</script>

<svelte:head>
  <title>{`${post.title} - Steven Yeo`}</title>
  <meta property="og:url" content={url} />
  <meta content={`${post.title} - Steven Yeo`} property="og:title" />
  <meta content={post.description} name="description" />
  <meta content="article" property="og:type" />
  <meta content={`${url}${post.og_image}`} property="og:image" />
  <meta name="twitter:title" content={`${post.title} - Steven Yeo`} />
  <meta name="twitter:description" content={post.description} />
  <meta name="twitter:image" content={`${url}${post.og_image}`} />
  <meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<Post {post} {components} />
