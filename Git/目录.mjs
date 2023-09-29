const fs = require('fs')
// const path = require('path')
import { $ } from "zx";
$.verbose = false;


const 剪贴板 = (await $`cat /dev/clipboard`).stdout.trim()
const arr = 剪贴板.split("\r\n")

const result=[]
const arr2 = arr.map(item=>`[${item}](${item})`)

console.log(arr2.join('\r\n\r\n'))

