<template>
  <div class="content-page">
    <div class="page-header">
      <div class="container">
        <router-link to="/" class="back-link">
          <i class="bi bi-arrow-left"></i>
          <span>Volver</span>
        </router-link>
        <h1>Mapa interactivo</h1>
        <p>Explora {{ filteredRestaurants.length }} restaurantes de Colima</p>
      </div>
    </div>
    
    <div class="page-content">
      <div class="map-layout">
        <aside class="sidebar">
          <div class="search-box">
            <i class="bi bi-search"></i>
            <input 
              v-model="searchQuery" 
              type="text" 
              placeholder="Buscar restaurante..."
            >
          </div>
          
          <div class="filters">
            <h3>Filtros</h3>
            <label class="filter-item" v-for="type in availableTypes" :key="type">
              <input 
                type="checkbox" 
                :value="type"
                v-model="selectedTypes"
              >
              <span>{{ type }}</span>
            </label>
          </div>
          
          <div class="results">
            <h3>Resultados ({{ filteredRestaurants.length }})</h3>
            <div class="result-list">
              <div 
                v-for="restaurant in filteredRestaurants" 
                :key="restaurant.id"
                class="result-item"
                :class="{ active: selectedRestaurant?.id === restaurant.id }"
                @click="selectRestaurant(restaurant)"
              >
                <h4>{{ restaurant.name }}</h4>
                <span class="location">
                  <i class="bi bi-geo-alt"></i> {{ restaurant.location }}
                </span>
                <span class="rating">
                  <i class="bi bi-star-fill"></i> {{ restaurant.rating }}
                </span>
                <span class="type-badge">{{ restaurant.type }}</span>
              </div>
            </div>
          </div>
        </aside>
        
        <div class="map-wrapper">
          <div ref="mapContainer" class="map-container"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, watch } from 'vue'
import { useRouter } from 'vue-router'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'

const router = useRouter()
const mapContainer = ref(null)
const map = ref(null)
const markers = ref([])
const searchQuery = ref('')
const selectedTypes = ref(['Mexicana', 'Mariscos', 'Cafés', 'Bares', 'Pizza'])
const selectedRestaurant = ref(null)

// Datos de ejemplo - restaurantes de Colima con coordenadas reales aproximadas
const restaurants = ref([
  { id: 1, name: 'Mariscos El Puerto', type: 'Mariscos', location: 'Manzanillo', rating: 4.8, lat: 19.054, lng: -104.318, address: 'Av. Playa 123, Manzanillo' },
  { id: 2, name: 'Café Comala', type: 'Cafés', location: 'Comala', rating: 4.6, lat: 19.329, lng: -103.759, address: 'Centro Histórico, Comala' },
  { id: 3, name: 'Tacos El Carnal', type: 'Mexicana', location: 'Colima Capital', rating: 4.5, lat: 19.245, lng: -103.725, address: 'Calle Hidalgo 456, Colima' },
  { id: 4, name: 'Pizzería Napoli', type: 'Pizza', location: 'Villa de Álvarez', rating: 4.3, lat: 19.266, lng: -103.738, address: 'Av. Real 789, Villa de Álvarez' },
  { id: 5, name: 'Bar La Cantina', type: 'Bares', location: 'Colima Capital', rating: 4.4, lat: 19.243, lng: -103.727, address: 'Jardín Libertad 100, Colima' },
  { id: 6, name: 'Mariscos Cocos', type: 'Mariscos', location: 'Manzanillo', rating: 4.7, lat: 19.052, lng: -104.322, address: 'Malecón 200, Manzanillo' },
  { id: 7, name: 'Café Kali', type: 'Cafés', location: 'Colima Capital', rating: 4.5, lat: 19.247, lng: -103.723, address: 'Reforma 300, Colima' },
  { id: 8, name: 'Taquería El Güero', type: 'Mexicana', location: 'Tecomán', rating: 4.2, lat: 18.916, lng: -103.878, address: 'Calle Principal 50, Tecomán' },
  { id: 9, name: 'Sushi Roll', type: 'Sushi', location: 'Colima Capital', rating: 4.1, lat: 19.250, lng: -103.720, address: 'Torres Gemelas 400, Colima' },
  { id: 10, name: 'El Borbollón', type: 'Bares', location: 'Comala', rating: 4.3, lat: 19.328, lng: -103.760, address: 'Calle Morelos 12, Comala' },
])

const availableTypes = computed(() => {
  const types = new Set(restaurants.value.map(r => r.type))
  return Array.from(types)
})

const filteredRestaurants = computed(() => {
  return restaurants.value.filter(r => {
    const matchesSearch = r.name.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
                         r.location.toLowerCase().includes(searchQuery.value.toLowerCase())
    const matchesType = selectedTypes.value.includes(r.type)
    return matchesSearch && matchesType
  })
})

