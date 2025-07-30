let display = document.getElementById("display");
function appendValue(value){
    display.value +=value
}

function clearDisplay(){
    display.value=" ";
}

function deleteLast(){
    display.value=display.value.slice(0,-1);
}

function calculate(){
    try{
        display.value=eval(display.value);
    }
    catch{
        display.value="Error";
    }
}

const toggleBtn=document.getElementById("themeToggle");
const body=document.body;

// set default theme
body.classList.add("dark-theme");

toggleBtn.addEventListener("click",()=>{
    body.classList.toggle("dark-theme");
    body.classList.toggle("light-theme");

})
