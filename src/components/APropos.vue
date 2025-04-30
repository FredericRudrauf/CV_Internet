<template>
    <div v-if="data" class="card p-4 shadow-sm">
      <h3>À propos de ce site</h3>
      <p><strong>Date de la dernière mise à jour :</strong> {{ data.mise_a_jour }}</p>
      <p><strong>Développeur :</strong> {{ data.developpeur }}</p>
      <p><strong>Technologies utilisées :</strong> {{ data.technologies.join(', ') }}</p>
      <p><strong>Objectifs :</strong> {{ data.objectifs }}</p>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return { data: null }
    },
    mounted() {
      fetch('/data/apropos.json')
        .then(res => res.json())
        .then(json => { this.data = json });
    }
  }
  </script>
  