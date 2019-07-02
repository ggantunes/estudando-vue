<template>
	<div id="app">
		<h1>Diretivas (Desafio)</h1>
		<hr>
		<!-- Exercício -->
		<!-- Escreva uma diretiva que funcione com o v-on (escute eventos) -->
		<button v-gabs:click="alerta">click</button>
		<p v-gabs:mouseenter="menter"
		   v-gabs:mouseleave="mleave">passe o mouse aqui</p>
	</div>
</template>

<script>
export default {
	directives: {
		gabs:{
			bind(el, binding){
				const ev = binding.arg;
				const func = binding.value
				el.addEventListener(ev, func)
				

				//binding.value.alerta
			}
		}
	}, methods: {
		alerta(){
			alert('td ok')
		},
		menter(){
			console.log('over')
		},
		mleave(){
			console.log('OUT')
		}
	}
}
</script>

<style>
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
	font-size: 2.5rem;
}

button {
	margin: 10px 0px;
	padding: 10px 20px;
	font-size: 1.4rem;
	border-radius: 5px;
	color: #FFF;
	background-color: #2196F3;
}
</style>
