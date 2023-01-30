/**
 * Global authority directive
 * Used for fine-grained control of component permissions
 * @Example v-auth="RoleEnum.TEST"
 */
import type { App, Directive, DirectiveBinding } from 'vue'

function isAuth(el: Element, binding: any) {
  const value = binding.value
  if (typeof value !== 'number') return
  // 判断权限处理
  el.parentNode && el.parentNode.removeChild(el)
}

const authDirective: Directive = {
  mounted: (el: Element, binding: DirectiveBinding<any>): void => {
    isAuth(el, binding)
  }
}

export function setupPermissionDirective(app: App): void {
  app.directive('auth', authDirective)
}

export default authDirective
