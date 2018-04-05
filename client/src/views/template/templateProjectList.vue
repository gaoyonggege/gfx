<!-- 模版项目列表 -->
<template>
    <section class="page template-group">
        <Breadcrumb></Breadcrumb>

        
    </section>
</template>

<script>
import Breadcrumb from '../components/breadcrumb.vue';

export default {
    data () {
        return {

        }
    },
    beforeRouteEnter ( to, from, next ) {
        let groupName = to.query.group;
        if ( !groupName ) {
            return next({ name: 'home' });
        }
        
        next( ( vm ) => {
            vm.init(groupName);                                                                       
        } );
    },
    methods: {
        init ( groupName ) {
            if ( !groupName ) {
                return false;
            }


        }
    },
    components: {
        Breadcrumb
    }
}
</script>

<style lang="scss" scoped>
    .template-group {
        
    }
</style>