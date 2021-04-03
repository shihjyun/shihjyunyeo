<script>
  import { fade } from 'svelte/transition'
  import { createEventDispatcher } from 'svelte'

  export let showProjectModal, projectInfo

  $: console.log(projectInfo)

  let modalWrap

  const dispatch = createEventDispatcher()

  function closeModal() {
    modalWrap.classList.remove('blur')
    document.querySelector('body').classList.remove('no-scroll')
    // sent closed message to parent component's `showProjectModal` variable
    dispatch('modalShow', {
      value: false,
    })
  }
</script>

<style>
  .project-modal-wrap {
    position: fixed;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100vw;
    max-width: 100%;
    min-height: 100vh;
    backdrop-filter: blur(0px);
    transition: backdrop-filter 0.2s linear;
    pointer-events: none;
  }

  :global(.project-modal-wrap.blur) {
    backdrop-filter: blur(4px);
    pointer-events: initial;
  }

  .project-detail-wrap {
    position: relative;
    width: 90%;
    background-color: white;
    border: 0.5px solid #7c7c7c;
    border-radius: 10px;
    max-width: 400px;
    padding: 3rem 1rem 1rem 1rem;
    min-height: 50vh;
    -webkit-box-shadow: 11px 11px 7px -8px rgb(185, 185, 185);
    -moz-box-shadow: 11px 11px 7px -8px rgb(185, 185, 185);
    box-shadow: 11px 11px 7px -8px rgb(185, 185, 185);
    pointer-events: initial;
  }

  .close-btn {
    position: absolute;
    cursor: pointer;
    top: 1rem;
    right: 1rem;
    fill: black;
    transition: fill 0.1s linear;
  }

  .close-btn:hover {
    fill: var(--purple);
  }

  .project-tags-wrap {
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 0.5rem;
  }

  .project-tag {
    font-size: var(--text-sm);
    color: white;
    border: white solid 0px;
    border-radius: 5px;
    padding: 2px 8px;
    margin: 3px 3px 3px 3px;
    -webkit-box-shadow: 3px 3px 3px -2px rgb(185, 185, 185);
    -moz-box-shadow: 3px 3px 3px -2px rgb(185, 185, 185);
    box-shadow: 3px 3px 3px -2px rgb(185, 185, 185);
  }

  .project-tag.from {
    background-color: rgb(108, 82, 129);
  }

  .project-tag.tool {
    background-color: rgb(223, 106, 53);
  }

  .project-info-wrap {
    width: 260px;
    margin: 0 auto 1.5rem auto;
  }

  .project-published-date {
    font-size: var(--text-sm);
    text-align: center;
    margin: 0.5rem 0;
  }

  .project-url-wrap {
    text-align: center;
  }

  img {
    width: 100%;
    border: 0.5px solid #b3b3b3;
    border-radius: 10px;
    margin-bottom: 0.5rem;
  }

  h4 {
    font-size: var(--text-md);
    text-align: center;
  }

  p {
    margin-bottom: 1rem;
  }

  a {
    color: rgb(63, 39, 85);
  }
</style>

<!-- markup (zero or more items) goes here -->
<div bind:this={modalWrap} class="project-modal-wrap">
  {#if showProjectModal}
    <div transition:fade={{ duration: 100 }} class="project-detail-wrap">
      <svg
        class="close-btn"
        id="close-icon"
        height="20"
        width="20"
        viewBox="0 0 32 32"
        version="1.1"
        on:click={closeModal}
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
      >
        <g>
          <path d="M0.014,1.778L1.79,0.001l30.196,30.221l-1.778,1.777L0.014,1.778z" />
          <path d="M1.79,31.999l-1.776-1.777L30.208,0.001l1.778,1.777L1.79,31.999z" />
        </g>
      </svg>

      <!-- project info -->
      <div class="project-info-wrap">
        <h4>✨ {projectInfo.p_name} ✨</h4>
        <div class="project-published-date">{projectInfo.p_date}</div>
        <img width="100%" src={projectInfo.p_img} alt={projectInfo.p_name} />
        <div class="project-tags-wrap">
          <span class="project-tag from">{projectInfo.p_from}</span>
          {#each projectInfo.p_tools as tool}
            <span class="project-tag tool">{tool}</span>
          {/each}
        </div>
        <p>{projectInfo.p_discription}</p>
        <div class="project-url-wrap"><a href={projectInfo.p_url} target="_blank">走！去看作品 👀</a></div>
      </div>
    </div>
  {/if}
</div>
