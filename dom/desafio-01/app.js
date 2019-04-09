new Vue({
    el: '#desafio',
    data: {
        name: 'Gabriel',
        idade: 30,
        image: 'https://sm.ign.com/ign_br/image/t/top-10-nar/top-10-naruto-characters_2rfj.jpg'
    }, 
    methods:{
        random(){
            return Math.random()
        }
    }
})