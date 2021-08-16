<script>
  let triggerMask, backPath, frontPath, stevenWork, stevenHi

  function handleTouchEnter() {
    triggerMask.addEventListener('mouseleave', handleTouchLeave)
    triggerMask.addEventListener('touchend', handleTouchLeave)
    stevenWork.style.opacity = 0
    stevenHi.style.opacity = 1
    shakeSelectedElements('shaking', '.intro a , .feature-img-wrap, .features-container > a')
  }

  function handleTouchLeave() {
    triggerMask.removeEventListener('mouseleave', handleTouchLeave)
    triggerMask.removeEventListener('touchend', handleTouchLeave)
    stevenWork.style.opacity = 1
    stevenHi.style.opacity = 0
    shakeSelectedElements('freeze', '.shaking')
  }

  function shakeSelectedElements(shakingSignal, elmsPath) {
    if (shakingSignal === 'shaking') {
      const elms = document.querySelectorAll(elmsPath)
      for (let i = 0; i < elms.length; i++) {
        !elms[i].classList.contains('shaking') ? elms[i].classList.add('shaking') : null
        elms[i].style.animationDelay = 0.1 * i + 's'
      }
    } else {
      const elms = document.querySelectorAll(elmsPath)
      for (let i = 0; i < elms.length; i++) {
        elms[i].classList.contains('shaking') ? elms[i].classList.remove('shaking') : null
        elms[i].style.animationDelay = ''
      }
    }
  }
</script>

