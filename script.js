// to-do-list



let Button = document.querySelector(".button");
let input = document.querySelector(".Input");
let Div = document.querySelector(".div");

Button.addEventListener("click", () => {
    if (input.value !== "") {
        // Create list item
        let listitem = document.createElement("li");
        listitem.textContent = input.value;
        listitem.style.display = "flex"; 
        listitem.style.alignItems = "center"; 
        listitem.style.justifyContent = "space-between"; 
        listitem.style.margin = "1rem  0"; 
        listitem.style.padding = "0.5rem 1rem"; 
        listitem.style.border = "1px solid #ddd"; 
        listitem.style.borderRadius = "5px"; 
        listitem.style.backgroundColor = "#f9f9f9";
        listitem.style.listStyle = "none";
        

        // Create delete button
        let deletebtn = document.createElement("i"); 
        deletebtn.classList.add("fa-solid", "fa-x");
        deletebtn.style.marginLeft = "10rem";
        deletebtn.style.cursor = "pointer";

        // Create circle icon
        let circle = document.createElement("i");
        circle.classList.add("fa-regular", "fa-circle");
        circle.style.marginLeft = "2rem";
        circle.style.cursor = "pointer";
        circle.style.backgroundColor = "transparent"

        // Append icons to the list item
        listitem.prepend(circle);
        listitem.appendChild(deletebtn);

        circle.addEventListener("click", () => {
            if (circle.classList.contains("fa-circle")) {
                circle.classList.remove("fa-circle"); 
                circle.classList.add("fa-check-circle"); 
            } else {
                circle.classList.remove("fa-check-circle"); 
                circle.classList.add("fa-circle"); 
            }
        });



        // Add toggle line-through functionality
        listitem.addEventListener("click", () => {
            if (listitem.style.textDecoration === "line-through") {
                listitem.style.textDecoration = "none"; 
            } else {
                listitem.style.textDecoration = "line-through"; 
            }
        });

        // Add delete functionality
        deletebtn.addEventListener("click", (event) => {
            event.stopPropagation(); 
            Div.removeChild(listitem);
        });

        // Reset input and append list item to the Div
        input.value = "";
        Div.appendChild(listitem);
    } else {
        alert("Please enter something");
    }
});
