function vanishBottomAsset(){
    document.getElementById("asset2").style.display = "none";
    document.getElementById("loginDiv").style.display = "none";
}

function showOTP(){
    document.getElementById("otpDiv").style.display = "block";
}

function showOTPOpacity(){
    document.getElementById("otpDiv").style.opacity = "1";
}

function otpOpen(){
    document.getElementById("asset1").style.top = "-900px";
    document.getElementById("asset2").style.top = "1000px";
    document.getElementById("loginDiv").style.opacity = "0";
    
    setTimeout(vanishBottomAsset, 1000);
    setTimeout(showOTPOpacity, 1500);
    setTimeout(showOTP, 500);

    let count=300;

    let counter=setInterval(timer, 1000); //1000 will  run it every 1 second
    
    function timer()
    {
      count=count-1;
      if (count <= 0)
      {
         clearInterval(counter);
         document.getElementById("timer").innerHTML="Resend code";
         return;
      }
    
      document.getElementById("timer").innerHTML="Resend code in " + count + "s";
    }

};

//navbar
function showNavBar(){
    let navbar_width = document.getElementById("nav-sidebar").style.left;
    if(navbar_width == "0px"){
        document.getElementById("nav-sidebar").style.left = "-250px";
        document.getElementById("navbar-btn").style.left ="0px";
        document.getElementById("navbar-btn").style.transition ="all .7s ease";
    }else{
        document.getElementById("nav-sidebar").style.left = "0";
        document.getElementById("navbar-btn").style.left ="250px";
        document.getElementById("navbar-btn").style.transition ="all .9s ease";

    }
}

