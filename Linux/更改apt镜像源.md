# 更改apt镜像源

Ubuntu的/etc/source/sourcs.list 文件格式如下：

```sh
deb或deb-src  仓库地址 发行版代号-软件类别 自由软件 非自由软件 ......
```

我们说镜像加速，实际上就是修改仓库地址即可，其它结构是完全同步过来的。比如默认仓库地址是`http  ://archive.ubuntu.com/ubuntu/`，把这个换成 ` https ://mirrors.aliyun.com/ubuntu/ `即可。

使用如下命令更换镜像源：

```sh
sudo  sed  -i  s*http://archive.ubuntu.com/ubuntu/*https://mirrors.aliyun.com/ubuntu/*g  /etc/apt/sources.list
```

然后：

```sh
cat /etc/apt/sources.list  # 检查文件内容
sudo apt  update    # 更新软件列表
sudo  apt  upgrade  # 更新软件
```
