let val=() => {

  let inpname=document.querySelector("#name").value
  let inpnum=document.querySelector("#number").value
  let inpemail=document.querySelector("#email").value
  let inppass=document.querySelector("#pass").value
  let inpcpass=document.querySelector("#cpass").value
  
  
  
  
  
  
  let errname=document.querySelector("#errname")
  let errnum=document.querySelector("#errnumber")
  let erremail=document.querySelector("#erremail")
  let errpass=document.querySelector("#errpass")
  let errcpass=document.querySelector("#errcpass")
  
  if (inpname=="") {
  
      errname.innerHTML="Please enter your Name"
      errname.style.color="red"
      document.querySelector("#name").style.border="1px  solid red"
  
      return false
      
  }
  
  else if (inpnum=="") {
  
      errnum.innerHTML="Please enter your Number"
      errnum.style.color="red"
      document.querySelector("#number").style.border="1px  solid red"
  
     
      return false
      
  }
  
  else if (inpnum.length!=10) {
  
      errnum.innerHTML="Please enter 10 digiit Number"
      errnum.style.color="red"
      document.querySelector("#number").style.border="1px  solid red"
  
  
      return false
      
  }
  
  else if (inpemail=="") {
  
      erremail.innerHTML="Please enter your Email"
      erremail.style.color="red"
      document.querySelector("#email").style.border="1px  solid red"
  
     
      return false
  
  }
  
  else if( !(inpemail.includes("@") && inpemail.includes(".com"))) {
  
      erremail.innerHTML="Please enter valid email"
      erremail.style.color="red"
      document.querySelector("#email").style.border="1px  solid red"
  
      return false
      
  }
  
  else if(inppass=="") {
  
      errpass.innerHTML="Please enter your Password"
      errpass.style.color="red"
      document.querySelector("#pass").style.border="1px  solid red"
  
     
      return false
  
  }
  
  
  
  // else if( !(inppass.match( [/1234567890/] ) )
  //        &&!(inppass.match( [/!@#$%^&*()_+/] )) 
  //        &&!(inppass.match( [/a-z/] )) 
  //        &&!(inppass.match( [/A-Z/] ))) {
  
  //     errpass.innerHTML="Please enter Strong Password"
  //     errpass.style.color="red"
  //     document.querySelector("#pass").style.border="1px  solid red"
  
  //     return false
      
  // }
  
  
  else if (
      !inppass.match(/[0-9]/) || // Check for at least one digit
      !inppass.match(/[!@#$%^&*()_+]/) || // Check for at least one special character
      !inppass.match(/[a-z]/) || // Check for at least one lowercase letter
      !inppass.match(/[A-Z]/) // Check for at least one uppercase letter
  ) {
      errpass.innerHTML = "Please enter a strong password";
      errpass.style.color = "red";
      document.querySelector("#pass").style.border = "1px solid red";
  
      return false;
  }
  
  
  
  
  else if(inpcpass!=inppass){
      errcpass.innerHTML="Please enter Same Password"
      document.querySelector("#cpass").value="empty"
      document.querySelector("#cpass").focus()
      errcpass.style.color="red"
      document.querySelector("#cpass").style.border="1px  solid red"
  
      
      return false
      
  }

  localStorage.setItem("Name",inpname)
  localStorage.setItem("Number",inpnum)
  localStorage.setItem("Email",inpemail)
  localStorage.setItem("Password",inppass)
  localStorage.setItem("CPassword",inpcpass)

  location.href="login.html";
     return false
}





// let login = () => {

//   let loginame = document.querySelector("#loginame").value;
//   let logipass = document.querySelector("#loginpass").value;

//   let LocalName = localStorage.getItem("Name");
//   let LocalPass = localStorage.getItem("Password");

//   if (loginame === LocalName && logipass === LocalPass) {
//     location.href = "index.html"; // fixed typo here
//     return false;
//   } else {
//     alert("Incorrect name or password");
//   }
//   return false;
// }



let login = () => {
  let loginame = document.querySelector("#loginame").value.trim();
  let logipass = document.querySelector("#loginpass").value.trim();

  let LocalName = localStorage.getItem("Name");
  let LocalPass = localStorage.getItem("Password");

  if (!LocalName || !LocalPass) {
    alert("No user registered. Please sign up first.");
    return false;
  }

  if (loginame === LocalName && logipass === LocalPass) {
    window.location.href = "index.html";
    return false;
  } else {
    alert("Incorrect name or password");
    return false;
  }
}

