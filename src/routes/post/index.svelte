<script context="module">
  export async function load({ url, fetch }) {
    const posts = await fetch(`${url.origin}${url.pathname}/post-meta.json`);

    return { props: { posts: await posts.json() } };
  }
</script>

<script>
  export let posts;

  import * as d3 from 'd3-time-format';

  let postsMeta = posts
    .map((d) => {
      d.date = d3.timeParse('%Y/%m/%d')(d.date);
      d.year = d3.timeFormat('%Y')(d.date);
      d.dateString = d3.timeFormat('%Y/%m/%d')(d.date);
      return d;
    })
    .sort((a, b) => b.date - a.date);

  const year = [...new Set(postsMeta.map((d) => d.year))];
</script>

<style lang="scss">
  h1 {
    text-align: center;
    font-size: var(--text-base);
    line-height: 24px;
    letter-spacing: 0.05em;
    color: var(--text-base-gray);
    margin: 96px auto 46px auto;
    max-width: 375px;
  }

  h1 > a {
    color: #2d6a4f;
  }
  .posts-wrap {
    width: 100%;
    max-width: 500px;
    margin: 0 auto;

    h2 {
      color: var(--text-base-gray);
      font-family: 'Fira Mono', 'Noto Sans TC';
      font-size: var(--text-base-2);
      margin-bottom: 20px;
    }

    a {
      color: var(--text-base-gray);
      display: block;
      margin-bottom: 8px;
    }

    a:hover {
      opacity: 0.8;
    }
  }

  @media screen and (max-width: 768px) {
    h1,
    .posts-wrap {
      padding: 0 24px;
    }
  }
</style>

<h1>
  一些想寫的東西，內容五花八門，<br />之前寫的一些文章歡迎到<a
    href="https://www.ddstoryhub.com/author/shihjyun"
    target="_blank">這邊</a
  >看。
</h1>
<div class="posts-wrap">
  {#each year as year}
    <h2>{year}</h2>
    {#each postsMeta as { title, slug }}
      <a sveltekit:prefetch href={`/post/${slug}`}><h3>{`－  ${title}`}</h3></a>
    {/each}
  {/each}
</div>
