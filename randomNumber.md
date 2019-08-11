---
title: Random Number Generator
date: 2018-04-21 13:05:27
tags:
- Progamming
categories: 
- C++
- OpenCV
thumbnail: https://news-cdn.softpedia.com/images/news2/why-create-and-how-to-use-random-numbers-in-windows-484903-4.jpg

---

C++编程时经常要用到随机数，那么到底有哪些随机数产生器或函数呢？我这里来给大家做个小结！

<!--more-->


## 1、RNG（OpenCV中的随机数生成器）
RNG是OpenCV中的一个类，具体使用方法如下：

 - **均匀随机数：**

	{% codeblock lang:clike %}
	RNG myRNG; //定义RNG类
	double r1 = myRNG.uniform(0, 1); //只产生0，值得注意！
	double r2 = myRNG.uniform(0.0, 1.0); //产生[0, 1)的随机double型浮点数
	double r3 = myRNG.uniform(0.f, 1.f); //产生[0, 1)的随机float型浮点数
	double r4 = myRNG.uniform(0, 10); //产生[0, 10)的随机整数(r4也可以是int、float型)
	{% endcodeblock %}


 - **高斯（正态）随机数：**


	<pre><code class="lang-c++">RNG myRNG;
	double r5 = myRNG.gaussian(2); //括号内为高斯分布的参数sigma（double型）</code></pre>


 - 当定义RNG类时，系统默认给构造函数赋初值，这样会使得程序每次运行所产生的结果都相同，方便测试工作需要。但有时我们需要使其每次运行的结果都不同，该如何解决呢？通常我们将种子设置为当前时间，如此一来我们每次获取的随机数就不相同了：


	```
	RNG myRNG((unsigned)time(NULL)); //将当前时间(unsigned)time(NULL)设置为种子
	double r5 = myRNG.uniform(0.0, 1.0); 
	```


 - **定义随机矩阵**


	```
	//方法为fill(<#InputOutputArray mat#>, <#int distType#>, <#InputArray a#>, <#InputArray b#>)其中distType可以是RNG::UNIFORM或RNG::GAUSSIAN。当类型选择为RNG::UNIFORM型时，a为下界（闭区间），b为上界（开区间）当类型选择为RNG::GAUSSIAN型时，a为均值，b为标准差
	RNG myRNG; 
	Mat myMat(3, 3, CV_8U); //定义一个3x3的单通道无符号8位型矩阵
	myRNG.fill(myMat, RNG::UNIFORM, 0, 10); //填充[0, 10)的随机整数到上述矩阵中
	```

------------------------

## 2、函数系列

| **函数** | **使用方法** |
| :--- | :--- |
| rand() | 返回一个[0, RAND_MAX)的随机数，返回类型与接收返回值的变量类型有关，RAND_MAX在stdlib.h中有定义。 |
| rand() % n + a | 返回一个[a, n)的随机整数。 |
| rand() % RAND_MAX | 返回一个[0, 1)的随机浮点数。 |
| srand(unsigned int) | 设置种子，可以使上述函数在程序每次运行时产生的随机数序列都不一样。一般参数可以设置为(unsigned)time(NULL)或(int)time(0)。 |
| randu(dst, low, high) | 返回一个[low, high)的随机数矩阵或数组dst。 |
| randn(dst, mean, stddev) | 返回一个均值为mean、标准差为stddev的高斯分布随机数矩阵或数组dst。 |
| randShuffle(dst) | 将原矩阵或数组打乱重排。 |

