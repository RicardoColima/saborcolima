import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useFavoritesStore = defineStore('favorites', () => {
  const favorites = ref([])

  const loadFromStorage = () => {
    const stored = localStorage.getItem('sabor-colima-favorites')
    if (stored) {
      favorites.value = JSON.parse(stored)
    }
  }

  const saveToStorage = () => {
    localStorage.setItem('sabor-colima-favorites', JSON.stringify(favorites.value))
  }

  const isFavorite = (id) => {
    return favorites.value.includes(id)
  }

  const toggleFavorite = (id) => {
    const index = favorites.value.indexOf(id)
    if (index > -1) {
      favorites.value.splice(index, 1)
    } else {
      favorites.value.push(id)
    }
    saveToStorage()
  }

  const addFavorite = (id) => {
    if (!favorites.value.includes(id)) {
      favorites.value.push(id)
      saveToStorage()
    }
  }

  const removeFavorite = (id) => {
    const index = favorites.value.indexOf(id)
    if (index > -1) {
      favorites.value.splice(index, 1)
      saveToStorage()
    }
  }

  const clearFavorites = () => {
    favorites.value = []
    saveToStorage()
  }

  const favoritesCount = computed(() => favorites.value.length)

  return {
    favorites,
    isFavorite,
    toggleFavorite,
    addFavorite,
    removeFavorite,
    clearFavorites,
    favoritesCount,
    loadFromStorage
  }
})
