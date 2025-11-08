<script lang="ts" setup>
import { ref, type Ref } from 'vue'

const emoji: Ref = ref('')

const emojis: Array<string> = [
  '🎹',
  '🍕',
  '🤖',
  '🍣',
  '🐶',
  '🌭',
  '🕹',
  '🏍',
  '🌮',
  '🦕',
  '🍺',
  '🎵',
  '💰',
  '🎃',
  '⛺',
  '🍔'
]

const setEmoji = () => {
  emoji.value = emojis[Math.floor(Math.random() * emojis.length)]
}

setInterval(setEmoji, 2500)
setEmoji()
</script>

<template>
  <main id="home" class="main">
    <div class="main__content">
      <h1>Swayam Shah</h1>

      <section>
        <h3>Who I am</h3>
        <ul>
          <li>Undergrad</li>
          <li>Based out of Mumbai, India</li>
          <li>
            Loves
            <span class="emoji">{{ emoji }}</span>
          </li>
        </ul>
      </section>

      <section>
        <h3>What I do</h3>
        <ul>
          <li>GenAI Enthusiast</li>
          <li>Full-Stack Developer</li>
          <li>AI-ML Explorer</li>
        </ul>

        <a download href="https://pdfhost.io/v/Wf3DwfZhh4_Swayam_Shah"
          >Download my resume here <img src="public/png.png" alt="QR Code" class="resume-qr" />
        </a>
      </section>
    </div>
  </main>
</template>

<style lang="scss">
:root {
  --color--background: var(--off-white);
  --position--body: relative;
  --position--footer: relative;
  --position--header: relative;
  --color--primary: var(--green);
  --color--text: var(--grey);
}
</style>
