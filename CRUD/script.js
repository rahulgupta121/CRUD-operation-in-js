    const name = document.getElementById('Name')
    const email = document.getElementById('Email')
    const password = document.getElementById('Password')
    const form = document.getElementById('form')
    //const errormessage = document.getElementById('error')
    var pattern = new RegExp("^(()?\\d{3}())?(-|\\s)?\\d{3}(-|\\s)?\\d{4}$");
    form.addEventListener('submit', (e) =>{
        e.preventDefault()
         
    if (name.value == '' || name.value == null ) {
        alert("Please enter your name.");
        
    }else if (name.value.length < 3) {
        alert('enter name less than 3 latter.');
        
    }else if(email.value.length == ''){
        alert("Please enter your Email.");
       
    }else if(pattern.test(email.value)){
        alert("this is not valid email id"); 
    }
    else if(password.value.length <= 6){  
        alert("Password must be at least 6 characters long.");  
         
    }else if(password.value.length >= 20){  
        alert("Password must be at less then 20 characters long.");  
         
    }else if(password.value.length === 'password'){  
        alert("Password can not be same");  
         
    } 
    else{
         alert("Submittion Sucessfull")
        location.reload()
        localStorage.setItem("Name",name.value);
        localStorage.setItem("Email",email.value);
        localStorage.setItem("Password",password.value);
         
    }
    })
  
    


    //const searchList = document.getElementById('searchId')
    const seaching=()=>{
        var nameID = localStorage.getItem("Name",name);
        console.log(nameID);
        var emailID = localStorage.setItem("Email",email);
        console.log(emailID);
        var passwordID = localStorage.setItem("Password",password);
        document.getElementById('name').innerHTML = nameID;
        document.getElementById('email').innerHTML = emailID;
        document.getElementById('password').innerHTML = passwordID;
    }
    
   var fname = document.getElementById('name')
   var Email = document.getElementById('email')
   var Password =  document.getElementById('password') 

   fname.addEventListener('click',()=>{
       document.createElement('input');
   })