<template>
    <div class="row">
      <div class="col-md-6 mb-3" v-for="lettre in lettres" :key="lettre.fichier">
        <div class="card p-3 shadow-sm">
          <h5>{{ lettre.entreprise }}</h5>
          <p>{{ lettre.description }}</p>
          <a :href="lettre.fichierUrl" class="btn btn-outline-secondary" download>Télécharger la lettre</a>
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
      fetch(import.meta.env.BASE_URL + 'data/recommandations.json')
        .then(res => res.json())
        .then(json => {
          // Ajouter le chemin complet de l'image à chaque formation
          this.lettres = json.map(lettre => ({
            ...lettre,
            fichierUrl: import.meta.env.BASE_URL + lettre.fichier
          }));
        });
    }
  }
  </script>
  