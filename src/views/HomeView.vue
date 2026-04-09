<template>
  <div class="home-view">
    <!-- Hero Section - Modern Airbnb Style -->
    <section class="hero">
      <div class="hero-background">
        <img src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=1920" alt="Restaurant interior" class="hero-bg-img">
        <div class="hero-gradient"></div>
      </div>
      
      <div class="hero-content">
        <h1 class="hero-title">
          Descubre los mejores<br>
          <span class="gradient-text">bares y restaurantes</span><br>
          de Colima
        </h1>
        <p class="hero-subtitle">
          Desde mariscos frescos en Manzanillo hasta la tradición culinaria de Colima capital.
        </p>
        
        <!-- Airbnb-style Search Bar with Native Selects -->
        <div class="airbnb-search">
          <div class="search-bar-container">
            <!-- Location Select -->
            <div class="search-section location-section" v-click-outside="() => showLocationDropdown = false">
              <label>Ubicación</label>
              <div class="custom-select-trigger" @click="showLocationDropdown = !showLocationDropdown">
                <span :class="{ 'placeholder': !searchLocation }">{{ searchLocation || '¿A dónde vas?' }}</span>
                <i class="bi bi-chevron-down"></i>
              </div>
              <div v-if="showLocationDropdown" class="custom-dropdown">
                <div 
                  v-for="loc in locationsList" 
                  :key="loc" 
                  class="custom-dropdown-item"
                  :class="{ active: searchLocation === loc }"
                  @click="selectLocation(loc)"
                >
                  <i class="bi bi-geo-alt"></i>
                  <span>{{ loc }}</span>
                </div>
              </div>
            </div>
            
            <div class="search-divider"></div>
            
            <!-- Type Select -->
            <div class="search-section type-section" v-click-outside="() => showTypeDropdown = false">
              <label>Tipo</label>
              <div class="custom-select-trigger" @click="showTypeDropdown = !showTypeDropdown">
                <span :class="{ 'placeholder': !searchType }">{{ searchType || '¿Qué se te antoja?' }}</span>
                <i class="bi bi-chevron-down"></i>
              </div>
              <div v-if="showTypeDropdown" class="custom-dropdown">
                <div 
                  v-for="type in typesList" 
                  :key="type" 
                  class="custom-dropdown-item"
                  :class="{ active: searchType === type }"
                  @click="selectType(type)"
                >
                  <i class="bi bi-shop"></i>
                  <span>{{ type }}</span>
                </div>
              </div>
            </div>
            
            <div class="search-divider"></div>
            
            <!-- Price Select -->
            <div class="search-section price-section" v-click-outside="() => showPriceDropdown = false">
              <label>Precio</label>
              <div class="custom-select-trigger" @click="showPriceDropdown = !showPriceDropdown">
                <span :class="{ 'placeholder': !searchPrice }">{{ searchPriceLabel || 'Cualquier precio' }}</span>
                <i class="bi bi-chevron-down"></i>
              </div>
              <div v-if="showPriceDropdown" class="custom-dropdown">
                <div 
                  v-for="price in priceOptions" 
                  :key="price.value" 
                  class="custom-dropdown-item"
                  :class="{ active: searchPrice === price.value }"
                  @click="selectPrice(price)"
                >
                  <span class="price-label">{{ price.label }}</span>
                </div>
              </div>
            </div>
            
            <!-- Search Button -->
            <button class="airbnb-search-btn" @click="handleSearch">
              <i class="bi bi-search"></i>
              <span>Buscar</span>
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- Category Scroll -->
    <section class="category-scroll">
      <div class="category-container">
        <button 
          v-for="category in categories" 
          :key="category.name"
          class="category-item"
          @click="filterByType(category.filter)"
        >
          <div class="category-icon">
            <i :class="category.icon"></i>
          </div>
          <span class="category-name">{{ category.name }}</span>
        </button>
      </div>
    </section>

    <!-- Featured Section -->
    <section class="listings-section">
      <div class="section-header">
        <h2 class="section-title">Descubre lugares increíbles</h2>
        <div class="scroll-controls">
          <button class="scroll-btn" @click="scrollListings('left')">
            <i class="bi bi-chevron-left"></i>
          </button>
          <button class="scroll-btn" @click="scrollListings('right')">
            <i class="bi bi-chevron-right"></i>
          </button>
        </div>
      </div>
      
      <div class="listings-grid" ref="listingsContainer">
        <div 
          v-for="bar in allBars" 
          :key="bar.id"
          class="listing-item"
        >
          <BarCard :bar="bar" />
        </div>
      </div>
    </section>

    <!-- Locations Grid -->
    <section class="destinations-section">
      <div class="container-narrow">
        <h2 class="section-title-large">Explora por destino</h2>
        <div class="destinations-grid">
          <div 
            v-for="location in locations" 
            :key="location.name"
            class="destination-card"
            @click="filterByLocation(location.name)"
          >
            <img 
              :src="location.image" 
              :alt="location.name"
              loading="lazy"
              @error="handleDestImageError($event, location.name)"
            >
            <div class="destination-overlay">
              <h3>{{ location.name }}</h3>
              <p>{{ location.count }} lugares</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="cta-section">
      <div class="cta-container">
        <div class="cta-content">
          <h2>¿Tienes un restaurante?</h2>
          <p>Únete a Sabor Colima y llega a miles de comensales.</p>
          <button class="cta-btn">Más información</button>
        </div>
        <div class="cta-image">
          <img src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600" alt="Restaurant">
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { useBarsStore } from '@/stores/bars'
import BarCard from '@/components/cards/BarCard.vue'

