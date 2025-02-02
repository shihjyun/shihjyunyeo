<script>
  import WorkItem from '$lib/index/WorkItem.svelte';
  import Social from '$lib/index/Social.svelte';

  let { data } = $props();

  const works = data.works;
</script>

<style lang="scss">
  section {
    max-width: 600px;
    margin: 0 auto 1rem auto;
    padding: 0 1rem;
  }

  section.intro {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  section.social {
    margin-bottom: 48px;
  }

  section.feature-works {
    max-width: 800px;
    margin-bottom: 8rem;
  }

  h1 {
    font-size: 48px;
    font-family: Virgil, sans-serif;
    color: var(--light-white);
    margin: 60px auto 0 auto;
  }

  p {
    font-size: 16px;
    font-family: 'PT Mono', monospace;
    line-height: 1.4;
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
    I am a data visualization developer currently working at <a
      href="https://www.cw.com.tw/graphics/"
      target="_blank"
      rel="noreferrer">CommonWealth Magazine</a
    >, based in Taipei, Taiwan.<br /><br /> I love telling interesting stories through compelling charts!
  </p>
</section>
<section class="social">
  <Social />
</section>
<section class="feature-works">
  {#each works.works as workInfo}
    <WorkItem {workInfo} />
  {/each}
</section>
