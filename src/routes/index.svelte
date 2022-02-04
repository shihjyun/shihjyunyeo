<script context="module">
  import archieml from 'archieml'

  export async function load({ url, fetch }) {
    const works = await fetch(`${url.origin}${url.pathname}/works/works-meta.txt`);

    return { props: { works:  archieml.load(await works.text())} };
  }
</script>

<script>
  import Intro from '$lib/index/Intro.svelte';
  import RecentWorks from '$lib/index/RecentWorks.svelte';

  export let works;
</script>

<style>
  section {
    max-width: 500px;
    margin: 0 auto 3rem auto;
  }

  section.intro {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  p {
    font-size: 14px;
    color: rgb(87, 87, 87);
    text-align: center;
    margin: 80px auto 48px auto;
  }
</style>

<svelte:head>
  <title>Steven Yeo</title>
  <meta property="og:url" content="https://www.shihjyun.com" />
  <link rel="canonical" href="https://www.shihjyun.com" />
  <!-- <meta name="description" content="" /> -->
</svelte:head>

<section class="intro">
  <Intro />
</section>
<section class="recent-projects">
  <RecentWorks works={works.works} />
</section>
<p>更新日期：{works.updated_date}</p>
