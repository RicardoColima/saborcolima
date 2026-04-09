<template>
  <div class="map-wrapper">
    <div ref="mapContainer" class="leaflet-map"></div>
    
    <!-- Map Style Toggle -->
    <div class="map-style-toggle">
      <button 
        class="style-btn" 
        :class="{ active: currentStyle === 'osm' }"
        @click="changeStyle('osm')"
      >
        Mapa
      </button>
      <button 
        class="style-btn" 
        :class="{ active: currentStyle === 'satellite' }"
        @click="changeStyle('satellite')"
      >
        Satélite
      </button>
    </div>
    
    <!-- Location Info -->
    <div class="map-info">
      <i class="bi bi-geo-alt-fill"></i>
      <span>Colima, México</span>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, watch } from 'vue'
import { useFavoritesStore } from '@/stores/favorites'
import L from 'leaflet'

const props = defineProps({
  bars: {
    type: Array,
    required: true
  },
  selectedBar: {
    type: Object,
    default: null
  }
})

const emit = defineEmits(['select-bar'])

const favoritesStore = useFavoritesStore()
const mapContainer = ref(null)
const map = ref(null)
const markers = ref([])
const currentStyle = ref('osm')

// Colima coordinates (center of the state)
const COLIMA_CENTER = [19.2452, -103.7005]

// City coordinates for grouping
const cityCoords = {
  'Colima Capital': [19.2452, -103.7005],
  'Manzanillo': [19.0535, -104.3167],
  'Comala': [19.3292, -103.7581],
  'Villa de Álvarez': [19.2672, -103.7375],
  'Tecomán': [18.9167, -103.8833],
  'Coquimatlán': [19.2000, -103.8000],
  'Minatitlán': [19.0333, -104.0667],
  'Armería': [18.9333, -103.9667]
}

// Setup global navigation function for popup clicks
const setupGlobalNavigation = () => {
  if (typeof window !== 'undefined') {
    window.navigateToBar = (barId) => {
      const bar = props.bars.find(b => b.id === barId)
      if (bar) {
        emit('select-bar', bar)
      }
    }
  }
}

// Initialize Leaflet map
const initMap = () => {
  if (!mapContainer.value || map.value) return
  
  // Setup global navigation
  setupGlobalNavigation()
  
  // Create map centered on Colima
  map.value = L.map(mapContainer.value, {
    center: COLIMA_CENTER,
    zoom: 10,
    zoomControl: false,
    attributionControl: false
  })
  
  // Add OpenStreetMap layer
  addTileLayer('osm')
  
  // Add zoom control at bottom right
  L.control.zoom({
    position: 'bottomright'
  }).addTo(map.value)
  
  // Add markers
  addMarkers()
}

// Add tile layer based on style
const addTileLayer = (style) => {
  if (!map.value) return
  
  // Remove existing layers
  map.value.eachLayer((layer) => {
    if (layer instanceof L.TileLayer) {
      map.value.removeLayer(layer)
    }
  })
  
  let url = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
  let attribution = '© OpenStreetMap contributors'
  
  if (style === 'satellite') {
    url = 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
    attribution = '© Esri'
  }
  
  L.tileLayer(url, {
    attribution,
    maxZoom: 18
  }).addTo(map.value)
}

// Add markers for bars
const addMarkers = () => {
  if (!map.value) return
  
  // Clear existing markers
  markers.value.forEach(marker => map.value.removeLayer(marker))
  markers.value = []
  
  props.bars.forEach((bar, index) => {
    // Use real coordinates from bar data
    const lat = bar.latitude || 19.2452
    const lng = bar.longitude || -103.7005
    
    // Create custom icon with price
    const icon = L.divIcon({
      className: 'custom-pin',
      html: `<div class="pin-content ${isFavorite(bar.id) ? 'favorited' : ''}">${bar.priceRange}</div>`,
      iconSize: [60, 30],
      iconAnchor: [30, 15]
    })
    
    const marker = L.marker([lat, lng], { icon })
      .addTo(map.value)
      .bindPopup(`
        <div class="map-popup" onclick="window.navigateToBar(${bar.id})" style="cursor:pointer;">
          <img src="${bar.images[0]}" alt="${bar.name}" style="width:100%;height:100px;object-fit:cover;border-radius:8px;margin-bottom:8px;">
          <div style="font-weight:600;font-size:14px;color:#222;">${bar.name}</div>
          <div style="font-size:12px;color:#717171;">${bar.type} • ${bar.rating} ★</div>
          <div style="margin-top:8px;font-size:12px;color:#ff385c;font-weight:600;">Ver detalles →</div>
        </div>
      `, {
        closeButton: false,
        offset: [0, -10]
      })
    
    // Store bar reference for popup click handler
    marker.barId = bar.id
    marker.barData = bar
    
    markers.value.push(marker)
  })
}

