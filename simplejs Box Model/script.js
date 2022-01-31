var model = document.getElementById("myModal")
var btn = document.getElementById("myBtn")
var span = document.getElementsByClassName("close")[0]

btn.onclick =()=>{
    model.style.display = "block"
}
span.onclick =()=>{
    model.style.display = "none" 
} 
window.onclick=(event)=>{
   
    if(event.target == model){
        model.style.display = "none"
    }
}