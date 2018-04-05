<!-- 项目列表 -->
<template>
    <section class="projects">
        <div class="title-wrap">
            <p>组名称: <span>{{ group.name }}</span>，组描述: <span>{{ group.description }}</span></p>    
        </div>
        <div class="table-box">
            <el-table
                :data="tableData"
                style="width: 100%">
                <el-table-column
                    prop="name"
                    label="项目"
                    align="center">
                </el-table-column>
                <el-table-column
                    label="操作" 
                    align="center">
                    <template slot-scope="scope">
                        <el-button class="text-btn" @click="routeClick(scope.row)" type="text">{{ btnTxt }}</el-button>
                    </template>
                </el-table-column>
            </el-table>
        </div>
        <div class="pagination-wrap">
            <el-pagination
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :current-page="pagination.currentPage"
                :page-sizes="pagSizes"
                :page-size="pagination.pageSize"
                layout="total, sizes, prev, pager, next, jumper"
                :total="pagination.total">
            </el-pagination>
        </div>
    </section>
</template>

<script>
import mixin from '../mixins/mixin';

export default {
    data () {
        return {
            groupName: '',
            group: {
                name: 'activity1',
                description: '一个用于放置活动类的App'
            },
            tableData: [
                { name: '开心消消乐' }
            ],
            pagination: {
                total: 0,
                currentPage: 1,
                pageSize: 10    
            }
        }
    },
    props: {
        btnTxt: {
            type: String,
            default: ''
        }
    },
    mixins: [ mixin ],
    methods: {
        init ( groupName ) {
            if ( !groupName ) {
                return false;
            }

            this.groupName = groupName;

            
        },
        routeClick ( project ) {
            if ( !project ) {
                return false;
            }
            
            let projectName = project.name;
            this.$emit( 'route', this.groupName, projectName );
        },
        handleCurrentChange ( val ) {
                
        },
        handleSizeChange ( val ) {

        },
    }
}
</script>

<style lang="scss" scoped>
    .projects {
        .title-wrap {
            overflow: hidden;
            padding: 15px 0 15px 10px;
            
            p {
                line-height: 24px;
                font-size: 15px;
                font-weight: bold;

                span {
                    color: rgb(135, 33, 33);
                }
            }
        }
    }    
</style>