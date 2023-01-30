import type { App } from 'vue'

import ElementPlus from 'element-plus'
import * as Icons from '@element-plus/icons-vue'
import 'element-plus/dist/index.css'

import 'dayjs/locale/zh-cn'

export function registerElement(app: App): void {
  app.use(ElementPlus)
  Object.keys(Icons).forEach((key: any) => {
    app.component(key, Icons[key as keyof typeof Icons])
  })
}
