<template>
  <div class="content-page">
    <div class="page-header">
      <div class="container">
        <router-link to="/" class="back-link">
          <i class="bi bi-arrow-left"></i>
          <span>Volver</span>
        </router-link>
        <h1>Política de privacidad</h1>
      </div>
    </div>
    
    <div class="page-content">
      <div class="container">
        <section class="content-section">
          <h2>1. Información que recopilamos</h2>
          <p>En Sabor Colima recopilamos la siguiente información:</p>
          <ul>
            <li><strong>Información de cuenta:</strong> nombre, correo electrónico, teléfono</li>
            <li><strong>Información de uso:</strong> búsquedas, restaurantes visitados, reseñas</li>
            <li><strong>Información de ubicación:</strong> municipio seleccionado para búsquedas</li>
            <li><strong>Información de dispositivo:</strong> tipo de navegador, sistema operativo</li>
          </ul>
        </section>
        
        <section class="content-section">
          <h2>2. Cómo usamos tu información</h2>
          <p>Utilizamos la información recopilada para:</p>
          <ul>
            <li>Proporcionar y mejorar nuestros servicios</li>
            <li>Personalizar recomendaciones de restaurantes</li>
            <li>Procesar reservaciones y contactos con restaurantes</li>
            <li>Enviar comunicaciones relevantes (con tu consentimiento)</li>
            <li>Analizar el uso de la plataforma para mejoras</li>
          </ul>
        </section>
        
        <section class="content-section">
          <h2>3. Compartir información</h2>
          <p>No vendemos tu información personal a terceros. Solo compartimos datos con:</p>
          <ul>
            <li>Restaurantes cuando realizas una reservación</li>
            <li>Proveedores de servicios que nos ayudan a operar (hosting, análisis)</li>
            <li>Cuando la ley lo requiere</li>
          </ul>
        </section>
        
        <section class="content-section">
          <h2>4. Seguridad</h2>
          <p>Implementamos medidas de seguridad para proteger tu información personal, incluyendo encriptación y acceso restringido a bases de datos.</p>
        </section>
        
        <section class="content-section">
          <h2>5. Tus derechos</h2>
          <p>Tienes derecho a:</p>
          <ul>
            <li>Acceder a tu información personal</li>
            <li>Corregir datos inexactos</li>
            <li>Solicitar la eliminación de tu cuenta</li>
            <li>Oponerte al procesamiento de tus datos</li>
          </ul>
        </section>
        
        <section class="content-section">
          <h2>6. Cookies</h2>
          <p>Usamos cookies para mejorar tu experiencia, recordar preferencias y analizar el uso del sitio. Puedes deshabilitarlas en tu navegador, aunque esto puede afectar algunas funcionalidades.</p>
        </section>
        
        <section class="content-section">
          <h2>7. Contacto</h2>
          <p>Para ejercer tus derechos o hacer preguntas sobre privacidad, escríbenos a <a href="mailto:privacidad@saborcolima.com">privacidad@saborcolima.com</a></p>
        </section>
        
        <p class="last-update">Última actualización: Enero 2024</p>
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
  font-size: 18px;
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

.content-section ul {
  margin: 0;
  padding-left: 20px;
}

.content-section li {
  font-size: 15px;
  color: #555;
  line-height: 1.7;
  margin-bottom: 8px;
}

.content-section strong {
  color: #1a1a2e;
}

.content-section a {
  color: #ff385c;
  text-decoration: none;
  font-weight: 500;
}

.content-section a:hover {
  text-decoration: underline;
}

.last-update {
  text-align: center;
  font-size: 14px;
  color: #999;
  margin-top: 40px;
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
