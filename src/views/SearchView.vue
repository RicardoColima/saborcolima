<template>
  <div class="search-view">
    <!-- Top Filter Bar -->
    <div class="filter-section">
      <div class="filter-container">
        <button 
          v-for="filter in filterOptions" 
          :key="filter.key"
          class="filter-chip"
          :class="{ active: isFilterActive(filter.key) }"
          @click="toggleFilter(filter.key)"
        >
          {{ filter.label }}
          <i v-if="isFilterActive(filter.key)" class="bi bi-x-circle-fill" @click.stop="clearFilter(filter.key)"></i>
        </button>
        
        <button class="filter-chip filter-btn" @click="showMoreFilters = !showMoreFilters">
          <i class="bi bi-sliders"></i>
          Filtros
        </button>
      </div>
    </div>

    <!-- Main Content - Split Layout -->
    <div class="split-layout">
      <!-- Left Panel - Results -->
      <div class="results-panel" :class="{ 'full-width': !showMap }">
        <!-- Results Header -->
        <div class="results-header">
          <div class="header-top">
            <h1 class="results-title">{{ filteredCount }} restaurantes en Colima</h1>
            <button class="map-toggle-btn" @click="showMap = !showMap">
              <i :class="showMap ? 'bi bi-list' : 'bi bi-map'"></i>
              {{ showMap ? 'Lista' : 'Mapa' }}
            </button>
          </div>
          
          <!-- Active Filters -->
          <div v-if="hasActiveFilters" class="active-filters">
            <span 
              v-for="(filter, index) in activeFilterLabels" 
              :key="index"
              class="filter-tag"
            >
              {{ filter.label }}
              <i class="bi bi-x" @click="filter.clear()"></i>
            </span>
            <button class="clear-all" @click="clearAllFilters">Limpiar todo</button>
          </div>
        </div>

        <!-- Results Grid -->
        <div v-if="filteredBars.length > 0" class="results-grid">
          <div 
            v-for="bar in filteredBars" 
            :key="bar.id"
            class="grid-item"
            :class="{ 'selected': selectedBar?.id === bar.id }"
            @mouseenter="selectedBar = bar"
            @mouseleave="selectedBar = null"
          >
            <BarCard :bar="bar" />
          </div>
        </div>

        <!-- Empty State -->
        <div v-else class="empty-state">
          <div class="empty-icon">
            <i class="bi bi-search"></i>
          </div>
          <h3>No encontramos resultados</h3>
          <p>Intenta con otros términos o ajusta los filtros.</p>
          <button class="btn-clear" @click="clearAllFilters">Limpiar filtros</button>
        </div>
      </div>

      <!-- Right Panel - Map -->
      <div v-if="showMap" class="map-panel">
        <MapView 
          :bars="filteredBars"
          :selected-bar="selectedBar"
          @select-bar="selectBar"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { useBarsStore } from '@/stores/bars'
import BarCard from '@/components/cards/BarCard.vue'
import MapView from '@/components/map/MapView.vue'

const barsStore = useBarsStore()
const router = useRouter()
const showMap = ref(true)
const showMoreFilters = ref(false)
const selectedBar = ref(null)

const filterOptions = [
  { key: 'type', label: 'Tipo de comida' },
  { key: 'price', label: 'Precio' },
  { key: 'rating', label: 'Rating' },
  { key: 'open', label: 'Abierto ahora' },
  { key: 'wifi', label: 'WiFi' },
  { key: 'parking', label: 'Estacionamiento' }
]

const filteredBars = computed(() => barsStore.filteredBars())
const filteredCount = computed(() => filteredBars.value.length)

const hasActiveFilters = computed(() => {
  return barsStore.searchQuery || 
         barsStore.selectedType || 
         barsStore.selectedLocation || 
         barsStore.selectedPrice || 
         barsStore.selectedRating
})

const activeFilterLabels = computed(() => {
  const filters = []
  if (barsStore.searchQuery) {
    filters.push({ label: `"${barsStore.searchQuery}"`, clear: () => barsStore.searchQuery = '' })
  }
  if (barsStore.selectedType) {
    filters.push({ label: barsStore.selectedType, clear: () => barsStore.selectedType = '' })
  }
  if (barsStore.selectedLocation) {
    filters.push({ label: barsStore.selectedLocation, clear: () => barsStore.selectedLocation = '' })
  }
  if (barsStore.selectedPrice) {
    const priceMap = { '1': '$', '2': '$$', '3': '$$$', '4': '$$$$' }
    filters.push({ label: priceMap[barsStore.selectedPrice], clear: () => barsStore.selectedPrice = '' })
  }
  if (barsStore.selectedRating) {
    filters.push({ label: `${barsStore.selectedRating}+ ★`, clear: () => barsStore.selectedRating = '' })
  }
  return filters
})

const isFilterActive = (key) => {
  const map = {
    type: barsStore.selectedType,
    price: barsStore.selectedPrice,
    rating: barsStore.selectedRating
  }
  return !!map[key]
}

