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
</template>

<script>
import { ref, computed, onMounted } from 'vue';

export default {
  setup() {
    const data = ref(null);
    const userCountry = ref(null);

    const photoUrl = computed(() => {
      return data.value ? import.meta.env.BASE_URL + data.value.photo : '';
    });

    const description = computed(() => {
      if (data.value) {
        return userCountry.value === 'CA' ? data.value.description.CA : data.value.description.autre;
      }
      return '';
    });

    const adresse = computed(() => {
      if (data.value) {
        return userCountry.value === 'CA' ? data.value.adresse.CA : data.value.adresse.autre;
      }
      return '';
    });

    const telephone = computed(() => {
      if (data.value) {
        return userCountry.value === 'CA' ? data.value.telephone.CA : data.value.telephone.autre;
      }
      return '';
    });

    onMounted(async () => {
      try {
        const response = await fetch('https://ipinfo.io/json'); // Utilisation de ipinfo.io (vous pouvez en choisir un autre)
        const result = await response.json();
        userCountry.value = result.country; // Récupère le code du pays (ex: "CA", "FR", etc.)
      } catch (error) {
        console.error("Erreur lors de la récupération de la localisation :", error);
        userCountry.value = 'autre'; // En cas d'erreur, on utilise la description par défaut
      }

      const presentationResponse = await fetch(import.meta.env.BASE_URL + 'data/presentation.json');
      data.value = await presentationResponse.json();
    });

    return { data, photoUrl, description, userCountry, adresse, telephone };
  }
}
</script>