const router = useRouter()
const barsStore = useBarsStore()

// Search state for Airbnb-style search
const searchLocation = ref('')
const searchType = ref('')
const searchPrice = ref('')
const searchPriceLabel = ref('')
const showLocationDropdown = ref(false)
const showTypeDropdown = ref(false)
const showPriceDropdown = ref(false)
const priceSliderValue = ref(0)
const priceSliderLabel = ref('Cualquier precio')

const locationsList = ['Colima Capital', 'Manzanillo', 'Comala', 'Villa de Álvarez', 'Tecomán', 'Coquimatlán', 'Minatitlán', 'Armería']
const typesList = ['Mexicana', 'Mariscos', 'Bar', 'Café', 'Pizza', 'Sushi', 'Hamburguesas', 'Italiana', 'Cortes', 'Desayunos', 'Vegana']

const pricePresets = [
  { value: '', label: 'Todos', range: [0, 4] },
  { value: '1', label: '$', range: [1, 1] },
  { value: '2', label: '$$', range: [2, 2] },
  { value: '3', label: '$$$', range: [3, 3] },
  { value: '4', label: '$$$$', range: [4, 4] }
]

const priceLabels = ['Cualquier precio', '$ Económico', '$$ Moderado', '$$$ Caro', '$$$$ Lujo']

const priceOptions = [
  { value: '', label: 'Cualquier precio' },
  { value: '1', label: '$ Económico' },
  { value: '2', label: '$$ Moderado' },
  { value: '3', label: '$$$ Caro' },
  { value: '4', label: '$$$$ Lujo' }
]

const updatePriceLabel = () => {
  const option = priceOptions.find(p => p.value === searchPrice.value)
  searchPriceLabel.value = option ? option.label : 'Cualquier precio'
}

const updatePriceFromSlider = () => {
  const value = priceSliderValue.value
  priceSliderLabel.value = priceLabels[value]
  if (value === 0) {
    searchPrice.value = ''
    searchPriceLabel.value = 'Cualquier precio'
  } else {
    searchPrice.value = String(value)
    searchPriceLabel.value = priceLabels[value]
  }
}

const selectPricePreset = (preset) => {
  searchPrice.value = preset.value
  searchPriceLabel.value = preset.label
  priceSliderValue.value = preset.range[0]
  priceSliderLabel.value = priceLabels[preset.range[0]]
  showPriceDropdown.value = false
}

const selectLocation = (loc) => {
  searchLocation.value = loc
  showLocationDropdown.value = false
}

const selectType = (type) => {
  searchType.value = type
  showTypeDropdown.value = false
}

const selectPrice = (price) => {
  searchPrice.value = price.value
  searchPriceLabel.value = price.label
  showPriceDropdown.value = false
}

const hideDropdownDelayed = (type) => {
  setTimeout(() => {
    if (type === 'location') showLocationDropdown.value = false
    if (type === 'type') showTypeDropdown.value = false
    if (type === 'price') showPriceDropdown.value = false
  }, 200)
}

const handleSearch = () => {
  // Apply filters to store
  barsStore.selectedLocation = searchLocation.value
  barsStore.selectedType = searchType.value
  barsStore.selectedPrice = searchPrice.value
  barsStore.searchQuery = ''
  router.push('/search')
}

