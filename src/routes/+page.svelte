<script>
  import WorkItem from '$lib/index/WorkItem.svelte';

  export let data;

  const works = data.works;
</script>

<style lang="scss">
  section {
    max-width: 600px;
    margin: 0 auto 3rem auto;
  }

  section.intro {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  section.feature-works {
    max-width: 800px;
  }

  h1 {
    font-size: 48px;
    font-family: Virgil, sans-serif;
    color: var(--light-white);
    margin: 60px auto 0 auto;
  }

  p {
    font-size: 18px;
    font-family: 'PT Mono', monospace;
    line-height: 1.6;
    color: var(--dark-white);
    margin: 32px auto 32px auto;

    a {
      font-family: 'PT Mono', monospace;
      text-decoration: underline;
    }

    a:hover {
      opacity: 0.8;
    }
  }
</style>

<svelte:head>
  <title>Steven Yeo</title>
  <meta property="og:url" content="https://www.shihjyun.com" />
  <link rel="canonical" href="https://www.shihjyun.com" />
  <!-- <meta name="description" content="" /> -->
</svelte:head>

<section class="intro">
  <h1>Steven Yeo</h1>
  <p>
    I'm a data viz developer at <a href="https://www.cw.com.tw/graphics/" target="_blank">CommonWealth Magazine</a>.<br
    />Some of my work ...
  </p>
</section>
<section class="feature-works">
  <WorkItem />
  <WorkItem />
  <WorkItem />
  <WorkItem />
</section>
