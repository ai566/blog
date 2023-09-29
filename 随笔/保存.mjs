const fs = require('fs')
// const path = require('path')
import { $ } from "zx";
$.verbose = false;

// const 文件夹 = 'C:\\Users\\wxcod\\Documents\\博客\\JavaScript'
// const 文件夹 = 'C:\\Users\\wxcod\\Desktop'


const 剪贴板 = (await $`cat /dev/clipboard`).stdout
const h1 = (await $`cat /dev/clipboard | head -n 1`).stdout.trim();
const 文件名 = h1.slice(2)+'.md'

// console.log(文件名)

fs.writeFileSync(文件名,剪贴板,'utf8')
