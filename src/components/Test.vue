<template>
    <div class="test">
        <h2>test  </h2>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia dolorem voluptate quidem consequuntur aperiam possimus iste ullam illum quos aliquid quo totam obcaecati vero sequi, reprehenderit voluptatem exercitationem laborum explicabo?</p>
        <h3>{{myword}}</h3> 
    </div>
</template>
<script>
export default {
    name:'Test',
    data:function(){
        return {
            myword:'lalal'
        }
    }
}
</script>
<style scoped>
    .test{
        height:50px;
    }
</style>


