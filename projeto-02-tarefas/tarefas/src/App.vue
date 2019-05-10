<template>
	<div id="app">
		<h1>Tarefas</h1>
		<TasksProgress />

		<div class="new-task">
			<input placeholder="Nova tarefa?" v-model="taskvalue" class="form-element" type="text">
			<button @click="addTask(taskvalue)" class="form-element">+</button>
   		</div>

		   <TaskGrid :tasks="tasks" />
	</div>
</template>

<script>
import TasksProgress from '@/components/TasksProgress'
import TaskGrid from '@/components/TaskGrid'

export default {
	data() {
		return{
			tasks: [{name: 'Tarefa 1'}, {name: 'Tarefa 2'}],
			taskvalue: ''
		}
	},
	components:{
		TasksProgress,
		TaskGrid
	},
	methods: {
		addTask(){
			this.tasks.push({name: $event})
		}
	}
}
</script>

<style>
	body {
		font-family: 'Lato', sans-serif;
		background: linear-gradient(to right, rgb(22, 34, 42), rgb(58, 96, 115));
		color: #FFF;
	}

	#app {
		display: flex;
		flex: 1;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		height: 100vh;
	}

	#app h1 {
		margin-bottom: 5px;
		font-weight: 300;
		font-size: 3rem;
	}

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
