/**
*  Vue mixin
*/
import config from '../../config/config';

export default {
    computed: {
        // 判断用户权限
        isRoot () {
            return this.$store.state.user.type == config.user.TYPE_ROOT;
        },
        isFE () {
            return this.$store.state.user.type == config.user.TYPE_FE;
        },
        isServer () {
            return this.$store.state.user.type == config.user.TYPE_Server;
        },
        // 分页
        pagSizes () {
            return [ 10, 20, 30 ];
        }
    },
    methods: {
        goToHome () {   // 去首页
            this.$router.push({ name: 'home' });
        }
    }
}