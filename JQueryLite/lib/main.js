const DOMNodeCollection = require("./dom_node_collection.js");

const queue = [];
// let docready = false;

// document.addEventListener("DOMContentLoaded", () => {
//   docready = true;
//   queue.forEach((el) => {
//     el();
//   });
// });

window.$l = function (arg) {

  if (arg instanceof HTMLElement) {
    const tag = [arg]; 
    return new DOMNodeCollection(tag);
  } else if ((typeof arg) === "string") {
    const HTMLElements = Array.from(document.querySelectorAll(arg));
    return new DOMNodeCollection(HTMLElements);  
  } else if (arg instanceof Function) {
      // if (docready) {
      //   arg();
      // } else { 
      //   queue.push(arg);
      // }
    queue.push(arg);
    document.onreadystatechange = () => {
      if (document.readyState === 'complete') {
        queue.forEach( (el) => {
          el();
          queue.shift();
        });
      }
    };
  }
};

$l.extend = function (objA, objB, ...objs) {
  
};

$l.ajax = function (options) {
  
};