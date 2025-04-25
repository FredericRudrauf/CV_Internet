<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light shadow-sm sticky-top">
    <div class="container-fluid">
      <a class="navbar-brand fw-bold" href="#">Mon CV</a>
      <div class="collapse navbar-collapse">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <router-link class="nav-link" to="/presentation">Présentation</router-link>
          <router-link class="nav-link" to="/formations">Formation</router-link>
          <router-link class="nav-link" to="/competences">Compétences</router-link>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown">
              Expériences
            </a>
            <ul class="dropdown-menu">
              <li><router-link class="dropdown-item" to="/experiences-informatique">Informatique</router-link></li>
              <li><router-link class="dropdown-item" to="/experiences-comptable">Comptable</router-link></li>
            </ul>
          </li>
          <router-link class="nav-link" to="/loisirs">Loisirs</router-link>
          <router-link class="nav-link" to="/recommandations">Lettres de recommandations</router-link>
          <router-link class="nav-link" to="/apropos">À propos</router-link>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar"
};
</script>

<style scoped>
.navbar {
  margin-bottom: 2rem;
}
</style>