const categories = [
  { name: 'Mariscos', icon: 'bi bi-water', filter: 'Mariscos' },
  { name: 'Mexicana', icon: 'bi bi-fire', filter: 'Mexicana' },
  { name: 'Bares', icon: 'bi bi-cup-straw', filter: 'Bar' },
  { name: 'Cafés', icon: 'bi bi-cup-hot', filter: 'Café' },
  { name: 'Pizza', icon: 'bi bi-circle-square', filter: 'Pizza' },
  { name: 'Sushi', icon: 'bi bi-egg-fried', filter: 'Sushi' },
  { name: 'Hamburguesas', icon: 'bi bi-c-circle', filter: 'Hamburguesas' },
  { name: 'Cortes', icon: 'bi bi-triangle', filter: 'Cortes' },
  { name: 'Desayunos', icon: 'bi bi-sun', filter: 'Desayunos' },
  { name: 'Vegana', icon: 'bi bi-flower1', filter: 'Vegana' },
  { name: 'Italiana', icon: 'bi bi-suit-heart', filter: 'Italiana' }
]

const allBars = computed(() => barsStore.bars)

const listingsContainer = ref(null)

const scrollListings = (direction) => {
  if (listingsContainer.value) {
    const scrollAmount = 300
    listingsContainer.value.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth'
    })
  }
}

const locations = [
  { 
    name: 'Colima Capital', 
    count: 10,
    image: 'https://images.unsplash.com/photo-1595846519845-68e298c2edd8?w=400'
  },
  { 
    name: 'Manzanillo', 
    count: 4,
    image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400'
  },
  { 
    name: 'Comala', 
    count: 2,
    image: 'https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?w=400'
  },
  { 
    name: 'Villa de Álvarez', 
    count: 2,
    image: 'https://images.unsplash.com/photo-1518182170546-0766bd6f6a56?w=400'
  },
  { 
    name: 'Tecomán', 
    count: 1,
    image: 'https://images.unsplash.com/photo-1560347876-aeef00b57923?w=400'
  },
  { 
    name: 'Coquimatlán', 
    count: 1,
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400'
  },
  { 
    name: 'Minatitlán', 
    count: 1,
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400'
  },
  { 
    name: 'Armería', 
    count: 1,
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400'
  }
]

const filterByType = (type) => {
  barsStore.selectedType = type
  barsStore.selectedLocation = ''
  barsStore.searchQuery = ''
  router.push('/search')
}

const filterByLocation = (location) => {
  barsStore.selectedLocation = location
  barsStore.selectedType = ''
  barsStore.searchQuery = ''
  router.push('/search')
}

const handleDestImageError = (e) => {
  e.target.src = 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400'
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
/* Hero Section - Modern Airbnb Style */
.hero {
  position: relative;
  min-height: 85vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.hero-background {
  position: absolute;
  inset: 0;
  z-index: 0;
}

.hero-bg-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.hero-gradient {
  position: absolute;
  inset: 0;
  background: linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.5) 50%, rgba(0,0,0,0.7) 100%);
}

.hero-content {
  position: relative;
  z-index: 1;
  text-align: center;
  padding: 0 24px;
  max-width: 900px;
}

.hero-title {
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 700;
  color: #fff;
  margin-bottom: 1rem;
  line-height: 1.1;
  letter-spacing: -0.02em;
}

