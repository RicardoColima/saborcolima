<template>
  <div class="content-page">
    <div class="page-header">
      <div class="container">
        <router-link to="/" class="back-link">
          <i class="bi bi-arrow-left"></i>
          <span>Volver</span>
        </router-link>
        <h1>Términos de servicio</h1>
      </div>
    </div>
    
    <div class="page-content">
      <div class="container">
        <section class="content-section">
          <h2>1. Aceptación de los términos</h2>
          <p>Al acceder y utilizar Sabor Colima, aceptas estar sujeto a estos términos de servicio. Si no estás de acuerdo con alguna parte de los términos, no podrás acceder al servicio.</p>
        </section>
        
        <section class="content-section">
          <h2>2. Uso del servicio</h2>
          <p>Sabor Colima es una plataforma que conecta a usuarios con restaurantes y establecimientos gastronómicos en el estado de Colima, México. El servicio incluye:</p>
          <ul>
            <li>Búsqueda y descubrimiento de restaurantes</li>
            <li>Reseñas y calificaciones</li>
            <li>Información de contacto y ubicación</li>
            <li>Reservaciones (en planes premium)</li>
          </ul>
        </section>
        
        <section class="content-section">
          <h2>3. Cuentas de usuario</h2>
          <p>Al crear una cuenta en Sabor Colima, garantizas que la información proporcionada es precisa y completa. Eres responsable de mantener la confidencialidad de tu cuenta y contraseña.</p>
        </section>
        
        <section class="content-section">
          <h2>4. Contenido generado por usuarios</h2>
          <p>Las reseñas y comentarios publicados deben ser honestos y respetuosos. Nos reservamos el derecho de eliminar contenido que consideremos inapropiado, falso o difamatorio.</p>
        </section>
        
        <section class="content-section">
          <h2>5. Restaurantes afiliados</h2>
          <p>Los restaurantes que se registran en la plataforma garantizan que la información proporcionada sobre sus establecimientos es verídica y actualizada.</p>
        </section>
        
        <section class="content-section">
          <h2>6. Modificaciones</h2>
          <p>Nos reservamos el derecho de modificar estos términos en cualquier momento. Los cambios entrarán en vigor inmediatamente después de su publicación.</p>
        </section>
        
        <section class="content-section">
          <h2>7. Contacto</h2>
          <p>Para cualquier duda sobre estos términos, contáctanos en <a href="mailto:legal@saborcolima.com">legal@saborcolima.com</a></p>
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
