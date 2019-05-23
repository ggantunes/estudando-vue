<template>
    <div>
       <Rotulo nome="Nome">						
            <input :value="value.nome" 
                   @input="alterarNome" type="text">
        </Rotulo>
        <Rotulo nome="Sobrenome">
            <input :value="value.sobrenome" 
                   @input="alterarSobreNome" type="text">
        </Rotulo>
    </div>
</template>

<script>
import Rotulo from './Rotulo.vue'

export default {
    components: { Rotulo },
    methods: {
        alterarNome(event) {
            this.$emit('input', {
                nome: event.target.value, 
                sobrenome: this.value.sobrenome
            })
        },
        alterarSobreNome(event) {
            this.$emit('input', {
                nome: this.value.nome, 
                sobrenome: event.target.value
            })
        }
    },
    props: {
        value: {
            type: Object,
            required: true
        }
    }
}
</script>

<style>

</style>
