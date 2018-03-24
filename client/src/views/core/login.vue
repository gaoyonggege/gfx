<!-- 登录页 -->
<template>
    <div class="login">
        <div class="wrap">
            <p class="title">登录</p>
            <el-form :model="loginForm" :rules="rules" ref="loginForm" class="login-form">
                <el-form-item>
                    <p class="account_login">账号登录</p>
                </el-form-item>
                <el-form-item prop="account">
                    <el-input v-model="loginForm.account" placeholder="请输入账号" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item prop="password">
                    <el-input type="password" v-model="loginForm.password"  placeholder="请输入密码" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item class="btn-c">
                    <el-button type="primary" @click="submit('loginForm')">登录</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script>
import mixin from '@/views/mixins/mixin';

export default {
    data () {

        
        return {
            loginForm: {
                account: '',
                password: '' 
            },
            rules: {
                account: [
                    { required: true, message: '请输入登录账号', trigger: 'blur' }
                ],
                password: [
                    { required: true, message: '请输入登录密码', trigger: 'blur' }
                ]
            }
        };
    },
    mixins: [ mixin ],
    methods: {
        submit ( formName ) {
            this.$refs[formName].validate( ( valid ) => {
                if ( valid ) {
                    this.login();
                } else {
                    console.log('登录表单校验失败!');
                }
            } );
        },
        login () {
            let reqData = {

            };

            
        }
    }
}
</script>

<style lang="scss" scoped>
@import '../../style/common.scss'; 

.login {
    height: 100%;
    background-image: linear-gradient(-25deg, $login-gradient1 0%, $login-gradient2 96%);
      
    .wrap {
        width: 480px;
        height: 500px;
        position: absolute;
        top: 50%;
        left: 50%;
        margin-left: -240px;
        margin-top: -300px;
        
        .title {
          text-align: center;
          font-size: 42px;
          color:#fff;
        }
        
        .login-form {
          display: block;
          padding: 40px 80px;
          box-sizing: border-box;
          background: #fff;
          border-radius: 3px;
          margin: 26px 0 20px 0;

          .account_login {
            font-size: 24px;
            text-align: center;
          }
        }

        .btn-c {
           text-align: center; 
        }
    }
}
</style>