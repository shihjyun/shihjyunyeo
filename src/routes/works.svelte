<script context="module">
  export async function load({ fetch }) {
    const res = await fetch('/assets/index/base_data/shihjyun_data.json')
    const shihjyun = await res.json()

    return { props: { shihjyun } }
  }
</script>

<script>
  import ProjectTag from '$lib/shared/ProjectTag.svelte'

  export let shihjyun
</script>

<style>
  h1 {
    margin: 1rem 2rem 2rem 2rem;
    font-size: var(--text-md-2);
  }
  section {
    max-width: 600px;
    margin: 0 auto;
  }

  a {
    font-size: var(--text-sm);
    color: #1a1919;
    transition: opacity 0.1s linear;
  }

  a:hover {
    opacity: 0.7;
  }

  span {
    font-size: var(--text-sm);
  }

  .other-works-container {
    display: grid;
    align-items: center;
    grid-template-columns: 5rem auto;
    gap: 0.8rem 0.5rem;
    margin-top: 1rem;
    margin: 1rem 2rem 0 2rem;
  }

  .project-tags-wrap {
    display: flex;
    flex-wrap: wrap;
  }

  @media (min-width: 650px) {
    h1 {
      margin: 1rem 2rem 3rem 2rem;
    }

    span {
      font-size: var(--text-base);
    }

    a {
      font-size: var(--text-base);
    }

    .other-works-container {
      align-items: start;
      gap: 2rem 1rem;
      grid-template-columns: 6rem auto;
    }

    .project-tags-wrap {
      margin-top: 0.4rem;
    }
  }
</style>

<svelte:head>
  <title>作品清單 - Steven Yeo</title>
  <meta property="og:url" content="https://www.shihjyun.com/works" />
  <link rel="canonical" href="https://www.shihjyun.com/works" />
</svelte:head>

<section>
  <h1>🗂 作品清單 🗂</h1>
  <div class="other-works-container">
    {#each shihjyun.other_works_cn as { p_date, p_form, p_name, p_type, p_url }}
      <span>{p_date}</span>
      <div>
        <a href={p_url} target="_blank">{p_name}</a>
        <div class="project-tags-wrap">
          <ProjectTag tagType="--tag-color-type">{p_type}</ProjectTag>
          <ProjectTag tagType="--tag-color-form">{p_form}</ProjectTag>
        </div>
      </div>
    {/each}
  </div>
</section>
