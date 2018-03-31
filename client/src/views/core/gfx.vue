<!-- gfx系统文档页 
    本文档主要用于想开发者提供一些gfx系统的核心信息,比如说部署在哪台机器上,
        静态资源的前缀地址 ...
-->
<template>
    <section class="page gfx">
        <p class="title">GFX系统文档</p>
        <div class="section">
            <p class="sub-title">基本信息</p>
            <ul class="card">
                <li>
                    <p>部署机器IP: <span>{{ base.serverIp }}</span></p>
                </li>
                <li>
                    <p>测试环境静态资源的的域名路径前缀: <span>{{ serverPrefixPath }}</span></p>
                </li>
            </ul>
        </div>
        <div class="section"> 
            <p class="sub-title">用户列表</p>  
            <ul class="card">
                <li v-for="(user,index) of users" :key="index">
                    <p>{{ index+1 }}: &nbsp;&nbsp;<span>{{ user.email }}</span></p>
                </li>
            </ul>
        </div>    
    </section>
</template>

<script>

export default {
    data () {
        return {
            base: {
                // 部署的机器ip
                serverIp: '..',
                // 测试环境的域名路径前缀
                serverPrefixPath: '..',
            },
            users: [
                { type: 1, email: 'aaaa@aa.com' },
                { type: 1, email: 'bbbbb@bb.com' },
                { type: 1, email: 'cccccc@cc.com' },
            ]
        };
    },
    methods: {
        init () {

        },
        
    },
    mounted () {
        // 请求各列表
        this.init();
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

        .section {
            .sub-title {
                font-weight: bold;
                font-size: 20px;
            }
            
            .card {
                margin: 10px 0 40px 0;
                padding: 15px;
                background: rgba(3, 15, 9, .1);
                

                p {
                    line-height: 2;
                    font-size: 18px;
                    font-weight: bold;

                    span {
                        color: rgba(4, 57, 34, 0.8);
                    }
                }
            }
        }
    }    
</style>