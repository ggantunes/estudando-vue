new Vue({
    el: '#desafio',
    data: {
        valor: ''
    },
    methods: {
        alerta() {
            alert("alerta")
        },
        armazenaValor(e) {
            this.valor = e.target.value
        }
    }
})