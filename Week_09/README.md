学习笔记

css总体结构
@charset
@import
rules
  @media
  @page
  rule

css规则
选择器
声明
  key value

选择器语法
  简单选择器
    *
    div (tagName)
    .class
    #id
    [attr=value]
    :hover  伪类
    ::before 伪元素
  
  复合选择器
    <简单选择器> <简单选择器> <简单选择器>
    * 或 div 必须写在最前面
  复杂选择器
    <复合选择器><sp><复合选择器>
    <复合选择器>">"<复合选择器>
    <复合选择器>"+"<复合选择器>
    <复合选择器>"~"<复合选择器>
    <复合选择器>"||"<复合选择器>