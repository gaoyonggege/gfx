<!-- 头部悬浮条 -->
<template>
    <div class="navbar">
        <div class="title">
            <p @click="goToHome">GFX</p>
        </div>
        <el-row class="rightbar">
            <el-col :span="24">
              <el-row type="flex" justify="space-between">
                  <el-col :span="8">
                  </el-col>
                  <el-col :span="16" :offset="3">
                    <div class="user_msg">
                      <span>你好, gaoyonggege</span>
                      <label @click="loginOut">退出</label> 
                    </div>
                  </el-col>
              </el-row>
          </el-col>
        </el-row>
    </div>
</template>

<script>
import mixin from '@/views/mixins/mixin';
import types from '../../store/types';
  
export default {
    data () {
      return {
        
      }
    },
    mixins: [ mixin ],
    computed: {
        user () {
            return this.$store.state.user;
        }    
    },
    methods: {
        goToHomePage () {
            this.$router.push({ name: 'home' });
        },
        loginOut () {
            this.$confirm('确认退出吗？')
                .then(_ => {
                    window.$arf.common.logout()
                        .then( (response) => {
                            if ( !this.$root.ajaxError(response) ) {
                            this.$message({
                                message: '已退出登录!',
                                type: 'success',
                                duration: 1400
                            });
                            
                            setTimeout( () => {
                                this.$root.logout();
                            },1500 );
                            }
                        }
                    )
                });
        }
    }
}
</script>

<style lang="scss" scoped>
@import '../../style/common.scss';

.navbar {
    display: flex;
    background-color: $topbar-background-color;
    position: fixed;
    width: 100%;
    height: $topbar-height;
    left: 0;
    top: 0;
    z-index: 500;

    .title {
        color: #fff;
        font-size: 20px;
        font-weight: bold;
        text-align: center;
        height: $topbar-height;
        line-height: $topbar-height;
        width: 200px;
        background-color: $topbar-left-background-color;

        p:hover {
          cursor: pointer;
        }
    }

    .rightbar {
        flex: 1;

        .user_msg {
          margin-right: $topbar-margin-right;
          text-align: right;
          height: $topbar-height;
          line-height: $topbar-height;
          font-size: 16px;
          color: #fff;

          span {
            margin-right: 20px;
          }

          label:hover {
            cursor: pointer;
          }
        }
    }
}
</style>