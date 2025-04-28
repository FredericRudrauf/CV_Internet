<template>
  <div class="row g-4">
    <div class="col-12 col-md-6 col-lg-4" v-for="item in loisirs" :key="item.nom">
      <div class="card card-loisir p-3 shadow-sm text-center">
        <img :src="item.image" class="img-loisir mb-3" :alt="item.nom">
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

<style scoped>
.card-loisir {
  min-height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card-loisir:hover {
  transform: translateY(-5px) scale(1.02);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

.img-loisir {
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 8px;
}
</style>
