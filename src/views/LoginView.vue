<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import axios from 'axios'

const router = useRouter()

const email = ref('')
const password = ref('')
const error = ref('')

const login = async () => {
  try {
    const response = await axios.post('https://localhost:8000/api/login_check', {
      email: email.value,
      password: password.value
    })

    const token = response.data.token

    localStorage.setItem('token', token)

    
    console.log(localStorage)

    router.push('/')
  } catch (e) {
    error.value = 'Email ou mot de passe incorrect'
  }
}
</script>

<template>
  <div class="flex items-center justify-center min-h-screen bg-gray-100">
    <div class="bg-white p-8 rounded shadow w-96">

      <h1 class="text-2xl font-bold mb-6 text-center">
        Connexion
      </h1>

      <form @submit.prevent="login" class="space-y-4">

        <input
          v-model="email"
          type="email"
          placeholder="Email"
          class="w-full border p-2 rounded"
        />

        <input
          v-model="password"
          type="password"
          placeholder="Mot de passe"
          class="w-full border p-2 rounded"
        />

        <button
          class="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          Se connecter
        </button>

      </form>

      <p v-if="error" class="text-red-500 mt-4 text-center">
        {{ error }}
      </p>

    </div>
  </div>
</template>