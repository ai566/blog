# 最简单的http服务器

在本教程的所有章节中，我们都只使用JavaScript和HTML来实现服务器和客户端。

在命令行使用fetch API充当客户端，在浏览器使用HTML页面充当客户端。使用node.js的http模块构建服务器。

下面为一个最简单的服务器示例，将这段代码保存到文件如1.js，然后在相同的目录打开命令行，运行node.js，不要关闭。再在浏览器中打开` http://localhost:8080` ，就看到了内容为`hello,world!`的h1标题。

```js
const http = require('http')

http.createServer((request,response)=>{
    response.writeHead(200)
    response.end('<h1>hello,world!</h1>')
}).listen(8080,()=>{
    console.log('running on http://localhost:8080')
})
```

这个示例不解析任何请求细节，任何请求都会返回相同的响应。

后面我们会根据请求的不同，而返回不同的响应。这其实就是HTTP的本质——构建不同的响应以处理不同的请求。
