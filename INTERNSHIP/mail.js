const firebaseConfig = {
    apiKey: "AIzaSyCPASxKe2EC5EEI-WxCytu8CqeBtH7Cv9U",
    authDomain: "sign-in-page-472d5.firebaseapp.com",
    databaseURL: "https://sign-in-page-472d5-default-rtdb.firebaseio.com",
    projectId: "sign-in-page-472d5",
    storageBucket: "sign-in-page-472d5.appspot.com",
    messagingSenderId: "213328681511",
    appId: "1:213328681511:web:a6dff167e0ffc2a8bb4c02"
  };

  //initialize firebase
  firebase.initializeApp(firebaseConfig);

  //reference your database
  var signinFormDB = firebase.database().ref("signinpage");

  document. getElementById(signinpage).  addEventListener("submit",submitForm);

  const saveMessages=(fname,lname,email,password,confirmpassword)=>{
    var newsigninform = signinFormDB.push();

    newsigninform.set({
        fname: fname,
        lname: lname,
        email: email,
        password: password,
        confirmpassword: confirmpassword,
    });
};

const getElementVal =(id)=>{
    return document.getElementById(id).value;
}

  function submitForm(e){
      e.preventDefault();

      var fname=getElementVal("fname");
      var lname=getElementVal("lname");
      var email=getElementVal("email");
      var password=getElementVal("upword");
      var confirmpassword=getElementVal("cpword");

      saveMessages(fname,lname,email,password,confirmpassword);

      document.querySelector(".alert").style.display="block";

      setTimeout(()=>{
          document.querySelector(".alert").style.display="none";
      },3000);

      document.getElementById("signinpage").requestFullscreen();
  }