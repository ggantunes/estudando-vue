export default {
    data() {
		return{
            nome: 'gabriel guimaraes antunesss',
            
		}
	},
    computed: {
		c1() {
			const arr = this.nome.split(' ').join(',')
			return arr
		},
		c2() {
			const arr = this.nome.split(' ');
			return arr.map(valor => `${valor} (${valor.length})`).join(' ')
		}
	}
}