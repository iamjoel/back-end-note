# 安装 Python3
## Mac
`brew install python3`

## Centos 上
在 Mac 上用ssh远程服务器

```
ssh -t root@ip -p 22（端口）
```

在 Windows 推荐用 Xshell。

## 下载解压
1. `wget https://www.python.org/ftp/python/3.6.1/Python-3.6.1.tgz`
1. `tar xf Python-3.6.1.tgz`

## 编译前需要的其他库
1. `yum -y update`
1. `yum groupinstall -y development`
1. `yum install zlib-devel bzip2-devel openssl-devel ncurses-devel sqlite-devel readline-devel tk-devel gdbm-devel db4-devel libpcap-devel xz-devel`

## 编译
1. `cd Python-3.6.1`    
1. `./configure` : 修改安装路径： `./configure --prefix=/root` 默认是，`/usr/local` 注1。
1. `make && make altinstall`
1. `make altinstall`

注1：`make altinstall` 报找不到 zlib 的错。解决方案,见[这里](http://stackoverflow.com/questions/12344970/building-python-from-source-with-zlib-support)。

`./configure --prefix=/usr/local LDFLAGS="-Wl,-rpath /usr/local/lib"`

## 安装完成后
```
python3.6 --version
```

用 python 做为命令
```
alias python='/usr/local/bin/python3.6'
```

```
pip3.6 --version
```

不知道怎么将`pip3.6`设置别名。

## 在别的地方也可以用
`export PATH="/usr/local/bin:$PATH"`


## 参考
* [How To Set Up Python 2.7.6 and 3.3.3 on CentOS 6.4](https://www.digitalocean.com/community/tutorials/how-to-set-up-python-2-7-6-and-3-3-3-on-centos-6-4)
* [How to install Python3 on CentOS](http://ask.xmodulo.com/install-python3-centos.html)