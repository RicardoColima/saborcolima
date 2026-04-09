<template>
  <div class="help-view">
    <div class="help-header">
      <div class="container">
        <router-link to="/" class="back-link">
          <i class="bi bi-arrow-left"></i>
          <span>Volver al inicio</span>
        </router-link>
        <h1>Centro de ayuda</h1>
        <p>¿En qué podemos ayudarte?</p>
        
        <div class="search-box">
          <i class="bi bi-search"></i>
          <input 
            v-model="searchQuery" 
            type="text" 
            placeholder="Buscar en ayuda..."
          >
          <button v-if="searchQuery" class="clear-btn" @click="searchQuery = ''">
            <i class="bi bi-x-lg"></i>
          </button>
        </div>
      </div>
    </div>

    <div class="help-content">
      <div class="container">
        <!-- FAQ Categories -->
        <div class="faq-categories">
          <button 
            v-for="category in categories" 
            :key="category.id"
            class="category-btn"
            :class="{ active: activeCategory === category.id }"
            @click="activeCategory = category.id"
          >
            <i :class="category.icon"></i>
            <span>{{ category.name }}</span>
          </button>
        </div>

        <!-- FAQ Items -->
        <div class="faq-section">
          <div 
            v-for="faq in filteredFaqs" 
            :key="faq.id"
            class="faq-item"
            :class="{ expanded: expandedFaq === faq.id }"
          >
            <button class="faq-question" @click="toggleFaq(faq.id)">
              <span>{{ faq.question }}</span>
              <i class="bi bi-chevron-down" :class="{ rotated: expandedFaq === faq.id }"></i>
            </button>
            <transition name="slide">
              <div v-if="expandedFaq === faq.id" class="faq-answer">
                <p>{{ faq.answer }}</p>
              </div>
            </transition>
          </div>
        </div>

        <!-- Contact Section -->
        <div class="contact-section">
          <h2>¿No encontraste lo que buscabas?</h2>
          <p>Estamos aquí para ayudarte. Contáctanos directamente.</p>
          
          <div class="contact-options">
            <a href="mailto:ayuda@saborcolima.com" class="contact-card">
              <div class="contact-icon">
                <i class="bi bi-envelope"></i>
              </div>
              <h3>Email</h3>
              <p>ayuda@saborcolima.com</p>
              <span class="contact-action">Enviar mensaje</span>
            </a>
            
            <a href="tel:3121234567" class="contact-card">
              <div class="contact-icon">
                <i class="bi bi-telephone"></i>
              </div>
              <h3>Teléfono</h3>
              <p>312 123 4567</p>
              <span class="contact-action">Llamar ahora</span>
            </a>
            
            <button class="contact-card" @click="openChat">
              <div class="contact-icon">
                <i class="bi bi-chat-dots"></i>
              </div>
              <h3>Chat en vivo</h3>
              <p>Lunes - Viernes: 9am - 6pm</p>
              <span class="contact-action">Iniciar chat</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const searchQuery = ref('')
const activeCategory = ref('general')
const expandedFaq = ref(null)

const categories = [
  { id: 'general', name: 'General', icon: 'bi bi-info-circle' },
  { id: 'cuenta', name: 'Mi cuenta', icon: 'bi bi-person' },
  { id: 'reservas', name: 'Reservas', icon: 'bi bi-calendar-check' },
  { id: 'restaurantes', name: 'Restaurantes', icon: 'bi bi-shop' },
  { id: 'pagos', name: 'Pagos', icon: 'bi bi-credit-card' }
]

