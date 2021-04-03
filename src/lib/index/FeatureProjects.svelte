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
    font-size: var(--text-lg);
    line-height: 24px;
    letter-spacing: 0.05em;
    color: #1a1919;
    margin: 0 2rem 2rem 2rem;
  }

  h3 {
    text-align: center;
    font-size: var(--text-md);
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
    width: 100%;
    height: auto;
    border: 0.5px solid #7c7c7c;
    border-radius: 5px;
    overflow: hidden;
    cursor: pointer;
    transition: transform 0.2s linear;
  }

  .feature-img-wrap:hover {
    transform: translate3D(3px, -3px, 0);
  }

  @media (min-width: 650px) {
    h2 {
      font-size: var(--text-lg);
      letter-spacing: 0.1em;
    }

    h3 {
      font-size: var(--text-base);
      position: cursor;
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
    <div
      class="feature-wrap"
      on:click|preventDefault={getProjectDetail(p_img, p_name, p_date, p_discription, p_from, p_url, p_tools)}
    >
      <div class="feature-img-wrap">
        <img width="100%" src={p_img} alt={p_name} />
      </div>
      <h3>{p_name}</h3>
    </div>
  {/each}
</div>
<FeatureProjectModal on:modalShow={getClosedModalMessage} {showProjectModal} {projectInfo} />
