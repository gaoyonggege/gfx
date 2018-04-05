<!-- 模版管理主页面 -->
<template>
    <section class="page group">
        <p class="page-title">模版/组列表</p>
        <div class="groups">
            <el-row :gutter="20">
                <el-col class="line" :span="12" v-for="(group,index) of groupListData" :key="index">
                    <div class="card" @click="goToProjectList(group)">
                        <h3 class="name">{{ group.name }}</h3>
                        <a class="desc" :title="group.desc">{{ group.desc }}</a>
                    </div>
                </el-col>
            </el-row>
        </div>
    </section>
</template>

<script>
import { newTplProjiectListRoute } from '../../utils/route';
import mixin from '../mixins/mixin';

export default {
    data () {
        return {
            groupListData: [
                { name: 'activity1', desc: '主要用于放置fe对接各类推广活动的项目' },
                { name: 'activity2', desc: '主要用于放置fe对接各类推广活动的项目' },
                { name: 'activity3', desc: '主要用于放置fe对接各类推广活动的项目' },
                { name: 'activity4', desc: '主要用于放置fe对接各类推广活动的项目' },
                { name: 'activity5', desc: '主要用于放置fe对接各类推广活动的项目' },
            ]
        };
    },
    mixins: [ mixin ],
    methods: {
        requestGroups () {
                        
        },
        goToProjectList ( group ) {
            if ( !group ) {
                return false;
            }

            const route = newTplProjiectListRoute(group);
            this.$router.push(route);
        }     
    },
    mounted () {
        // 请求列表
        this.requestGroups();
    },
}
</script>

<style lang="scss" scoped>
    .group {
        .head {
            
        }    
    }       
</style>