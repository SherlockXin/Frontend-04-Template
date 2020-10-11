学习笔记

语法树和运算符优先级，左值右值区别

运行时 类型转换 引用类型

运算符优先级（高-》低）
Member 属性运算符
a.b
a[b]
foo`string`
super.b
super[b]
new.target
new Foo()

New
new Foo

Call
foo()
super()
foo()['b']
foo().b 点运算降级为call运算
foo()`abc`
-----
right handside
-----

Update
a ++
a --
-- a
++ a

Unary 单目运算符
delete a.b (delete后面一定跟引用类型)
void foo() 得到undefined
typeof a
+ a 可能发生类型转换
- a
~ a 按位取反
! a 
await a

Exponental
** 乘方 右结合

Multiplicative
* / %

Additive
+ -

Shift
<< >> >>>

Relationship
< > <= >= instanceof   in

Equality 等运算
==
!=
===
!==

Bitwise 位运算
& ^ |

Logical 逻辑运算 (短路原则)
&& 前面false 后面不执行
|| 前面true 后面不执行

Conditional
? : 唯一一个三目运算符（短路运算）

======

类型转换

拆箱转换（对象转基本类型）
ToPremitive

装箱转换

======

语句

简单语句
表达式语句
空语句
Debugger语句
Throw语句
Continue
Break
Return

复合语句
Block语句
If语句
Switch语句
循环语句（while、do while、for）
With语句
标签语句
Try语句 （try 执行了return  还是会执行finally）

======

声明
函数声明
Generator声明（Fuction *）
AsyncFunction
AsyncFunction *
变量声明（语句）
类声明
Lexical声明（let、const）

所有声明都有预处理机制，在const声明前使用变量会抛错，var则不会

作用域
var声明的变量作用域在函数体，const声明的变量只在花括号内（block语句）