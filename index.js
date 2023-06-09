let lists = document.getElementsByClassName("list")
let rightBox = document.getElementsByClassName("right")
let leftBox = document.getElementsByClassName("left")
let reset = document.getElementById("reset")

for (listItems of lists) {
    console.log("listItems =", listItems)
    listItems.addEventListener("dragstart", function (e) { // function to start the drag
        let selected = e.target;

        // console.log("Drag start")

        rightBox[0].addEventListener("dragover", function (e) { // function to drag the item
            e.preventDefault();

            // console.log("Drag over")
        })

        rightBox[0].addEventListener("drop", function (e) { // function to drop the items
            rightBox[0].appendChild(selected);
            selected = null;

            // console.log("Drag drop")

            setTimeout(() => {
                window.alert("Item moved successfully")
            }, 150);
        })

    })

}

reset.onclick = () => {  // function  to clear the second container and reset the first container to its original state.
    window.location.reload();
}