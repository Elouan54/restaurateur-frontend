<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { api } from '../services/api'

const restaurants = ref<any[]>([])

const fetchRestaurants = async () => {
  const response = await api.get('/restaurants')
  restaurants.value = response.data
}

onMounted(() => {
  fetchRestaurants()
})
</script>

<template>
  <div>
    <h1 class="text-2xl font-bold mb-6">Restaurants</h1>

    <div class="bg-white shadow rounded-lg overflow-hidden">
      <table class="w-full text-left">
        <thead class="bg-gray-100">
          <tr>
            <th class="p-3">ID</th>
            <th class="p-3">Nom</th>
            <th class="p-3">Ville</th>
          </tr>
        </thead>

        <tbody>
          <tr
            v-for="restaurant in restaurants"
            :key="restaurant.id"
            class="border-t hover:bg-gray-50"
          >
            <td class="p-3">{{ restaurant.id }}</td>
            <td class="p-3">{{ restaurant.nom }}</td>
            <td class="p-3">{{ restaurant.ville }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>