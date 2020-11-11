<!--
 * @Author: your name
 * @Date: 2020-11-11 19:43:04
 * @LastEditTime: 2020-11-11 20:35:40
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \日考3\app\src\view\List\index.vue
-->
<template>
  <div class="list">
      <ul>
          <li v-for="(item,index) in list" :key="index" @click="ToDetail(item)">
              <p>{{item.title}}</p>
              <p>{{item.desc}}</p>
          </li>
      </ul>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      list: [],
    }
  },
  created() {
    axios.get("/list").then((res) => {
        this.list=res.data.list;
    });
  },
  methods: {
      ToDetail(item){
          this.$router.push(`/detail/${item.id}`)
      }
  },
};
</script>

<style lang='css' scoped>
.list{
    width: 100%;
    height: 100%;
}
.list li{
    width: 100%;
    height: 100px;
    background: antiquewhite;
    margin-bottom: 10px;
}
</style>
