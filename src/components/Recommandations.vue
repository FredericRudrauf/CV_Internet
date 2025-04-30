<template>
    <div class="row">
      <div class="col-md-6 mb-3" v-for="lettre in lettres" :key="lettre.fichier">
        <div class="card p-3 shadow-sm">
          <h5>{{ lettre.entreprise }}</h5>
          <p>{{ lettre.description }}</p>
          <a :href="lettre.fichier" class="btn btn-outline-secondary" download>Télécharger la lettre</a>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return { lettres: [] }
    },
    mounted() {
      fetch('/data/recommandations.json')
        .then(res => res.json())
        .then(json => { this.lettres = json });
    }
  }
  </script>
  