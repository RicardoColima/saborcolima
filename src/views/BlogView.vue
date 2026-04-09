<template>
  <div class="content-page">
    <div class="page-header">
      <div class="container">
        <router-link to="/" class="back-link">
          <i class="bi bi-arrow-left"></i>
          <span>Volver</span>
        </router-link>
        <h1>Blog</h1>
        <p>Historias, guías y noticias de la escena gastronómica de Colima</p>
      </div>
    </div>
    
    <div class="page-content">
      <div class="container">
        <div class="blog-grid">
          <article class="blog-card">
            <div class="blog-image" style="background: linear-gradient(135deg, #ff385c 0%, #e31c5f 100%);">
              <i class="bi bi-cup-hot"></i>
            </div>
            <div class="blog-content">
              <span class="category">Guía</span>
              <h3>Los mejores cafés de Comala para un fin de semana</h3>
              <p>Descubre los rincones más acogedores del Pueblo Mágico para disfrutar de un buen café.</p>
              <span class="date">15 de enero, 2024</span>
            </div>
          </article>
          
          <article class="blog-card">
            <div class="blog-image" style="background: linear-gradient(135deg, #0ea5e9 0%, #0284c7 100%);">
              <i class="bi bi-water"></i>
            </div>
            <div class="blog-content">
              <span class="category">Mariscos</span>
              <h3>Donde comer los mejores pescados en Manzanillo</h3>
              <p>Guía definitiva de restaurantes de mariscos en la costa colimense.</p>
              <span class="date">10 de enero, 2024</span>
            </div>
          </article>
          
          <article class="blog-card">
            <div class="blog-image" style="background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%);">
              <i class="bi bi-sun"></i>
            </div>
            <div class="blog-content">
              <span class="category">Desayunos</span>
              <h3>Desayunos imperdibles en Colima Capital</h3>
              <p>Los mejores lugares para empezar tu día con energía y sabor.</p>
              <span class="date">5 de enero, 2024</span>
            </div>
          </article>
          
          <article class="blog-card">
            <div class="blog-image" style="background: linear-gradient(135deg, #10b981 0%, #059669 100%);">
              <i class="bi bi-leaf"></i>
            </div>
            <div class="blog-content">
              <span class="category">Tendencias</span>
              <h3>La gastronomía sostenible llega a Colima</h3>
              <p>Restaurantes que apuestan por ingredientes locales y prácticas responsables.</p>
              <span class="date">28 de diciembre, 2023</span>
            </div>
          </article>
          
          <article class="blog-card">
            <div class="blog-image" style="background: linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%);">
              <i class="bi bi-moon-stars"></i>
            </div>
            <div class="blog-content">
              <span class="category">Vida nocturna</span>
              <h3>Bares para una noche perfecta en Villa de Álvarez</h3>
              <p>Cocteles, música y ambiente en el corazón de la zona metropolitana.</p>
              <span class="date">20 de diciembre, 2023</span>
            </div>
          </article>
          
          <article class="blog-card">
            <div class="blog-image" style="background: linear-gradient(135deg, #ec4899 0%, #db2777 100%);">
              <i class="bi bi-heart"></i>
            </div>
            <div class="blog-content">
              <span class="category">Romántico</span>
              <h3>Cenas románticas para San Valentín</h3>
              <p>Los restaurantes más románticos de Colima para una cita inolvidable.</p>
              <span class="date">12 de diciembre, 2023</span>
            </div>
          </article>
        </div>
        
        <div class="load-more">
          <button class="load-btn">Cargar más artículos</button>
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
  margin-bottom: 8px;
}

.page-header p {
  font-size: 16px;
  opacity: 0.9;
}

.page-content {
  padding: 40px 0 80px;
}

.blog-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  margin-bottom: 40px;
}

.blog-card {
  background: #fff;
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid #e8e8e8;
  transition: box-shadow 0.2s, transform 0.2s;
}

.blog-card:hover {
  box-shadow: 0 8px 30px rgba(0,0,0,0.1);
  transform: translateY(-4px);
}

.blog-image {
  height: 160px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.blog-image i {
  font-size: 48px;
  color: #fff;
  opacity: 0.9;
}

.blog-content {
  padding: 20px;
}

.category {
  display: inline-block;
  background: #fff0f2;
  color: #ff385c;
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 12px;
  font-weight: 600;
  margin-bottom: 12px;
}

.blog-content h3 {
  font-size: 17px;
  font-weight: 600;
  color: #1a1a2e;
  margin-bottom: 10px;
  line-height: 1.4;
}

.blog-content p {
  font-size: 14px;
  color: #666;
  line-height: 1.6;
  margin-bottom: 12px;
}

.date {
  font-size: 13px;
  color: #999;
}

.load-more {
  text-align: center;
}

.load-btn {
  background: transparent;
  color: #ff385c;
  border: 2px solid #ff385c;
  padding: 14px 32px;
  border-radius: 10px;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
}

.load-btn:hover {
  background: #ff385c;
  color: #fff;
}

@media (max-width: 900px) {
  .blog-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 600px) {
  .page-header h1 {
    font-size: 26px;
  }
  
  .blog-grid {
    grid-template-columns: 1fr;
  }
}
</style>
