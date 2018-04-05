<!-- 组列表 -->
<template>
    <section>
        <div class="groups">
            <el-row :gutter="20">
                <el-col class="line" :span="12" v-for="(group,index) of groupListData" :key="index">
                    <div class="card" @click="groupClick(group)">
                        <h3 class="name">{{ group.name }}</h3>
                        <a class="desc" :title="group.desc">{{ group.desc }}</a>
                        <i class="delete el-icon-delete" v-if="deletable" 
                                @click="deleteGroupClick(group)"></i>
                    </div>
                </el-col>
            </el-row>
        </div>
    </section>
</template>

<script>

export default {
    data () {
        return {
            groupListData: [
                { name: 'activity1', desc: '主要用于放置fe对接各类推广活动的项目' },
                { name: 'activity2', desc: '主要用于放置fe对接各类推广活动的项目' },
                { name: 'activity3', desc: '主要用于放置fe对接各类推广活动的项目' },
                { name: 'activity4', desc: '主要用于放置fe对接各类推广活动的项目' },
                { name: 'activity5', desc: '主要用于放置fe对接各类推广活动的项目' },
            ]
        };
    },
    props: {
        deletable: {
            type: Boolean,
            default: false
        }
    },
    methods: {
        init () {
            // 请求组列表
                  
        },
        groupClick ( group ) {
            if ( !group ) {
                return false;
            }

            this.$emit('click', group);
        },
        deleteGroupClick ( group ) {
            if ( !group ) {
                return false;
            }

            this.$emit('delete', group);
        }
    }
}
</script>