const initMap = () => {
  // Centro de Colima
  map.value = L.map(mapContainer.value).setView([19.245, -103.725], 11)
  
  // Capa de OpenStreetMap
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
  }).addTo(map.value)
}

const updateMarkers = () => {
  // Limpiar marcadores anteriores
  markers.value.forEach(marker => map.value.removeLayer(marker))
  markers.value = []
  
  // Agregar nuevos marcadores
  filteredRestaurants.value.forEach(restaurant => {
    const marker = L.marker([restaurant.lat, restaurant.lng])
      .addTo(map.value)
      .bindPopup(`
        <div class="popup-content">
          <h3>${restaurant.name}</h3>
          <p><strong>${restaurant.type}</strong></p>
          <p>${restaurant.address}</p>
          <p>⭐ ${restaurant.rating}</p>
        </div>
      `)
    
    marker.on('click', () => {
      selectedRestaurant.value = restaurant
    })
    
    markers.value.push(marker)
  })
}

const selectRestaurant = (restaurant) => {
  selectedRestaurant.value = restaurant
  map.value.setView([restaurant.lat, restaurant.lng], 15)
  
  // Abrir popup del marcador
  const marker = markers.value.find(m => {
    const latLng = m.getLatLng()
    return latLng.lat === restaurant.lat && latLng.lng === restaurant.lng
  })
  if (marker) {
    marker.openPopup()
  }
}

watch([filteredRestaurants], () => {
  if (map.value) {
    updateMarkers()
  }
}, { deep: true })

onMounted(() => {
  initMap()
  updateMarkers()
})
</script>

<style scoped>
.content-page {
  min-height: 100vh;
  background: #f8f9fa;
  display: flex;
  flex-direction: column;
}

.page-header {
  background: #ff385c;
  padding: 40px 24px 30px;
  color: #fff;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
}

.back-link {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: rgba(255,255,255,0.9);
  text-decoration: none;
  font-size: 14px;
  margin-bottom: 16px;
  transition: color 0.2s;
}

.back-link:hover {
  color: #fff;
}

.page-header h1 {
  font-size: 28px;
  font-weight: 700;
  margin-bottom: 6px;
}

.page-header p {
  font-size: 15px;
  opacity: 0.9;
}

.page-content {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.map-layout {
  display: grid;
  grid-template-columns: 340px 1fr;
  flex: 1;
  min-height: calc(100vh - 140px);
}

.sidebar {
  background: #fff;
  border-right: 1px solid #e8e8e8;
  padding: 20px;
  overflow-y: auto;
  max-height: calc(100vh - 140px);
}

.search-box {
  position: relative;
  margin-bottom: 20px;
}

.search-box i {
  position: absolute;
  left: 12px;
  top: 50%;
  transform: translateY(-50%);
  color: #999;
}

.search-box input {
  width: 100%;
  padding: 12px 12px 12px 40px;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 14px;
}

.filters h3,
.results h3 {
  font-size: 13px;
  font-weight: 600;
  color: #666;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-bottom: 12px;
}

.filters {
  margin-bottom: 20px;
  padding-bottom: 16px;
  border-bottom: 1px solid #f0f0f0;
}

.filter-item {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 6px 0;
  font-size: 14px;
  color: #555;
  cursor: pointer;
}

.filter-item input {
  width: 18px;
  height: 18px;
  accent-color: #ff385c;
  cursor: pointer;
}

.result-list {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.result-item {
  border: 1px solid #e8e8e8;
  border-radius: 8px;
  padding: 14px;
  cursor: pointer;
  transition: all 0.2s;
}

.result-item:hover {
  border-color: #ff385c;
  box-shadow: 0 2px 8px rgba(255,56,92,0.1);
}

.result-item.active {
  border-color: #ff385c;
  background: #fff0f2;
}

.result-item h4 {
  font-size: 15px;
  font-weight: 600;
  color: #1a1a2e;
  margin-bottom: 8px;
}

.result-item .location,
.result-item .rating {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  font-size: 13px;
  color: #666;
  margin-right: 12px;
}

.result-item .rating i {
  color: #f59e0b;
}

.type-badge {
  display: inline-block;
  background: #f5f5f5;
  color: #666;
  padding: 2px 8px;
  border-radius: 4px;
  font-size: 11px;
  font-weight: 500;
  margin-top: 6px;
}

.map-wrapper {
  position: relative;
  background: #e8e8e8;
}

.map-container {
  width: 100%;
  height: 100%;
  min-height: 500px;
}

:global(.popup-content h3) {
  margin: 0 0 8px 0;
  font-size: 16px;
  font-weight: 600;
}

:global(.popup-content p) {
  margin: 4px 0;
  font-size: 13px;
  color: #555;
}

@media (max-width: 900px) {
  .map-layout {
    grid-template-columns: 1fr;
  }
  
  .sidebar {
    border-right: none;
    border-bottom: 1px solid #e8e8e8;
    max-height: 300px;
  }
  
  .map-container {
    min-height: 400px;
  }
}
</style>
