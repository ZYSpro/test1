import type { App } from 'vue'

import { createRouter, createWebHashHistory } from 'vue-router'

export const constantRoutes = []

const router = createRouter({
  history: createWebHashHistory(),
  routes: constantRoutes
})

export function setupRouter(app: App): void {
  app.use(router)
}

export default router
