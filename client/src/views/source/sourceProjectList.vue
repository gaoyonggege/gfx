<!-- 模版项目列表 -->
<template>
    <section class="page template-group">
        <Breadcrumb></Breadcrumb>
        <Projects ref="projects" btn-txt="源码详情" @route="goToTplList"></Projects>
    </section>
</template>

<script>
import Breadcrumb from '../components/breadcrumb.vue';
import Projects from '../components/projects.vue';
import mixin from '../mixins/mixin';
import { createSourceDetailRoute } from '../../utils/route';

export default {
    data () {
        return {
                
        }
    },
    mixins: [ mixin ],
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

            this.$refs['projects'].init( groupName );
        },
        goToTplList ( group, project ) {
            if ( !group || !project ) {
                return false;
            }
            
            let route = createSourceDetailRoute( group, project );
            this.$router.push(route);
        }
    },
    components: {
        Breadcrumb,
        Projects
    }
}
</script>

<style lang="scss" scoped>
    .template-group {
        
    }
</style>