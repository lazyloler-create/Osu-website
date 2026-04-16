<template>
  <div class="background"></div>

  <input type="checkbox" id="click">
  <label for="click" class="dropdown">
    <i class="fas fa-bars"></i> 
  </label>

  <nav class="navigation">
      <h2>osu!</h2>
      <ul>
        <li ><a href="index.html" target="_blank">home</a></li>
        <li><a href="https://osu.ppy.sh/beatmapsets" target="_blank">beatmaps</a></li>
        <li><a href="https://osu.ppy.sh/community/forums" target="_blank">community</a></li>
        <li><a href="https://osu.ppy.sh/rankings/osu/global" target="_blank">rankings</a></li>
        <li><a href="https://osu.ppy.sh/store/listing" target="_blank">store</a></li>
        <li><a href="https://osu.ppy.sh/home/download" target="_blank">download</a></li>
      </ul>
    </nav>

    <div class="container">
<div class="content">
  
  <main class="hero">
  <div class="hero-content">
    <div class="hero-text">
      <h3>
        <span style="color:#f40b79;">Rhythm</span> is just a 
        <span style="color:#f40b79;">click</span> away!
      </h3>

      <p>Play. Click. Groove. Rhythm made simple.</p>
      <a class="cta" href="https://osu.ppy.sh/home/download" target="_blank">Download now!</a>
    </div>
    <div class="hero-img">
      <img src="./assets/osu_girl.png" alt="osu logo">
    </div>
  </div>
</main>

<section class="gallery">
  <h2>Gameplay Videos</h2>
  <div class="carousel-container">
    <button class="carousel-btn prev-btn" @click="previousVideo" :disabled="currentIndex === 0">❮</button>
    
    <div class="carousel-wrapper">
      <div class="carousel-content">
        <video controls :key="currentIndex">
          <source :src="videos[currentIndex]" type="video/mp4">
        </video>
      </div>
      <p class="caption">{{ contents[currentIndex] }}</p>
    </div>
    
    <button class="carousel-btn next-btn"  @click="nextVideo" :disabled="currentIndex === videos.length - 1">❯</button>
  </div>
  
  <div class ="carousel-indicators">
    <button 
      v-for="(_, index) in videos"
      :key="index"
      class="indicator"
      :class="{ active: index === currentIndex }"
      @click="currentIndex = index"
    ></button>
  </div>
  
  <p class="video-counter">{{ currentIndex + 1 }} / {{ videos.length }}</p>
</section>

  <div class="features-container">
    <section class="feature-section">
    <h2 class="features-h2"><strong>Features</strong></h2>

    <h3>Endless beatmaps</h3>
    <p>Access thousands of songs and challenges created by the community, with new maps ranked daily.</p>

    <h3>Global Rankings</h3>
    <p>Compete with players from around the world and climb the leaderboards.</p>

    <h3>Multiplayer Mode</h3>
    <p>Play with friends or challenge players from around the world in real-time multiplayer matches.</p>

    <h3>Customization</h3>
    <p>Personalize your gameplay with skins, mods, and settings that adapt to your style.</p>

    <h3>Create your own beatmaps</h3>
    <p>Design and share your own beatmaps with the community.</p>
    </section>

    <div class="features-gallery">
      <div class="gallery-item">
        <img src="./assets/Customize1.jpg" alt="Skin customization">
        <h4>Skin customization</h4>
      </div>
      <div class="gallery-item">
        <img src="./assets/Customize2.jpg" alt="Skin customization">
        <h4>Skin customization</h4>
      </div>
      <div class="gallery-item">
        <img src="./assets/editor.jpg" alt="Editor">
        <h4>Editor</h4>
      </div>
      <div class="gallery-item">
        <img src="./assets/daily.jpg" alt="Daily challenges">
        <h4>Daily challenges</h4>
      </div>
    </div>
  </div>
  
<div class="faq-container">
  <div class="modes-gallery">
    <div class="modes-item">
      <img src="./assets/pipi.png" alt="osu mode">
    </div>
  </div>

  <section class="FAQ-section">
    <h2 class="faq-title">FAQ</h2>

    <h3 class="faq-h3">Is osu! free?</h3>
    <p>Yes, osu! is completely free to download and play.</p>

    <h3 class="faq-h3">How do I install beatmaps?</h3>
    <p>Download beatmaps from the osu! website and open them in the game client.</p>

    <h3 class="faq-h3">Can I play offline?</h3>
    <p>Yes, you can play offline, but rankings and multiplayer require an internet connection.</p>

    <h3 class="faq-h3">What are the different modes?</h3>
    <p>osu!standard, osu!taiko, osu!catch, and osu!mania each offer unique gameplay styles.</p>
  </section>
    </div>

  
  </div>
  </div>
  
  <footer class="site-footer">
  <div class="footer-social">
       <a href="https://osu.ppy.sh" target="_blank">
      <img src="./assets/Osu_Black.png" alt="osu official site">
    </a>
    <a href="https://discord.gg/osu" target="_blank">
      <img src="./assets/discord-round-black-icon.webp" alt="Discord">
    </a>
    <a href="https://twitter.com/osugame" target="_blank">
      <img src="./assets/X-logo.png" alt="Twitter">
    </a>
    <a href="https://github.com/ppy" target="_blank">
      <img src="./assets/github.png" alt="GitHub">
    </a>
  </div>
  <p class="footer-copy">© 2026 osu! — Rhythm lives here.</p>
</footer>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const videos = ref([
  '/videos/Osu.mp4',
  '/videos/Osu1.mp4',
  '/videos/Osu2.mp4',
  '/videos/Osu3.mp4',
  '/videos/Osu4.mp4',
]);

const contents = ref([
  'Startup animation',
  'Installing beatmaps',
  'Rankings',
  'Multiplayer',
  'Gameplay',
]);

const currentIndex = ref(0);

// Navigation functions
const nextVideo = () => {
  if (currentIndex.value < videos.value.length - 1) {
    currentIndex.value++;
  }
};

const previousVideo = () => {
  if (currentIndex.value > 0) {
    currentIndex.value--;
  }
};

import { onMounted } from 'vue';

const backgrounds = [
  '/img/bg1.webp',
  '/img/bg2.webp',
  '/img/bg3.webp',
  '/img/bg4.webp',
  '/img/bg5.webp',
  '/img/bg6.webp',
  '/img/bg7.webp',
  '/img/bg8.webp',
  '/img/bg9.webp',
  '/img/bg10.webp',
];

function setRandomBackground(): void {
  const randomIndex = Math.floor(Math.random() * backgrounds.length);
  const selectedImage = backgrounds[randomIndex] as string;

  const bgDiv = document.querySelector('.background') as HTMLElement;
  if (bgDiv) {
    bgDiv.style.backgroundImage = `url(${selectedImage})`;
  }
}

onMounted(() => {
  setRandomBackground();
});
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Comfortaa:wght@300..700&display=swap');

body {
  margin: 0;
  padding: 0;
  font-family: 'Comfortaa', cursive; 
  background-color: #000; 
  color: white;
}

.background {
  position: fixed;
  top: 0; 
  left: 0;
  width: 100%; 
  height: 100%;
  background-size: cover;
  background-position: center;
  filter: blur(7px) brightness(0.6);
  z-index: -1; 
  transform: scale(1.1);
}

.content {
  position: relative;
  z-index: 1;
  color: white;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.container {
  width: 100%;
  margin: 0 auto;
  padding: 0 20px;
  flex-grow: 1;
}

img {
  max-width: 100%;
  height: auto;
}
</style>