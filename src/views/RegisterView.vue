<template>
  <div class="auth-page">
    <div class="auth-wrapper">
      <div class="auth-card">
        <div class="brand">
          <router-link to="/" class="brand-link">
            <i class="bi bi-cup-hot-fill"></i>
            <span>Sabor Colima</span>
          </router-link>
        </div>

        <h1 class="title">Crear cuenta</h1>
        <p class="subtitle">Regístrate para descubrir los mejores lugares de Colima</p>

        <form class="form" @submit.prevent="handleRegister">
          <div class="field">
            <label for="name">Nombre completo</label>
            <div class="input-box">
              <i class="bi bi-person"></i>
              <input 
                id="name"
                v-model="form.name"
                type="text" 
                placeholder="Tu nombre"
                required
              >
            </div>
          </div>

          <div class="field">
            <label for="email">Correo electrónico</label>
            <div class="input-box">
              <i class="bi bi-envelope"></i>
              <input 
                id="email"
                v-model="form.email"
                type="email" 
                placeholder="tu@email.com"
                required
              >
            </div>
          </div>

          <div class="field">
            <label for="password">Contraseña</label>
            <div class="input-box">
              <i class="bi bi-lock"></i>
              <input 
                id="password"
                v-model="form.password"
                :type="showPassword ? 'text' : 'password'" 
                placeholder="Mínimo 8 caracteres"
                required
                minlength="8"
              >
              <button type="button" class="toggle-btn" @click="showPassword = !showPassword">
                <i :class="showPassword ? 'bi bi-eye-slash' : 'bi bi-eye'"></i>
              </button>
            </div>
          </div>

          <div class="field">
            <label for="confirmPassword">Confirmar contraseña</label>
            <div class="input-box">
              <i class="bi bi-shield-check"></i>
              <input 
                id="confirmPassword"
                v-model="form.confirmPassword"
                :type="showPassword ? 'text' : 'password'" 
                placeholder="Repite tu contraseña"
                required
              >
            </div>
          </div>

          <label class="terms">
            <input type="checkbox" v-model="form.acceptTerms" required>
            <span>Acepto los <a href="#">Términos</a> y la <a href="#">Privacidad</a></span>
          </label>

          <button type="submit" class="submit-btn" :disabled="!isFormValid || isLoading">
            <span v-if="!isLoading">Crear cuenta</span>
            <span v-else><i class="bi bi-arrow-repeat spin"></i> Creando...</span>
          </button>
        </form>

        <div class="divider">
          <span>O continúa con</span>
        </div>

        <div class="social">
          <button class="social-btn google" @click="socialRegister('google')">
            <i class="bi bi-google"></i>
            Google
          </button>
          <button class="social-btn facebook" @click="socialRegister('facebook')">
            <i class="bi bi-facebook"></i>
            Facebook
          </button>
        </div>

        <p class="footer">
          ¿Ya tienes cuenta? <router-link to="/login" class="link">Inicia sesión</router-link>
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const form = ref({
  name: '',
  email: '',
  password: '',
  confirmPassword: '',
  acceptTerms: false
})

const showPassword = ref(false)
const isLoading = ref(false)

const isFormValid = computed(() => {
  return form.value.name && 
         form.value.email && 
         form.value.password.length >= 8 && 
         form.value.password === form.value.confirmPassword &&
         form.value.acceptTerms
})

const handleRegister = async () => {
  if (!isFormValid.value) return
  
  isLoading.value = true
  
  // Simular registro - aquí conectarías con tu API
  await new Promise(resolve => setTimeout(resolve, 1500))
  
  alert('¡Cuenta creada exitosamente!')
  router.push('/login')
  
  isLoading.value = false
}

const socialRegister = (provider) => {
  alert(`Registro con ${provider} - próximamente`)
}
</script>

<style scoped>
.auth-page {
  min-height: 100vh;
  background: #f8f9fa;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px 20px;
}

.auth-wrapper {
  width: 100%;
  max-width: 440px;
}

.auth-card {
  background: #fff;
  border-radius: 16px;
  padding: 40px 32px;
  box-shadow: 0 4px 24px rgba(0,0,0,0.08);
  border: 1px solid #e8e8e8;
}

.brand {
  text-align: center;
  margin-bottom: 32px;
}

.brand-link {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  text-decoration: none;
  color: #ff385c;
  font-size: 22px;
  font-weight: 700;
}

.brand-link i {
  font-size: 26px;
}

.title {
  font-size: 26px;
  font-weight: 700;
  color: #1a1a2e;
  text-align: center;
  margin-bottom: 8px;
}

.subtitle {
  font-size: 15px;
  color: #666;
  text-align: center;
  margin-bottom: 32px;
}

.form {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.field {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.field label {
  font-size: 13px;
  font-weight: 600;
  color: #333;
}

.input-box {
  position: relative;
  display: flex;
  align-items: center;
}

.input-box i:first-child {
  position: absolute;
  left: 14px;
  color: #999;
  font-size: 18px;
}

.input-box input {
  width: 100%;
  padding: 12px 14px 12px 44px;
  border: 1px solid #ddd;
  border-radius: 10px;
  font-size: 15px;
  background: #fff;
  transition: border-color 0.2s;
}

.input-box input:focus {
  outline: none;
  border-color: #ff385c;
}

.input-box input[type="password"] {
  padding-right: 44px;
}

.toggle-btn {
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  color: #999;
  cursor: pointer;
  padding: 6px;
  font-size: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
}

.toggle-btn:hover {
  color: #666;
}

.terms {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  font-size: 13px;
  color: #555;
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
  font-weight: 500;
}

.terms a:hover {
  text-decoration: underline;
}

.submit-btn {
  background: #ff385c;
  color: #fff;
  border: none;
  padding: 14px;
  border-radius: 10px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s;
}

.submit-btn:hover:not(:disabled) {
  background: #e31c5f;
}

.submit-btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.spin {
  animation: spin 1s linear infinite;
}

@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

.divider {
  display: flex;
  align-items: center;
  margin: 28px 0;
  color: #999;
  font-size: 13px;
}

.divider::before,
.divider::after {
  content: '';
  flex: 1;
  height: 1px;
  background: #e8e8e8;
}

.divider span {
  padding: 0 16px;
}

.social {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
}

.social-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 10px;
  background: #fff;
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
  color: #333;
  transition: border-color 0.2s, background 0.2s;
}

.social-btn:hover {
  border-color: #bbb;
  background: #f8f8f8;
}

.social-btn i {
  font-size: 18px;
}

.social-btn.google i {
  color: #ea4335;
}

.social-btn.facebook i {
  color: #1877f2;
}

.footer {
  text-align: center;
  margin-top: 28px;
  padding-top: 24px;
  border-top: 1px solid #e8e8e8;
  font-size: 14px;
  color: #666;
}

.link {
  color: #ff385c;
  font-weight: 600;
  text-decoration: none;
}

.link:hover {
  text-decoration: underline;
}

@media (max-width: 480px) {
  .auth-page {
    padding: 20px 16px;
  }
  
  .auth-card {
    padding: 32px 24px;
    border-radius: 12px;
  }
  
  .title {
    font-size: 24px;
  }
  
  .social {
    grid-template-columns: 1fr;
  }
}
</style>
