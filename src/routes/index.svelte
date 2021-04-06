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

  console.log(shihjyun)
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
</style>

<svelte:head>
  <title>Steven Yeo</title>
  <!-- <meta name="description" content="" /> -->
</svelte:head>

<section class="intro">
  <Intro briefIntro={shihjyun.brief_intro} />
  <SocialLinkHorizon />
</section>
<section class="feature-projects">
  <FeatureProjects featureProjectsData={shihjyun.feature_projects_cn} />
</section>
