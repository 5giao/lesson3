/*
 * @Author: your name
 * @Date: 2020-11-11 19:34:33
 * @LastEditTime: 2020-11-11 20:35:47
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \日考3\app\src\router\index.js
 */
import Vue from 'vue';
import Router from 'vue-router';
import Home from "@/view/Home";
import Detail from "@/view/Detail";
import List from "@/view/List";
import My from "@/view/My";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/list'
    },
    {
      path: '/home',
      name: 'Home',
      component: Home,
      children: [{
        path: '/list',
        name: "List",
        component: List
      }, {
        path: '/my',
        name: 'My',
        component: My
      }]
    },
    {
      path: '/detail/:id',
      component: Detail
    }
  ]
})
