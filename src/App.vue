<template>
    <div id="app">
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: 'App',
        components: {}
    };
</script>

<style>
    body {
        background-image: url("./assets/err_bg.png");
        background-size: 100% 100%;
        background-repeat: no-repeat;
        background-position: center center;
    }
</style>
