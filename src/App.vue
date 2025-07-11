<script setup>
import { ref, watchEffect } from 'vue'

const slides = [
  'Hey Mia, welcome to your very own corner of the internet',
  'You said the way to your heart is to build you a website, so I figured... challenge accepted ❤️',
  "I put real thought into this hoping it would make you smile and maybe feel a little special",
  "You're honestly stunning and if this gets me a match with you, then it was absolutely worth it"
]

const current = ref(0)

// Dark mode state
const isDarkMode = ref(false)

// Watch for dark mode changes and update the body's class
watchEffect(() => {
  if (isDarkMode.value) {
    document.body.classList.add('dark')
  } else {
    document.body.classList.remove('dark')
  }
})

const next = () => {
  if (current.value < slides.length - 1) current.value++
}

const prev = () => {
  if (current.value > 0) current.value--
}

const toggleDarkMode = () => {
  isDarkMode.value = !isDarkMode.value
}
</script>

<template>
  <div class="wrapper">
    <div class="slide-content">
      <p class="text">{{ slides[current] }}</p>
      <div class="controls">
        <button @click="prev" :disabled="current === 0">←</button>
        <button @click="next" :disabled="current === slides.length - 1">→</button>
      </div>
      <!-- Dark Mode Toggle Button -->
      <button class="dark-mode-toggle" @click="toggleDarkMode">
        {{ isDarkMode ? 'Light Mode' : 'Dark Mode' }}
      </button>
    </div>
  </div>
</template>


<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  height: 100%;
}

html,
body,
.wrapper {
  height: 100%;
  width: 100%;
  overflow: hidden;
  font-family: 'Segoe UI', sans-serif;
  transition: background-color 0.3s ease, color 0.3s ease;
}

body {
  margin: 0 !important;
}

/* Light Mode */
body {
  background-color: #f9f9f9;
  color: #222;
}

.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
}

.slide-content {
  text-align: center;
  max-width: 600px;
  width: 100%;
  padding: 3rem 2rem;
  border-radius: 1.5rem;
  background-color: #fff;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.text {
  font-size: 1.8rem;
  font-weight: 500;
  margin-bottom: 2rem;
  line-height: 1.5;
}

.controls {
  display: flex;
  gap: 1.5rem;
}

button {
  font-size: 1.2rem;
  padding: 0.6rem 1.2rem;
  border: none;
  border-radius: 0.75rem;
  background-color: #e0e0e0;
  color: #333;
  cursor: pointer;
  transition: background 0.3s ease;
}

button:hover:not(:disabled) {
  background-color: #d5d5d5;
}

button:disabled {
  opacity: 0.4;
  cursor: not-allowed;
}

/* Dark Mode */
body.dark {
  background-color: #121212;
  color: #e0e0e0;
}

body.dark .wrapper {
  background-color: #1e1e1e;
}

body.dark .slide-content {
  background-color: #2a2a2a;
  color: #fff;
}

body.dark .text {
  color: #fff;
}

body.dark button {
  background-color: #333;
  color: #fff;
}

body.dark button:hover {
  background-color: #444;
}

/* Dark Mode Toggle Button */
.dark-mode-toggle {
  font-size: 1rem;
  padding: 0.6rem 1.5rem;
  background-color: #ff9800;
  color: white;
  border: none;
  border-radius: 1rem;
  cursor: pointer;
  margin-top: 2rem;
  transition: background-color 0.3s ease;
}

.dark-mode-toggle:hover {
  background-color: #f57c00;
}

</style>