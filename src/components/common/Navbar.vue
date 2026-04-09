<template>
  <nav class="navbar sticky-top">
    <div class="container">
      <div class="nav-content">
        <!-- Logo -->
        <router-link class="brand" to="/">
          <div class="brand-icon">
            <i class="bi bi-cup-hot-fill"></i>
          </div>
          <span class="brand-text">sabor colima</span>
        </router-link>

        <!-- Search Bar - Simple input -->
        <div class="search-wrapper">
          <div class="search-bar">
            <i class="bi bi-search search-icon-input"></i>
            <input 
              v-model="searchQuery"
              type="text" 
              class="search-input"
              placeholder="Buscar restaurantes, bares..."
              @keyup.enter="handleSearch"
            >
            <button v-if="searchQuery" class="clear-btn" @click="searchQuery = ''">
              <i class="bi bi-x-circle-fill"></i>
            </button>
          </div>
        </div>

        <!-- Right Menu -->
        <div class="right-menu">
          <router-link to="/search" class="nav-link" :class="{ active: route.path === '/search' }">
            <i class="bi bi-compass"></i>
            <span class="nav-text">Explorar</span>
          </router-link>
          
          <router-link to="/favorites" class="nav-link nav-link-icon">
            <i class="bi bi-heart"></i>
            <span v-if="favoritesStore.favoritesCount > 0" class="fav-badge">
              {{ favoritesStore.favoritesCount }}
            </span>
          </router-link>
          
          <!-- User Menu with Dropdown -->
          <div class="user-menu-wrapper" v-click-outside="closeUserMenu">
            <button class="user-menu-btn" @click="showUserMenu = !showUserMenu">
              <i class="bi bi-list"></i>
              <div class="user-avatar">
                <i class="bi bi-person"></i>
              </div>
            </button>
            
            <!-- Dropdown Menu -->
            <div v-if="showUserMenu" class="user-dropdown">
              <div class="dropdown-section">
                <router-link to="/register" class="dropdown-item bold" @click="showUserMenu = false">Regístrate</router-link>
                <router-link to="/login" class="dropdown-item" @click="showUserMenu = false">Inicia sesión</router-link>
              </div>
              <div class="dropdown-divider"></div>
              <div class="dropdown-section">
                <router-link to="/search" class="dropdown-item" @click="showUserMenu = false">Restaurantes</router-link>
                <router-link to="/favorites" class="dropdown-item" @click="showUserMenu = false">Favoritos</router-link>
                <router-link to="/help" class="dropdown-item" @click="showUserMenu = false">Ayuda</router-link>
              </div>
              <div class="dropdown-divider"></div>
              <div class="dropdown-section">
                <router-link to="/business" class="dropdown-item" @click="showUserMenu = false">¿Tienes un restaurante?</router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useFavoritesStore } from '@/stores/favorites'
import { useBarsStore } from '@/stores/bars'

const router = useRouter()
const route = useRoute()
const favoritesStore = useFavoritesStore()
const barsStore = useBarsStore()

const searchQuery = ref('')
const showUserMenu = ref(false)


const closeUserMenu = () => {
  showUserMenu.value = false
}

const handleSearch = () => {
  if (searchQuery.value.trim()) {
    barsStore.searchQuery = searchQuery.value
    router.push('/search')
  }
}


// Click outside directive
const vClickOutside = {
  mounted(el, binding) {
    el._clickOutside = (event) => {
      if (!(el === event.target || el.contains(event.target))) {
        binding.value()
      }
    }
    document.addEventListener('click', el._clickOutside)
  },
  unmounted(el) {
    document.removeEventListener('click', el._clickOutside)
  }
}
</script>

<style scoped>
.navbar {
  background: #fff;
  border-bottom: 1px solid #ebebeb;
  padding: 0;
  height: 70px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
}

.container {
  max-width: 1760px;
  margin: 0 auto;
  padding: 0 24px;
  height: 100%;
  width: 100%;
}

.nav-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  width: 100%;
}

