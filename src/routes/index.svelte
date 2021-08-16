<script context="module">
  export async function load({ fetch }) {
    const res = await fetch('/assets/index/base_data/shihjyun_data.json')
    const shihjyun = await res.json()

    return { props: { shihjyun } }
  }
</script>

<script>
  import Intro from '$lib/index/Intro.svelte'
  import SocialLinkHorizon from '$lib/index/SocialLinkHorizon.svelte'
  import FeatureProjects from '$lib/index/FeatureProjects.svelte'

  export let shihjyun
</script>

<style>
  section {
    max-width: 800px;
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
    margin: 5rem auto 3rem auto;
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
  <SocialLinkHorizon />
</section>
<section class="feature-projects">
  <FeatureProjects featureProjectsData={shihjyun.feature_projects_cn} />
</section>
<p>更新日期：2021-08-17</p>
