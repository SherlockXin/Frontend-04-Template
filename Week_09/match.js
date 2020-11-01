function match(selector, element) {
  // 单个id
  if (selector === `#${element.id}`) {
    return true;
  }
  // class
  if (`.${element.className.replace(/\ /g, '.')}`.includes(selector)) {
    return true;
  }
  //

  return false;
}


match("div #id.class", document.getElementById("id"));