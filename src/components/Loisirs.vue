<template>
  <div class="row">
    <div class="col-md-4 mb-3" v-for="item in loisirs" :key="item.nom">
      <div class="card h-100 p-3 shadow-sm">
        <img :src="item.image" width="200" class="card-img-top mb-2" :alt="item.nom">
        <div class="card-body">
          <h5 class="card-title">{{ item.nom }}</h5>
          <p class="card-text">{{ item.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loisirs: []
    }
  },
  mounted() {
    fetch('/src/data/loisirs.json')
      .then(res => res.json())
      .then(json => { this.loisirs = json });
  }
}
</script>
