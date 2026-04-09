<template>
  <div class="content-page">
    <div class="page-header">
      <div class="container">
        <router-link to="/" class="back-link">
          <i class="bi bi-arrow-left"></i>
          <span>Volver</span>
        </router-link>
        <h1>Trabaja con nosotros</h1>
      </div>
    </div>
    
    <div class="page-content">
      <div class="container">
        <section class="content-section">
          <h2>Únete al equipo</h2>
          <p>En Sabor Colima estamos creciendo y buscamos talento apasionado por la tecnología, la gastronomía y el servicio. Queremos gente que comparta nuestra visión de poner a Colima en el mapa gastronómico.</p>
        </section>
        
        <section class="content-section">
          <h2>Vacantes abiertas</h2>
          <div class="job-list">
            <div class="job-item">
              <h3>Desarrollador Full Stack</h3>
              <span class="job-type">Tiempo completo • Remoto</span>
              <p>Buscamos desarrollador con experiencia en Vue.js y Node.js para mejorar nuestra plataforma.</p>
              <button class="apply-btn">Aplicar</button>
            </div>
            <div class="job-item">
              <h3>Community Manager</h3>
              <span class="job-type">Tiempo completo • Colima Capital</span>
              <p>Encargado de gestionar redes sociales y comunicación con restaurantes afiliados.</p>
              <button class="apply-btn">Aplicar</button>
            </div>
            <div class="job-item">
              <h3>Representante de Ventas</h3>
              <span class="job-type">Tiempo completo • Manzanillo</span>
              <p>Responsable de captar nuevos restaurantes en la zona costa.</p>
              <button class="apply-btn">Aplicar</button>
            </div>
          </div>
        </section>
        
        <section class="content-section">
          <h2>Beneficios</h2>
          <ul class="benefits-list">
            <li><i class="bi bi-check-circle"></i> Horario flexible</li>
            <li><i class="bi bi-check-circle"></i> Trabajo remoto opcional</li>
            <li><i class="bi bi-check-circle"></i> Descuentos en restaurantes afiliados</li>
            <li><i class="bi bi-check-circle"></i> Ambiente creativo y dinámico</li>
            <li><i class="bi bi-check-circle"></i> Crecimiento profesional</li>
          </ul>
        </section>
        
        <section class="content-section">
          <h2>¿No ves tu puesto?</h2>
          <p>Envíanos tu CV a <a href="mailto:trabajo@saborcolima.com">trabajo@saborcolima.com</a> y cuéntanos por qué quieres unirte al equipo.</p>
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
}

.job-list {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.job-item {
  border: 1px solid #e8e8e8;
  border-radius: 10px;
  padding: 20px;
}

.job-item h3 {
  font-size: 17px;
  font-weight: 600;
  color: #1a1a2e;
  margin-bottom: 6px;
}

.job-type {
  font-size: 13px;
  color: #ff385c;
  font-weight: 500;
  display: block;
  margin-bottom: 10px;
}

.job-item p {
  font-size: 14px;
  color: #666;
  margin-bottom: 14px;
}

.apply-btn {
  background: #ff385c;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s;
}

.apply-btn:hover {
  background: #e31c5f;
}

.benefits-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.benefits-list li {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 0;
  font-size: 15px;
  color: #555;
  border-bottom: 1px solid #f0f0f0;
}

.benefits-list li:last-child {
  border-bottom: none;
}

.benefits-list i {
  color: #ff385c;
  font-size: 18px;
}

.content-section a {
  color: #ff385c;
  text-decoration: none;
  font-weight: 500;
}

.content-section a:hover {
  text-decoration: underline;
}

@media (max-width: 600px) {
  .page-header h1 {
    font-size: 26px;
  }
  
  .content-section {
    padding: 24px;
  }
}
</style>
