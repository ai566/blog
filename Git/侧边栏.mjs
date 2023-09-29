const fs = require('fs')
// const path = require('path')
import { $ } from "zx";
$.verbose = false;


const 剪贴板 = (await $`cat /dev/clipboard`).stdout.trim()
const arr = 剪贴板.split("\r\n")

const result=[]
arr.forEach(item=>{
    result.push({text:item,link:'/'+item})
})

console.log(result)


