<template>
  <div class="login">
    <div class="dark-switch"></div>

    <div class="container">
      <el-row style="height: 100%">
        <el-col :span="12" class="left">
          <div class="app-logo">
            <img :src="logo" alt="" />
            <div>Blog Admin</div>
          </div>
          <div class="plate">
            <img :src="logoBox" alt="" />
            <p>后台管理系统</p>
            <span>输入您的个人详细信息开始使用！</span>
          </div>
        </el-col>

        <el-col :span="12" class="right">
          <div class="login-form">
            <LoginForm />
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script setup lang="ts" name="LoginPage">
import LoginForm from './LoginForm.vue';
import logo from '/@/assets/images/logo.png';
import logoBox from '/@/assets/images/login-box-bg.svg';
</script>

<style lang="scss" scoped>
.login {
  width: 100%;
  height: 100%;
  padding-left: 1rem;
  padding-right: 1rem;
  position: relative;
  overflow: hidden;
  &::before {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    margin-left: -48%;
    background-image: url('/@/assets/images/login-bg.svg');
    background-position: 100%;
    background-repeat: no-repeat;
    background-size: auto 100%;
    content: '';
  }
  .dark-switch {
    position: absolute;
    top: 1rem;
    right: 1rem;
    display: flex;
    align-items: center;
  }
  .container {
    position: relative;
    max-width: 1600px;
    height: 100%;
    padding: 0.5rem 2.5rem;
    margin-left: auto;
    margin-right: auto;
    .left {
      display: flex;
      flex-direction: column;
      padding-left: 1rem;
      .app-logo {
        height: 80px;
        position: absolute;
        top: 4px;
        padding-left: 7px;
        display: flex;
        align-items: center;
        cursor: pointer;
        // transition: all 0.2s ease;
        img {
          width: 48px;
          height: 48px;
        }
        div {
          font-size: 24px;
          color: #fff;
          font-weight: 700;
          margin-left: 0.5rem;
          // transition: all 0.5s;
          line-height: normal;
        }
      }
      .plate {
        margin-top: auto;
        margin-bottom: auto;
        img {
          width: 50%;
          margin-top: -4rem;
        }
        p {
          margin-top: 3.5rem;
          font-weight: 500;
          font-size: 1.875rem;
          line-height: 2.25rem;
          color: #fff;
        }
        span {
          display: inline-block;
          margin-top: 1.25rem;
          font-weight: 400;
          color: #fff;
          font-size: 14px;
        }
      }
    }
    .right {
      display: flex;
      padding-left: 0.5rem;
      .login-form {
        padding: 1rem;
        background-color: transparent;
        margin-right: auto;
        margin-left: 4rem;
        margin-top: auto;
        margin-bottom: auto;
      }
    }
  }
}
</style>
