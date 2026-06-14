// Mobile menu

function toggleMenu(){

document
.getElementById("menu")
.classList.toggle("active");

}




// Button message

function showMessage(){

alert(
"Welcome to my Portfolio Web Application!"
);

}




// Contact form


function submitForm(event){


event.preventDefault();


document.getElementById("response")
.innerHTML =
"Thank you! Your message has been sent successfully.";


}






// Performance optimization

window.addEventListener(
"load",
()=>{


console.log(
"Website loaded successfully"
);


}

);