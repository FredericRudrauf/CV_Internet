<template>
  <div v-if="data" class="card p-4 shadow-sm">
    <img :src="photoUrl" class="rounded-circle mb-3" alt="Photo de Frédéric" width="150">
    <h3>{{ data.nom }}</h3>
    <p><strong>Adresse :</strong> {{ adresse }}</p>
    <p><strong>Téléphone :</strong> {{ telephone }}</p>
    <p><strong>Email :</strong> <a :href="'mailto:' + data.email">{{ data.email }}</a></p>
    <p><strong>LinkedIn :</strong> <a :href="data.linkedin" target="_blank">{{ data.linkedin }}</a></p>
    <p>{{ description }}</p>
  </div>
  <div v-else>
    Chargement des données...
  </div>
</template>

<script>
import { ref, computed, onMounted } from 'vue';

export default {
  setup() {
    const data = ref(null);
    const userCountry = ref(null);
    const loadingError = ref(null); // Pour gérer les erreurs de chargement

    const photoUrl = computed(() => {
      return data.value ? import.meta.env.BASE_URL + data.value.photo : '';
    });

    const description = computed(() => {
      if (data.value && data.value.description) {
        return userCountry.value === 'CA' ? data.value.description.CA : data.value.description.autre;
      }
      return '';
    });

    const adresse = computed(() => {
      if (data.value && data.value.adresse) {
        return userCountry.value === 'CA' ? data.value.adresse.CA : data.value.adresse.autre;
      }
      return '';
    });

    const telephone = computed(() => {
      if (data.value && data.value.telephone) {
        return userCountry.value === 'CA' ? data.value.telephone.CA : data.value.telephone.autre;
      }
      return '';
    });

    onMounted(async () => {
      try {
        const geoResponse = await fetch('https://ipinfo.io/json');
        const geoResult = await geoResponse.json();
        userCountry.value = geoResult.country;
      } catch (geoError) {
        console.error("Erreur de géolocalisation :", geoError);
        userCountry.value = 'autre'; // Fallback
      }

      try {
        const presentationResponse = await fetch(import.meta.env.BASE_URL + 'data/presentation.json');
        if (!presentationResponse.ok) {
          throw new Error(`HTTP error! status: ${presentationResponse.status}`);
        }
        data.value = await presentationResponse.json();
      } catch (presentationError) {
        console.error("Erreur de récupération des données :", presentationError);
        loadingError.value = "Impossible de charger les données.";
      }
    });

    return { data, photoUrl, description, userCountry, adresse, telephone, loadingError };
  }
}
</script>