const faqs = [
  {
    id: 1,
    category: 'general',
    question: '¿Qué es Sabor Colima?',
    answer: 'Sabor Colima es la plataforma líder para descubrir y explorar los mejores bares y restaurantes en todo el estado de Colima. Desde mariscos frescos en Manzanillo hasta la tradición culinaria de Colima Capital, te ayudamos a encontrar el lugar perfecto para cada ocasión.'
  },
  {
    id: 2,
    category: 'general',
    question: '¿Cómo funciona Sabor Colima?',
    answer: 'Es muy simple: explora los restaurantes por ubicación, tipo de comida o precio. Lee reseñas, ve fotos y guarda tus favoritos. Cuando encuentres el lugar ideal, puedes contactar directamente al restaurante para hacer una reservación.'
  },
  {
    id: 3,
    category: 'cuenta',
    question: '¿Cómo creo una cuenta?',
    answer: 'Puedes crear una cuenta gratuita haciendo clic en "Regístrate" en la parte superior de la página. Solo necesitas tu nombre, correo electrónico y contraseña. También puedes registrarte con Google o Facebook para mayor facilidad.'
  },
  {
    id: 4,
    category: 'cuenta',
    question: '¿Puedo usar Sabor Colima sin crear cuenta?',
    answer: '¡Sí! Puedes explorar y buscar restaurantes sin necesidad de una cuenta. Sin embargo, para guardar favoritos, dejar reseñas o recibir recomendaciones personalizadas, necesitarás registrarte.'
  },
  {
    id: 5,
    category: 'reservas',
    question: '¿Cómo hago una reservación?',
    answer: 'Actualmente, Sabor Colima te conecta directamente con el restaurante. En cada página de restaurante encontrarás el teléfono de contacto para hacer tu reservación. Estamos trabajando en un sistema de reservas integrado próximamente.'
  },
  {
    id: 6,
    category: 'reservas',
    question: '¿Puedo cancelar o modificar una reservación?',
    answer: 'Las cancelaciones y modificaciones deben hacerse directamente con el restaurante contactándolos por teléfono. Te recomendamos hacerlo con al menos 24 horas de anticipación.'
  },
  {
    id: 7,
    category: 'restaurantes',
    question: '¿Cómo agrego mi restaurante a Sabor Colima?',
    answer: '¡Excelente! Puedes registrar tu restaurante haciendo clic en "¿Tienes un restaurante?" en el menú de usuario. Completa el formulario con la información de tu negocio y nuestro equipo te contactará para verificar y publicar tu restaurante.'
  },
  {
    id: 8,
    category: 'restaurantes',
    question: '¿Tiene costo aparecer en Sabor Colima?',
    answer: 'El listado básico es gratuito. Ofrecemos planes premium con características adicionales como destacados en búsquedas, fotos ilimitadas, estadísticas de visitas y más. Contacta nuestro equipo de ventas para más información.'
  },
  {
    id: 9,
    category: 'pagos',
    question: '¿Los pagos son seguros?',
    answer: 'Actualmente no procesamos pagos directamente. Todas las transacciones se realizan directamente en el restaurante. Cuando implementemos reservas con pago anticipado, utilizaremos encriptación de nivel bancario para proteger tus datos.'
  },
  {
    id: 10,
    category: 'pagos',
    question: '¿Qué métodos de pago aceptan?',
    answer: 'Los métodos de pago dependen de cada restaurante individual. La mayoría aceptan efectivo, tarjetas de crédito/débito y algunos ofrecen pago por transferencia o apps de pago móvil.'
  }
]

const filteredFaqs = computed(() => {
  let filtered = faqs.filter(faq => faq.category === activeCategory.value)
  
  if (searchQuery.value) {
    const query = searchQuery.value.toLowerCase()
    filtered = filtered.filter(faq => 
      faq.question.toLowerCase().includes(query) || 
      faq.answer.toLowerCase().includes(query)
    )
  }
  
  return filtered
})

const toggleFaq = (id) => {
  expandedFaq.value = expandedFaq.value === id ? null : id
}

const openChat = () => {
  alert('Chat en vivo - próximamente')
}
</script>

<style scoped>
.help-view {
  min-height: 100vh;
  background: #f8f9fa;
}

.help-header {
  background: #ff385c;
  padding: 60px 24px 50px;
  text-align: center;
  color: #fff;
}

.container {
  max-width: 800px;
  margin: 0 auto;
}

.back-link {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: rgba(255,255,255,0.9);
  text-decoration: none;
  font-size: 14px;
  margin-bottom: 24px;
  transition: color 0.2s;
}

