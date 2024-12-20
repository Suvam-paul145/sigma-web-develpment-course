let boxes = document.getElementsByClassName("box");
console.log(boxes);

boxes[2].style.backgroundColor = "red"

document.getElementById("Box1").style.backgroundColor = "yellow"

document.querySelector(".box").style.color = "blue"

//document.querySelectorAll(boxes).style.backgroundColor = "purple"


console.log(document.querySelectorAll(".box"))

//  document.querySelectorAll(".box").forEach(e =>{
//  }) 

// multiple properties in one loop 
document.querySelectorAll(".box").forEach(e =>
{
    e.style.color = "white"
    e.style.backgroundColor = "green"

}
)