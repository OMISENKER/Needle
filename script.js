function vanishBottomAsset(){
    document.getElementById("asset2").style.display = "none";
}

function otpOpen(){
    document.getElementById("asset1").style.top = "-900px";
    document.getElementById("asset2").style.top = "1000px";
    document.getElementById("loginDiv").style.display = "none";
    
    setTimeout(vanishBottomAsset, 2000);
    
};