import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

Vue.filter('contador', valor => {	
		const arr = valor.split(' ');
		return arr.map(valor => `${valor} (${valor.length})`).join(' ')
	}
)
new Vue({
	render: h => h(App),
}).$mount('#app')
