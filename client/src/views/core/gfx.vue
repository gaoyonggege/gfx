<!-- gfx系统文档页 
    本文档主要用于想开发者提供一些gfx系统的核心信息,比如说部署在哪台机器上,
        静态资源的前缀地址 ...
-->
<template>
    <section class="page gfx">
        <p class="title">GFX系统文档</p>
        <ul class="card">
            <li>
                <p>部署机器IP: <span>{{ serverIp }}</span></p>
            </li>
            <li>
                <p>测试环境静态资源的的域名路径前缀: <span>{{ serverPrefixPath }}</span></p>
            </li>
        </ul>
    </section>
</template>

<script>

export default {
    data () {
        return {
            // 部署的机器ip
            serverIp: '..',
            // 测试环境的域名路径前缀
            serverPrefixPath: '..',
            
        };
    }
}    
</script>

<style lang="scss" scoped>
    .gfx {
        padding: 40px 8%;

        .title {
            margin-bottom: 30px;
            text-align: center;
            font-weight: bold;
            font-size: 24px;
        }

        .card {
            margin: 30px 0;
            padding: 15px;
            background: rgba(3, 15, 9, .1);
            

            p {
                line-height: 2;
                font-size: 18px;

                span {
                    color: rgba(219, 26, 12, 0.5);
                }
            }
        }
    }    
</style>