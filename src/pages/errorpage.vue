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
        data: function () {
            return {};
        },
        methods: {
            gotoActivity: function () {
                nativeMethod.finishActivity();
            }
        }
    };
</script>
<style lang="postcss" scoped>
    .errorpage {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 0 auto;
        position: absolute;
        bottom: 12%;
    }

    .errorpage > h2 {
        width: 80%;
        font-size: 58px;
        color: #696969;
        margin-bottom: 50px;
        text-align: center;
    }

    .errorpage > p {
        color: #ACACAD;
        width: 75%;
        text-align: center;
        font-size: 32px;
        line-height: 64px;
        margin-bottom: 48px;
    }

    .errorpage > .btn {
        height: 116px;
        width: 312px;
        background-color: #FFAA23;
        border-radius: 56px;
        color: #ffffff;
        font-size: 48px;
        line-height: 116px;
        text-align: center;
    }

</style>


