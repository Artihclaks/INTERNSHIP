function vfun2(){
    var fname=document.forms["myform"]["fname"].value;
    var lname=document.forms["myform"]["lname"].value;
    var email=document.forms["myform"]["email"].value;
    var upword=document.forms["myform"]["upword"].value;
    var cpword=document.forms["myform"]["cpword"].value;


    if(fname==null || fname==""){
        document.getElementById("errorBox").innerHTML=
         "Enter the first name";
        return false;
    }

    if(lname==null || lname==""){
        document.getElementById("errorBox").innerHTML=
         "Enter the last name";
        return false;
    }

    if(email==null || email==""){
        document.getElementById("errorBox").innerHTML=
         "Enter the email";
        return false;
    }

    if(upword==null || upword==""){
        document.getElementById("errorBox").innerHTML=
         "Enter the password";
        return false;
    }
    
    if(cpword==null || cpword==""){
        document.getElementById("errorBox").innerHTML=
         "Enter the confirmation password";
        return false;
    } 
  if(upword != cpword){
      document.getElementById("errorBox").innerHTML=
       "Incorrect password";
      return false;
  }    
  if (fname != '' && lname != '' && email != '' &&upword != '' &&cpword !='')
  
      alert("Registered successfully");
    
}