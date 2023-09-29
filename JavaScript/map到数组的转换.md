# map到数组的转换
对map实例使用下面三种方法，可以返回可迭代对象：
* keys()，返回由键组成的新数组
* values()，返回由值组成的新数组
* entries()，返回由键值组成的二维数组

例如：

```js
const map = new Map().set('a',1).set('b',2).set('c',3)

console.log(map.keys())  //=>[Map Iterator] { 'a', 'b', 'c' }

console.log(map.values())// => [Map Iterator] { 1, 2, 3 }

console.log(map.entries())// => [Map Entries] { [ 'a', 1 ], [ 'b', 2 ], [ 'c', 3 ] }
```

使用Array.from()或者`[...iterator]`，就可以将上面几个可迭代对象转换为真正的数组：

```js
// 承接上文代码
console.log([...map.keys()])// => [ 'a', 'b', 'c' ]

console.log([...map.values()]) // => [ 1, 2, 3 ]

console.log([...map.entries()]) // => [ [ 'a', 1 ], [ 'b', 2 ], [ 'c', 3 ] ]
```
