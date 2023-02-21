<template>
  <div class="container">
    <img alt="Vue logo" src="./../assets/logo.png" />
    <UsePinia />
    <br />
    <router-link to="/form">点击跳转至表单</router-link>
    <br />
    <router-link to="/login">点击跳转至login</router-link>
    <br />
    <router-link to="/vueUse">点击跳转至vueUse页面</router-link>
    <br />
    <router-link to="/request">点击跳转至request请求页面</router-link>
  </div>
</template>

<script setup lang="ts" name="IndexPage"></script>

<style lang="scss" scoped>
.container {
  width: 100%;
  height: 100%;
  img {
    width: 200px;
    height: 200px;
    margin: 0 auto;
  }
  a {
    display: block;
    text-align: center;
    text-decoration: underline;
    color: $light-blue;
  }
}
</style>
