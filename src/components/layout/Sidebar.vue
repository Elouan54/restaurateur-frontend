<template>
  <aside class="w-64 bg-gray-900 text-white min-h-screen p-4">
    <h1 class="text-xl font-bold mb-6">Resto SaaS</h1>

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
    </nav>
  </aside>
</template>