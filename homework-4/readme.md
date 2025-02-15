## Week 5

### Weekly Recap
This week introduced DOM manipulation as well as arrays and loops in JS. Arrays and loops are very straightforward and work pretty much the same as any other programing language, with the addition of a "do-while" loop that you will likely never use. The one benefit is that it is garunteed to execute at least once.

There are two ways to do DOM manipulation; by referencing elements on the HTML file or by creating elements in JS. The first requires you to get a reference to the element via one of these:

- `document.getElementById(id)`: Creates a reference to a SINGLE element with the given id. MUST BE EXACT!
- `document.getElementsByClassName(className)`: Creates a list of references to MULTIPLE elements with the given class. MUST BE EXACT!
- `document.querySelector(selector)`: Creates a reference to the FIRST element with the given CSS.
- `document.querySelectorAll(selector)`: Creates a list of references to ALL elements with the given CSS.

After getting the reference, you can manipulate properties such as the HTML of the element (with `innerHTML`), the text content of the element (with `innerText` to respect CSS styling or `textContent` for just the raw text), color and font size (`.style.color` and `.style.fontSize`), and attributes and CSS elements (`dataset` or `classList` methods).

The alternative method to DOM manipulation is to create elements in-code with `createElement`, which can be stylized as you like before you append it to the HTML using `appendChild`. Use `document.body.appendChild` if you want it as a stand-alone element, but you can also set it as the child of any other element on the document.

### Live Link
[Instrument Lessons](https://zachstepp.github.io/N220/homework-4/index.html)