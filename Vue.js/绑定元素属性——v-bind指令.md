# 绑定元素属性——v-bind指令


vue最常见的一个作用就是绑定HTML元素的属性，这大大增加了操纵元素属性的灵活性。

使用v-bind跟一个冒号再跟HTML原生属性名称就可以将元素属性的值变量化，如下示例：

```vue
<script setup>
        const msg='aaa'
</script>

<template>
        <input v-bind:value="msg">
</template>
```

上面这个例子将input元素的value属性值绑定到一个变量msg，msg的值是什么，输入框的内容就是什么。

v-bind：还可以有简写形式，就是去掉v-bind，直接用一个冒号跟上元素原生属性即可：

```vue
<script setup>
        const msg='aaa'
</script>

<template>
        <input :value="msg">
</template>
```
