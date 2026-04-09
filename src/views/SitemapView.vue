<template>
  <div class="content-page">
    <div class="page-header">
      <div class="container">
        <router-link to="/" class="back-link">
          <i class="bi bi-arrow-left"></i>
          <span>Volver</span>
        </router-link>
        <h1>Mapa del sitio</h1>
      </div>
    </div>
    
    <div class="page-content">
      <div class="container">
        <div class="sitemap-grid">
          <section class="sitemap-section">
            <h2>Principal</h2>
            <ul>
              <li><router-link to="/">Inicio</router-link></li>
              <li><router-link to="/search">Explorar restaurantes</router-link></li>
              <li><router-link to="/favorites">Mis favoritos</router-link></li>
              <li><router-link to="/map">Mapa interactivo</router-link></li>
            </ul>
          </section>
          
          <section class="sitemap-section">
            <h2>Cuenta</h2>
            <ul>
              <li><router-link to="/register">Crear cuenta</router-link></li>
              <li><router-link to="/login">Iniciar sesión</router-link></li>
              <li><router-link to="/help">Centro de ayuda</router-link></li>
            </ul>
          </section>
          
          <section class="sitemap-section">
            <h2>Para restaurantes</h2>
            <ul>
              <li><router-link to="/business">Registra tu restaurante</router-link></li>
              <li><router-link to="/business">Planes y precios</router-link></li>
              <li><router-link to="/contact">Contacto comercial</router-link></li>
            </ul>
          </section>
          
          <section class="sitemap-section">
            <h2>Sobre nosotros</h2>
            <ul>
              <li><router-link to="/about">¿Quiénes somos?</router-link></li>
              <li><router-link to="/careers">Trabaja con nosotros</router-link></li>
              <li><router-link to="/press">Prensa</router-link></li>
              <li><router-link to="/blog">Blog</router-link></li>
            </ul>
          </section>
          
          <section class="sitemap-section">
            <h2>Legal</h2>
            <ul>
              <li><router-link to="/terms">Términos de servicio</router-link></li>
              <li><router-link to="/privacy">Política de privacidad</router-link></li>
              <li><router-link to="/cookies">Política de cookies</router-link></li>
            </ul>
          </section>
          
          <section class="sitemap-section">
            <h2>Contacto</h2>
            <ul>
              <li><router-link to="/contact">Formulario de contacto</router-link></li>
              <li><router-link to="/help">Preguntas frecuentes</router-link></li>
              <li><a href="mailto:hola@saborcolima.com">hola@saborcolima.com</a></li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.content-page {
  min-height: 100vh;
  background: #f8f9fa;
}

.page-header {
  background: #ff385c;
  padding: 50px 24px 40px;
  color: #fff;
}

.container {
  max-width: 1000px;
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
  margin-bottom: 20px;
  transition: color 0.2s;
}

.back-link:hover {
  color: #fff;
}

.page-header h1 {
  font-size: 32px;
  font-weight: 700;
}

.page-content {
  padding: 40px 0 80px;
}

.sitemap-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

.sitemap-section {
  background: #fff;
  border-radius: 12px;
  padding: 24px;
  border: 1px solid #e8e8e8;
}

.sitemap-section h2 {
  font-size: 16px;
  font-weight: 700;
  color: #1a1a2e;
  margin-bottom: 16px;
  padding-bottom: 12px;
  border-bottom: 2px solid #ff385c;
}

.sitemap-section ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.sitemap-section li {
  margin-bottom: 10px;
}

.sitemap-section a {
  color: #555;
  text-decoration: none;
  font-size: 14px;
  transition: color 0.2s;
  display: block;
  padding: 4px 0;
}

.sitemap-section a:hover {
  color: #ff385c;
}

@media (max-width: 900px) {
  .sitemap-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 600px) {
  .page-header h1 {
    font-size: 26px;
  }
  
  .sitemap-grid {
    grid-template-columns: 1fr;
  }
}
</style>
