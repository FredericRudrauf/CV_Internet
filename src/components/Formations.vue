<template>
  <div class="row g-4">
    <div class="col-12 col-md-6 col-lg-4" v-for="item in formations" :key="item.titre">
      <div class="card card-formation p-3 shadow-sm text-center">
        <img :src="item.logoUrl" class="img-formation mb-3" :alt="item.ecole">        
        <div class="card-body">
          <h5 class="card-title">{{ item.titre }} ({{ item.annee }})</h5>
          <h6 class="card-subtitle mb-2 text-muted">{{ item.ecole }}</h6>
          <p class="card-text">{{ item.description }}</p>
          <a :href="item.lien" class="btn btn-primary" target="_blank">Voir l'école</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formations: []
    }
  },  
  mounted() {
    fetch(import.meta.env.BASE_URL + 'data/formations.json')
        .then(res => res.json())
        .then(json => {
          // Ajouter le chemin complet de l'image à chaque formation
          this.formations = json.map(item => ({
            ...item,
            logoUrl: import.meta.env.BASE_URL + item.logo
          }));
        });
    }
}
</script>

<style scoped>
.card-formation {
  min-height: 350px; /* ajusté pour formations */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card-formation:hover {
  transform: translateY(-5px) scale(1.02);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

.img-formation {
  width: 100%;
  height: 150px;
  object-fit: contain; /* très important pour les logos d'école */
  border-radius: 8px;
}
</style>
