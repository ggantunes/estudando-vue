import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
Vue.filter('inverter', valor =>{
	return valor.split('').reverse().join('')
})

Vue.mixin({
	created() {
        console.log('MIXIN GLOBAL')
    }
})
new Vue({
	render: h => h(App)
}).$mount('#app')
