export default {
    computed: {
        usuarioLogado() {
            return 'Maria Silva'
        }
    },
    created() {
        console.log('dentro de usuario mixin')
    }
}