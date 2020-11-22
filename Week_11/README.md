学习笔记

实体定义
nbsp no-break space 并不把两个词分开
quot
amp
lt
gt


strong和em
strong表示在文章中的重要性，不改变语义
em辅助语气，表示重音


element <tagname></tagname>
text
comment <!-- comment -->
DocumentType <!Doctype html>(html5唯一)
ProcessingInstruction
CDATA


导航类操作
Node导航(包含文本节点、空格)
parentNode
childNodes
firstChild
lastChild
nextSibling
previousSibling

Element导航(忽略文本节点，只找元素)
parentElement
children
firstElementChild
lastElementChild
nextElementSibling
previousElementSibling

修改操作
appendChild
insertBefore
removeChild(必须在父元素移除)
replaceChild

高级操作
compareDocumentPosition 比较两个节点的关系
contains 检查一个节点是否包含另一个节点
isEqualNode 检查两个节点是否完全相同
isSameNode 检查两个节点是否同一个节点，可以用js的 === 代替
cloneNode 复制节点，传入true，复制子节点