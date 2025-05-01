import { createRouter, createWebHistory } from 'vue-router'
import Presentation from '../components/Presentation.vue'
import Formations from '../components/Formations.vue'
import Experiences from '../components/Experiences.vue'
import Loisirs from '../components/Loisirs.vue'
import Competences from '../components/Competences.vue'
import Recommandations from '../components/Recommandations.vue'
import APropos from '../components/APropos.vue'
import ExperiencesInformatique from '../components/ExperiencesInformatique.vue'
import ExperiencesComptable from '../components/ExperiencesComptable.vue'

const routes = [
  { path: '/', redirect: '/presentation' },
  { path: '/presentation', component: Presentation },
  { path: '/formations', component: Formations },
  { path: '/experiences', component: Experiences },
  { path: '/experiences-informatique', component: ExperiencesInformatique },
  { path: '/experiences-comptable', component: ExperiencesComptable },
  { path: '/loisirs', component: Loisirs },
  { path: '/competences', component: Competences },
  { path: '/recommandations', component: Recommandations },
  { path: '/apropos', component: APropos }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
