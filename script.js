window.addEventListener("load", () => {
    // creates a close button for each list element
    const nodeList = document.getElementsByTagName("LI");
    let i;
    for (i = 0; i < nodeList.length; i++) {
        const span = document.createElement("SPAN");
        span.setAttribute("class", "close");
        span.innerHTML = `<img src="./images/icon-cross.svg">`;
        nodeList[i].appendChild(span);
    }

    // remove list-item when close span is clicked
    const close = document.querySelectorAll("close");
    let j;
    for (j = 0; j < close.length; j++) {
        close[j].addEventListener("click", () => {
            const div = this.parentElement;
            div.style.display = "none";
        });
    };

    // add a checkbox and label to each list item
    const label = document.createElement("LABEL");
    const check = document.createElement("INPUT");
    nodeList.array.forEach(element => {
        label.setAttribute("")
        element.appendChild(span);
        element.appendChild(span);
    });

    console.log(nodeList);
    
    // add list-item element to the todo list 
    document.forms["task"].addEventListener("submit", function(e) {
        // prevent the form from reloading the page
        e.preventDefault();

    })
});