# curl命令

curl命令遵循http协议，作用是发出网络请求，输出网络响应。默认输出body。
	
curl命令的基本用法如下：

```sh
	curl <url> 
```

默认会输出响应体的body部分。

加上-i选项会输出头部和body。使用-I选项只输出头部。

加上-H "Content-Type: application/json"，会在请求中加入头部信息。
