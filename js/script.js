// let gorib = function () {
//     document.write("ami gorib amake keo akta gf dao")
// }

// gorib ()

// function name() {
//     window.alert("your device is low")
// }

// name()

// (
//     function  myfunc() {
//         document.write("I love you")
//     }
// ) ()

// function name(number,age) {
//     document.write("this is my function " + number + "is my hw work" + age)
// }

// name(10, 18),

// let demo = (a,b) =>{
//     return(
//         a + b
//     )
// }

// console.log(demo(10, 20)) ,

// let demo = (Number,age) => {
//     return (
//         Number + age
//     )
// }

// document.write(demo(10,23))

// let some = document.getElementById("some")

// let apon = ("hi am")

// function handleclick () {
//     some.innerHTML = apon +' "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus quisquam aut doloremque a obcaecati enim modi consequuntur exercitationem corrupti quod?" '

// }

// some.addEventListener("click",handleclick)
// let sum = 5;
// let result = '<div style="font-size: 24px; line-height: 1.5; color: #333; margin: 20px;">';

// for (let i = 1; i <= 10; i++) {
//     result += sum + ' × ' + i + ' = ' + (sum * i) + '<br>';
// }

// result += '</div>';
// document.getElementById('sum').innerHTML = result;



// let demo = document.getElementById("demo")
// let some = document.getElementById("some")


// let someText = some.innerHTML

// function handleClick() {
//     some.style.color = "red" 
// }

// demo.addEventListener("click",handleClick)








// document.getElementById("btn").addEventListener("click",handleClick);


// var state = false;

// function handleClick() {
//     if (state == true) {
//         document.getElementById("bulb").src= "https://i.pinimg.com/736x/2d/51/da/2d51da247b0aa6014a953af777e72bb1.jpg"
//         state = false;
//     } else {
//         document.getElementById("bulb").src="https://i.pinimg.com/736x/52/ae/76/52ae762f53dccf535b8da3ae534d7309.jpg"
//         state = true
//     }
// }


document.getElementById("btn").addEventListener("click", handleClick);


let state = false;

function handleClick () {
    if (state == true) {
        document.getElementById("bulb").src="https://icons.veryicon.com/png/o/business/business-style-icon/light-bulb-11.png";
        bulb.style.display="block"
        state = false
    } else {
        document.getElementById("bulb").src="https://cdn-icons-png.flaticon.com/512/3141/3141531.png";
        bulb.style.display="block"
        state = true
    }
}


// document.getElementById("btn").addEventListener("click",handleClick);

// function handleClick() {
//     let image = document.getElementById("bulb")

//     if (image.src.match("cdn-icons")) {
//         image.src="https://icons.veryicon.com/png/o/business/business-style-icon/light-bulb-11.png"
//         image.style.display="block"
//     } else {
//         image.src="https://cdn-icons-png.flaticon.com/512/3141/3141531.png"
//         image.style.display="block"
//     }
// }

