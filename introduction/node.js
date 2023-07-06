const body = document.body;

console.log("body.textContent: ", body.textContent);
console.log("body.nodeName: ", body.nodeName);
console.log("body.nodeType: ", body.nodeType);
console.log("body.childNodes: ", body.childNodes);
console.log("body.previousElementSibling: ", body.previousElementSibling);

const paragraph = document.getElementsByTagName("p")[0];

console.log("paragraph.parentNode: ", paragraph.parentNode);
console.log("paragraph.firstChild: ", paragraph.firstChild);
console.log("paragraph.lastChild: ", paragraph.lastChild);
console.log("paragraph.firstChild.nextSibling.nextSibling: ", paragraph.firstChild.nextSibling.nextSibling);
