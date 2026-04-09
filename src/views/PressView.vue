<template>
  <div class="content-page">
    <div class="page-header">
      <div class="container">
        <router-link to="/" class="back-link">
          <i class="bi bi-arrow-left"></i>
          <span>Volver</span>
        </router-link>
        <h1>Prensa</h1>
      </div>
    </div>
    
    <div class="page-content">
      <div class="container">
        <section class="content-section">
          <h2>Kit de prensa</h2>
          <p>Descarga nuestros recursos oficiales: logotipos, fotos del equipo, capturas de la plataforma y más.</p>
          <button class="download-btn">
            <i class="bi bi-download"></i>
            Descargar kit de prensa
          </button>
        </section>
        
        <section class="content-section">
          <h2>Sobre Sabor Colima</h2>
          <div class="info-grid">
            <div class="info-item">
              <span class="label">Fundación</span>
              <span class="value">2023</span>
            </div>
            <div class="info-item">
              <span class="label">Sede</span>
              <span class="value">Colima, México</span>
            </div>
            <div class="info-item">
              <span class="label">Usuarios</span>
              <span class="value">50,000+</span>
            </div>
            <div class="info-item">
              <span class="label">Restaurantes</span>
              <span class="value">200+</span>
            </div>
          </div>
        </section>
        
        <section class="content-section">
          <h2>Contacto para medios</h2>
          <p>Para entrevistas, colaboraciones o solicitudes de información:</p>
          <a href="mailto:prensa@saborcolima.com" class="contact-link">
            <i class="bi bi-envelope"></i>
            prensa@saborcolima.com
          </a>
        </section>
        
        <section class="content-section">
          <h2>Últimas notas</h2>
          <div class="press-list">
            <div class="press-item">
              <span class="date">Enero 2024</span>
              <h4>Sabor Colima llega a los 200 restaurantes afiliados</h4>
              <p>La plataforma líder de gastronomía en el estado sigue creciendo.</p>
            </div>
            <div class="press-item">
              <span class="date">Octubre 2023</span>
              <h4>Reconocimiento al emprendimiento digital</h4>
              <p>Sabor Colima gana el premio al mejor startup turístico de la región.</p>
            </div>
          </div>
        </section>
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
  max-width: 800px;
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

.content-section {
  background: #fff;
  border-radius: 12px;
  padding: 30px;
  margin-bottom: 24px;
  border: 1px solid #e8e8e8;
}

.content-section h2 {
  font-size: 20px;
  font-weight: 700;
  color: #1a1a2e;
  margin-bottom: 16px;
}

.content-section p {
  font-size: 15px;
  color: #555;
  line-height: 1.7;
  margin-bottom: 16px;
}

.download-btn {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  background: #ff385c;
  color: #fff;
  border: none;
  padding: 14px 24px;
  border-radius: 10px;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s;
}

.download-btn:hover {
  background: #e31c5f;
}

.info-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
}

.info-item {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.label {
  font-size: 13px;
  color: #999;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.value {
  font-size: 18px;
  font-weight: 600;
  color: #1a1a2e;
}

.contact-link {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  color: #ff385c;
  text-decoration: none;
  font-size: 16px;
  font-weight: 500;
}

.contact-link:hover {
  text-decoration: underline;
}

.press-list {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.press-item {
  border-left: 3px solid #ff385c;
  padding-left: 16px;
}

.date {
  font-size: 13px;
  color: #ff385c;
  font-weight: 500;
}

.press-item h4 {
  font-size: 16px;
  font-weight: 600;
  color: #1a1a2e;
  margin: 6px 0 8px;
}

.press-item p {
  font-size: 14px;
  color: #666;
  margin: 0;
}

@media (max-width: 600px) {
  .page-header h1 {
    font-size: 26px;
  }
  
  .content-section {
    padding: 24px;
  }
  
  .info-grid {
    grid-template-columns: 1fr;
  }
}
</style>
