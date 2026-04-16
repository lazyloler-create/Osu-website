<template>
  <div class="background"></div>

  <input type="checkbox" id="click">
  <label for="click" class="dropdown">
    <i class="fas fa-bars"></i> 
  </label>

  <nav class="navigation">
    <h2>osu!</h2>
    <ul>
      <li><a href="index.html" target="_blank">home</a></li>
      <li><a href="about.html" target="_blank">about</a></li>
      <li><a href="contact.html" target="_blank">contact</a></li>
    </ul>
  </nav>

  <div class="page-content">
    <div class="contact">
      <h2>Contact Us</h2>
      <p>
        Have questions, feedback, or ideas? Reach out to the osu! team using the form below.
      </p>

      <form class="contact-form">
        <label for="name">Name</label>
        <input type="text" id="name" placeholder="Your name">

        <label for="email">Email</label>
        <input type="email" id="email" placeholder="Your email">

        <label for="message">Message</label>
        <textarea id="message" rows="5" placeholder="Your message"></textarea>

        <button type="submit" class="contact-submit">Send Message</button>
      </form>
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
  if (bgDiv) bgDiv.style.backgroundImage = `url(${selectedImage})`;
}

onMounted(() => setRandomBackground());
</script>

<style>
html, body {
  height: 100%;
  margin: 0;
  padding: 0;
  font-family: Comfortaa, cursive;
}

body {
  display: flex;
  flex-direction: column;
  min-height: 100vh; 
}

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

.page-content {
  flex: 1; 
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}

.contact {
  max-width: 800px;
  margin: 40px auto;
  padding: 30px;
  background-color: hsl(255, 10%, 25%);
  border-radius: 35px;
  border: 4px solid #fff;
  color: white;
  text-shadow: 2px 2px 6px rgba(0,0,0,0.3);
  transition: background-color 0.3s ease, box-shadow 0.3s ease;
}

.contact:hover{
  background-color: hsl(255, 10%, 30%);
  box-shadow: 5px 5px 20px rgba(0,0,0,0.4);
}

.contact h2 {
  font-size: 2.2rem;
  margin-bottom: 20px;
  color: #f40b79;
  text-decoration: dotted underline;
}

.contact p {
  line-height: 1.6;
  margin-bottom: 18px;
  color: #d3d3d3;
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.contact-form label {
  font-family: Comfortaa, cursive;
  font-weight: 600;
  color: #fff;
}

.contact-form input,
.contact-form textarea {
  font-family: Comfortaa, cursive;
  font-size: 1rem;
  color: #333;
  background-color: #fff;
  padding: 10px;
  border-radius: 8px;
  border: 2px solid #ccc;
  transition: border-color 0.3s ease;
}

.contact-form input::placeholder,
.contact-form textarea::placeholder {
  font-family: Comfortaa, cursive;
  font-size: 0.95rem;
  color: #888;
}

.contact-form input:focus,
.contact-form textarea:focus {
  outline: none;
  border-color: #f40b79;
}

.contact-submit {
  font-family: Comfortaa, cursive;
  font-weight: bold;
  font-size: 1rem;
  background-color: #f40b79;
  color: #fff;
  border: none;
  padding: 12px;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.contact-submit:hover {
  background-color: #d30a68;
}

@media (max-width: 768px) {
  .contact {
    max-width: 95%;
    margin: 20px auto;
    padding: 20px;
  }
}

@media (max-width: 480px) {
  .contact {
    max-width: 95%;
    margin: 15px auto;
    padding: 15px;
  }

  .contact h2 { 
    font-size: 1.8rem; 
    }
}
</style>