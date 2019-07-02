<template>
	<div id="app">
		<h1>Filtros & Mixins (Desafio)</h1>
		<!-- Exercício 1 -->
		<!-- Construir um filtro local que troca espaços por vírgula -->
		<p>{{ nome | filter1 }}</p>
		
		
		<!-- Exercício 2 -->
		<!-- Filtro global que conta o tamanho de cada palavra e adiciona o 
			valor na string final -->
		<!-- "Pedro é legal" => "Pedro (5) é (1) legal (5)" -->
		<p>{{ 'gabriel é palmeiras' | contador }}</p>

		<!-- Exercício 3 -->
		<!-- Implementar os exercicios 1 e 2 com propriedade computada -->

		Nome computado mixin:
		<p>{{ c1 }}</p> 
		<p>{{ c3 }}</p> 

		Nome computado 3 e 4:
		<p>{{ c3 }}</p> 
		<p>{{ c4 }}</p> 

		
		

		<!-- Exercício 4 -->
		<!-- Compartilhe a propriedade computada via mixin -->

	</div>
</template>

<script>
import meuMixin from '@/meuMixin'
export default {
	mixins: [meuMixin],
	data() {
		return{
			nome: 'gabriel guimaraes antunes'
		}
	},
	
	filters: {
		filter1(value) {
			const arr = value.split(' ').join(',')
			return arr
		}
	},
	computed: {
		c3() {
			const arr = this.nome.split(' ').join(',')
			return arr
		},
		c4() {
			const arr = this.nome.split(' ');
			return arr.map(valor => `${valor} (${valor.length})`).join(' ')
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
</style>
