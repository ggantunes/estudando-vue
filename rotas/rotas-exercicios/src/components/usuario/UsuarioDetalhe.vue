<template>
    <div class="usuario-detalhe">
        <h3>Usuario Detalhe</h3>
        <p><strong>Código:</strong> {{ id }}</p>
        
        <router-link tag="button" primario 
            :to="{ name: 'editarUsuario', params: { id }, 
                query: { completo: true, lingua: 'pt'},
                hash: '#rodape' }">
            Editar
        </router-link>
    </div>
</template>

<script>
export default {
    props: ['id'],
    beforeRouteEnter(to, from, next) {
        console.log('dentro do component -> usuario detalhe')
        // next(vm => {
        //     console.log(vm.id)
        // })
        const autenticado = true
        autenticado ? next() : next(false)
    }
    /*data() {
        return {
            id: this.$route.params.id
        }
    },
    watch: {
        $route(to, from) {
            this.id = to.params.id
        }
    },*/
}
</script>

<style>

</style>
