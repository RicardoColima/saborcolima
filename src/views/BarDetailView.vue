<template>
  <div class="bar-detail-view" v-if="bar">
    <!-- Image Gallery -->
    <div class="gallery">
      <div class="main-image">
        <img 
          :src="bar.images[0]" 
          :alt="bar.name"
          @error="handleImageError($event, 0)"
        >
        <button class="btn-favorite" @click="toggleFavorite" :class="{ active: isFavorite }">
          <i :class="isFavorite ? 'bi bi-heart-fill' : 'bi bi-heart'"></i>
        </button>
      </div>
      <div class="thumbnails">
        <img 
          v-for="(img, index) in bar.images.slice(1, 3)" 
          :key="index"
          :src="img" 
          :alt="`${bar.name} - ${index + 2}`"
          @click="openGallery(index + 1)"
          @error="handleImageError($event, index + 1)"
        >
        <div v-if="bar.images.length > 3" class="more-photos" @click="openGallery(3)">
          <span>+{{ bar.images.length - 3 }} fotos</span>
        </div>
      </div>
    </div>

    <div class="container py-4">
      <div class="row">
        <!-- Main Content -->
        <div class="col-lg-8">
          <!-- Header -->
          <div class="bar-header mb-4">
            <div class="d-flex justify-content-between align-items-start flex-wrap gap-2">
              <div>
                <span class="badge bg-primary mb-2">{{ bar.category }}</span>
                <h1 class="bar-name">{{ bar.name }}</h1>
                <div class="bar-meta">
                  <span class="rating">
                    <i class="bi bi-star-fill text-warning"></i>
                    <strong>{{ bar.rating }}</strong>
                    <span class="text-muted">({{ bar.reviews }} reseñas)</span>
                  </span>
                  <span class="separator">·</span>
                  <span class="type">{{ bar.type }}</span>
                  <span class="separator">·</span>
                  <span class="price">{{ bar.priceRange }}</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Description -->
          <div class="bar-section">
            <h3>Sobre el lugar</h3>
            <p class="description">{{ bar.description }}</p>
          </div>

          <!-- Features -->
          <div class="bar-section">
            <h3>Lo que ofrece</h3>
            <div class="features-grid">
              <div v-for="feature in bar.features" :key="feature" class="feature-item">
                <i class="bi bi-check-circle-fill text-success"></i>
                <span>{{ feature }}</span>
              </div>
            </div>
          </div>

          <!-- Reviews Preview -->
          <div class="bar-section">
            <h3>Reseñas destacadas</h3>
            <div class="reviews-preview">
              <div v-for="review in reviews" :key="review.id" class="review-card">
                <div class="review-header">
                  <div class="reviewer">
                    <div class="avatar">{{ review.name[0] }}</div>
                    <div>
                      <strong>{{ review.name }}</strong>
                      <div class="text-muted small">{{ review.date }}</div>
                    </div>
                  </div>
                  <div class="review-rating">
                    <i v-for="n in 5" :key="n" class="bi bi-star-fill" :class="{ 'text-warning': n <= review.rating, 'text-muted': n > review.rating }"></i>
                  </div>
                </div>
                <p class="review-text">{{ review.text }}</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Sidebar -->
        <div class="col-lg-4">
          <div class="info-card sticky-top">
            <div class="info-item">
              <i class="bi bi-geo-alt"></i>
              <div>
                <strong>Ubicación</strong>
                <p class="mb-0">{{ bar.address }}</p>
              </div>
            </div>
            
            <div class="info-item">
              <i class="bi bi-clock"></i>
              <div>
                <strong>Horario</strong>
                <p class="mb-0">{{ bar.hours }}</p>
              </div>
            </div>
            
            <div class="info-item">
              <i class="bi bi-telephone"></i>
              <div>
                <strong>Teléfono</strong>
                <p class="mb-0">{{ bar.phone }}</p>
              </div>
            </div>

            <div class="info-item">
              <i class="bi bi-currency-dollar"></i>
              <div>
                <strong>Rango de precios</strong>
                <p class="mb-0">{{ bar.priceRange }} ({{ getPriceDescription(bar.price) }})</p>
              </div>
            </div>

            <hr>

            <div class="d-grid gap-2">
              <a :href="`tel:${bar.phone}`" class="btn btn-primary">
                <i class="bi bi-telephone me-2"></i>
                Llamar ahora
              </a>
              <button class="btn btn-outline-primary" @click="shareBar">
                <i class="bi bi-share me-2"></i>
                Compartir
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Back Button -->
    <button class="btn-back" @click="$router.back()">
      <i class="bi bi-arrow-left"></i>
    </button>
  </div>

  <!-- Loading State -->
  <div v-else class="container py-5 text-center">
    <div class="spinner-border text-primary" role="status">
      <span class="visually-hidden">Cargando...</span>
    </div>
    <p class="mt-3 text-muted">Cargando información...</p>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useFavoritesStore } from '@/stores/favorites'
