---
title: 程序打包（Setup使用技巧）
date: 2019-01-15 16:58:45
tags: Programming
categories:
- Skills
thumbnail: https://png.pngtree.com/element_origin_min_pic/16/11/03/b561e3caf83b497368e5e0c5b6c95de2.jpg

---

<!--more-->

大体可参考：[使用Setup Factory安装包制作工具制作安装包](https://www.cnblogs.com/wuhuacong/p/6101853.html "链接跳转至https://www.cnblogs.com/wuhuacong/p/6101853.html")

## 补充：
- **创建和删除文件夹：**

	```
	// 创建文件夹一般放在安装过程中的Actions中，例如On Post Install
	Folder.Create(_ProgramFilesFolder.."\\ObjectTracking");  // 创建文件夹C:\\Program Files\\ObjectTracking，注意中间的两点起连接字符串的作用

	// 删除文件夹一般放在卸载过程中的Actions中，例如On Post Uninstall
	Folder.DeleteTree(_ProgramFilesFolder.."\\ObjectTracking", nil); // 删除C:\\Program Files\\ObjectTracking目录下所有的子文件夹和文件，但不删除文件夹C:\\Program Files\\ObjectTracking
	Folder.Delete(_ProgramFilesFolder.."\\ObjectTracking"); // 删除文件夹C:\\Program Files\\ObjectTracking
	```





