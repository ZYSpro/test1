import type { App } from 'vue'
import { setupPermissionDirective } from './permission'

export function setupGlobDirectives(app: App): void {
  // 权限指令 v-auth
  setupPermissionDirective(app)
}
