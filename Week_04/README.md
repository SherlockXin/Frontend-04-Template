学习笔记

Number
IEEE 754 Double Float 双精度浮点类型
小数点可以来回浮动
一个符号，11个指数位，52个有效位

转译规则
\d 十进制
\x 十六进制
\o 八进制
\u unicode码

void 任意 等于undefined


Object
基本面向对象能力，通过语法创建对象、访问属性、定义新的属性、改变属性的特征值
{} . [] Object.defineProperty

基于原型的描述对象方法
Obejct.create 指定原型创建一个对象/ Object.setPrototypeOf 修改对象原型/ Object.getPrototypeOf 访问对象原型

基于分类的方式描述对象
new /class / extends

不伦不类，不建议用
new / function / prototype


特殊对象：
函数对象(function / => / Function构造器创建的对象)，内置`[[call]]`，用f()访问
数组对象，内置`[[length]]`
对象原型Object.prototype没有`[[setPrototypeOf]]`

Host Object
window
setTimeout

双方括号`[[]]`定义的私有方法，是js语法中无法访问的