# 使用Vite和单文件组件

## 使用Vite作为Vue编译工具

使用Vite基本上就是使用下面这一行命令，所以只要记住这行命令即可：

```sh
npm init vite  NewProject  --   --template vue  
```

终端会提示回答一些问题，根据实际情况回答即可。

然后依次运行：

```sh
cd NewProject  
npm i  
npm run dev
```

此时Vite已经运行，会在终端输出一个地址，默认为`http://localhost:5173/`，在浏览器打开即可看到默认的起始页。


## 单文件组件

为了提高开发和协作效率，需要更好的模块化、组件化，Vue提出了单文件组件的概念，就是将一些紧密相关的HTML元素写在一个.vue文件里面，定义好JavaScript逻辑、元素内容、局部样式。

单文件的大致架构如下：

```vue
<script setup>
// 这里写JavaScript逻辑
</script>

<template>
<!--这里写HTML内容-->
</template>

<style scoped>
/* 这里写局部样式 */
</style>
```

将组件写好之后，需要在根组件App.vue中导入及使用：

```vue
<script setup>
	import HelloWorld.vue from './components/HelloWorld.vue'
</script>

<template>
	<HelloWorld />
</template>

<style scoped>
	
</style>

```

作为最佳实践，推荐以下几点：

* 组件始终放在components文件夹中。
* 在命名、导入、使用组件时均使用大驼峰命名法。
* 在VSCode中安装Volar插件以完善对Vue文件的支持：代码高亮和自动补全。