/* Brand */
.brand {
  display: flex;
  align-items: center;
  gap: 8px;
  text-decoration: none;
  flex-shrink: 0;
}

.brand-icon {
  font-size: 28px;
  color: #ff385c;
}

.brand-text {
  font-size: 20px;
  font-weight: 700;
  color: #ff385c;
  letter-spacing: -0.5px;
  display: none;
}

@media (min-width: 744px) {
  .brand-text {
    display: block;
  }
}

/* Search Bar - Simple and clean */
.search-wrapper {
  max-width: 360px;
}

.search-bar {
  display: flex;
  align-items: center;
  background: #f7f7f7;
  border: 1px solid transparent;
  border-radius: 24px;
  padding: 10px 16px;
  transition: all 0.2s ease;
}

.search-bar:hover,
.search-bar:focus-within {
  background: #fff;
  border-color: #ddd;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
}

.search-icon-input {
  font-size: 16px;
  color: #717171;
  margin-right: 12px;
  flex-shrink: 0;
}

.search-input {
  flex: 1;
  border: none;
  background: transparent;
  font-size: 14px;
  color: #222;
  outline: none;
  min-width: 0;
}

.search-input::placeholder {
  color: #717171;
}

.clear-btn {
  background: none;
  border: none;
  padding: 4px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  margin-left: 8px;
}

.clear-btn i {
  font-size: 16px;
  color: #717171;
}

.clear-btn:hover i {
  color: #222;
}

/* Right Menu */
.right-menu {
  display: flex;
  align-items: center;
  gap: 8px;
  flex-shrink: 0;
}

.nav-link {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 14px;
  font-weight: 500;
  color: #222;
  padding: 10px 14px;
  border-radius: 22px;
  transition: background-color 0.2s ease;
  text-decoration: none;
}

.nav-link:hover {
  background-color: #f7f7f7;
}

.nav-link i {
  font-size: 18px;
}

.nav-text {
  display: none;
}

@media (min-width: 950px) {
  .nav-text {
    display: inline;
  }
  
  .nav-link i {
    font-size: 16px;
  }
}

.nav-link-icon {
  position: relative;
  padding: 10px;
}

.fav-badge {
  position: absolute;
  top: 4px;
  right: 4px;
  width: 18px;
  height: 18px;
  background: #ff385c;
  color: #fff;
  font-size: 11px;
  font-weight: 600;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* User Menu */
.user-menu-wrapper {
  position: relative;
}

.user-menu-btn {
  display: flex;
  align-items: center;
  gap: 10px;
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 21px;
  padding: 5px 5px 5px 12px;
  cursor: pointer;
  transition: box-shadow 0.2s ease;
}

.user-menu-btn:hover {
  box-shadow: 0 2px 4px rgba(0,0,0,0.18);
}

.user-menu-btn i.bi-list {
  font-size: 16px;
  color: #717171;
}

.user-avatar {
  width: 28px;
  height: 28px;
  background: #717171;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
}

.user-avatar i {
  font-size: 14px;
}

/* User Dropdown */
.user-dropdown {
  position: absolute;
  top: calc(100% + 8px);
  right: 0;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 2px 16px rgba(0,0,0,0.15);
  min-width: 200px;
  padding: 8px 0;
  z-index: 1001;
  animation: fadeIn 0.1s ease;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-8px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.dropdown-section {
  padding: 4px 0;
}

.dropdown-item {
  display: block;
  padding: 10px 16px;
  font-size: 14px;
  color: #222;
  text-decoration: none;
  transition: background-color 0.1s ease;
}

.dropdown-item:hover {
  background-color: #f7f7f7;
}

.dropdown-item.bold {
  font-weight: 600;
}

.dropdown-divider {
  height: 1px;
  background: #ddd;
  margin: 4px 0;
}

/* Responsive */
@media (max-width: 744px) {
  .container {
    padding: 0 16px;
  }
  
  .search-wrapper {
    margin: 0 12px;
  }
  
  .search-bar {
    padding: 8px 12px;
  }
  
  .nav-link:not(.nav-link-icon) {
    display: none;
  }
}
</style>
