<template>
  <div class="business-page">
    <!-- Hero -->
    <section class="hero">
      <div class="container">
        <router-link to="/" class="back-link">
          <i class="bi bi-arrow-left"></i>
          <span>Volver al inicio</span>
        </router-link>
        <div class="hero-layout">
          <div class="hero-content">
            <span class="tag">Para restaurantes</span>
            <h1>Haz crecer tu restaurante con Sabor Colima</h1>
            <p>Únete a la plataforma líder de restaurantes en el estado. Llega a miles de comensales locales y turistas.</p>
            <div class="stats">
              <div class="stat"><strong>50K+</strong><span>Usuarios mensuales</span></div>
              <div class="stat"><strong>200+</strong><span>Restaurantes</span></div>
              <div class="stat"><strong>8</strong><span>Municipios</span></div>
            </div>
            <div class="hero-actions">
              <button class="btn-primary" @click="scrollToForm">Empezar ahora</button>
              <button class="btn-secondary" @click="scrollToPricing">Ver planes</button>
            </div>
          </div>
          <div class="hero-image">
            <img src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600" alt="Restaurante">
          </div>
        </div>
      </div>
    </section>

    <!-- Benefits -->
    <section class="benefits">
      <div class="container">
        <h2>¿Por qué unirte?</h2>
        <div class="benefits-grid">
          <div class="benefit-item">
            <i class="bi bi-eye"></i>
            <h3>Mayor visibilidad</h3>
            <p>Tu restaurante en búsquedas locales</p>
          </div>
          <div class="benefit-item">
            <i class="bi bi-graph-up"></i>
            <h3>Más reservas</h3>
            <p>Reduce mesas vacías</p>
          </div>
          <div class="benefit-item">
            <i class="bi bi-star"></i>
            <h3>Reseñas reales</h3>
            <p>Construye reputación</p>
          </div>
          <div class="benefit-item">
            <i class="bi bi-geo-alt"></i>
            <h3>Alcance local</h3>
            <p>Destaca en tu municipio</p>
          </div>
          <div class="benefit-item">
            <i class="bi bi-cash-stack"></i>
            <h3>Gratis para empezar</h3>
            <p>Listado sin costo</p>
          </div>
          <div class="benefit-item">
            <i class="bi bi-headset"></i>
            <h3>Soporte</h3>
            <p>Te acompañamos</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Pricing -->
    <section class="pricing" ref="pricingSection">
      <div class="container">
        <h2>Planes</h2>
        <div class="pricing-grid">
          <div class="plan">
            <div class="plan-content">
              <h3>Básico</h3>
              <div class="price">Gratis</div>
              <ul>
                <li>Perfil del restaurante</li>
                <li>Hasta 5 fotos</li>
                <li>Contacto directo</li>
                <li>Reseñas</li>
              </ul>
            </div>
            <button class="btn-primary" @click="selectPlan('basic')">Empezar</button>
          </div>
          <div class="plan recommended">
            <span class="badge">Recomendado</span>
            <div class="plan-content">
              <h3>Destacado</h3>
              <div class="price">$299<span>/mes</span></div>
              <ul>
                <li>Todo lo del Básico</li>
                <li>Fotos ilimitadas</li>
                <li>Posición destacada</li>
                <li>Estadísticas</li>
                <li>Soporte prioritario</li>
              </ul>
            </div>
            <button class="btn-primary" @click="selectPlan('featured')">Elegir</button>
          </div>
          <div class="plan">
            <div class="plan-content">
              <h3>Premium</h3>
              <div class="price">$599<span>/mes</span></div>
              <ul>
                <li>Todo lo del Destacado</li>
                <li>Primera posición</li>
                <li>Reservaciones</li>
                <li>Menú digital</li>
                <li>Asesoría</li>
              </ul>
            </div>
            <button class="btn-primary" @click="selectPlan('premium')">Contactar</button>
          </div>
        </div>
      </div>
    </section>

    <!-- Form -->
    <section id="registration-form" class="form-section">
      <div class="container">
        <div class="form-card">
          <h2>Registra tu restaurante</h2>
          <p>Nuestro equipo te contactará en menos de 24 horas.</p>
          
          <form @submit.prevent="submitForm">
            <div class="form-row">
              <div class="form-field">
                <label>Nombre del restaurante *</label>
                <input v-model="form.businessName" type="text" placeholder="Ej: Mariscos El Puerto" required>
              </div>
              <div class="form-field">
                <label>Nombre del propietario *</label>
                <input v-model="form.ownerName" type="text" placeholder="Tu nombre" required>
              </div>
            </div>
            
            <div class="form-row">
              <div class="form-field">
                <label>Correo *</label>
                <input v-model="form.email" type="email" placeholder="email@restaurante.com" required>
              </div>
              <div class="form-field">
                <label>Teléfono *</label>
                <input v-model="form.phone" type="tel" placeholder="312 123 4567" required>
              </div>
            </div>
            
            <div class="form-row">
              <div class="form-field">
                <label>Ubicación *</label>
                <select v-model="form.location" required>
                  <option value="">Selecciona municipio</option>
                  <option v-for="loc in locations" :key="loc" :value="loc">{{ loc }}</option>
                </select>
              </div>
              <div class="form-field">
                <label>Tipo de cocina *</label>
                <select v-model="form.type" required>
                  <option value="">Selecciona tipo</option>
                  <option v-for="type in types" :key="type" :value="type">{{ type }}</option>
                </select>
              </div>
            </div>
            
            <div class="form-field">
              <label>Dirección</label>
              <input v-model="form.address" type="text" placeholder="Calle, número, colonia">
            </div>
            
            <div class="form-field">
              <label>Mensaje</label>
              <textarea v-model="form.message" rows="3" placeholder="Cuéntanos sobre tu restaurante..."></textarea>
            </div>
            
            <label class="terms">
              <input type="checkbox" v-model="form.acceptTerms" required>
              <span>Acepto los <a href="#">términos</a> para restaurantes</span>
            </label>
            
            <button type="submit" class="btn-primary full" :disabled="!isFormValid || isSubmitting">
              <span v-if="!isSubmitting">Enviar solicitud</span>
              <span v-else><i class="bi bi-arrow-repeat spin"></i> Enviando...</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const locations = ['Colima Capital', 'Manzanillo', 'Comala', 'Villa de Álvarez', 'Tecomán', 'Coquimatlán', 'Minatitlán', 'Armería']
