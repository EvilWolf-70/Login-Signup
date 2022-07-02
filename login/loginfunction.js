 //form 1

 function loginfun()
 {
    var uname=document.forms["loginform1"]["uname"].value;
    var upwd=document.forms["loginform1"]["upwd"].value;


if(uname==null || uname=="" )
{
          document.getElementById("errorBox").innerHTML =
           "enter the username";
         return false;
}


if(upwd==null || upwd=="")
{
          document.getElementById("errorBox").innerHTML =
           "enter the password";
         return false;
}



if (uname != '' && upwd != '' )
{
 alert("Login successfully");
}

}


//form 2

function Regfun(){
    var uname1=document.forms["Regform2"]["uname1"].value;
    var email1=document.forms["Regform2"]["email1"].value;
    var upwd1=document.forms["Regform2"]["upwd1"].value;
    var upwd2=document.forms["Regform2"]["upwd2"].value;


if(uname1==null || uname1=="" ){
          document.getElementById("errorBox").innerHTML =
           "enter the username";
         return false;
}

if(email1==null || email1==""){
          document.getElementById("errorBox").innerHTML =
           "enter the email";
         return false;
}

if(upwd1==null || upwd1=="" ){
          document.getElementById("errorBox").innerHTML =
           "enter the password";
         return false;
}

if(upwd2==null || upwd2==""){
          document.getElementById("errorBox").innerHTML =
           "enter the password";
         return false;}

 if(upwd1 != upwd2){
          document.getElementById("errorBox").innerHTML =
           "password dont match";
         return false;}



if (uname1 != '' && upwd1 != '' && upwd2 != '' && email1 != '' && upwd1 == upwd2)


  alert("Register successfull");
                 

}