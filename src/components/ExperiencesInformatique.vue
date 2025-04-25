<template>
    <div class="row">
      <div class="col-md-6 mb-3" v-for="exp in experiences" :key="exp.poste + exp.entreprise">
        <div class="card p-3 shadow-sm">
          <div class="d-flex align-items-center mb-2">
            <img :src="exp.logo" alt="Logo" width="200" height="100" class="me-3">
            <div>
              <h5 class="mb-0">{{ exp.entreprise }}</h5>
              <p><small>{{ exp.lieu }} - {{ exp.contrat }}</small></p>
              <small>{{ exp.poste }} ({{ exp.debut }} - {{ exp.fin }})</small>
            </div>
          </div>
          <p>{{ exp.description }}</p>
          <p><strong>Compétences :</strong> {{ exp.competences.join(', ') }}</p>
          <a :href="exp.lien" target="_blank" class="btn btn-outline-primary">Voir l'entreprise</a>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        experiences: []
      }
    },
    mounted() {
      fetch('/src/data/experiences_informatique.json')
        .then(res => res.json())
        .then(json => { this.experiences = json });
    }
  }
  </script>