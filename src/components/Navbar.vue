<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light sticky-top shadow-sm">
    <div class="container-fluid">
      <router-link class="navbar-brand fw-bold" to="/presentation">Mon CV</router-link>

      <!-- Bouton hamburger -->
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
              aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <!-- Liens du menu -->
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link class="nav-link" to="/presentation">Présentation</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/formations">Formations</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/competences">Compétences</router-link>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="expDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Expériences
            </a>
            <ul class="dropdown-menu">
              <li><router-link class="dropdown-item" to="/experiences-informatique">Informatique</router-link></li>
              <li><router-link class="dropdown-item" to="/experiences-comptable">Comptable</router-link></li>
            </ul>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/loisirs">Loisirs</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/recommandations">Lettres de recommandation</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/apropos">À propos</router-link>
          </li>
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
