---
title: 安装Tensorflow版本不匹配问题及解决
date: 2019-02-28 00:42:40
tags: Programming
categories:
- Python
- TensorFlow
thumbnail: https://pic3.zhimg.com/v2-258db0c147a052dc90cc007311a00e7e_1200x500.jpg

---

<!--more-->


## 1、问题描述
截止至2019年2月27日，Anaconda3的版本已经更新到3.7了，对应的python版本是3.7.1，而没有对应的Tensorflow版本与之相匹配。而python3.5是可以找到tensorflow的。
具体报错内容如下：

---
## 2、解决方法
创建python3.5环境，与Anaconda3下的python3.7共存。
环境：Windows10、Python3.7、Anaconda3.7、conda4.5.12

#### 2.1、使用管理员权限，打开Anaconda Prompt；
#### 2.2、键入以下命令：
	```
	conda create --name python35 python=3.5
	```
#### 2.3、过程中遇到Proceed([y]/n)时，键入y，按回车键继续。
#### 2.4、成功后，执行下面的命令进行Python3.5环境：

	```
	// 进入python3.5环境
	c nda activate python35
	// 退出环境（即回到python3.7环境）
	conda deactivate
	```

#### 2.5、在python3.5环境中，执行下列命令，安装tensorflow：
	```
	pip install tensorflow
	```
---
## 3、测试
在Python3.5环境下测试Tensorflow是否可以正常使用：

键入以下代码：

	```
	import tensorflow as t
	sess = tf.Session()
	hello = tf.constant("hello, world")
	sess.run(hello)
	```
不出意外，键入第二行代码后会出现如下警告（不会影响程序运行）：

	```
	2019-02-27 14:59:44.875953: I tensorflow/core/platform/cpu_feature_guard.cc:141] Your CPU supports instructions that this TensorFlow binary was not compiled to use: AVX2
	```
解决方法为在上述代码之前加入以下代码：

	```
	import os
	os.environ['TF_CPP_MIN_LOG_LEVEL'] = '2' # 设置提示信息的等级为2级，只显示warning和Error
	```

运行成功，输出：

	```
	b'hello, world'
	```

---
## 4、在Pycharm上配置Tensorflow环境
- **打开Pycharm，选择或新建一个工程。**
- **File -> Settings -> Projects: [PROJECT_NAME] -> Project Interpreter -> Add Local。**
- **选择 Anaconda3/envs/python35 文件夹下面的python.exe，即配置成功。**

---
## 5、写在最后
>Every problem you encounter  has been met and solved by someone better than you, and you can find the corresponding one in Google.
