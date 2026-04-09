<template>
  <div class="content-page">
    <div class="page-header">
      <div class="container">
        <router-link to="/" class="back-link">
          <i class="bi bi-arrow-left"></i>
          <span>Volver</span>
        </router-link>
        <h1>Política de cookies</h1>
      </div>
    </div>
    
    <div class="page-content">
      <div class="container">
        <section class="content-section">
          <h2>¿Qué son las cookies?</h2>
          <p>Las cookies son pequeños archivos de texto que se almacenan en tu dispositivo cuando visitas un sitio web. Se utilizan ampliamente para hacer que los sitios funcionen de manera más eficiente, así como para proporcionar información a los propietarios del sitio.</p>
        </section>
        
        <section class="content-section">
          <h2>Cómo usamos las cookies</h2>
          <p>En Sabor Colima utilizamos cookies para los siguientes propósitos:</p>
          <ul>
            <li><strong>Cookies esenciales:</strong> Necesarias para el funcionamiento básico del sitio</li>
            <li><strong>Cookies de preferencias:</strong> Recordar tus configuraciones y filtros de búsqueda</li>
            <li><strong>Cookies de análisis:</strong> Entender cómo los usuarios interactúan con el sitio</li>
            <li><strong>Cookies de autenticación:</strong> Mantener tu sesión iniciada</li>
          </ul>
        </section>
        
        <section class="content-section">
          <h2>Tipos de cookies que utilizamos</h2>
          <table class="cookies-table">
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Propósito</th>
                <th>Duración</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>session_id</td>
                <td>Mantener sesión de usuario</td>
                <td>Sesión</td>
              </tr>
              <tr>
                <td>preferences</td>
                <td>Recordar filtros y preferencias</td>
                <td>30 días</td>
              </tr>
              <tr>
                <td>analytics_id</td>
                <td>Análisis de uso anónimo</td>
                <td>1 año</td>
              </tr>
              <tr>
                <td>last_location</td>
                <td>Última ubicación de búsqueda</td>
                <td>7 días</td>
              </tr>
            </tbody>
          </table>
        </section>
        
        <section class="content-section">
          <h2>Cookies de terceros</h2>
          <p>Algunos servicios que utilizamos pueden establecer sus propias cookies:</p>
          <ul>
            <li>Google Analytics (análisis de tráfico)</li>
            <li>Google Maps (visualización de mapas)</li>
            <li>Redes sociales (botones de compartir)</li>
          </ul>
        </section>
        
        <section class="content-section">
          <h2>Gestionar cookies</h2>
          <p>Puedes controlar y/o eliminar las cookies según desees. Puedes eliminar todas las cookies ya presentes en tu dispositivo y configurar la mayoría de los navegadores para evitar que se coloquen. Sin embargo, si haces esto, es posible que tengas que ajustar manualmente algunas preferencias cada vez que visites un sitio.</p>
          <p>Para más información sobre cómo gestionar cookies en tu navegador:</p>
          <ul>
            <li><a href="#">Chrome</a></li>
            <li><a href="#">Firefox</a></li>
            <li><a href="#">Safari</a></li>
            <li><a href="#">Edge</a></li>
          </ul>
        </section>
        
        <section class="content-section">
          <h2>Cambios en esta política</h2>
          <p>Podemos actualizar esta política de cookies ocasionalmente para reflejar cambios en las cookies que utilizamos o por otros motivos operativos, legales o regulatorios.</p>
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

.cookies-table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 10px;
}

.cookies-table th,
.cookies-table td {
  text-align: left;
  padding: 12px;
  border-bottom: 1px solid #e8e8e8;
  font-size: 14px;
}

.cookies-table th {
  font-weight: 600;
  color: #1a1a2e;
  background: #f8f9fa;
}

.cookies-table td {
  color: #555;
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
  
  .cookies-table {
    font-size: 13px;
  }
  
  .cookies-table th,
  .cookies-table td {
    padding: 8px;
  }
}
</style>
