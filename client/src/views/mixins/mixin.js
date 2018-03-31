/**
*  Vue mixin
*/
import config from '../../config/config';

export default {
    computed: {
        isRoot () {
            return this.$store.state.user.type == config.user.TYPE_ROOT;
        },
        isFE () {
            return this.$store.state.user.type == config.user.TYPE_FE;
        },
        isServer () {
            return this.$store.state.user.type == config.user.TYPE_Server;
        },
        

    },
    methods: {
        goToHome () {   // 去首页
            this.$router.push({ name: 'home' });
        }
    }
}