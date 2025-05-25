<template>
    <div v-if="data" class="card p-4 shadow-sm">
      <h3>À propos de ce site</h3>
      <p><strong>Date de la dernière mise à jour :</strong> {{ data.mise_a_jour }}</p>
      <p><strong>Développeur :</strong> {{ data.developpeur }}</p>
      <p><strong>Technologies utilisées :</strong> {{ data.technologies.join(', ') }}</p>
      <p><strong>Objectifs :</strong> {{ data.objectifs }}</p>
    </div>

    <!-- Zone de téléchargement du CV -->
    <div v-if="data" class="card p-4 shadow-sm mt-2">
      
      <h5>Télécharger mon CV</h5>
      <p>
        Vous pouvez télécharger mon CV complet au format PDF en cliquant sur le lien ci-dessous :
      </p>
      <a href="docs/CV_Frederic.pdf" target="_blank" class="btn btn-primary" download>
        📄 Télécharger le CV (PDF)
      </a>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return { data: null }
    },
    mounted() {
      fetch(import.meta.env.BASE_URL + 'data/apropos.json')
        .then(res => res.json())
        .then(json => { this.data = json });
    }
  }
  </script>
  