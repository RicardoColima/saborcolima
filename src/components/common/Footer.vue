<template>
  <footer class="footer">
    <!-- Main Footer -->
    <div class="footer-main">
      <div class="container">
        <div class="footer-grid">
          <!-- Brand Column -->
          <div class="brand-col">
            <div class="brand-header">
              <i class="bi bi-cup-hot-fill brand-icon"></i>
              <span class="brand-text">Sabor Colima</span>
            </div>
            <p class="brand-desc">
              Descubre los mejores bares y restaurantes del estado de Colima. 
              Desde mariscos frescos en Manzanillo hasta la tradición culinaria de Colima capital.
            </p>
            <div class="social-links">
              <a href="#" class="social-link" aria-label="Facebook" @click.prevent="showSocial('Facebook')">
                <i class="bi bi-facebook"></i>
              </a>
              <a href="#" class="social-link" aria-label="Instagram" @click.prevent="showSocial('Instagram')">
                <i class="bi bi-instagram"></i>
              </a>
              <a href="#" class="social-link" aria-label="Twitter" @click.prevent="showSocial('Twitter')">
                <i class="bi bi-twitter-x"></i>
              </a>
              <a href="#" class="social-link" aria-label="YouTube" @click.prevent="showSocial('YouTube')">
                <i class="bi bi-youtube"></i>
              </a>
            </div>
            
            <!-- App Download -->
            <div class="app-download">
              <p class="app-text">Descarga la app</p>
              <div class="app-buttons">
                <button class="app-btn" @click="showAppStore('App Store')">
                  <i class="bi bi-apple"></i>
                  <span>App Store</span>
                </button>
                <button class="app-btn" @click="showAppStore('Play Store')">
                  <i class="bi bi-google-play"></i>
                  <span>Play Store</span>
                </button>
              </div>
            </div>
          </div>

          <!-- Links Columns -->
          <div class="links-col">
            <h5 class="footer-title">Explorar</h5>
            <ul class="footer-links">
              <li><router-link to="/" @click="scrollToTop">Inicio</router-link></li>
              <li><router-link to="/search" @click="scrollToTop">Restaurantes</router-link></li>
              <li><router-link to="/search" @click="scrollToTop">Bares</router-link></li>
              <li><router-link to="/favorites" @click="scrollToTop">Favoritos</router-link></li>
              <li><router-link to="/map" @click="scrollToTop">Mapa interactivo</router-link></li>
            </ul>
          </div>

          <div class="links-col">
            <h5 class="footer-title">Ciudades populares</h5>
            <ul class="footer-links">
              <li><a href="#" @click.prevent="filterByLocation('Colima Capital')">Colima Capital</a></li>
              <li><a href="#" @click.prevent="filterByLocation('Manzanillo')">Manzanillo</a></li>
              <li><a href="#" @click.prevent="filterByLocation('Comala')">Comala</a></li>
              <li><a href="#" @click.prevent="filterByLocation('Villa de Álvarez')">Villa de Álvarez</a></li>
              <li><a href="#" @click.prevent="filterByLocation('Tecomán')">Tecomán</a></li>
              <li><a href="#" @click.prevent="filterByLocation('Coquimatlán')">Coquimatlán</a></li>
            </ul>
          </div>

          <div class="links-col">
            <h5 class="footer-title">Categorías</h5>
            <ul class="footer-links">
              <li><a href="#" @click.prevent="filterByType('Mariscos')">Mariscos</a></li>
              <li><a href="#" @click.prevent="filterByType('Mexicana')">Mexicana</a></li>
              <li><a href="#" @click.prevent="filterByType('Bar')">Bares</a></li>
              <li><a href="#" @click.prevent="filterByType('Café')">Cafés</a></li>
              <li><a href="#" @click.prevent="filterByType('Pizza')">Pizza</a></li>
              <li><a href="#" @click.prevent="filterByType('Sushi')">Sushi</a></li>
              <li><a href="#" @click.prevent="filterByType('Hamburguesas')">Hamburguesas</a></li>
            </ul>
          </div>

          <div class="links-col">
            <h5 class="footer-title">Sobre nosotros</h5>
            <ul class="footer-links">
              <li><router-link to="/about" @click="scrollToTop">¿Quiénes somos?</router-link></li>
              <li><router-link to="/careers" @click="scrollToTop">Trabaja con nosotros</router-link></li>
              <li><router-link to="/press" @click="scrollToTop">Prensa</router-link></li>
              <li><router-link to="/blog" @click="scrollToTop">Blog</router-link></li>
            </ul>
            <h5 class="footer-title mt-4">Legal</h5>
            <ul class="footer-links">
              <li><router-link to="/terms" @click="scrollToTop">Términos</router-link></li>
              <li><router-link to="/privacy" @click="scrollToTop">Privacidad</router-link></li>
              <li><router-link to="/cookies" @click="scrollToTop">Cookies</router-link></li>
              <li><router-link to="/contact" @click="scrollToTop">Contacto</router-link></li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <!-- Footer Bottom -->
    <div class="footer-bottom-bar">
      <div class="container">
        <div class="footer-bottom-content">
          <div class="copyright-section">
            <p class="copyright">© 2024 Sabor Colima, Inc.</p>
            <span class="divider">·</span>
            <router-link to="/privacy" class="footer-link">Privacidad</router-link>
            <span class="divider">·</span>
            <router-link to="/terms" class="footer-link">Términos</router-link>
            <span class="divider">·</span>
            <router-link to="/sitemap" class="footer-link">Mapa del sitio</router-link>
          </div>
          
          <div class="language-currency">
            <button class="lang-btn" @click="showLanguage">
              <i class="bi bi-globe"></i>
              <span>Español (MX)</span>
            </button>
            <button class="currency-btn" @click="showCurrency">
              <i class="bi bi-currency-dollar"></i>
              <span>MXN</span>
            </button>
          </div>
          
          <p class="made-with">
            Hecho con <i class="bi bi-heart-fill"></i> en Colima, México
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { useBarsStore } from '@/stores/bars'

