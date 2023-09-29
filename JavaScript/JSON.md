# JSON
JSON全称是JavaScript对象表示法，是通用的数据交换格式，许多软件的配置文件均使用JSON文件格式。

要特别说明的是，JSON不是对象，JSON就是字符串，JSON字符串可以包括三种语法：
* 原始值
* 对象
* 数组

JSON字符串无法包括如下的数据类型:
- 集合
- 映射

### 将对象转换为JSON

要将对象转换为JSON字符串，使用JSON.stringify()，例如：

```js
const obj = {a:1, b:2, c:3}

const json = JSON.stringify(obj)  
console.log(json)   //  {"a":1,"b":2,"c":3}
```

可以在第二个参数中指定一个数组，表示筛选哪些属性进入JSON字符串：

```
const obj = {a:1, b:2, c:3}

const json = JSON.stringify(obj,['a','c'])  
console.log(json)   //  {"a":1,"c":3}
```

### 将JSON序列化为对象

可以将JSON序列化为对象，例如：

```
const json = '{"a":1,"b":2,"c":3}'

const obj = JSON.parse(json)
console.log(obj)
```

再来看一个例子，从本地的配置文件中读取JSON字符串转化为对象，修改后保存回配置文件。
如下是配置文件settings.json的内容：

```JSON
{
	"a":1,
  	"b":2,
  	"c":3
}
```

如下读取配置文件并解析为对象，然后写回配置文件中：

```js
const fs = require('fs')

const json = fs.readFileSync('settings.json','utf8')
const obj = JSON.parse(json)  
console.log(obj)   // { a: 1, b: 2, c: 3 }

obj.a = 2
obj.c = 5
const json2 = JSON.stringify(obj)
fs.writeFileSync('settings.json',json2,'utf8')

```
