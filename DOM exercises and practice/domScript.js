// Ways to select elements in DOM

// getElementByIdntById()
// getElementByClassName()
// getElementByTagName()
// querySelector()
// querySelectorAll()

// Ways to create, append, remove, alter elements
// Element creation: createElement(tagName, [option])
// Append elements: parentNode.appendChild(childnode); parentNode.insertBefore(newNode, referenceNode)
// Remove elements: parentNode.removeChild(child)
// Add text: element.innerText; element.textContent
// Change attribute: setAttribute(attributeName, stringValue)


// DOM practice 
const container = document.querySelector("#container");
const p = document.createElement("p");
p.setAttribute("style", "color: red");
p.textContent = "Hey I'm red!";

const heading3 = document.createElement("h3");
heading3.style.color = "blue";
heading3.textContent = "I'm a blue h3";

const div = document.createElement("div");
// div.style["border"] = "black";
div.setAttribute("style", "border: black;");
div.style.backgroundColor = "pink";

const heading1 = document.createElement("h1");
heading1.textContent = "I'm in a div";
const p2 = document.createElement("p");
p2.textContent = "ME TOO";

div.appendChild(heading1);
div.appendChild(p2);

container.appendChild(p);
container.appendChild(heading3);
container.appendChild(div);










