import { createApp } from 'vue'
import App from './App.vue'

import { setupGlobDirectives } from 'directives/index'
import { registerElement } from 'plugins/component'

import { setupRouter } from 'router/index'

const app = createApp(App)
;(function () {
  // 注册指令
  setupGlobDirectives(app)

  // 注册组件
  registerElement(app)

  // 注册路由
  setupRouter(app)

  app.mount('#app')
})()
