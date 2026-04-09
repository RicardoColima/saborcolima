<template>
  <div class="content-page">
    <div class="page-header">
      <div class="container">
        <router-link to="/" class="back-link">
          <i class="bi bi-arrow-left"></i>
          <span>Volver</span>
        </router-link>
        <h1>¿Quiénes somos?</h1>
      </div>
    </div>
    
    <div class="page-content">
      <div class="container">
        <section class="content-section">
          <h2>Nuestra historia</h2>
          <p>Sabor Colima nació en 2023 con una misión clara: conectar a los amantes de la buena comida con los mejores restaurantes y bares de Colima. Somos un equipo apasionado por la gastronomía local y el turismo.</p>
          <p>Creemos que cada rincón de nuestro estado tiene sabores únicos por descubrir, desde los mariscos frescos de Manzanillo hasta el café de Comala.</p>
        </section>
        
        <section class="content-section">
          <h2>Nuestra misión</h2>
          <p>Potenciar la gastronomía colimense, apoyando a restaurantes locales y brindando a los comensales la mejor experiencia para descubrir nuevos lugares.</p>
        </section>
        
        <section class="content-section">
          <h2>El equipo</h2>
          <p>Somos un equipo multidisciplinario de colimenses orgullosos de nuestra tierra. Desarrolladores, diseñadores y amantes de la buena comida trabajando juntos.</p>
        </section>
        
        <section class="content-section">
          <h2>¿Por qué Colima?</h2>
          <p>Colima es mucho más que su volcán. Es tierra de sabores intensos, tradiciones gastronómicas y una calidez humana única. Queremos que el mundo descubra lo que los locales ya sabemos.</p>
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
  margin-bottom: 12px;
}

.content-section p:last-child {
  margin-bottom: 0;
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
