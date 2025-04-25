<template>
  <div class="row">
    <div class="col-md-4 mb-3" v-for="item in formations" :key="item.titre">
      <div class="card h-100 p-3 shadow-sm">
        <img :src="item.logo" class="card-img-top mb-2" :alt="item.ecole">
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
    fetch('/src/data/formations.json')
      .then(res => res.json())
      .then(json => { this.formations = json });
  }
}
</script>
