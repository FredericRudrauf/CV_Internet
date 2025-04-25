<template>
  <div>
    <Navbar />
    <main class="container py-4">
      <router-view />
    </main>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'

export default {
  name: 'App',
  components: {
    Navbar
  }
}
</script>

<style>
body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background: #fff;
  margin: 0;
  padding: 0;
}
section {
  margin-bottom: 4rem;
}
</style>

