<script context="module">
  import archieml from 'archieml';

  export async function load({ url, fetch }) {
    const works = await fetch(`${url.origin}${url.pathname}/works-meta.txt`);

    return { props: { works: archieml.load(await works.text()) } };
  }
</script>

<script>
  export let works;
</script>

<style>
  h1 {
    text-align: center;
    font-size: var(--text-base);
    line-height: 24px;
    letter-spacing: 0.05em;
    color: var(--text-base-gray);
    margin: 96px auto 24px auto;
    max-width: 375px;
  }

  .works {
    position: relative;
    width: 800px;
    display: grid;
    gap: 32px 32px;
    grid-template-columns: repeat(3, 1fr);
    justify-content: space-between;
    margin-top: 16px;
    margin: 16px auto 0 auto;
  }

  h2 {
    text-align: center;
    font-size: var(--text-sm);
    color: var(--text-base-gray);
    margin-top: 0.5rem;
    letter-spacing: 0.02em;
    cursor: pointer;
  }

  h2:hover {
    color: var(--purple);
  }

  .works-container:hover h2 {
    color: var(--purple);
  }

  .works-container:hover .works-cover-wrap {
    transform: translate3D(3px, -3px, 0);
  }

  .works-cover-wrap {
    display: block;
    position: relative;
    width: 100%;
    padding-bottom: 67%;
    border: 0.5px solid var(--light-gray);
    border-radius: 2.5px;
    overflow: hidden;
    cursor: pointer;
    transition: transform 0.2s linear;
    background-color: var(--light-gray);
  }
  img {
    position: absolute;
  }

  p {
    font-size: 14px;
    color: rgb(87, 87, 87);
    text-align: center;
    margin: 80px auto 48px auto;
  }

  @media screen and (max-width: 860px) {
    .works {
      width: 600px;
      grid-template-columns: repeat(2, 1fr);
    }

    h2 {
      font-size: var(--text-base);
    }
  }

  @media screen and (max-width: 650px) {
    .works {
      width: 300px;
      grid-template-columns: repeat(1, 1fr);
    }
  }
</style>

<svelte:head>
  <meta property="og:url" content="https://www.shihjyun.com/works" />
  <link rel="canonical" href="https://www.shihjyun.com/works" />
</svelte:head>

<h1>✨一些個人及工作上的作品們✨</h1>

<div class="works">
  {#each works.works as { title, cover, url }}
    <div class="works-container">
      <a class="works-cover-wrap" href={url} target="_blank">
        <img width="100%" src={`/works/cover/${cover}`} alt={title} />
      </a>
      <a href={url} target="_blank">
        <h2>{title}</h2>
      </a>
    </div>
  {/each}
</div>

<p>更新日期：{works.updated_date}</p>
