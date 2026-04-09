<template>
  <div class="bar-card" @click="goToDetail">
    <div class="card-image-wrapper">
      <img 
        :src="currentImage" 
        :alt="bar.name"
        class="card-image"
        loading="lazy"
        @error="handleImageError"
      >
      
      <!-- Carousel Dots (decorative) -->
      <div class="carousel-dots">
        <span class="dot active"></span>
        <span class="dot"></span>
        <span class="dot"></span>
      </div>
      
      <button 
        class="favorite-btn"
        @click.stop="toggleFavorite"
        :class="{ 'is-fav': isFavorite }"
        :aria-label="isFavorite ? 'Quitar de favoritos' : 'Agregar a favoritos'"
      >
        <i 
          class="bi"
          :class="isFavorite ? 'bi-heart-fill' : 'bi-heart'"
        ></i>
      </button>
    </div>
    
    <div class="card-content">
      <div class="card-header-row">
        <div class="location-text">{{ bar.location }}</div>
        <div class="rating-badge">
          <i class="bi bi-star-fill"></i>
          <span>{{ bar.rating }}</span>
        </div>
      </div>
      
      <h3 class="card-title">{{ bar.name }}</h3>
      
      <div class="card-details">
        <span class="detail-item">{{ bar.type }}</span>
        <span class="detail-separator">·</span>
        <span class="detail-item">{{ bar.priceRange }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue'
import { useRouter } from 'vue-router'
import { useFavoritesStore } from '@/stores/favorites'

const props = defineProps({
  bar: {
    type: Object,
    required: true
  }
})

const router = useRouter()
const favoritesStore = useFavoritesStore()
const imageError = ref(false)

const isFavorite = computed(() => favoritesStore.isFavorite(props.bar.id))

const toggleFavorite = () => {
  favoritesStore.toggleFavorite(props.bar.id)
}

const goToDetail = () => {
  router.push(`/bar/${props.bar.id}`)
}

const handleImageError = (e) => {
  imageError.value = true
  e.target.src = 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800'
}

const currentImage = computed(() => {
  if (imageError.value) {
    return 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800'
  }
  return props.bar.images[0]
})

</script>

<style scoped>
/* Airbnb-style Card */
.bar-card {
  cursor: pointer;
  transition: transform 0.2s ease;
}

.bar-card:hover {
  transform: translateY(-2px);
}

.card-image-wrapper {
  position: relative;
  aspect-ratio: 1 / 0.95;
  border-radius: 12px;
  overflow: hidden;
  margin-bottom: 12px;
}

.card-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.bar-card:hover .card-image {
  transform: scale(1.03);
}

/* Carousel Dots */
.carousel-dots {
  position: absolute;
  bottom: 12px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 6px;
  z-index: 2;
}

.dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.5);
  transition: background 0.2s ease;
}

.dot.active {
  background: #fff;
}

/* Favorite Button */
.favorite-btn {
  position: absolute;
  top: 12px;
  right: 12px;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  border: none;
  background: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: transform 0.1s ease;
  z-index: 2;
}

.favorite-btn:hover {
  transform: scale(1.1);
}

.favorite-btn i {
  font-size: 24px;
  color: rgba(0, 0, 0, 0.5);
  -webkit-text-stroke: 1px #fff;
  text-shadow: 0 1px 2px rgba(0,0,0,0.3);
  transition: all 0.2s ease;
}

.favorite-btn:hover i {
  color: rgba(0, 0, 0, 0.7);
}

.favorite-btn.is-fav i {
  color: #ff385c;
  -webkit-text-stroke: 0;
}

/* Card Content */
.card-content {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.card-header-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.location-text {
  font-size: 15px;
  font-weight: 600;
  color: #222;
  line-height: 1.2;
}

.rating-badge {
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 15px;
  color: #222;
}

.rating-badge i {
  font-size: 12px;
  color: #222;
}

.card-title {
  font-size: 15px;
  font-weight: 400;
  color: #717171;
  margin: 0;
  line-height: 1.3;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.card-details {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 15px;
  color: #717171;
  margin-top: 2px;
}

.detail-item {
  font-weight: 400;
}

.detail-separator {
  font-size: 12px;
}
</style>
