/**
*  Vue mixin
*/

export default {
    computed: {
        headerRowStyle () {
            return {
                backgroundColor: '#f5f7fa'
            };
        },
        role () {
            return this.$store.state.user.uroles;
        }
    },
    filters: {
        emptyStr ( str ) {
            return str ? str : '--';
        }
    },
    methods: {
        goToHome () {   // 去首页
            this.$router.push({ name: 'home' });
        }
    }
}