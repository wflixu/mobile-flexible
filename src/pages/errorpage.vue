<template>
    <div class="errorpage">
        <h2>登录过期</h2>
        <p>
        请点击返回首页按钮，重新登录！
        </p>
        <div class="btn" @click="gotoActivity">返回首页</div>
    </div>
</template>

<script>
export default {
  data: function() {
    return {};
  },
  methods:{
     gotoActivity:function(){
          nativeMethod.finishActivity();
     }    
  }
};
</script>
<style lang="postcss" scoped>
   .errorpage{
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            margin:0 auto;
            position: absolute;
            bottom:12%;
        }
        .errorpage>h2{
            width: 80%;
            font-size:28px;
            color:#696969;
            margin-bottom:25px;
            text-align: center;
        }
        .errorpage>p{
            color:#ACACAD;
            width:75%;
            text-align: center;
            font-size: 18px;
            line-height: 32px;
            margin-bottom:24px;
        }
        .errorpage>.btn{
            height:58px;
            width: 156px;
            background-color: #FFAA23;
            border-radius: 28px;
            color:#ffffff;
            font-size: 24px;
            line-height: 58px;
            text-align: center;
        }

</style>


