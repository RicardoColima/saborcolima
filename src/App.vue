<script setup>
import { onMounted } from 'vue'
import Navbar from './components/common/Navbar.vue'
import Footer from './components/common/Footer.vue'
import { useFavoritesStore } from './stores/favorites'

const favoritesStore = useFavoritesStore()

onMounted(() => {
  favoritesStore.loadFromStorage()
})
</script>

<template>
  <div class="app">
    <Navbar />
    <main class="main-content">
      <router-view />
    </main>
    <Footer />
  </div>
</template>

<style>
:root {
  --airbnb-red: #ff385c;
  --airbnb-dark: #222222;
  --airbnb-gray: #717171;
  --airbnb-light: #f7f7f7;
  --airbnb-border: #dddddd;
  --airbnb-hover: #ebebeb;
}

.app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.main-content {
  flex: 1;
  padding-top: 70px;
}

/* Global styles - Airbnb style */
* {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

body {
  font-family: 'Circular', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  color: var(--airbnb-dark);
  background-color: #fff;
  line-height: 1.6;
}

h1, h2, h3, h4, h5, h6 {
  font-weight: 600;
  letter-spacing: -0.02em;
  color: var(--airbnb-dark);
}

/* Airbnb-style buttons */
.btn-primary {
  background: linear-gradient(to right, #e61e4d 0%, #e31c5f 50%, #d70466 100%);
  border: none;
  border-radius: 8px;
  font-weight: 600;
  padding: 14px 24px;
  transition: transform 0.1s ease, box-shadow 0.2s ease;
}

.btn-primary:hover {
  background: linear-gradient(to right, #d70466 0%, #d70466 100%);
  transform: scale(1.02);
  box-shadow: 0 2px 8px rgba(0,0,0,0.15);
}

.btn-outline-dark {
  border: 1px solid var(--airbnb-dark);
  background: transparent;
  color: var(--airbnb-dark);
  border-radius: 8px;
  font-weight: 600;
  padding: 13px 23px;
}

.btn-outline-dark:hover {
  background: var(--airbnb-light);
  border-color: var(--airbnb-dark);
}

.text-primary {
  color: var(--airbnb-red) !important;
}

.bg-primary {
  background-color: var(--airbnb-red) !important;
}

/* Airbnb card styles */
.card {
  border: none;
  border-radius: 12px;
  overflow: hidden;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.card:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(0,0,0,0.1);
}

/* Scrollbar styling */
::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}

::-webkit-scrollbar-track {
  background: transparent;
}

::-webkit-scrollbar-thumb {
  background: #c1c1c1;
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: #a8a8a8;
}

/* Smooth scrolling */
html {
  scroll-behavior: smooth;
}
</style>
