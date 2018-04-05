<!-- 目录管理主页面 -->
<template>
    <section class="page page-group">
        <div class="head" v-if="isRoot">
            <el-button type="primary" @click="newGroupClick">新建</el-button>            
        </div>
        <div class="groups">
            <el-row :gutter="20">
                <el-col class="line" :span="12" v-for="(group,index) of groupListData" :key="index">
                    <div class="card">
                        <h3 class="name">{{ group.name }}</h3>
                        <a class="desc" :title="group.desc">{{ group.desc }}</a>
                        <i class="delete el-icon-delete" @click="deleteGroupClick(group)"></i>
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
import { validateGroupName } from '../../utils/validate';
import mixin from '../mixins/mixin';

export default {
    data () {

        const validateFormGroupName = ( rule, value, callback ) => {
            if ( !validateGroupName(value) ) {
                return callback( new Error('组名只能包含大小写字母数字下划线中划线，长度不能超过20位!') );
            }

            callback();
        };

        return {
            groupListData: [
                { name: 'activitiy1', desc: '主要用于放置fe对接各类推广活动的项目' },
                { name: 'activitiy2', desc: '主要用于放置fe对接各类推广活动的项目' },
                { name: 'activitiy3', desc: '主要用于放置fe对接各类推广活动的项目' },
                { name: 'activitiy4', desc: '主要用于放置fe对接各类推广活动的项目' },
                { name: 'activitiy5', desc: '主要用于放置fe对接各类推广活动的项目' },
            ],
            dialogVisible: false,
            formLabelWidth: '80px',
            newGroupForm: {
                name: '',
                desc: ''    
            },
            newGroupRules: {
                name: [
                    { required: true, message: '请输入组名称', trigger: 'blur' },
                    { validator: validateFormGroupName, trigger: 'blur' }
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
        // add group
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
                    
        },
        // delete group
        deleteGroupClick ( group ) {
            if ( !group ) {
                return false;
            }
            const groupName = group.name;
            this.$confirm(`此操作将永久删除组 ${groupName}, 是否继续?`, '警告', {
                    type: 'warning'    
                }).then( (  ) => {
                    this.deleteGroup( group );
                } ).catch( () => {
                } );
        },
        deleteGroup ( group ) {
            const groupName = group.name;
            
            
        }
    },
    mounted () {
        // 请求列表
        this.requestGroups();
    },
}
</script>

<style lang="scss" scoped>
    .page-group {
           
    }       
</style>