import { useBarsStore } from '@/stores/bars'

const props = defineProps({
  id: {
    type: String,
    required: true
  }
})

const favoritesStore = useFavoritesStore()
const barsStore = useBarsStore()

const bar = computed(() => barsStore.getBarById(props.id))
const isFavorite = computed(() => favoritesStore.isFavorite(parseInt(props.id)))

const toggleFavorite = () => {
  favoritesStore.toggleFavorite(parseInt(props.id))
}

const openGallery = (index) => {
  alert(`Galería de fotos - Imagen ${index + 1}`)
}

const getPriceDescription = (price) => {
  const descriptions = {
    1: 'Económico',
    2: 'Moderado',
    3: 'Caro',
    4: 'Muy caro'
  }
  return descriptions[price] || ''
}

const shareBar = () => {
  if (navigator.share) {
    navigator.share({
      title: bar.value.name,
      text: bar.value.description,
      url: window.location.href
    })
  } else {
    navigator.clipboard.writeText(window.location.href)
    alert('Enlace copiado al portapapeles')
  }
}

const handleImageError = (e, index) => {
  const fallbackImages = [
    'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800',
    'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800',
    'https://images.unsplash.com/photo-1550966871-3ed3c47e2ce2?w=800'
  ]
  e.target.src = fallbackImages[index] || fallbackImages[0]
}

const reviews = [
  { id: 1, name: 'María G.', date: 'hace 2 días', rating: 5, text: 'Excelente ambiente y la comida es deliciosa. Definitivamente volveré con mis amigos.' },
  { id: 2, name: 'Carlos R.', date: 'hace 1 semana', rating: 4, text: 'Muy buen servicio, aunque un poco lento en horas pico. El marisco fresco vale la espera.' },
  { id: 3, name: 'Ana L.', date: 'hace 2 semanas', rating: 5, text: 'Mi lugar favorito en Colima. Los precios son justos y la calidad es consistente.' }
]
</script>

<style scoped>
.bar-detail-view {
  padding-bottom: 3rem;
}

.gallery {
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 8px;
  height: 400px;
  margin: 0;
  background: #fff;
}

.main-image {
  grid-column: 1;
  grid-row: 1 / 3;
  position: relative;
  overflow: hidden;
  border-radius: 12px 0 0 12px;
}

.main-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 12px 0 0 12px;
}

.thumbnails {
  display: grid;
  grid-column: 2;
  grid-row: 1 / 3;
  grid-template-rows: 1fr 1fr;
  gap: 8px;
}

.thumbnails img,
.more-photos {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  cursor: pointer;
  transition: opacity 0.2s;
}

.thumbnails img:first-child {
  border-radius: 0 12px 0 0;
}

.thumbnails img:last-child {
  border-radius: 0 0 12px 0;
}

.thumbnails .more-photos {
  border-radius: 0 0 12px 0;
}

.thumbnails img:hover {
  opacity: 0.9;
}

