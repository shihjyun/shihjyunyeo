<script>
  export let works;
</script>

<style>
  h2 {
    text-align: center;
    font-size: var(--text-base);
    line-height: 24px;
    letter-spacing: 0.05em;
    color: var(--text-base-gray);
    margin-bottom: 24px;
  }

  .recent-works {
    position: relative;
    width: 800px;
    display: grid;
    gap: 32px 32px;
    grid-template-columns: repeat(3, 1fr);
    justify-content: space-between;
    margin-top: 16px;
    margin: 16px 0 0 0;
    left: calc(-400px + 50%);
  }


  h3 {
    text-align: center;
    font-size: var(--text-sm);
    color: var(--text-base-gray);
    margin-top: 0.5rem;
    letter-spacing: 0.02em;
    cursor: pointer;
  }

  h3:hover {
    color: var(--purple);
  }

  .works-container:hover h3 {
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

  .more-works {
    position: relative;
    width: 100%;
    padding-bottom: 67%;
    border-radius: 2.5px;
    overflow: hidden;
    cursor: pointer;
    transition: background-color 0.2s linear;
    background-color: var(--light-gray);
  }

  .more-works:hover {
    background-color: #e4e4e4ce;
    cursor: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg'  width='40' height='48' viewport='0 0 100 100' style='fill:black;font-size:24px;'><text y='50%'>👀</text></svg>")
        16 0,
      auto;
  }

  .more-works > span {
    position: absolute;
    font-size: var(--text-base-2);
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: #413f3f;
  }

  img {
    position: absolute;
  }

  @media screen and (max-width: 860px) {
    .recent-works {
      width: 600px;
      grid-template-columns: repeat(2, 1fr);
      left: calc(-300px + 50%);
    }

    h3 {
      font-size: var(--text-base);
    }
  }

  @media screen and (max-width: 650px) {
    .recent-works {
      width: 300px;
      grid-template-columns: repeat(1, 1fr);
      left: calc(-150px + 50%);
    }
  }
</style>

<h2>- 近期作品 -</h2>

<div class="recent-works">
  {#each works.slice(0, 5) as { title, cover, url }}
    <div class="works-container">
      <a class="works-cover-wrap" href={url} target="_blank">
        <img width="100%" src={`/works/cover/${cover}`} alt={title} />
      </a>
      <a href={url} target="_blank">
        <h3>{title}</h3>
      </a>
    </div>
  {/each}
  <a sveltekit:prefetch href="/works"><div class="more-works"><span>更多作品 🧐</span></div></a>
</div>
