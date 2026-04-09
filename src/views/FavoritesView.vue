<template>
  <div class="favorites-view">
    <div class="container py-4">
      <!-- Header -->
      <div class="page-header mb-4">
        <h1 class="page-title">
          <i class="bi bi-heart-fill text-danger me-2"></i>
          Mis favoritos
        </h1>
        <p class="page-subtitle text-muted" v-if="favoritesStore.favoritesCount > 0">
          {{ favoritesStore.favoritesCount }} lugar{{ favoritesStore.favoritesCount !== 1 ? 'es' : '' }} guardado{{ favoritesStore.favoritesCount !== 1 ? 's' : '' }}
        </p>
      </div>

      <!-- Favorites Grid -->
      <div v-if="favoriteBars.length > 0" class="row g-4">
        <div 
          v-for="bar in favoriteBars" 
          :key="bar.id"
          class="col-md-6 col-lg-4 col-xl-3"
        >
          <BarCard :bar="bar" />
        </div>
      </div>

      <!-- Empty State -->
      <div v-else class="empty-state text-center py-5">
        <div class="empty-icon mb-4">
          <i class="bi bi-heart"></i>
        </div>
        <h3 class="empty-title">Aún no tienes favoritos</h3>
        <p class="empty-description text-muted mb-4">
          Explora los bares y restaurantes de Colima y guarda tus favoritos para encontrarlos rápidamente.
        </p>
        <router-link to="/search" class="btn btn-primary btn-lg">
          <i class="bi bi-search me-2"></i>
          Explorar bares
        </router-link>
      </div>

      <!-- Quick Actions -->
      <div v-if="favoriteBars.length > 0" class="quick-actions mt-5 pt-4 border-top">
        <div class="d-flex justify-content-between align-items-center">
          <p class="text-muted mb-0">
            <i class="bi bi-info-circle me-1"></i>
            Tus favoritos se guardan en este dispositivo
          </p>
          <button class="btn btn-outline-danger btn-sm" @click="confirmClear">
            <i class="bi bi-trash me-1"></i>
            Limpiar favoritos
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted } from 'vue'
import { useFavoritesStore } from '@/stores/favorites'
import { useBarsStore } from '@/stores/bars'
import BarCard from '@/components/cards/BarCard.vue'

const favoritesStore = useFavoritesStore()
const barsStore = useBarsStore()

onMounted(() => {
  favoritesStore.loadFromStorage()
})

const favoriteBars = computed(() => {
  return barsStore.bars.filter(bar => favoritesStore.isFavorite(bar.id))
})

const confirmClear = () => {
  if (confirm('¿Estás seguro de que quieres eliminar todos tus favoritos?')) {
    favoritesStore.clearFavorites()
  }
}
</script>

<style scoped>
.favorites-view {
  min-height: calc(100vh - 300px);
}

.page-header {
  border-bottom: 1px solid #e9ecef;
  padding-bottom: 1rem;
}

.page-title {
  font-weight: 700;
  font-size: 2rem;
  color: #2D3436;
  margin-bottom: 0.5rem;
}

.page-subtitle {
  font-size: 1rem;
  margin: 0;
}

.empty-state {
  padding: 4rem 0;
}

.empty-icon {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background: linear-gradient(135deg, #FFF5F5 0%, #FFE0E0 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
}

.empty-icon i {
  font-size: 3rem;
  color: #ff385c;
}

.empty-title {
  font-weight: 600;
  color: #2D3436;
  margin-bottom: 1rem;
}

.empty-description {
  max-width: 450px;
  margin: 0 auto 2rem;
  font-size: 1.05rem;
  line-height: 1.6;
}

.btn-primary {
  background: linear-gradient(135deg, #ff385c 0%, #e31c5f 100%);
  border: none;
  font-weight: 600;
  padding: 0.75rem 1.5rem;
}

.btn-primary:hover {
  background: linear-gradient(135deg, #e31c5f 0%, #d70466 100%);
  transform: translateY(-2px);
}

.quick-actions {
  border-color: #e9ecef !important;
}

@media (max-width: 768px) {
  .page-title {
    font-size: 1.5rem;
  }
  
  .quick-actions .d-flex {
    flex-direction: column;
    gap: 1rem;
    text-align: center;
  }
}
</style>
