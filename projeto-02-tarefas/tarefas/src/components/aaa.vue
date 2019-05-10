<template>
    <div class="new-task">
        <input class="form-element" type="text">
        <button class="form-element">+</button>
   </div>
</template>

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
