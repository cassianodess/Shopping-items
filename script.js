var input = window.document.getElementById("txt")

input.focus()

var btn = window.document.getElementById("btn")

var ul = window.document.querySelector("ul")

btn.addEventListener("click", function () {

    if (input.value.length > 0) {
        input.focus()
        var li = window.document.createElement("li")
        li.appendChild(document.createTextNode(input.value))
        ul.appendChild(li)

        input.value = ""
    } else {
        alert("Please, add an item")
    }
})