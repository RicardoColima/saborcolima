<template>
  <div class="filter-bar">
    <div class="container">
      <div class="d-flex flex-wrap gap-2 align-items-center">
        <!-- Tipo de comida -->
        <div class="filter-dropdown">
          <button 
            class="btn btn-outline-secondary dropdown-toggle filter-btn" 
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <i class="bi bi-shop me-1"></i>
            {{ selectedTypeLabel }}
          </button>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#" @click.prevent="setType('')">Todos los tipos</a></li>
            <li><hr class="dropdown-divider"></li>
            <li v-for="type in barsStore.types" :key="type">
              <a 
                class="dropdown-item" 
                href="#" 
                @click.prevent="setType(type)"
                :class="{ active: barsStore.selectedType === type }"
              >
                {{ type }}
              </a>
            </li>
          </ul>
        </div>

        <!-- Ubicación -->
        <div class="filter-dropdown">
          <button 
            class="btn btn-outline-secondary dropdown-toggle filter-btn" 
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <i class="bi bi-geo-alt me-1"></i>
            {{ selectedLocationLabel }}
          </button>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#" @click.prevent="setLocation('')">Todas las ubicaciones</a></li>
            <li><hr class="dropdown-divider"></li>
            <li v-for="location in barsStore.locations" :key="location">
              <a 
                class="dropdown-item" 
                href="#" 
                @click.prevent="setLocation(location)"
                :class="{ active: barsStore.selectedLocation === location }"
              >
                {{ location }}
              </a>
            </li>
          </ul>
        </div>

        <!-- Precio -->
        <div class="filter-dropdown">
          <button 
            class="btn btn-outline-secondary dropdown-toggle filter-btn" 
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <i class="bi bi-currency-dollar me-1"></i>
            {{ selectedPriceLabel }}
          </button>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#" @click.prevent="setPrice('')">Cualquier precio</a></li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item" href="#" @click.prevent="setPrice('1')" :class="{ active: barsStore.selectedPrice === '1' }">$ (Económico)</a></li>
            <li><a class="dropdown-item" href="#" @click.prevent="setPrice('2')" :class="{ active: barsStore.selectedPrice === '2' }">$$ (Moderado)</a></li>
            <li><a class="dropdown-item" href="#" @click.prevent="setPrice('3')" :class="{ active: barsStore.selectedPrice === '3' }">$$$ (Caro)</a></li>
            <li><a class="dropdown-item" href="#" @click.prevent="setPrice('4')" :class="{ active: barsStore.selectedPrice === '4' }">$$$$ (Muy caro)</a></li>
          </ul>
        </div>

        <!-- Rating -->
        <div class="filter-dropdown">
          <button 
            class="btn btn-outline-secondary dropdown-toggle filter-btn" 
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <i class="bi bi-star me-1"></i>
            {{ selectedRatingLabel }}
          </button>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#" @click.prevent="setRating('')">Cualquier rating</a></li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item" href="#" @click.prevent="setRating('4.5')" :class="{ active: barsStore.selectedRating === '4.5' }">4.5+ Excelente</a></li>
            <li><a class="dropdown-item" href="#" @click.prevent="setRating('4.0')" :class="{ active: barsStore.selectedRating === '4.0' }">4.0+ Muy bueno</a></li>
            <li><a class="dropdown-item" href="#" @click.prevent="setRating('3.5')" :class="{ active: barsStore.selectedRating === '3.5' }">3.5+ Bueno</a></li>
          </ul>
        </div>

        <button 
          v-if="hasActiveFilters"
          class="btn btn-link text-decoration-none clear-filters"
          @click="clearFilters"
        >
          <i class="bi bi-x-circle me-1"></i>
          Limpiar filtros
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useBarsStore } from '@/stores/bars'

const barsStore = useBarsStore()

const selectedTypeLabel = computed(() => {
  return barsStore.selectedType || 'Tipo de comida'
})

const selectedLocationLabel = computed(() => {
  return barsStore.selectedLocation || 'Ubicación'
})

const selectedPriceLabel = computed(() => {
  if (!barsStore.selectedPrice) return 'Precio'
  const priceMap = { '1': '$', '2': '$$', '3': '$$$', '4': '$$$$' }
  return priceMap[barsStore.selectedPrice]
})

const selectedRatingLabel = computed(() => {
  if (!barsStore.selectedRating) return 'Rating'
  return barsStore.selectedRating + '+'
})

const hasActiveFilters = computed(() => {
  return barsStore.selectedType || 
         barsStore.selectedLocation || 
         barsStore.selectedPrice || 
         barsStore.selectedRating ||
         barsStore.searchQuery
})

const setType = (type) => {
  barsStore.selectedType = type
}

const setLocation = (location) => {
  barsStore.selectedLocation = location
}

const setPrice = (price) => {
  barsStore.selectedPrice = price
}

const setRating = (rating) => {
  barsStore.selectedRating = rating
}

const clearFilters = () => {
  barsStore.selectedType = ''
  barsStore.selectedLocation = ''
  barsStore.selectedPrice = ''
  barsStore.selectedRating = ''
  barsStore.searchQuery = ''
}
</script>

<style scoped>
.filter-bar {
  background: #fff;
  border-bottom: 1px solid #e9ecef;
  padding: 1rem 0;
  position: sticky;
  top: 70px;
  z-index: 100;
}

.filter-btn {
  border-radius: 30px;
  padding: 0.5rem 1rem;
  font-size: 0.9rem;
  font-weight: 500;
  border-color: #ddd;
  color: #2D3436;
  background: #fff;
}

.filter-btn:hover,
.filter-btn:focus {
  border-color: #ff385c;
  color: #ff385c;
  background: #fff;
}

.filter-btn::after {
  margin-left: 0.5rem;
}

.clear-filters {
  color: #ff385c;
  font-weight: 500;
  font-size: 0.9rem;
}

.clear-filters:hover {
  color: #e31c5f;
}

.dropdown-menu {
  border-radius: 12px;
  border: none;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
  padding: 0.5rem;
}

.dropdown-item {
  padding: 0.5rem 1rem;
  border-radius: 8px;
  font-size: 0.9rem;
}

.dropdown-item:hover {
  background-color: #fff0f3;
  color: #ff385c;
}

.dropdown-item.active {
  background-color: #ff385c;
  color: #fff;
}

.dropdown-divider {
  margin: 0.5rem 0;
}

@media (max-width: 768px) {
  .filter-bar {
    top: 60px;
    overflow-x: auto;
    padding: 0.75rem 0;
  }
  
  .filter-bar .d-flex {
    flex-wrap: nowrap !important;
  }
}
</style>
