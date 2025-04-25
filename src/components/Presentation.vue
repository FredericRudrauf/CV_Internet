<template>
  <div v-if="data" class="card p-4 shadow-sm">
    <img :src="data.photo" class="rounded-circle mb-3" alt="Photo de Frédéric" width="150">
    <h3>{{ data.nom }}</h3>
    <p><strong>Adresse :</strong> {{ data.adresse }}</p>
    <p><strong>Téléphone :</strong> {{ data.telephone }}</p>
    <p><strong>Email :</strong> {{ data.email }}</p>
    <p><strong>LinkedIn :</strong> <a :href="data.linkedin" target="_blank">{{ data.linkedin }}</a></p>
    <p>{{ data.description }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: null
    }
  },
  mounted() {
    fetch('/src/data/presentation.json')
      .then(res => res.json())
      .then(json => { this.data = json });
  }
}
</script>
