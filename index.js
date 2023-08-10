let document
document.addEventListener('DOMContentLoaded', () => {
    let paragraph = document.getElementById('text')
    paragraph.textContent = 'This is really cool!'
});

function removeElement() {
    const text = document.querySelector('p').remove();
    const newText = document.createElement('p');
    newText.textContent = "This is really cool!"
}   
function addElement() {
    // create a new div element
    const newDiv = document.createElement("div");
  
    // and give it some content
    const newContent = document.createTextNode("This is really cool!!");
  
    // add the text node to the newly created div
    newDiv.appendChild(newContent);
  
    // add the newly created element and its content into the DOM
    const currentDiv = document.getElementById("div1");
    document.body.insertBefore(newDiv, currentDiv);
  }
console.log(addElement())

