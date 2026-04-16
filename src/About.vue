<template>
  <div class="about-page">
    <div class="background"></div>

      <input type="checkbox" id="click">
  <label for="click" class="dropdown">
    <i class="fas fa-bars"></i> 
  </label>

  <nav class="navigation">
      <h2>osu!</h2>
      <ul>
        <li ><a href="index.html" target="_blank">home</a></li>
        <li><a href="about.html" target="_blank">about</a></li>
        <li><a href="contact.html" target="_blank">contact</a></li>
        <li><a href="https://osu.ppy.sh/community/forums" target="_blank">community</a></li>
        <li><a href="https://osu.ppy.sh/store/listing" target="_blank">store</a></li>
        <li><a href="https://osu.ppy.sh/home/download" target="_blank">download</a></li>
      </ul>
    </nav>

    <div class="about">
      <h2>About osu!</h2>
      <p>
        osu! is a free-to-play rhythm game where players click, tap, and groove to the beat.
        Originally inspired by Nintendo DS rhythm titles, osu! has grown into a global
        community with millions of players and endless beatmaps created by fans.
      </p>

      <h3>History</h3>
      <p>
        osu! was first released in 2007 by developer Dean “peppy” Herbert as a simple rhythm
        game project. Over time, it expanded with new modes like osu!taiko, osu!catch, and
        osu!mania, each offering unique gameplay styles. The community quickly embraced the
        ability to create and share custom beatmaps, which helped the game evolve into a
        creative platform and competitive scene.
      </p>

      <p>
        Today, osu! continues to thrive thanks to its passionate player base, frequent updates,
        and a culture of creativity and competition. From casual play to world tournaments,
        osu! has become one of the most recognizable rhythm games worldwide.
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import './navigation.css'

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
/* Global layout */
html, body {
  height: 100%;
  margin: 0;
  padding: 0;
  font-family: Comfortaa, cursive;
}

body {
  display: flex;
  flex-direction: column;
  min-height: 100vh; /* ensures footer sticks to bottom */
}

/* Background */
.background {
  position: fixed;
  top: 0; left: 0;
  width: 100%; height: 100%;
  background-size: cover;
  background-position: center;
  filter: blur(7px) brightness(0.6);
  z-index: -1;
  transform: scale(1.1);
}

/* Page content wrapper */
.page-content {
  flex: 1; /* pushes footer down */
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}

/* About section */
.about {
  max-width: 800px;
  margin: 40px auto;
  padding: 30px;
  background-color: hsl(255, 10%, 25%);
  border-radius: 35px;
  border: 4px solid #fff;
  color: white;
  text-shadow: 2px 2px 6px rgba(0,0,0,0.3);
}

.about h2 {
  font-size: 2.2rem;
  margin-bottom: 20px;
  color: #f40b79;
  text-decoration: dotted underline;
  font-family: Comfortaa, cursive;
}

.about h3 {
  font-size: 1.4rem;
  margin-top: 25px;
  margin-bottom: 12px;
  color: #f40b79;
  font-family: Comfortaa, cursive;
}

.about p {
  line-height: 1.6;
  margin-bottom: 18px;
  color: #d3d3d3;
  font-family: Comfortaa, cursive;
  font-size: 1rem;
}

@media (max-width: 768px) {
  .about {
    max-width: 95%;
    margin: 20px auto;
    padding: 20px;
  }
}

@media (max-width: 480px) {
  .about {
    max-width: 95%;
    margin: 15px auto;
    padding: 15px;
  }

  .about h2 { font-size: 1.8rem; }
  .about h3 { font-size: 1.2rem; }
}
</style>