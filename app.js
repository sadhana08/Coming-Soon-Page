const inputEmail = document.querySelector("input");
const notify = document.querySelector("button");
const error = document.querySelector(".errorMsg");


notify.addEventListener("click", () => {

    if(inputEmail.value === "" || !inputEmail.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
        inputEmail.style.borderColor = "hsl(354, 100%, 66%)";
        error.innerText = "Please provide a valid email address"
        error.style.color = "hsl(354, 100%, 66%)";
    }

    else{
        inputEmail.style.borderColor = "hsl(223, 100%, 88%)";
        error.innerText = "";
        setTimeout(() => {
            alert(`Notification will be sent to ${inputEmail.value}. Thanks!`);
        }, 1000);
        
    }
    
})