// Check if bar is favorite
const isFavorite = (id) => favoritesStore.isFavorite(id)

// Change map style
const changeStyle = (style) => {
  currentStyle.value = style
  addTileLayer(style)
}

// Watch for changes in bars
watch(() => props.bars, () => {
  addMarkers()
}, { deep: true })

// Watch for selected bar
watch(() => props.selectedBar, (bar) => {
  if (bar && map.value) {
    const lat = bar.latitude || 19.2452
    const lng = bar.longitude || -103.7005
    map.value.setView([lat, lng], 13, { animate: true })
  }
})

onMounted(() => {
  initMap()
})

onUnmounted(() => {
  if (map.value) {
    map.value.remove()
    map.value = null
  }
})
</script>

<style>
@import 'leaflet/dist/leaflet.css';

.map-wrapper {
  width: 100%;
  height: 100%;
  position: relative;
}

.leaflet-map {
  width: 100%;
  height: 100%;
  z-index: 1;
}

/* Custom pin styles */
.custom-pin {
  background: transparent !important;
  border: none !important;
}

.pin-content {
  background: #fff;
  border-radius: 20px;
  padding: 8px 14px;
  font-size: 14px;
  font-weight: 700;
  color: #222;
  box-shadow: 0 2px 8px rgba(0,0,0,0.18), 0 0 0 1px rgba(0,0,0,0.04);
  white-space: nowrap;
  cursor: pointer;
  transition: all 0.2s ease;
  text-align: center;
  min-width: 50px;
}

.pin-content:hover,
.pin-content.active {
  background: #222;
  color: #fff;
  transform: scale(1.1);
  box-shadow: 0 4px 12px rgba(0,0,0,0.25);
}

.pin-content.favorited::before {
  content: '♥ ';
  color: #ff385c;
}

/* Map popup styles */
.map-popup {
  padding: 4px;
  min-width: 180px;
}

.leaflet-popup-content-wrapper {
  border-radius: 12px;
  padding: 0;
  overflow: hidden;
}

.leaflet-popup-content {
  margin: 0;
  padding: 8px;
}

.leaflet-container a.leaflet-popup-close-button {
  display: none;
}

/* Map controls */
.map-style-toggle {
  position: absolute;
  bottom: 24px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  background: #fff;
  border-radius: 50px;
  box-shadow: 0 2px 12px rgba(0,0,0,0.15);
  overflow: hidden;
  padding: 4px;
  z-index: 1000;
}

.style-btn {
  padding: 10px 24px;
  font-size: 14px;
  font-weight: 500;
  border: none;
  border-radius: 50px;
  background: transparent;
  cursor: pointer;
  transition: all 0.2s ease;
  color: #717171;
}

.style-btn.active {
  background: #222;
  color: #fff;
}

.style-btn:hover:not(.active) {
  background: #f7f7f7;
  color: #222;
}

.map-info {
  position: absolute;
  top: 16px;
  left: 16px;
  background: rgba(255,255,255,0.95);
  padding: 8px 16px;
  border-radius: 8px;
  font-size: 13px;
  font-weight: 500;
  color: #222;
  z-index: 1000;
  display: flex;
  align-items: center;
  gap: 6px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}

.map-info i {
  color: #ff385c;
}

/* Leaflet control styles */
.leaflet-control-zoom {
  border: none !important;
  box-shadow: 0 2px 12px rgba(0,0,0,0.15) !important;
}

.leaflet-control-zoom a {
  width: 40px !important;
  height: 40px !important;
  line-height: 40px !important;
  font-size: 20px !important;
  color: #222 !important;
  border: none !important;
}

.leaflet-control-zoom a:hover {
  background: #f7f7f7 !important;
}
</style>
