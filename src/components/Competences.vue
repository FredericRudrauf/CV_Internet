<template>
    <div>
      <h3>Compétences Informatiques</h3>
      <P></P>
      <div v-if="data">
        <h5>Maintenance & Support</h5>
        <ul><li v-for="item in data.informatique.maintenance_support" :key="item">{{ item }}</li></ul>
  
        <h5>Développement</h5>
        <ul><li v-for="item in data.informatique.developpement" :key="item">{{ item }}</li></ul>
  
        <h5>Bases de données</h5>
        <ul><li v-for="item in data.informatique.bases_donnees" :key="item">{{ item }}</li></ul>
  
        <h5>Réseau / Administration</h5>
        <ul><li v-for="item in data.informatique.reseau_administration" :key="item">{{ item }}</li></ul>

        <h5>Certifications</h5>
        <ul><li v-for="item in data.informatique.certification" :key="item">{{ item }}</li></ul>
      </div>
  
      <h3 class="mt-4">Compétences Comptables</h3>
      <p></p>
      <div v-if="data">
        <h5>Types de comptabilité</h5>
        <ul><li v-for="item in data.comptabilite.types" :key="item">{{ item }}</li></ul>
  
        <h5>Fiscalité</h5>
        <ul><li v-for="item in data.comptabilite.fiscalite" :key="item">{{ item }}</li></ul>

        <h5>Secteurs d'activité</h5>
        <ul><li v-for="item in data.comptabilite.secteurs" :key="item">{{ item }}</li></ul>
  
        <h5>Types d'entreprises</h5>
        <ul><li v-for="item in data.comptabilite.entreprises" :key="item">{{ item }}</li></ul>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return { data: null }
    },
    mounted() {
      fetch('${import.meta.env.BASE_URL}data/competences.json')
        .then(res => res.json())
        .then(json => { this.data = json });
    }
  }
  </script>
  