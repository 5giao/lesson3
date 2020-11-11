<!--
 * @Author: your name
 * @Date: 2020-11-11 19:39:08
 * @LastEditTime: 2020-11-11 19:49:46
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \日考3\app\src\view\Home\index.vue
-->
<template>
  <div class="home">
    <main>
      <router-view></router-view>
    </main>
    <footer>
      <router-link to="/list">首页</router-link>
      <router-link to="/my">我的</router-link>
    </footer>
  </div>
</template>

<script>
export default {};
</script>

<style lang="css" scoped>
.home {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.home main {
  flex: 1;
}
.home footer {
  width: 100%;
  height: 50px;
  background: skyblue;
  display: flex;
  align-items: center;
  justify-content: space-around;
}
</style>