.gradient-text {
  background: linear-gradient(135deg, #ff385c 0%, #e31c5f 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero-subtitle {
  font-size: 1.25rem;
  color: rgba(255,255,255,0.9);
  margin-bottom: 3rem;
  max-width: 500px;
  margin-left: auto;
  margin-right: auto;
}

/* Airbnb-style Search Bar */
.airbnb-search {
  margin-top: 2.5rem;
  display: flex;
  justify-content: center;
  position: relative;
  z-index: 100;
}

.search-bar-container {
  display: flex;
  align-items: center;
  background: #fff;
  border-radius: 50px;
  box-shadow: 0 6px 20px rgba(0,0,0,0.2);
  padding: 8px;
  max-width: 800px;
  width: 100%;
}

.search-section {
  flex: 1;
  padding: 8px 24px;
  cursor: pointer;
  border-radius: 50px;
  transition: background-color 0.2s ease;
  position: relative;
  text-align: left;
  z-index: 10;
}

.search-section:has(.custom-dropdown) {
  z-index: 1000;
}

.search-section:hover {
  background-color: #f7f7f7;
}

.search-section label {
  display: block;
  font-size: 12px;
  font-weight: 700;
  color: #222;
  margin-bottom: 4px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

/* Custom Select Trigger */
.custom-select-trigger {
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  padding: 4px 0;
  font-size: 15px;
  font-weight: 500;
  color: #222;
  transition: all 0.2s ease;
  background: transparent;
  min-height: 24px;
}

.custom-select-trigger:hover {
  color: #ff385c;
}

.custom-select-trigger span {
  background: transparent;
  flex: 1;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.custom-select-trigger .placeholder {
  color: #717171;
  font-weight: 400;
}

.custom-select-trigger i {
  font-size: 14px;
  color: #717171;
  margin-left: 8px;
  transition: transform 0.2s ease;
}

.custom-select-trigger:hover i {
  color: #ff385c;
}

/* Custom Dropdown */
.custom-dropdown {
  position: absolute;
  top: calc(100% + 8px);
  left: 0;
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 4px 20px rgba(0,0,0,0.15);
  padding: 8px 0;
  min-width: 280px;
  z-index: 9999;
  animation: dropdownFadeIn 0.2s ease;
  max-height: 320px;
  overflow-y: auto;
}

@keyframes dropdownFadeIn {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.custom-dropdown-item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 16px;
  cursor: pointer;
  transition: all 0.15s ease;
  font-size: 14px;
  color: #222;
}

.custom-dropdown-item:hover {
  background-color: #f7f7f7;
}

.custom-dropdown-item.active {
  background-color: #fff0f2;
  color: #ff385c;
  font-weight: 500;
}

.custom-dropdown-item i {
  font-size: 18px;
  color: #ff385c;
}

.custom-dropdown-item.active i {
  color: #ff385c;
}

.price-label {
  font-weight: 500;
}

.search-divider {
  width: 1px;
  height: 32px;
  background: #ddd;
}

/* Dropdown Menu */
.dropdown-menu {
  position: absolute;
  top: calc(100% + 12px);
  left: 0;
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 4px 20px rgba(0,0,0,0.15);
  padding: 16px;
  min-width: 280px;
  z-index: 1000;
  animation: dropdownFadeIn 0.2s ease;
}

@keyframes dropdownFadeIn {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.dropdown-title {
  font-size: 14px;
  font-weight: 600;
  color: #222;
  margin-bottom: 12px;
  padding-bottom: 8px;
  border-bottom: 1px solid #eee;
}

.dropdown-item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 10px 12px;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.2s ease;
}

.dropdown-item:hover {
  background-color: #f7f7f7;
}

.dropdown-item.active {
  background-color: #fff8f8;
}

.dropdown-item i {
  color: #ff385c;
  font-size: 18px;
}

.dropdown-item span {
  font-size: 14px;
  color: #222;
}

/* Price Slider Styles */
.price-dropdown {
  min-width: 320px;
}

.price-slider-container {
  padding: 8px 0;
}

.price-display {
  font-size: 22px;
  font-weight: 600;
  color: #222;
  text-align: center;
  margin-bottom: 20px;
}

.slider-wrapper {
  padding: 0 8px;
}

.price-slider {
  width: 100%;
  height: 6px;
  border-radius: 3px;
  background: linear-gradient(to right, 
    #ddd 0%, #ddd 20%,
    #ff385c 20%, #ff385c 20%,
    #ddd 20%, #ddd 100%
  );
  outline: none;
  -webkit-appearance: none;
  appearance: none;
  margin-bottom: 8px;
}

.price-slider::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background: #fff;
  border: 2px solid #ff385c;
  cursor: pointer;
  box-shadow: 0 2px 6px rgba(0,0,0,0.2);
  transition: transform 0.1s ease;
}

.price-slider::-webkit-slider-thumb:hover {
  transform: scale(1.1);
}

.price-slider::-moz-range-thumb {
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background: #fff;
  border: 2px solid #ff385c;
  cursor: pointer;
  box-shadow: 0 2px 6px rgba(0,0,0,0.2);
}

.slider-labels {
  display: flex;
  justify-content: space-between;
  font-size: 13px;
  color: #717171;
  margin-top: 8px;
  padding: 0 4px;
}

.slider-labels span {
  font-weight: 500;
}

.price-presets {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 20px;
  padding-top: 16px;
  border-top: 1px solid #eee;
}

.preset-btn {
  padding: 8px 16px;
  border-radius: 20px;
  border: 1px solid #ddd;
  background: #fff;
  font-size: 13px;
  font-weight: 500;
  color: #222;
  cursor: pointer;
  transition: all 0.2s ease;
}

.preset-btn:hover {
  border-color: #222;
}

.preset-btn.active {
  background: #222;
  color: #fff;
  border-color: #222;
}

/* Search Button */
.airbnb-search-btn {
  display: flex;
  align-items: center;
  gap: 8px;
  background: linear-gradient(to right, #e61e4d 0%, #e31c5f 50%, #d70466 100%);
  border: none;
  border-radius: 50px;
  padding: 14px 24px;
  color: #fff;
  font-weight: 600;
  font-size: 16px;
  cursor: pointer;
  transition: transform 0.1s ease, box-shadow 0.2s ease;
  white-space: nowrap;
}

.airbnb-search-btn:hover {
  transform: scale(1.02);
  box-shadow: 0 4px 12px rgba(225, 28, 95, 0.4);
}

.airbnb-search-btn i {
  font-size: 18px;
}

/* Category Scroll */
.category-scroll {
  padding: 32px 0;
  border-bottom: 1px solid #ebebeb;
}

.category-container {
  max-width: 1760px;
  margin: 0 auto;
  padding: 0 24px;
  display: flex;
  gap: 48px;
  overflow-x: auto;
  scrollbar-width: none;
}

.category-container::-webkit-scrollbar {
  display: none;
}

.category-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  background: none;
  border: none;
  cursor: pointer;
  flex-shrink: 0;
  opacity: 0.6;
  transition: opacity 0.2s ease;
  padding-bottom: 8px;
  border-bottom: 2px solid transparent;
}

.category-item:hover,
.category-item:focus {
  opacity: 1;
  border-bottom-color: #ddd;
}

.category-icon {
  font-size: 24px;
  color: #222;
}

.category-name {
  font-size: 14px;
  font-weight: 500;
  color: #222;
  white-space: nowrap;
}

/* Listings Section */
.listings-section {
  padding: 48px 24px;
  max-width: 1760px;
  margin: 0 auto;
}

.section-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
}

.section-title {
  font-size: 22px;
  font-weight: 600;
  color: #222;
}

.scroll-controls {
  display: flex;
  gap: 8px;
}

.scroll-btn {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  border: 1px solid #ddd;
  background: #fff;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
}

.scroll-btn:hover {
  border-color: #222;
  transform: scale(1.05);
}

.listings-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 24px;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none;
}

