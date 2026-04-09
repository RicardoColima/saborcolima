<template>
  <div class="content-page">
    <div class="page-header">
      <div class="container">
        <router-link to="/" class="back-link">
          <i class="bi bi-arrow-left"></i>
          <span>Volver</span>
        </router-link>
        <h1>Contacto</h1>
        <p>Estamos aquí para ayudarte</p>
      </div>
    </div>
    
    <div class="page-content">
      <div class="container">
        <div class="contact-layout">
          <section class="contact-info">
            <h2>Habla con nosotros</h2>
            <p>Tienes preguntas, sugerencias o necesitas ayuda? Contáctanos y te responderemos lo antes posible.</p>
            
            <div class="info-items">
              <div class="info-item">
                <i class="bi bi-envelope"></i>
                <div>
                  <span class="label">Correo general</span>
                  <a href="mailto:hola@saborcolima.com">hola@saborcolima.com</a>
                </div>
              </div>
              <div class="info-item">
                <i class="bi bi-headset"></i>
                <div>
                  <span class="label">Soporte</span>
                  <a href="mailto:ayuda@saborcolima.com">ayuda@saborcolima.com</a>
                </div>
              </div>
              <div class="info-item">
                <i class="bi bi-building"></i>
                <div>
                  <span class="label">Dirección</span>
                  <span>Colima Capital, Colima, México</span>
                </div>
              </div>
              <div class="info-item">
                <i class="bi bi-clock"></i>
                <div>
                  <span class="label">Horario</span>
                  <span>Lunes a Viernes, 9am - 6pm</span>
                </div>
              </div>
            </div>
            
            <div class="social-links">
              <span>Síguenos:</span>
              <a href="#" class="social-btn"><i class="bi bi-facebook"></i></a>
              <a href="#" class="social-btn"><i class="bi bi-instagram"></i></a>
              <a href="#" class="social-btn"><i class="bi bi-twitter-x"></i></a>
              <a href="#" class="social-btn"><i class="bi bi-tiktok"></i></a>
            </div>
          </section>
          
          <section class="contact-form">
            <form @submit.prevent="submitForm">
              <div class="form-row">
                <div class="form-field">
                  <label>Nombre</label>
                  <input type="text" placeholder="Tu nombre" required>
                </div>
                <div class="form-field">
                  <label>Correo</label>
                  <input type="email" placeholder="tu@email.com" required>
                </div>
              </div>
              <div class="form-field">
                <label>Asunto</label>
                <select required>
                  <option value="">Selecciona un tema</option>
                  <option value="general">Consulta general</option>
                  <option value="support">Soporte técnico</option>
                  <option value="restaurant">Soy restaurante</option>
                  <option value="suggestion">Sugerencia</option>
                  <option value="complaint">Queja</option>
                </select>
              </div>
              <div class="form-field">
                <label>Mensaje</label>
                <textarea rows="5" placeholder="Escribe tu mensaje..." required></textarea>
              </div>
              <button type="submit" class="submit-btn">Enviar mensaje</button>
            </form>
          </section>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const submitForm = () => {
  alert('¡Mensaje enviado! Te responderemos pronto.')
}
</script>

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
  max-width: 900px;
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

.contact-layout {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
}

.contact-info {
  background: #fff;
  border-radius: 12px;
  padding: 30px;
  border: 1px solid #e8e8e8;
}

.contact-info h2 {
  font-size: 20px;
  font-weight: 700;
  color: #1a1a2e;
  margin-bottom: 12px;
}

.contact-info > p {
  font-size: 15px;
  color: #666;
  margin-bottom: 24px;
}

.info-items {
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 30px;
}

.info-item {
  display: flex;
  align-items: flex-start;
  gap: 14px;
}

.info-item i {
  font-size: 20px;
  color: #ff385c;
  margin-top: 2px;
}

.info-item .label {
  display: block;
  font-size: 12px;
  color: #999;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-bottom: 4px;
}

.info-item a {
  color: #1a1a2e;
  text-decoration: none;
  font-weight: 500;
}

.info-item a:hover {
  color: #ff385c;
}

.info-item span:last-child {
  color: #555;
  font-size: 14px;
}

.social-links {
  display: flex;
  align-items: center;
  gap: 12px;
  padding-top: 20px;
  border-top: 1px solid #f0f0f0;
}

.social-links span {
  font-size: 14px;
  color: #666;
}

.social-btn {
  width: 36px;
  height: 36px;
  background: #f5f5f5;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #666;
  text-decoration: none;
  transition: all 0.2s;
}

.social-btn:hover {
  background: #ff385c;
  color: #fff;
}

.contact-form {
  background: #fff;
  border-radius: 12px;
  padding: 30px;
  border: 1px solid #e8e8e8;
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
  margin-bottom: 16px;
}

.form-field {
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin-bottom: 16px;
}

.form-field label {
  font-size: 13px;
  font-weight: 600;
  color: #333;
}

.form-field input,
.form-field select,
.form-field textarea {
  padding: 12px 14px;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 15px;
  background: #fff;
}

.form-field input:focus,
.form-field select:focus,
.form-field textarea:focus {
  outline: none;
  border-color: #ff385c;
}

.form-field textarea {
  resize: vertical;
  min-height: 100px;
}

.submit-btn {
  width: 100%;
  background: #ff385c;
  color: #fff;
  border: none;
  padding: 14px;
  border-radius: 10px;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s;
}

.submit-btn:hover {
  background: #e31c5f;
}

@media (max-width: 768px) {
  .contact-layout {
    grid-template-columns: 1fr;
  }
  
  .form-row {
    grid-template-columns: 1fr;
  }
  
  .page-header h1 {
    font-size: 26px;
  }
}
</style>
