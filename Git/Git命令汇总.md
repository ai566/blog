# Git命令汇总

## 常用命令

命令	|	作用
---	|	---
`git clone git@github.com:用户名/仓库名.git`	|	克隆仓库到本地
git add . 	|	将所有改动提交到暂存区
git commit -m '提交信息'	|	将暂存区提交到本地仓库
git push	|	将本地仓库同步到Github
git pull	|	同步Github到本地仓库

## 分支

命令	|	作用
---	|	---
git branch	|	查看本地分支，带`*`为当前分支
git branch -r	|	查看远程的分支，带`*`为当前远程分支
git branch xxx	|	新建一个名为xxx的分支
git checkout xxx	|	切换xxx分支为当前分支
git branch -m xxxx	|	将当前分支重命名为xxxx
git branch -b yyy	|	新建yyy分支并切换到新分支
git branch -d xxxx	|	删除xxxx本地分支
git branch -D xxxx	|	强制删除xxxx本地分支

## 远程仓库

命令	|	作用
---	|	---
git remote	|	显示远程仓库
git remote -v	|	详细显示远程仓库
`git remote add 代名词 git@github.com:用户名/仓库名.git`	|	新建远程仓库
git remote rm 代名词	|	删除远程仓库
git remote rename 旧代名词 新代名词	|	重命名远程仓库

## 推送

命令	|	作用
---	|	---
git push 远程仓库代名词  本地分支名:远程分支名	|	将本地仓库的分支上传到远程仓库的分支
git push 远程仓库代名词  分支名	|	如果本地和远程仓库的分支名一样，那么可以这样简写
git push --force 远程仓库代名词 本地分支名:远程分支名	|	忽略其它的提交，强制推送，`--force`等同于`-f`，注意`--force`选项谨慎使用。