<style>
  #intro-img-wrap {
    position: relative;
    width: 100%;
    max-width: 400px;
    height: 400px;
    margin: 0 2rem;
  }

  #intro-img-bg {
    position: absolute;
    width: 320px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  #steven-work-img {
    position: absolute;
    width: 220px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    user-select: none;
  }

  #steven-hi-img {
    position: absolute;
    width: 200px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    user-select: none;
  }

  .trigger-mask {
    position: absolute;
    width: 220px;
    height: 220px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    cursor: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg'  width='40' height='48' viewport='0 0 100 100' style='fill:black;font-size:24px;'><text y='50%'>👋</text></svg>")
        16 0,
      auto;
  }

  h1 {
    font-family: var(--font-primary-cn);
    font-size: var(--text-base);
    line-height: 24px;
    letter-spacing: 0.05em;
    color: #000000;
    margin: 0 2rem;
  }

  :global(.shaking) {
    animation-name: shake-base;
    animation-duration: 5s;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;
  }

  @keyframes shake-base {
    0% {
      transform: translate(0px, 0px) rotate(0deg);
    }
    2% {
      transform: translate(-1.5px, -0.5px) rotate(0.5deg);
    }
    4% {
      transform: translate(-0.5px, -0.5px) rotate(1.5deg);
    }
    6% {
      transform: translate(2.5px, -1.5px) rotate(1.5deg);
    }
    8% {
      transform: translate(2.5px, 2.5px) rotate(-0.5deg);
    }
    10% {
      transform: translate(-0.5px, -0.5px) rotate(0.5deg);
    }
    12% {
      transform: translate(-0.5px, -0.5px) rotate(0.5deg);
    }
    14% {
      transform: translate(-0.5px, -0.5px) rotate(1.5deg);
    }
    16% {
      transform: translate(0.5px, -1.5px) rotate(-0.5deg);
    }
    18% {
      transform: translate(-0.5px, -1.5px) rotate(0.5deg);
    }
    20% {
      transform: translate(0.5px, 1.5px) rotate(1.5deg);
    }
    22% {
      transform: translate(-0.5px, -0.5px) rotate(-0.5deg);
    }
    24% {
      transform: translate(0.5px, 1.5px) rotate(-0.5deg);
    }
    26% {
      transform: translate(1.5px, -0.5px) rotate(-0.5deg);
    }
    28% {
      transform: translate(-0.5px, 2.5px) rotate(0.5deg);
    }
    30% {
      transform: translate(0.5px, 2.5px) rotate(1.5deg);
    }
    32% {
      transform: translate(2.5px, -0.5px) rotate(0.5deg);
    }
    34% {
      transform: translate(-1.5px, 0.5px) rotate(0.5deg);
    }
    36% {
      transform: translate(1.5px, 0.5px) rotate(1.5deg);
    }
    38% {
      transform: translate(1.5px, -1.5px) rotate(-0.5deg);
    }
    40% {
      transform: translate(1.5px, 2.5px) rotate(1.5deg);
    }
    42% {
      transform: translate(-0.5px, 2.5px) rotate(0.5deg);
    }
    44% {
      transform: translate(2.5px, -1.5px) rotate(0.5deg);
    }
    46% {
      transform: translate(-0.5px, 1.5px) rotate(0.5deg);
    }
    48% {
      transform: translate(1.5px, -0.5px) rotate(0.5deg);
    }
    50% {
      transform: translate(-0.5px, -1.5px) rotate(1.5deg);
    }
    52% {
      transform: translate(-1.5px, -1.5px) rotate(-0.5deg);
    }
    54% {
      transform: translate(0.5px, 1.5px) rotate(-0.5deg);
    }
    56% {
      transform: translate(-0.5px, -1.5px) rotate(0.5deg);
    }
    58% {
      transform: translate(-1.5px, 1.5px) rotate(1.5deg);
    }
    60% {
      transform: translate(-0.5px, 2.5px) rotate(-0.5deg);
    }
    62% {
      transform: translate(-0.5px, 0.5px) rotate(1.5deg);
    }
    64% {
      transform: translate(1.5px, -0.5px) rotate(0.5deg);
    }
    66% {
      transform: translate(-1.5px, -0.5px) rotate(1.5deg);
    }
    68% {
      transform: translate(1.5px, 0.5px) rotate(-0.5deg);
    }
    70% {
      transform: translate(2.5px, -0.5px) rotate(0.5deg);
    }
    72% {
      transform: translate(-0.5px, -1.5px) rotate(0.5deg);
    }
    74% {
      transform: translate(-1.5px, 2.5px) rotate(1.5deg);
    }
    76% {
      transform: translate(1.5px, 0.5px) rotate(-0.5deg);
    }
    78% {
      transform: translate(0.5px, 1.5px) rotate(1.5deg);
    }
    80% {
      transform: translate(1.5px, 0.5px) rotate(1.5deg);
    }
    82% {
      transform: translate(0.5px, 0.5px) rotate(1.5deg);
    }
    84% {
      transform: translate(0.5px, 2.5px) rotate(-0.5deg);
    }
    86% {
      transform: translate(-1.5px, 2.5px) rotate(0.5deg);
    }
    88% {
      transform: translate(0.5px, -0.5px) rotate(-0.5deg);
    }
    90% {
      transform: translate(-0.5px, 0.5px) rotate(0.5deg);
    }
    92% {
      transform: translate(-1.5px, 2.5px) rotate(-0.5deg);
    }
    94% {
      transform: translate(1.5px, 0.5px) rotate(0.5deg);
    }
    96% {
      transform: translate(-0.5px, 0.5px) rotate(-0.5deg);
    }
    98% {
      transform: translate(-1.5px, 2.5px) rotate(0.5deg);
    }
  }

  @media (min-width: 650px) {
    #intro-img-wrap {
      margin: 0 0;
    }

    h1 {
      font-size: var(--text-md);
      line-height: 30px;
    }
  }
</style>

