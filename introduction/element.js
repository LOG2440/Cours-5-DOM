const body = document.body;

console.log('body.innerHTML: ', body.innerHTML);
console.log('body.childElementCount: ', body.childElementCount);

const paragraph = document.getElementsByTagName("p")[0];
console.log("paragraph.previousElementSibling: ", paragraph.previousElementSibling);
console.log("paragraph.firstElementChild: ", paragraph.firstElementChild);
console.log("paragraph.lastElementChild: ", paragraph.lastElementChild);
console.log("paragraph.firstElementChild === paragraph.lastElementChild: ", paragraph.firstElementChild === paragraph.lastElementChild);
