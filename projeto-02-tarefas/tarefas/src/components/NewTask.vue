<template>
    <div class="new-task">
        <input placeholder="Nova tarefa?" @keydown.enter="add" v-model="name" class="form-element" type="text">
        <button @click="add" class="form-element">+</button>
   </div>
</template>

<script>
export default {
    data() {
		return{
			name: ''
		}
	},
    methods: {
		add(event){
            this.$emit('taskAdded', {name: this.name})
            this.name = ''
			//this.tasks.push({name: event, pending: true})
		}
	}
}
</script>

<style>

    input.form-element {
        width: 500px;
        background: #FFF2;
        border-top-left-radius: 8px;
        border-bottom-left-radius: 8px;
    }
    
    .form-element {
        outline: none;
        font-size: 2rem;
        border: 1px solid #FFF;
        padding: 5px 10px 8px;        
        color: #FFF
    }
    button.form-element {
        border-left: none;
        background-color: #2196F3;
        border-top-right-radius: 8px;
        border-bottom-right-radius: 8px;
    }
    .new-task {
        margin: 35px;
    }
</style>
