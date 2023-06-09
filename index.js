let lists = document.getElementsByClassName("list")
let rightBox = document.getElementsByClassName("right")
let leftBox = document.getElementsByClassName("left")
let reset = document.getElementById("reset")

for (listItems of lists) {
    console.log("listItems =", listItems)
    listItems.addEventListener("dragstart", function (e) {
        let selected = e.target;
        console.log("selected =", selected)
        console.log("Drag start")

        console.log("rightBox =", rightBox)

        rightBox[0].addEventListener("dragover", function (e) {
            e.preventDefault();
            console.log("Drag over")
        })

        rightBox[0].addEventListener("drop", function (e) {
            rightBox[0].appendChild(selected);
            selected = null;
            console.log("Drag drop")
            setTimeout(() => {
                window.alert("Item moved successfully")
            }, 150);
        })

    })

}

reset.onclick = () => {
    window.location.reload();
}