.back-link:hover {
  color: #fff;
}

.help-header h1 {
  font-size: 36px;
  font-weight: 700;
  margin-bottom: 10px;
}

.help-header p {
  font-size: 17px;
  opacity: 0.9;
  margin-bottom: 30px;
}

.search-box {
  position: relative;
  max-width: 500px;
  margin: 0 auto;
}

.search-box i {
  position: absolute;
  left: 16px;
  top: 50%;
  transform: translateY(-50%);
  color: #999;
  font-size: 18px;
}

.search-box input {
  width: 100%;
  padding: 14px 44px 14px 48px;
  border: none;
  border-radius: 10px;
  font-size: 15px;
  outline: none;
  background: #fff;
}

.clear-btn {
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  color: #999;
  cursor: pointer;
  padding: 4px;
  font-size: 16px;
}

.clear-btn:hover {
  color: #666;
}

.help-content {
  padding: 40px 24px 80px;
}

.faq-categories {
  display: flex;
  gap: 10px;
  overflow-x: auto;
  padding-bottom: 8px;
  margin-bottom: 30px;
}

.faq-categories::-webkit-scrollbar {
  display: none;
}

.category-btn {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 18px;
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 8px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
  color: #444;
  transition: all 0.2s;
  white-space: nowrap;
}

.category-btn:hover {
  border-color: #ff385c;
  color: #ff385c;
}

.category-btn.active {
  background: #ff385c;
  border-color: #ff385c;
  color: #fff;
}

.faq-section {
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.06);
  overflow: hidden;
  margin-bottom: 50px;
  border: 1px solid #e8e8e8;
}

.faq-item {
  border-bottom: 1px solid #f0f0f0;
}

.faq-item:last-child {
  border-bottom: none;
}

.faq-question {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 18px 24px;
  background: none;
  border: none;
  cursor: pointer;
  text-align: left;
  font-size: 15px;
  font-weight: 500;
  color: #333;
  transition: background 0.2s;
}

.faq-question:hover {
  background: #fafafa;
}

.faq-question i {
  font-size: 16px;
  color: #999;
  transition: transform 0.2s;
}

.faq-question i.rotated {
  transform: rotate(180deg);
}

.faq-answer {
  padding: 0 24px 18px;
}

.faq-answer p {
  font-size: 14px;
  color: #666;
  line-height: 1.6;
  margin: 0;
}

.slide-enter-active,
.slide-leave-active {
  transition: all 0.2s ease;
}

.slide-enter-from,
.slide-leave-to {
  opacity: 0;
}

.contact-section {
  text-align: center;
}

.contact-section h2 {
  font-size: 24px;
  font-weight: 700;
  color: #1a1a2e;
  margin-bottom: 8px;
}

.contact-section > p {
  font-size: 15px;
  color: #666;
  margin-bottom: 30px;
}

.contact-options {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

.contact-card {
  background: #fff;
  border: 1px solid #e8e8e8;
  border-radius: 12px;
  padding: 30px 20px;
  text-decoration: none;
  color: inherit;
  transition: border-color 0.2s, box-shadow 0.2s;
}

.contact-card:hover {
  border-color: #ff385c;
  box-shadow: 0 4px 16px rgba(255, 56, 92, 0.1);
}

.contact-icon {
  width: 50px;
  height: 50px;
  background: #fff0f2;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 16px;
}

.contact-icon i {
  font-size: 24px;
  color: #ff385c;
}

.contact-card h3 {
  font-size: 16px;
  font-weight: 600;
  color: #222;
  margin-bottom: 6px;
}

.contact-card > p {
  font-size: 13px;
  color: #666;
  margin-bottom: 14px;
}

.contact-action {
  font-size: 14px;
  font-weight: 500;
  color: #ff385c;
}

@media (max-width: 768px) {
  .help-header {
    padding: 50px 24px 40px;
  }
  
  .help-header h1 {
    font-size: 28px;
  }
  
  .contact-options {
    grid-template-columns: 1fr;
  }
  
  .faq-question {
    padding: 16px 20px;
    font-size: 14px;
  }
}
</style>