const toggleFilter = (key) => {
  // Toggle filter logic
  if (key === 'type') {
    barsStore.selectedType = barsStore.selectedType ? '' : 'Mexicana'
  } else if (key === 'price') {
    barsStore.selectedPrice = barsStore.selectedPrice ? '' : '2'
  } else if (key === 'rating') {
    barsStore.selectedRating = barsStore.selectedRating ? '' : '4.0'
  }
}

const clearFilter = (key) => {
  if (key === 'type') barsStore.selectedType = ''
  else if (key === 'price') barsStore.selectedPrice = ''
  else if (key === 'rating') barsStore.selectedRating = ''
}

const clearAllFilters = () => {
  barsStore.searchQuery = ''
  barsStore.selectedType = ''
  barsStore.selectedLocation = ''
  barsStore.selectedPrice = ''
  barsStore.selectedRating = ''
}

const selectBar = (bar) => {
  router.push(`/bar/${bar.id}`)
}
</script>

<style scoped>
.search-view {
  height: calc(100vh - 80px);
  overflow: hidden;
}

/* Filter Section */
.filter-section {
  border-bottom: 1px solid #ebebeb;
  padding: 16px 0;
  background: #fff;
}

.filter-container {
  max-width: 1760px;
  margin: 0 auto;
  padding: 0 24px;
  display: flex;
  align-items: center;
  gap: 8px;
  overflow-x: auto;
  scrollbar-width: none;
}

.filter-container::-webkit-scrollbar {
  display: none;
}

.filter-chip {
  flex-shrink: 0;
  padding: 10px 16px;
  border: 1px solid #ddd;
  border-radius: 30px;
  background: #fff;
  font-size: 14px;
  font-weight: 500;
  color: #222;
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  gap: 8px;
}

.filter-chip:hover {
  border-color: #222;
}

.filter-chip.active {
  background: #222;
  border-color: #222;
  color: #fff;
}

.filter-chip i {
  font-size: 14px;
}

.filter-btn {
  border: 1px solid #ddd;
  gap: 6px;
}

/* Split Layout */
.split-layout {
  display: flex;
  height: calc(100% - 73px);
}

.results-panel {
  flex: 0 0 55%;
  overflow-y: auto;
  padding: 24px;
  background: #fff;
}

.results-panel.full-width {
  flex: 1;
}

.map-panel {
  flex: 0 0 45%;
  position: sticky;
  top: 0;
}

/* Results Header */
.results-header {
  margin-bottom: 24px;
}

.header-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
}

.results-title {
  font-size: 14px;
  font-weight: 400;
  color: #222;
  margin: 0;
}

.map-toggle-btn {
  display: none;
  align-items: center;
  gap: 6px;
  padding: 8px 14px;
  border: 1px solid #222;
  border-radius: 8px;
  background: #fff;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
}

@media (max-width: 950px) {
  .map-toggle-btn {
    display: flex;
  }
}

.active-filters {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 8px;
}

.filter-tag {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 6px 12px;
  background: #f7f7f7;
  border-radius: 16px;
  font-size: 12px;
  font-weight: 500;
  color: #222;
}

.filter-tag i {
  cursor: pointer;
  font-size: 14px;
  color: #717171;
}

.clear-all {
  font-size: 12px;
  font-weight: 500;
  color: #222;
  text-decoration: underline;
  background: none;
  border: none;
  cursor: pointer;
}

/* Results Grid */
.results-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px 16px;
}

@media (max-width: 550px) {
  .results-grid {
    grid-template-columns: 1fr;
  }
}

@media (min-width: 1600px) {
  .results-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

.grid-item {
  transition: opacity 0.2s ease;
}

.grid-item.selected {
  opacity: 0.7;
}

/* Empty State */
.empty-state {
  text-align: center;
  padding: 80px 20px;
}

.empty-icon {
  width: 64px;
  height: 64px;
  background: #f7f7f7;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 20px;
}

.empty-icon i {
  font-size: 28px;
  color: #717171;
}

.empty-state h3 {
  font-size: 22px;
  font-weight: 600;
  margin-bottom: 8px;
  color: #222;
}

.empty-state p {
  color: #717171;
  margin-bottom: 24px;
}

.btn-clear {
  padding: 14px 24px;
  background: #222;
  color: #fff;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: transform 0.1s ease;
}

.btn-clear:hover {
  transform: scale(1.02);
}

/* Responsive */
@media (max-width: 950px) {
  .results-panel {
    flex: 1;
  }
  
  .map-panel {
    display: none;
  }
  
  .map-panel.show {
    display: block;
    position: fixed;
    inset: 80px 0 0 0;
    z-index: 100;
  }
}

@media (max-width: 744px) {
  .filter-container {
    padding: 0 16px;
  }
  
  .results-panel {
    padding: 16px;
  }
}
</style>
