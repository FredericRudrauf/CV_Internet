<template>
    <div class="row g-4">
      <div class="col-12 col-md-6 col-lg-4" v-for="exp in experiences" :key="exp.poste + exp.entreprise">
        <div class="card p-3 shadow-sm card-experience">
          <div class="d-flex align-items-center mb-2">
            <img :src="exp.logo" alt="Logo" class="logo-experience me-3">
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
      fetch(import.meta.env.BASE_URL + 'data/experiences_informatique.json')
        .then(res => res.json())
        .then(json => { this.experiences = json });
    }
  }
  </script>

<style scoped>
.card-experience {
  min-height: 300px; /* hauteur minimum pour uniformiser les cartes */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: transform 0.3s ease, box-shadow 0.3s ease; /* transition douce */
}

.card-experience:hover {
  transform: translateY(-5px) scale(1.02); /* léger saut et zoom */
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2); /* ombre plus marquée */
}

.logo-experience {
  width: 80px;
  height: 80px;
  object-fit: contain; /* très important pour que les logos ne soient PAS déformés */
  border-radius: 8px;
}
</style>