const router = useRouter()
const barsStore = useBarsStore()

const filterByLocation = (location) => {
  barsStore.selectedLocation = location
  barsStore.selectedType = ''
  barsStore.selectedPrice = ''
  barsStore.selectedRating = ''
  barsStore.searchQuery = ''
  router.push('/search')
}

const filterByType = (type) => {
  barsStore.selectedType = type
  barsStore.selectedLocation = ''
  barsStore.selectedPrice = ''
  barsStore.selectedRating = ''
  barsStore.searchQuery = ''
  router.push('/search')
}

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

const showComingSoon = () => {
  alert('Próximamente disponible')
}

const showSocial = (platform) => {
  alert(`Síguenos en ${platform} - próximamente`)
}

const showAppStore = (store) => {
  alert(`Descarga en ${store} - próximamente`)
}

const showLanguage = () => {
  alert('Selector de idioma - próximamente')
}

const showCurrency = () => {
  alert('Selector de moneda - próximamente')
}
</script>

<style scoped>
.footer {
  background-color: #f7f7f7;
  border-top: 1px solid #ddd;
  color: #222;
}

/* Main Footer */
.footer-main {
  padding: 48px 0 32px;
}

.container {
  max-width: 1320px;
  margin: 0 auto;
  padding: 0 24px;
}

.footer-grid {
  display: grid;
  grid-template-columns: 2fr repeat(4, 1fr);
  gap: 32px;
}

/* Brand Column */
.brand-col {
  padding-right: 48px;
}

.brand-header {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 16px;
}

.brand-icon {
  font-size: 28px;
  color: #ff385c;
}

.brand-text {
  font-weight: 700;
  font-size: 20px;
  color: #222;
}

.brand-desc {
  color: #717171;
  font-size: 14px;
  line-height: 1.6;
  margin-bottom: 20px;
}

.social-links {
  display: flex;
  gap: 16px;
  margin-bottom: 24px;
}

.social-link {
  color: #222;
  font-size: 20px;
  transition: color 0.2s ease, transform 0.2s ease;
}

.social-link:hover {
  color: #ff385c;
  transform: scale(1.1);
}

/* App Download */
.app-download {
  margin-top: 16px;
}

.app-text {
  font-size: 12px;
  font-weight: 600;
  color: #222;
  margin-bottom: 8px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.app-buttons {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
}

.app-btn {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 12px;
  background: #222;
  color: #fff;
  border: none;
  border-radius: 6px;
  font-size: 13px;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s ease;
}

.app-btn:hover {
  background: #000;
}

.app-btn i {
  font-size: 16px;
}

/* Links Columns */
.links-col {
  min-width: 0;
}

.footer-title {
  font-weight: 600;
  font-size: 14px;
  margin-bottom: 16px;
  color: #222;
}

.mt-4 {
  margin-top: 24px;
}

.footer-links {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-links li {
  margin-bottom: 12px;
}

.footer-links a {
  color: #717171;
  text-decoration: none;
  font-size: 14px;
  transition: color 0.2s ease, text-decoration 0.2s ease;
  display: inline-block;
}

.footer-links a:hover {
  color: #222;
  text-decoration: underline;
}

/* Footer Bottom Bar */
.footer-bottom-bar {
  border-top: 1px solid #ddd;
  padding: 24px 0;
}

.footer-bottom-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 16px;
}

.copyright-section {
  display: flex;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;
}

.copyright {
  font-size: 14px;
  color: #222;
  margin: 0;
}

.divider {
  color: #717171;
}

.footer-link {
  color: #717171;
  text-decoration: none;
  font-size: 14px;
  transition: text-decoration 0.2s ease;
}

.footer-link:hover {
  color: #222;
  text-decoration: underline;
}

.language-currency {
  display: flex;
  gap: 16px;
}

.lang-btn,
.currency-btn {
  display: flex;
  align-items: center;
  gap: 8px;
  background: none;
  border: none;
  font-size: 14px;
  color: #222;
  font-weight: 500;
  cursor: pointer;
  text-decoration: underline;
  transition: color 0.2s ease;
}

.lang-btn:hover,
.currency-btn:hover {
  color: #000;
}

.made-with {
  font-size: 14px;
  color: #717171;
  display: flex;
  align-items: center;
  gap: 4px;
  margin: 0;
}

.made-with i {
  color: #ff385c;
}

/* Responsive */
@media (max-width: 1127px) {
  .footer-grid {
    grid-template-columns: repeat(3, 1fr);
  }
  
  .brand-col {
    grid-column: 1 / -1;
    padding-right: 0;
    margin-bottom: 24px;
  }
  
  .footer-bottom-content {
    flex-direction: column;
    text-align: center;
  }
  
  .copyright-section {
    justify-content: center;
  }
}

@media (max-width: 744px) {
  .footer-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 24px;
  }
  
  .brand-col {
    grid-column: 1 / -1;
  }
  
  .app-buttons {
    justify-content: center;
  }
  
  .language-currency {
    order: -1;
    width: 100%;
    justify-content: center;
  }
}

@media (max-width: 550px) {
  .footer-grid {
    grid-template-columns: 1fr;
  }
  
  .links-col {
    border-top: 1px solid #ddd;
    padding-top: 24px;
  }
  
  .links-col:first-of-type {
    border-top: none;
    padding-top: 0;
  }
  
  .footer-links {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 8px;
  }
  
  .footer-links li {
    margin-bottom: 4px;
  }
}
</style>
