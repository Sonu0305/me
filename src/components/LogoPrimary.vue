<script lang="ts" setup>
import { ref, type Ref } from "vue";

// number of logo variants
const logoCount: number = 4;

// current active logo index (0–3)
const logoIndex: Ref<number> = ref(Math.floor(Math.random() * logoCount));

const setLogo = () => {
  logoIndex.value = Math.floor(Math.random() * logoCount);
};

// pick a random one on load
setLogo();

// change logo every 3.5 seconds
setInterval(setLogo, 3500);
</script>

<template>
  <div id="logo" class="logo">
    <a href="/">
      <!-- 1. Clean geometric "S" -->
      <svg
        :class="{ active: logoIndex === 0 }"
        class="logo__svg logo__svg--knockout"
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
      >
        <text
          x="50%"
          y="50%"
          text-anchor="middle"
          dominant-baseline="middle"
          font-family="Arial Black, sans-serif"
          font-size="140"
          fill="#000"
        >
          S
        </text>
      </svg>

      <!-- 2. Perspective / italic "S" -->
      <svg
        :class="{ active: logoIndex === 1 }"
        class="logo__svg logo__svg--perspective"
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
      >
        <text
          x="50%"
          y="50%"
          text-anchor="middle"
          dominant-baseline="middle"
          font-family="Georgia, serif"
          font-style="italic"
          font-size="140"
          fill="#1a1a1a"
        >
          S
        </text>
      </svg>

      <!-- 3. Blackletter / gothic "S" -->
      <svg
        :class="{ active: logoIndex === 2 }"
        class="logo__svg logo__svg--blackletter"
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
      >
        <text
          x="50%"
          y="50%"
          text-anchor="middle"
          dominant-baseline="middle"
          font-family="'UnifrakturCook', 'Old English Text MT', serif"
          font-size="140"
          fill="#000"
        >
          S
        </text>
      </svg>

      <!-- 4. Original / outlined "S" -->
      <svg
        :class="{ active: logoIndex === 3 }"
        class="logo__svg logo__svg--original"
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
      >
        <text
          x="50%"
          y="50%"
          text-anchor="middle"
          dominant-baseline="middle"
          font-family="Futura, Helvetica, sans-serif"
          font-size="140"
          fill="none"
          stroke="#000"
          stroke-width="6"
        >
          S
        </text>
      </svg>
    </a>
  </div>
</template>

<style lang="scss">
.logo {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 200px;
  height: 200px;

  a {
    display: block;
    position: relative;
    width: 100%;
    height: 100%;
  }

  .logo__svg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    transition: opacity 0.8s ease-in-out;

    &.active {
      opacity: 1;
    }
  }

  /* optional color tweaks per style */
  .logo__svg--knockout text {
    fill: #000;
  }

  .logo__svg--perspective text {
    fill: #444;
  }

  .logo__svg--blackletter text {
    fill: #111;
  }

  .logo__svg--original text {
    stroke: #000;
  }
}
</style>
