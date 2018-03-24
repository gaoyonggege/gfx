<template>
    <div class="global">
       <TopBar></TopBar>

       <div class="wrap">
           <router-view></router-view>
       </div>

       <Footer></Footer>
    </div>
</template>

<script>
import TopBar from './topbar';
import Footer from './footer';

export default {
    components: {
        TopBar,
        Footer
    }
}
</script>

<style lang="scss" scoped>
@import '../../style/common.scss';

.global {
    position: relative;
    height: 100%;
    padding-top: $topbar-height;
    padding-bottom: $footer-height;
    box-sizing: border-box;
    overflow: hidden;
    background: $global-background-color;

    .wrap {
        height: 100%;
    }
}
</style>

