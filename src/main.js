/*
 * 1.eslint prettier vetur配合使用
 * 2.husky对git提交commit的限制, 使用fix修复eslint
 *   npm i -D husky lint-staged @commitlint/cli(12) @commitlint/config-conventional(12)
 * 3.husky对git提交commit的限制, 使用fix修复stylelint
 *   npm i -D stylelint stylelint-scss stylelint-config-recess-order stylelint-config-standard
 */
import Vue from 'vue'
import App from './App.vue'
import '@/styles/base.css'
Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
