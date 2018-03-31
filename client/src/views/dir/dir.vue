<!-- 目录管理主页面 -->
<template>
    <section class="page dir">
        <div class="head" v-if="isRoot">
            <el-button type="primary" @click="newGroupClick">新建</el-button>            
        </div>
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

        <el-dialog
            title="新建目录"
            :visible.sync="dialogVisible"
            width="40%"
            :close-on-click-modal="false" 
            @close="close">
            <el-form :model="newGroupForm" ref="newGroupForm" :rules="newGroupRules">
                <el-form-item label="组名称" prop="name" :label-width="formLabelWidth">
                    <el-input v-model="newGroupForm.name" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="组描述" prop="desc" :label-width="formLabelWidth">
                    <el-input type="textarea" v-model="newGroupForm.desc" :rows="4"
                        resize="none" maxLength="60" placeholder="最多60个字" auto-complete="off"></el-input>
                </el-form-item>
            </el-form>
            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="submit('newGroupForm')">确 定</el-button>
            </span>
        </el-dialog>
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
            ],
            dialogVisible: false,
            formLabelWidth: '80px',
            newGroupForm: {
                name: '',
                desc: ''    
            },
            newGroupRules: {
                name: [
                    { required: true, message: '请输入组名称', trigger: 'blur' }
                ],
                desc: [
                    { required: true, message: '请输入组描述', trigger: 'blur' }
                ]     
            }
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