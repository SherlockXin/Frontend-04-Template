学习笔记

用一维数组表示n*n的二维数组，index = i * n + j

鼠标事件
`mousedown`鼠标按下事件
`mouseup`鼠标回弹事件
event.which
1-左键
2-滚轮
3-右键
`mousemove`鼠标移动事件
`contextmenu`右键菜单事件

数组方法
shift删除第一个元素，返回该元素的值
unshift在数组头部插入一个或多个元素，返回新数组长度
push在数组末尾插入一个或多个元素，返回新数组长度
pop删除最后一个元素，返回该元素的值

队列
push + shift 
pop + unshift

栈
push + pop 
shift + unshift

二叉堆替换sorted

语法分析算法
LL算法 从左到右扫描、规约
LR算法

AST 抽象语法树

正则表达式
()圆括号表示捕获
exec方法
当正则表达式使用 "g" 标志时，可以多次执行 `exec` 方法来查找同一个字符串中的成功匹配。
他们会将上次成功匹配后的位置记录在 `lastIndex` 属性中。

match方法
检索返回一个字符串匹配正则表达式的结果。

test方法
判断字符串是否匹配。

search方法
如果匹配成功，则 `search()` 返回正则表达式在字符串中首次匹配项的索引;否则，返回 -1。