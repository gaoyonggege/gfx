<!-- 模版管理主页面 -->
<template>
    <section class="page group">
        <p class="page-title">源码/组列表</p>
        <Groups ref="groups" @click="groupClick"></Groups>
    </section>
</template>

<script>
import Groups from '../components/groups.vue';
import { createSourceProjectListRoute } from '../../utils/route';
import mixin from '../mixins/mixin';

export default {
    data () {
        return {
            
        };
    },
    mixins: [ mixin ],
    methods: {
        groupClick ( group ) {
            if ( !group ) {
                return false;
            }
            let groupName = group.name;
            const route = createSourceProjectListRoute(groupName);
            this.$router.push(route);
        }     
    },
    components: {
        Groups    
    },
    mounted () {
        // 请求列表
        this.$refs['groups'].init();
    },
}
</script>

<style lang="scss" scoped>
    .group {
        .head {
            
        }    
    }       
</style>