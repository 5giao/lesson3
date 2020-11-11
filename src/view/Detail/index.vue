<!--
 * @Author: your name
 * @Date: 2020-11-11 19:38:25
 * @LastEditTime: 2020-11-11 20:48:09
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \日考3\app\src\view\Detail\index.vue
-->
<template>
  <div class="detail">
    详情
    {{ id }}
    <p>
       <h2>{{list.title}}</h2>
       <p>{{list.desc}}</p>
    </p>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      list: [],
      id: this.$route.params.id,
    }
  },
  created() {
    axios.get("/list").then((res) => {
      this.list = res.data.list.filter(item=>item.id===this.id)[0];
      console.log(this.list)
    });
  },
};
</script>

<style></style>
