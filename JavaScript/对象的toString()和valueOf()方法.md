# 对象的toString()和valueOf()方法

## 对象的toString()方法

所有对象实例的toString()方法会返回一个固定的字符串`[object Object]`，例如：

```js
console.log({}.toString())  // [object Object]

console.log({a:1, b:2}.toString())  // [object Object]
```

当对象与对象相加，对象与字符串相加时，会隐式调用toString()，如下：

```js
console.log({}+{})  //   [object Object][object Object]
console.log(({}+{}).length)  // 30

console.log({}+'Hello')  // [object Object]Hello
```

## 对象的valueOf()方法

对象示例的valueOf()返回对象本身，例如：

```js
console.log({}.valueOf())  //  {}
console.log({a:1, b:2}.valueOf())  //  { a: 1, b: 2 }
```
