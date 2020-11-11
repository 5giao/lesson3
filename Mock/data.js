/*
 * @Author: your name
 * @Date: 2020-11-11 19:51:36
 * @LastEditTime: 2020-11-11 20:26:03
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \日考3\app\Mock\data.js
 */
const Mock=require('mockjs');

module.exports=Mock.mock({
    "list|4-7":[{
        "title":'@ctitle',
        "desc":'@cword(5,7)',
        "id":'@id'
    }]
})