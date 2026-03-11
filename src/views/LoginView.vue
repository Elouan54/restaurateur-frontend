<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-100">
    <div class="bg-white p-8 rounded shadow-md w-full max-w-sm">
      <h2 class="text-2xl font-bold mb-6 text-center">Connexion Restaurateur</h2>

      <form @submit.prevent="handleLogin">
        <div class="mb-4">
          <label class="block text-gray-700 mb-2" for="username">Email</label>
          <input
            v-model="username"
            type="email"
            id="username"
            placeholder="exemple@mail.com"
            class="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div class="mb-6">
          <label class="block text-gray-700 mb-2" for="password">Mot de passe</label>
          <input
            v-model="password"
            type="password"
            id="password"
            placeholder="••••••••"
            class="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <button
          type="submit"
          class="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition"
        >
          Se connecter
        </button>

        <p v-if="errorMessage" class="text-red-500 mt-4 text-center">{{ errorMessage }}</p>
      </form>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useUserStore } from '../store/userStore'
import axios from 'axios'

// States du formulaire
const username = ref('')
const password = ref('')
const errorMessage = ref('')

const router = useRouter()
const userStore = useUserStore()

// Fonction de login
const handleLogin = async () => {
  try {
    const response = await axios.post('http://localhost:8000/api/login_check', {
      username: username.value,
      password: password.value
    })

    const token = response.data.token
    if (token) {
      // Sauvegarde le token dans Pinia et localStorage
      userStore.setToken(token)

      // Redirige vers le dashboard
      router.push({ name: 'Dashboard' })
    }
  } catch (error: any) {
    // Gestion d'erreur
    errorMessage.value = error.response?.data?.message || 'Erreur de connexion'
  }
}
</script>

<style scoped>
/* Style supplémentaire si besoin */
</style>