<template>
    <div class="test">
        <div class="btn" @click="clickhandle" @touchstart="touchhandle">按钮</div>
    </div>
</template>
<script>
    export default {
        name:'test',
        data:function () {
            return {

            }
        },
        methods:{
            clickhandle:function () {
                console.log('click',new Date().getTime())
            },
            touchhandle:function () {
                console.log('touch start',new Date().getTime());
            }

        }
    }
</script>
<style scoped>
    .test{
        margin-top:50px;
    }
    .btn {
        margin:0 auto;
        height:50px;
        width:160px;
        background-color: #ffaa23;
        color:#ffffff;
        border-radius: 10px;
        text-align: center;
        line-height:50px;
    }

</style>