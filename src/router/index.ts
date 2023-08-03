import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomePage from '@/views/portal/app/main/home/HomePage.vue'
import guard from "@/router/middleware/guard";
const routes: Array<RouteRecordRaw> = [
  {
    path: '/inicio',
    name: 'HomePage',
    component: HomePage,
    beforeEnter: [
      guard,
    ]
  },
  {
    path: '/rv/inicio',
    name: 'RVHomePage',
    component: () => import('@/views/portal/app/ageRV/home/HomePage.vue'),
    beforeEnter: [
      guard,
    ]
  },
  {
    path: '/rv/b2c/inicio',
    name: 'PresentationModule',
    component: () => import('@/views/portal/app/ageRV/home/PrensetationModule.vue'),
    beforeEnter: [
      guard,
    ]
  },
  {
    path: '/rv/b2c/vendas',
    name: 'SalesPage',
    component: () => import('@/views/portal/app/ageRV/b2c/sales/SalesPage.vue'),
    beforeEnter: [
      guard,
    ]
  },
  {
    path: '/dashboards/inicio',
    name: 'DashboardHomePage',
    component: () => import('@/views/portal/app/ageDashboard/home/HomePage.vue'),
    beforeEnter: [
      guard,
    ]
  },
  {
    path: '/relatorios/inicio',
    name: 'ReportHomePage',
    component: () => import('@/views/portal/app/ageReport/home/HomePage.vue'),
    beforeEnter: [
      guard,
    ]
  },
  {
    path: '/ferramentas/inicio',
    name: 'ToolsHomePage',
    component: () => import('@/views/portal/app/ageTools/home/HomePage.vue'),
    beforeEnter: [
      guard,
    ]
  },
  {
    path: '/comunica/inicio',
    name: 'CommunicateHomePage',
    component: () => import('@/views/portal/app/ageCommunicate/home/HomePage.vue'),
    beforeEnter: [
      guard,
    ]
  },
  {
    path: '/ajuda/inicio',
    name: 'HelpHomePage',
    component: () => import('@/views/portal/app/ageHelp/home/HomePage.vue'),
    beforeEnter: [
      guard,
    ]
  },
  {
    path: '/:catchAll(.*)',
    redirect: '/inicio' // Redireciona para a rota principal (Home) quando a rota não existe
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
