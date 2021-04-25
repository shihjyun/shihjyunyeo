<script>
  import FeatureProjectModal from '$lib/index/FeatureProjectModal.svelte'

  export let featureProjectsData

  let showProjectModal = false
  let projectInfo

  function getProjectDetail(p_img, p_name, p_date, p_discription, p_from, p_url, p_tools) {
    // get project detail data
    projectInfo = { p_img, p_name, p_date, p_discription, p_from, p_url, p_tools }
    // dom action
    document.querySelector('.project-modal-wrap').classList.add('blur')
    document.querySelector('body').classList.add('no-scroll')
    showProjectModal = true
  }

  function getClosedModalMessage(e) {
    showProjectModal = e.detail.value
  }
</script>

<style>
  h2 {
    font-size: var(--text-md);
    line-height: 24px;
    letter-spacing: 0.05em;
    color: #1a1919;
    margin: 0 2rem 2rem 2rem;
  }

  h3 {
    text-align: center;
    font-size: var(--text-base-2);
    color: #413f3f;
    margin-top: 0.5rem;
    letter-spacing: 0.02em;
    cursor: pointer;
  }

  h3:hover {
    opacity: 0.8;
  }

  .features-container {
    display: grid;
    gap: 2rem 2rem;
    grid-template-columns: repeat(1, 1fr);
    justify-content: space-between;
    margin-top: 1rem;
    margin: 1rem 2rem 0 2rem;
  }

  .feature-img-wrap {
    position: relative;
    width: 100%;
    padding-bottom: 67%;
    border: 0.5px solid #7c7c7c;
    border-radius: 5px;
    overflow: hidden;
    cursor: pointer;
    transition: transform 0.2s linear;
    background-color: var(--light-gray);
  }

  .more-works {
    position: relative;
    width: 100%;
    padding-bottom: 67%;
    border-radius: 5px;
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

  .feature-img-wrap:hover {
    transform: translate3D(3px, -3px, 0);
  }

  @media (min-width: 425px) {
    .features-container {
      grid-template-columns: repeat(2, 1fr);
      margin: 2rem 2rem 0 2rem;
    }

    h3,
    .more-works > span {
      font-size: var(--text-base);
    }
  }

  @media (min-width: 650px) {
    h2 {
      font-size: var(--text-md);
      letter-spacing: 0.1em;
    }

    h3,
    .more-works > span {
      font-size: var(--text-base);
    }

    .features-container {
      grid-template-columns: repeat(3, 1fr);
      margin: 2rem 2rem 0 2rem;
    }
  }
</style>

<h2>✨ 特色作品 ✨</h2>

<div class="features-container">
  {#each featureProjectsData as { p_img, p_name, p_date, p_discription, p_from, p_url, p_tools }}
    <div on:click|preventDefault={getProjectDetail(p_img, p_name, p_date, p_discription, p_from, p_url, p_tools)}>
      <div class="feature-img-wrap">
        <img width="100%" src={p_img} alt={p_name} />
      </div>
      <h3>{p_name}</h3>
    </div>
  {/each}
  <a href="/works"><div class="more-works"><span>更多作品 🧐</span></div></a>
</div>
<FeatureProjectModal on:modalShow={getClosedModalMessage} {showProjectModal} {projectInfo} />