.more-photos {
  background: rgba(0,0,0,0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-weight: 600;
  border-radius: 0 0 16px 0;
}

.btn-favorite {
  position: absolute;
  top: 20px;
  right: 20px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: none;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s;
  box-shadow: 0 2px 10px rgba(0,0,0,0.15);
}

.btn-favorite i {
  font-size: 1.5rem;
  color: #ff385c;
}

.btn-favorite:hover {
  transform: scale(1.1);
}

.bar-header {
  padding-bottom: 1.5rem;
  border-bottom: 1px solid #e9ecef;
}

.badge.bg-primary {
  background-color: #ff385c !important;
}

.bar-name {
  font-weight: 700;
  font-size: 2rem;
  margin: 0.5rem 0;
  color: #2D3436;
}

.bar-meta {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.95rem;
}

.rating strong {
  margin-left: 0.25rem;
}

.separator {
  color: #adb5bd;
}

.bar-section {
  padding: 1.5rem 0;
  border-bottom: 1px solid #e9ecef;
}

.bar-section h3 {
  font-weight: 600;
  font-size: 1.25rem;
  margin-bottom: 1rem;
  color: #2D3436;
}

.description {
  font-size: 1rem;
  line-height: 1.7;
  color: #636E72;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1rem;
}

.feature-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.95rem;
}

.reviews-preview {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.review-card {
  padding: 1rem;
  background: #f8f9fa;
  border-radius: 12px;
}

.review-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 0.75rem;
}

.reviewer {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: linear-gradient(135deg, #ff385c, #ff5a5f);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-weight: 600;
}

.review-rating i {
  font-size: 0.8rem;
  margin-right: 0.1rem;
}

.review-text {
  margin: 0;
  color: #636E72;
  font-size: 0.95rem;
  line-height: 1.6;
}

.info-card {
  background: #fff;
  border-radius: 16px;
  padding: 1.5rem;
  box-shadow: 0 2px 16px rgba(0,0,0,0.08);
  top: 100px;
  margin-left: 1.5rem;
}

.info-item {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  padding: 1rem 0;
  border-bottom: 1px solid #f0f0f0;
}

.info-item:last-of-type {
  border-bottom: none;
}

.info-item i {
  font-size: 1.25rem;
  color: #ff385c;
  margin-top: 0.25rem;
}

.info-item strong {
  display: block;
  font-size: 0.9rem;
  color: #2D3436;
  margin-bottom: 0.25rem;
}

.info-item p {
  font-size: 0.9rem;
  color: #636E72;
}

.btn-primary {
  background: linear-gradient(135deg, #ff385c 0%, #e31c5f 100%);
  border: none;
  font-weight: 600;
}

.btn-primary:hover {
  background: linear-gradient(135deg, #e31c5f 0%, #d70466 100%);
}

.btn-outline-primary {
  border-color: #ff385c;
  color: #ff385c;
  font-weight: 600;
}

.btn-outline-primary:hover {
  background: #ff385c;
  color: #fff;
}

.btn-back {
  position: fixed;
  top: 100px;
  left: 20px;
  width: 45px;
  height: 45px;
  border-radius: 50%;
  border: none;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 2px 10px rgba(0,0,0,0.15);
  z-index: 100;
  transition: all 0.2s;
}

.btn-back:hover {
  transform: translateX(-3px);
}

.btn-back i {
  font-size: 1.25rem;
  color: #2D3436;
}

@media (max-width: 992px) {
  .gallery {
    grid-template-columns: 1fr;
    grid-template-rows: 300px auto;
    height: auto;
    gap: 4px;
  }
  
  .main-image {
    grid-column: 1;
    grid-row: 1;
    height: 300px;
    border-radius: 0;
  }
  
  .main-image img {
    border-radius: 0;
  }
  
  .thumbnails {
    grid-column: 1;
    grid-row: 2;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
    gap: 4px;
    height: 150px;
  }
  
  .thumbnails img:first-child {
    border-radius: 0;
  }
  
  .thumbnails img:last-child,
  .thumbnails .more-photos {
    border-radius: 0;
  }
  
  .bar-name {
    font-size: 1.5rem;
  }
  
  .btn-back {
    top: 80px;
    left: 10px;
  }
  
  .info-card {
    margin-top: 2rem;
    position: static;
  }
}
</style>
