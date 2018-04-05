<!-- tpl list -->
<template>
    <section class="page template-tpl-list">
        <Breadcrumb></Breadcrumb>
        <div class="title-wrap">
            <p>组名称: <span>{{ groupProject.groupName }}</span>，项目名称: <span>{{ groupProject.projectName }}</span></p>    
        </div>
        <div class="table-box">
            <el-table
                :data="tableData"
                style="width: 100%">
                <el-table-column
                    prop="projectName"
                    label="文件名"
                    align="center">
                </el-table-column>
                <el-table-column
                    label="操作" 
                    align="center">
                    <template slot-scope="scope">
                        <el-button class="text-btn" @click="downloadTpl(scope.row)" type="text">下载</el-button>
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
import Breadcrumb from '../components/breadcrumb.vue';
import mixin from '../mixins/mixin';
import { download } from '../../utils/util';

export default {
    data () {
        return {
            groupProject: {
                groupName: '',
                projectName: ''        
            },
            tableData: [
                { name: '开心消消乐' }
            ],
            pagination: {
                total: 0,
                currentPage: 1,
                pageSize: 10    
            }
        };
    },
    mixins: [ mixin ],
    beforeRouteEnter ( to, from, next ) {
        let groupName = to.query.group,
                projectName = to.query.project;
        if ( !groupName || !projectName ) {
            return next({ name: 'home' });
        }
        
        next( ( vm ) => {
            vm.init( groupName, projectName );                                                                       
        } );
    },
    methods: {
        init ( groupName, projectName ) {
            if ( !groupName || !projectName ) {
                return false;
            }

            
        },
        handleCurrentChange ( val ) {
                
        },
        handleSizeChange ( val ) {

        },
        downloadTpl ( tpl ) {
            if ( !tpl ) {
                return false;
            }
            let url = tpl.url;
            download( url );
        }
    },
    components: {
        Breadcrumb
    }
}
</script>

<style lang="scss" scoped>
    .template-tpl-list {
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