<div id="intro-img-wrap">
  <svg id="intro-img-bg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400">
    <g id="back">
      <path bind:this={backPath} style="fill:#7f5a83">
        <animate
          id="back-animation"
          repeatCount="indefinite"
          fill="freeze"
          attributeName="d"
          dur="5s"
          keyTimes="0;0.3;0.6;1"
          values="M389.5,210.18c0,54.58-27.11,90.3-72.34,120.88C285.73,352.32,244.46,377.7,202,377.7c-57.79,0-130.26-5.15-164.66-41.88-27.24-29.08-22.84-84.75-22.84-125.64C14.49,163.92,30.05,90.11,64,59.8s86.23-17.14,138-17.14c57.14,0,108.38,23,142.77,59C372.7,130.93,389.5,168.71,389.5,210.18Z;
                  M392.5,253c0,54.58-23.78,65.42-69,96-31.43,21.26-83.53,40-126,40-57.79,0-125.77-16.45-160.17-53.18-27.24-29.08-22.84-84.75-22.84-125.64,0-46.26,35.08-101.87,69-132.18S150.21,42.66,202,42.66c57.14,0,108.38,23,142.77,59C372.7,130.93,392.5,211.53,392.5,253Z;
                  M369.5,252c0,54.58-14.78,70.42-60,101-31.43,21.26-69.53,36-112,36-57.79,0-111.6-33.27-146-70-27.24-29.08-37-67.93-37-108.82,0-46.26,35.08-101.87,69-132.18S150.21,42.66,202,42.66C259.13,42.66,305.11,69,339.5,105,367.44,134.25,369.5,210.53,369.5,252Z;
                  M389.5,210.18c0,54.58-27.11,90.3-72.34,120.88C285.73,352.32,244.46,377.7,202,377.7c-57.79,0-130.26-5.15-164.66-41.88-27.24-29.08-22.84-84.75-22.84-125.64C14.49,163.92,30.05,90.11,64,59.8s86.23-17.14,138-17.14c57.14,0,108.38,23,142.77,59C372.7,130.93,389.5,168.71,389.5,210.18Z;"
        />
      </path>
    </g>
    <g id="front" style="opacity:0.8">
      <path bind:this={frontPath} style="fill:#0d324d">
        <animate
          id="front-animation"
          repeatCount="indefinite"
          fill="freeze"
          attributeName="d"
          dur="5s"
          keyTimes="0;0.5;1"
          values="M380,208.28c0,54.58-18.08,66.62-60,111.36-25.94,27.7-75.56,58.06-118,58.06C144.2,377.7,88.86,363,54.46,326.3,27.23,297.22,22.1,240.6,22.1,199.71c0-46.26,19.37-97.23,53.3-127.54S150.21,36,202,36c57.14,0,84.59,24.9,119,60.92C348.91,126.17,380,166.81,380,208.28Z;
                  M380,208.28c0,54.58-5.6,82-47.48,126.72-25.93,27.7-88,42.7-130.51,42.7-57.79,0-147.09-16-181.49-52.7-27.24-29.08,1.6-84.4,1.6-125.29,0-46.26,36.47-76.4,70.4-106.71s56.22-62,108-62c57.14,0,112.61,27,147,63C375.44,123.25,380,166.81,380,208.28Z;
                  M380,208.28c0,54.58-18.08,66.62-60,111.36-25.94,27.7-75.56,58.06-118,58.06C144.2,377.7,88.86,363,54.46,326.3,27.23,297.22,22.1,240.6,22.1,199.71c0-46.26,19.37-97.23,53.3-127.54S150.21,36,202,36c57.14,0,84.59,24.9,119,60.92C348.91,126.17,380,166.81,380,208.28Z;"
        />
      </path>
    </g>
  </svg>
  <img
    bind:this={stevenWork}
    id="steven-work-img"
    style="opacity: 1;"
    src="/assets/index/images/steven-work.png"
    alt="working steven"
  />
  <img
    bind:this={stevenHi}
    id="steven-hi-img"
    style="opacity: 0;"
    src="/assets/index/images/steven-hi.png"
    alt="hi steven"
  />
  <div bind:this={triggerMask} class="trigger-mask" on:mouseenter={handleTouchEnter} on:touchstart={handleTouchEnter} />
</div>
<h1>
  嗨！我是Steven，現在在關鍵評論網寫code、做圖表、做資料新聞。<br />目前也與喜歡資料新聞及數位敘事的朋友一起經營
  <a style="color: #2d6a4f;" target="_blank" href="https://ddstoryhub.com">DD Story Hub</a>，紀錄研究與學習的過程。
</h1>