.listings-grid::-webkit-scrollbar {
  display: none;
}

.listing-item {
  scroll-snap-align: start;
}

/* Destinations Section */
.destinations-section {
  padding: 48px 24px;
  background: #f7f7f7;
}

.container-narrow {
  max-width: 1200px;
  margin: 0 auto;
}

.section-title-large {
  font-size: 32px;
  font-weight: 600;
  color: #222;
  margin-bottom: 32px;
}

.destinations-grid {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 16px;
}

.destination-card {
  position: relative;
  border-radius: 12px;
  overflow: hidden;
  cursor: pointer;
  aspect-ratio: 3 / 4;
}

.destination-card img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.destination-card:hover img {
  transform: scale(1.05);
}

.destination-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 60%);
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 24px;
  color: #fff;
}

.destination-overlay h3 {
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 4px;
}

.destination-overlay p {
  font-size: 15px;
  opacity: 0.9;
}

/* CTA Section */
.cta-section {
  padding: 48px 24px;
}

.cta-container {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 48px;
  align-items: center;
  background: #f7f7f7;
  border-radius: 16px;
  overflow: hidden;
}

.cta-content {
  padding: 48px;
}

.cta-content h2 {
  font-size: 32px;
  font-weight: 600;
  color: #222;
  margin-bottom: 16px;
}

.cta-content p {
  font-size: 18px;
  color: #717171;
  margin-bottom: 24px;
}

.cta-btn {
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

.cta-btn:hover {
  transform: scale(1.02);
}

.cta-image {
  height: 100%;
  min-height: 300px;
}

.cta-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* Responsive */
@media (max-width: 1200px) {
  .destinations-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (max-width: 950px) {
  .cta-container {
    grid-template-columns: 1fr;
  }
  
  .cta-image {
    order: -1;
    min-height: 200px;
  }
}

@media (max-width: 744px) {
  .hero-title {
    font-size: 2rem;
  }
  
  .hero-subtitle {
    font-size: 1rem;
  }
  
  .destinations-grid {
    grid-template-columns: 1fr;
  }
  
  .listings-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  
  /* Responsive search bar */
  .search-bar-container {
    flex-direction: column;
    border-radius: 24px;
    padding: 16px;
  }
  
  .search-divider {
    width: 100%;
    height: 1px;
    margin: 4px 0;
  }
  
  .search-section {
    width: 100%;
    padding: 12px 16px;
  }
  
  .airbnb-search-btn {
    width: 100%;
    justify-content: center;
    margin-top: 8px;
  }
  
  .dropdown-menu {
    position: fixed;
    top: auto;
    left: 16px;
    right: 16px;
    bottom: 16px;
    min-width: auto;
    max-height: 50vh;
    overflow-y: auto;
  }
}

@media (max-width: 550px) {
  .listings-grid {
    grid-template-columns: 1fr;
  }
  
  .section-title-large {
    font-size: 24px;
  }
}
</style>
