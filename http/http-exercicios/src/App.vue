<template>
	<div id="app" class="container">
		<h1>HTTP com Axios</h1>
		<b-card>
			<b-form-group label="Nome:">
				<b-form-input type="text" size="lg"
				v-model="usuario.nome"
				placeholder="Informe o nome"></b-form-input>
			</b-form-group>
				<b-form-group label="E-mail:">
				<b-form-input type="email" size="lg"
				v-model="usuario.email"
				placeholder="Informe o E-mail"></b-form-input>
			</b-form-group>
			<hr>
			<b-button size="lg" variant="primary" class="mr-2" @click="salvar">Salvar</b-button>
			<b-button size="lg" variant="success" @click="obterUsuarios">Obter usuarios</b-button>
		</b-card>
		<hr>
		<b-list-group v-if="usuarios">
			<b-list-group-item v-for="(usuario, id) in usuarios" :key="usuario.id">
				<strong>Nome:</strong> {{usuario.nome}}: <br>	
				<strong>ID:</strong> {{id}} <br>
				<b-button variant="warning" size="lg"
					@click="carregar(id)">Carregar</b-button>
				<b-button variant="danger" class="ml-2" size="lg"
				@click="excluir(id)">Excluir</b-button>	
			</b-list-group-item>
		</b-list-group>
	</div>
</template>

<script>
export default {
	data() {
		return{
			id: null,
			usuario: {
				nome:'',
				email:''
			},
			usuarios: []
		}
	},
	methods: {
		limpar(){
			this.usuario.nome = ''
			this.usuario.email = ''
			this.id = null
		},
		salvar() {
			const metodo = this.id ? 'patch' : 'post'
			const finalUrl = this.id ? `/${this.id}.json` : '.json'
			this.$http[metodo](`/usuarios${finalUrl}`, this.usuario)
				.then(() => this.limpar())
			// this.$http.post('usuarios.json', this.usuario)
			// .then(() =>  this.limpar())
		},
		obterUsuarios() {
			this.$http.get('usuarios.json').then(res =>  {				
				this.usuarios = res.data
				
				console.log(this.usuarios)
			})
		},
		carregar(id) {
			this.id = id
			this.usuario = { ...this.usuarios[id]}
		},
		excluir(id) {
			this.$http.delete(`/usuarios/${id}.json`)
				.then(() => this.limpar() )
			//this.usuarios.splice(index, 1)
		}
	},
	created() {		
		console.log(this.usuarios.length)
		// this.$http.post('usuarios.json', {
		// 	nome: 'maria',
		// 	email: 'maria@gmail.com'
		// }).then(res => console.log(res))
		// this.$http.get('usuarios.json').then(res =>  {
		// 	console.log(res.data)
		// 	this.users = res.data
		// })
	}
}
</script>

<style>
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	color: #2c3e50;
	font-size: 1.5rem;
}

#app h1 {
	text-align: center;
	margin: 50px;
}
</style>
