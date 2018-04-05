<template>
    <div class="breadcrumb-wrap">
        <el-button type="text" @click="goBack" icon="el-icon-arrow-left" class="goback">返回</el-button>
        <el-breadcrumb separator="/" class="breadcrumb">
            <el-breadcrumb-item v-for="(route, index) in $route.matched" v-if="route.meta.hidden" 
                :to="route.path" :key="index">{{ route.meta.name }}</el-breadcrumb-item>
        </el-breadcrumb>
    </div>
</template>

<script>
export default {
    data () {
        return {
           
        }
    },
    methods: {
        goBack () {
            this.$router.back();
        }
    }
}
</script>

<style lang="scss" scoped>
@import '../../style/common.scss';

.breadcrumb-wrap {
    overflow: hidden;
    background: $mainview-background-color;
    box-shadow: 0 1px 0 0 rgb(156, 170, 169);
    padding: 18px 0 18px 20px;

    .goback {
        float: left;
        padding: 0;
        padding-right: 10px;
        margin: 0;
        font-size: 13px;
        color: #2d2f33;

        span {
            margin-left: 0;
        }
    }

    .breadcrumb {
        padding-left: 10px;
        border-left: 1px solid #ccc;
        float: left;

        span.el-breadcrumb__inner, span.el-breadcrumb__inner a {
            font-size: 13px;
        }
    }
}
</style>