const types = ['Mexicana', 'Mariscos', 'Bar', 'Café', 'Pizza', 'Sushi', 'Hamburguesas', 'Italiana', 'Cortes', 'Desayunos', 'Vegana', 'Otro']

const form = ref({
  businessName: '',
  ownerName: '',
  email: '',
  phone: '',
  location: '',
  type: '',
  address: '',
  message: '',
  acceptTerms: false
})

const isSubmitting = ref(false)

const isFormValid = computed(() => {
  return form.value.businessName && 
         form.value.ownerName && 
         form.value.email && 
         form.value.phone && 
         form.value.location && 
         form.value.type &&
         form.value.acceptTerms
})

const pricingSection = ref(null)

const scrollToForm = () => {
  document.getElementById('registration-form').scrollIntoView({ behavior: 'smooth' })
}

const scrollToPricing = () => {
  pricingSection.value?.scrollIntoView({ behavior: 'smooth' })
}

const selectPlan = (plan) => {
  alert(`Has seleccionado el plan ${plan}. Serás redirigido al formulario.`)
  scrollToForm()
}

const submitForm = async () => {
  if (!isFormValid.value) return
  
  isSubmitting.value = true
  
  // Simular envío - aquí conectarías con tu API
  await new Promise(resolve => setTimeout(resolve, 2000))
  
  alert('¡Solicitud enviada! Nuestro equipo te contactará en menos de 24 horas.')
  
  // Reset form
  form.value = {
    businessName: '',
    ownerName: '',
    email: '',
    phone: '',
    location: '',
    type: '',
    address: '',
    message: '',
    acceptTerms: false
  }
  
  isSubmitting.value = false
}
</script>

<style scoped>
.business-page {
  min-height: 100vh;
  background: #f8f9fa;
}

.container {
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 24px;
}

/* Hero */
.hero {
  background: #ff385c;
  padding: 60px 0 50px;
  color: #fff;
}

.back-link {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: rgba(255,255,255,0.9);
  text-decoration: none;
  font-size: 14px;
  margin-bottom: 30px;
  transition: color 0.2s;
}

.back-link:hover {
  color: #fff;
}

.hero-layout {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 50px;
  align-items: center;
}

.tag {
  display: inline-block;
  background: rgba(255,255,255,0.2);
  padding: 6px 14px;
  border-radius: 20px;
  font-size: 13px;
  font-weight: 500;
  margin-bottom: 16px;
}

.hero h1 {
  font-size: 42px;
  font-weight: 700;
  line-height: 1.2;
  margin-bottom: 16px;
}

.hero p {
  font-size: 17px;
  opacity: 0.95;
  margin-bottom: 24px;
  max-width: 450px;
}

.stats {
  display: flex;
  gap: 30px;
  margin-bottom: 30px;
}

.stat {
  display: flex;
  flex-direction: column;
}

.stat strong {
  font-size: 28px;
  font-weight: 700;
}

.stat span {
  font-size: 13px;
  opacity: 0.9;
}

.hero-actions {
  display: flex;
  gap: 12px;
}

.btn-primary {
  background: #fff;
  color: #ff385c;
  border: none;
  padding: 14px 28px;
  border-radius: 10px;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  transition: transform 0.2s;
}

.btn-primary:hover {
  transform: translateY(-2px);
}

.btn-secondary {
  background: transparent;
  color: #fff;
  border: 2px solid rgba(255,255,255,0.4);
  padding: 12px 26px;
  border-radius: 10px;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
}

