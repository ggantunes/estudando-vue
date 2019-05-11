<template>
    <div 
        @click="$emit('taskStateChanged', task)"
        class="task" :class="stateClass">
        <span @click.stop="$emit('taskDeleted', task)" class="close">x</span>
        {{ task.name }}
    </div>
</template>

<script>
export default {
    props: {
        task: {type: Object, required: true}
    },
    computed: {
        stateClass() {
            return {
                pending: this.task.pending,
                done: !this.task.pending
            }
        }
    },
    methods: {
        setDone(event, pending) {
            this.pending = !pending
        }
    }
}
</script>

<style>
    .task {
        position: relative;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        width: 350px;
        height: 150px;
        padding: 10px;
        border-radius: 8px;
        font-size: 2rem;
        font-weight: 300;
        cursor: pointer;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
    }
    .done {
        color: #DDD;
        border-left: 12px solid green;
        background-color: #6dbb6d;
        text-decoration: line-through;
    }
    .pending {
        border-left: 12px solid red;
        background-color: #fa6767;
    }

    .pending .close {
        background-color: red
    }

    .done .close {
        background-color: green
    }

    .close {
        position: absolute;
        right: 10px;
        top: 10px;
        font-size: 0.9rem;
        font-weight: 600;
        height: 20px;
        width: 20px;
        border-radius: 10px;
        display: flex;
        justify-content: center;
    }
</style>
