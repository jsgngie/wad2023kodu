<template>
    <div class="resetButton">
        <p>Reset likes</p>
    </div>
</template>

<script>
    export default {
  name: 'resetComponent',

};
</script>

<style scoped>
    .resetButton {
        background-color:rgb(210, 107, 107);

        margin-left: auto;
        margin-right: auto;
        margin-bottom:50px;

        height:50px;
        width: 30%;

        display:flex;
        justify-content: center;

        border-radius: 25px;
        border-style:groove;

    }

    .resetButton:hover {
        background-color:grey;
        cursor:pointer;
    }

    p {
        color:white;
        font-weight: bolder;
        text-shadow: 0 0 1px #000000, 0 0 1px #000000; 
    }

</style>
  