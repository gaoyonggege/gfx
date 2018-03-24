<!-- 尾部 -->
<template>
    <div class="footer">
        <i></i>
        <p>前端通用持续集成平台/@author: gaoyonggege@gmail.com</p>
    </div>
</template>

<style lang="scss" scoped>
@import '../../style/common.scss';

.footer {
    display: flex;
    height: $footer-height;
    line-height: $footer-height;

    i {
        display: block;
        width: $sidebar-width;
        background-color: $sidebar-background-color;
    }

    p {
        flex: 1;
        padding-left: $footer-pading-left;
        background-color: $footer-background-color;
        font-size: $footer-font-size;
        color: $footer-color;
    }
}
</style>