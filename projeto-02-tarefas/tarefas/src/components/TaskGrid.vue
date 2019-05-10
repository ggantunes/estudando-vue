<template>
    <div class="task-grid">
        <template>
            <div class="task" v-for="task in tasks" :key="task.name">{{ task.name }}</div>
        </template>
    </div>
</template>

<script>
export default {
    props: {
        tasks: { type: Array, required: true}
    }
}
</script>

<style>
    .task-grid {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
    }

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
</style>
