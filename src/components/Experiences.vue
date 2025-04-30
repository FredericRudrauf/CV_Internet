<template>
  <div class="row">
    <div class="col-md-6 mb-3" v-for="exp in experiences" :key="exp.poste">
      <div class="card p-3 shadow-sm">
        <div class="d-flex align-items-center mb-2">
          <img :src="photoUrl" alt="Logo" width="50" class="me-3">
          <div>
            <h5 class="mb-0">{{ exp.poste }}</h5>
            <small>{{ exp.entreprise }} ({{ exp.debut }} - {{ exp.fin }})</small>
          </div>
        </div>
        <p>{{ exp.description }}</p>
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
  computed: {
    photoUrl() {
      return this.data ? import.meta.env.BASE_URL + this.exp.logo : '';
    }
  },
  mounted() {
    fetch(import.meta.env.BASE_URL + 'data/experiences.json')
      .then(res => res.json())
      .then(json => { this.experiences = json });
  }
}
</script>
