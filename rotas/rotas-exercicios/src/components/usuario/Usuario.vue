<template>
    <div class="usuario">
        <h2>Usuario</h2>
        <hr>
        <router-view />
        <button @click="irParaInicio" sucesso>Voltar</button>
    </div>
</template>

<script>
export default {
    methods: {
        irParaInicio(){
            this.$router.push({path: '/'})
        }
    }
}
</script>

<style>

</style>