.btn-secondary:hover {
  background: rgba(255,255,255,0.1);
  border-color: rgba(255,255,255,0.6);
}

.hero-image img {
  width: 100%;
  border-radius: 12px;
  box-shadow: 0 20px 60px rgba(0,0,0,0.3);
}

/* Benefits */
.benefits {
  padding: 70px 0;
}

.benefits h2 {
  text-align: center;
  font-size: 28px;
  font-weight: 700;
  color: #1a1a2e;
  margin-bottom: 40px;
}

.benefits-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

.benefit-item {
  background: #fff;
  padding: 28px;
  border-radius: 12px;
  border: 1px solid #e8e8e8;
  transition: border-color 0.2s;
}

.benefit-item:hover {
  border-color: #ff385c;
}

.benefit-item i {
  font-size: 24px;
  color: #ff385c;
  margin-bottom: 14px;
  display: block;
}

.benefit-item h3 {
  font-size: 16px;
  font-weight: 600;
  color: #1a1a2e;
  margin-bottom: 6px;
}

.benefit-item p {
  font-size: 14px;
  color: #666;
}

/* Pricing */
.pricing {
  padding: 70px 0;
  background: #fff;
}

.pricing h2 {
  text-align: center;
  font-size: 28px;
  font-weight: 700;
  color: #1a1a2e;
  margin-bottom: 40px;
}

.pricing-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

.plan {
  background: #fff;
  border: 1px solid #e8e8e8;
  border-radius: 12px;
  padding: 28px;
  position: relative;
  display: flex;
  flex-direction: column;
  min-height: 400px;
}

.plan.recommended {
  border-color: #ff385c;
  box-shadow: 0 4px 20px rgba(255, 56, 92, 0.1);
}

.badge {
  position: absolute;
  top: -10px;
  left: 50%;
  transform: translateX(-50%);
  background: #ff385c;
  color: #fff;
  padding: 4px 12px;
  border-radius: 12px;
  font-size: 11px;
  font-weight: 600;
}

.plan-content {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.plan h3 {
  font-size: 18px;
  font-weight: 600;
  color: #1a1a2e;
  margin-bottom: 12px;
}

.price {
  font-size: 32px;
  font-weight: 700;
  color: #1a1a2e;
  margin-bottom: 20px;
}

.price span {
  font-size: 14px;
  color: #666;
  font-weight: 400;
}

.plan ul {
  list-style: none;
  padding: 0;
  margin: 0;
  flex: 1;
}

.plan li {
  font-size: 14px;
  color: #555;
  padding: 8px 0;
  border-bottom: 1px solid #f0f0f0;
}

.plan li:last-child {
  border-bottom: none;
}

.plan .btn-primary {
  width: 100%;
  margin-top: 24px;
}

/* Form Section */
.form-section {
  padding: 70px 0;
}

.form-card {
  background: #fff;
  border-radius: 16px;
  padding: 40px;
  max-width: 700px;
  margin: 0 auto;
  border: 1px solid #e8e8e8;
}

.form-card h2 {
  font-size: 24px;
  font-weight: 700;
  color: #1a1a2e;
  margin-bottom: 8px;
  text-align: center;
}

.form-card > p {
  text-align: center;
  color: #666;
  font-size: 15px;
  margin-bottom: 30px;
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  margin-bottom: 20px;
}

.form-field {
  display: flex;
  flex-direction: column;
  gap: 6px;
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
  min-height: 80px;
}

.terms {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  font-size: 13px;
  color: #555;
  margin: 20px 0;
  cursor: pointer;
}

.terms input {
  width: 18px;
  height: 18px;
  margin-top: 2px;
  accent-color: #ff385c;
  flex-shrink: 0;
}

.terms a {
  color: #ff385c;
  text-decoration: none;
}

.full {
  width: 100%;
}

.spin {
  animation: spin 1s linear infinite;
}

@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

/* Responsive */
@media (max-width: 900px) {
  .hero-layout {
    grid-template-columns: 1fr;
    text-align: center;
  }
  
  .hero p {
    margin: 0 auto 24px;
  }
  
  .stats {
    justify-content: center;
  }
  
  .hero-actions {
    justify-content: center;
  }
  
  .hero-image {
    order: -1;
  }
  
  .hero-image img {
    max-height: 300px;
    object-fit: cover;
  }
  
  .benefits-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .pricing-grid {
    grid-template-columns: 1fr;
    max-width: 400px;
    margin: 0 auto;
  }
}

@media (max-width: 600px) {
  .hero h1 {
    font-size: 28px;
  }
  
  .stats {
    flex-direction: column;
    gap: 15px;
    align-items: center;
  }
  
  .benefits-grid {
    grid-template-columns: 1fr;
  }
  .form-row {
    grid-template-columns: 1fr;
  }
  
  .hero-actions {
    flex-direction: column;
  }
}
</style>
