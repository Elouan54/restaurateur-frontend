<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()

const logout = () => {
  localStorage.removeItem('token')
  router.push('/login')
}

const token = localStorage.getItem('token')
</script>

<template>
  <aside class="w-64 bg-gray-900 text-white min-h-screen p-4">

    <h1 class="text-xl font-bold mb-6">
      Resto SaaS
    </h1>

    <nav class="space-y-2">

      <router-link
        to="/"
        class="block px-3 py-2 rounded hover:bg-gray-700"
      >
        Dashboard
      </router-link>

      <router-link
        to="/restaurants"
        class="block px-3 py-2 rounded hover:bg-gray-700"
      >
        Restaurants
      </router-link>

      <!-- LOGIN -->
      <router-link
        v-if="!token"
        to="/login"
        class="block px-3 py-2 rounded hover:bg-gray-700"
      >
        Login
      </router-link>

      <!-- LOGOUT -->
      <button
        v-if="token"
        @click="logout"
        class="block w-full text-left px-3 py-2 rounded hover:bg-gray-700"
      >
        Logout
      </button>

    </nav>

  </aside>
</template>