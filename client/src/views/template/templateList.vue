<!-- 模版管理主页面 -->
<template>
    <section class="page dir">
        <p class="page-title">模版列表</p>
        <div class="groups">
            <el-row :gutter="20">
                <el-col class="line" :span="12" v-for="(dir,index) of dirListData" :key="index">
                    <div class="card">
                        <h3 class="name">{{ dir.name }}</h3>
                        <a class="desc" :title="dir.desc">{{ dir.desc }}</a>
                    </div>
                </el-col>
            </el-row>
        </div>
    </section>
</template>

<script>
import mixin from '../mixins/mixin';

export default {
    data () {
        return {
            dirListData: [
                { name: '活动类', desc: '主要用于放置fe对接各类推广活动的项目' },
                { name: '活动类', desc: '主要用于放置fe对接各类推广活动的项目' },
                { name: '活动类', desc: '主要用于放置fe对接各类推广活动的项目' },
                { name: '活动类', desc: '主要用于放置fe对接各类推广活动的项目' },
                { name: '活动类', desc: '主要用于放置fe对接各类推广活动的项目' },
            ]
        };
    },
    mixins: [ mixin ],
    methods: {
        requestGroups () {
                        
        },
        // new group
        newGroupClick () {
            this.dialogVisible = true;    
        },
        close () {
            this.newGroupForm = {
                name: '',
                desc: ''    
            };
            this.$refs['newGroupForm'].resetFields(); 
        },
        submit ( formName ) {
            this.$refs[formName].validate( ( valid ) => {
                if ( valid ) {
                    this.addGroup();
                } else {
                    console.log('新建目录表单校验失败');
                }    
            } );
        },
        addGroup () {
            //
                    
        }                   
    },
    mounted () {
        // 请求列表
        this.requestGroups();
    },
}
</script>

<style lang="scss" scoped>
    .dir {
        .head {
            
        }    
    }       
</style>