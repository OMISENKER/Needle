var firstTitle = document.getElementById("title-1");
firstTitle.addEventListener("click", moveFirstTitle);

var secondTitle = document.getElementById("title-2");
secondTitle.addEventListener("click", moveSecondTitle);

var thirdTitle = document.getElementById("title-3");
thirdTitle.addEventListener("click", moveThirdTitle);

var closeBtn = document.getElementById("collapse");
closeBtn.addEventListener("click", collapseSlideBar);

var setSelectedTitleBar;

function moveBodyForSidebar(){
    document.getElementById('home-section').style.marginLeft = "14%";
    document.getElementById('faq-section').style.Left = "14%";
    document.getElementById('about-section').style.Left = "14%";
}

function moveBackBodyForCollapse(){
    document.getElementById('home-section').style.marginLeft = "0%";
    document.getElementById('faq-section').style.Left = "0%";
    document.getElementById('about-section').style.Left = "0%";
}

function moveFirstTitle(){
    moveBodyForSidebar();
    //show
    document.getElementById('overlayed-side-slide-bar-1').style.marginLeft = "-1vw";
    document.getElementById('overlayed-side-slide-bar-2').style.marginLeft = "-1vw";
    document.getElementById('overlayed-side-slide-bar-3').style.marginLeft = "-1vw";
    document.getElementById('title-1').style.marginLeft = "-8vw";
    document.getElementById('title-2').style.marginLeft = "-8vw";
    document.getElementById('title-3').style.marginLeft = "-8vw";
    //z-index
    document.getElementById('overlayed-side-slide-bar-1').style.zIndex = "5";
    document.getElementById('overlayed-side-slide-bar-2').style.zIndex = "4";
    document.getElementById('overlayed-side-slide-bar-3').style.zIndex = "3";
    document.getElementById('title-1').style.zIndex = "5";
    document.getElementById('title-2').style.zIndex = "4";
    document.getElementById('title-3').style.zIndex = "3";
    //show close button
    document.getElementById('collapse').style.display = "block";
    //set transition order
    document.getElementById('overlayed-side-slide-bar-1').style.transition = "0.5s";
    document.getElementById('overlayed-side-slide-bar-2').style.transition = "1s";
    document.getElementById('overlayed-side-slide-bar-3').style.transition = "1.5s";
    document.getElementById('title-1').style.transition = "0.5s";
    document.getElementById('title-2').style.transition = "1s";
    document.getElementById('title-3').style.transition = "1.5s";
    //call set transition for closing function
    setSelectedTitleBar = 1;
}

function moveSecondTitle(){
    moveBodyForSidebar();

    //show
    document.getElementById('overlayed-side-slide-bar-1').style.marginLeft = "-1vw";
    document.getElementById('overlayed-side-slide-bar-2').style.marginLeft = "-1vw";
    document.getElementById('overlayed-side-slide-bar-3').style.marginLeft = "-1vw";
    document.getElementById('title-1').style.marginLeft = "-8vw";
    document.getElementById('title-2').style.marginLeft = "-8vw";
    document.getElementById('title-3').style.marginLeft = "-8vw";
    //z-index
    document.getElementById('overlayed-side-slide-bar-1').style.zIndex = "4";
    document.getElementById('overlayed-side-slide-bar-2').style.zIndex = "5";
    document.getElementById('overlayed-side-slide-bar-3').style.zIndex = "3";
    document.getElementById('title-1').style.zIndex = "4";
    document.getElementById('title-2').style.zIndex = "5";
    document.getElementById('title-3').style.zIndex = "3";
    //show close button
    document.getElementById('collapse').style.display = "block";
    //set transition order
    document.getElementById('overlayed-side-slide-bar-1').style.transition = "1s";
    document.getElementById('overlayed-side-slide-bar-2').style.transition = "0.5s";
    document.getElementById('overlayed-side-slide-bar-3').style.transition = "1.5s";
    document.getElementById('title-1').style.transition = "1s";
    document.getElementById('title-2').style.transition = "0.5s";
    document.getElementById('title-3').style.transition = "1.5s";
    //call set transition for closing function
    setSelectedTitleBar = 2;
}

function moveThirdTitle(){
    moveBodyForSidebar();

    //show
    document.getElementById('overlayed-side-slide-bar-1').style.marginLeft = "-1vw";
    document.getElementById('overlayed-side-slide-bar-2').style.marginLeft = "-1vw";
    document.getElementById('overlayed-side-slide-bar-3').style.marginLeft = "-1vw";
    document.getElementById('title-1').style.marginLeft = "-8vw";
    document.getElementById('title-2').style.marginLeft = "-8vw";
    document.getElementById('title-3').style.marginLeft = "-8vw";
    //z-index
    document.getElementById('overlayed-side-slide-bar-1').style.zIndex = "3";
    document.getElementById('overlayed-side-slide-bar-2').style.zIndex = "4";
    document.getElementById('overlayed-side-slide-bar-3').style.zIndex = "5";
    document.getElementById('title-1').style.zIndex = "3";
    document.getElementById('title-2').style.zIndex = "4";
    document.getElementById('title-3').style.zIndex = "5";
    //show close button
    document.getElementById('collapse').style.display = "block";
    //set transition order
    document.getElementById('overlayed-side-slide-bar-1').style.transition = "1.5s";
    document.getElementById('overlayed-side-slide-bar-2').style.transition = "1s";
    document.getElementById('overlayed-side-slide-bar-3').style.transition = "0.5s";
    document.getElementById('title-1').style.transition = "1.5s";
    document.getElementById('title-2').style.transition = "1s";
    document.getElementById('title-3').style.transition = "0.5s";
    //call set transition for closing function
    setSelectedTitleBar = 3;
 
}

function collapseSlideBar(){
    moveBackBodyForCollapse()
    //hide
    document.getElementById('overlayed-side-slide-bar-1').style.marginLeft = "-25vw";
    document.getElementById('overlayed-side-slide-bar-2').style.marginLeft = "-25vw";
    document.getElementById('overlayed-side-slide-bar-3').style.marginLeft = "-25vw";
    document.getElementById('title-1').style.marginLeft = "-32vw";
    document.getElementById('title-2').style.marginLeft = "-32vw";
    document.getElementById('title-3').style.marginLeft = "-32vw";
    //hide close button
    document.getElementById('collapse').style.display = "none"; 
    
    setTransitionBasedOnSelectedTitle();
}

//set transition order based on what is the selected title bar
//based on what is the zindex of first Title
function setTransitionBasedOnSelectedTitle(){

    if(setSelectedTitleBar == 1){
        document.getElementById('overlayed-side-slide-bar-1').style.transition = "1.5s";
        document.getElementById('overlayed-side-slide-bar-2').style.transition = "1s";
        document.getElementById('overlayed-side-slide-bar-3').style.transition = "0.5s";
        document.getElementById('title-1').style.transition = "1.5s";
        document.getElementById('title-2').style.transition = "1s";
        document.getElementById('title-3').style.transition = "0.5s";
    }else if(setSelectedTitleBar == 2){
        document.getElementById('overlayed-side-slide-bar-1').style.transition = "1s";
        document.getElementById('overlayed-side-slide-bar-2').style.transition = "1.5s";
        document.getElementById('overlayed-side-slide-bar-3').style.transition = "0.5s";
        document.getElementById('title-1').style.transition = "1s";
        document.getElementById('title-2').style.transition = "1.5s";
        document.getElementById('title-3').style.transition = "0.5s";
    }else if(setSelectedTitleBar == 3){
        document.getElementById('overlayed-side-slide-bar-1').style.transition = "0.5s";
        document.getElementById('overlayed-side-slide-bar-2').style.transition = "1s";
        document.getElementById('overlayed-side-slide-bar-3').style.transition = "1.5s";
        document.getElementById('title-1').style.transition = "0.5s";
        document.getElementById('title-2').style.transition = "1s";
        document.getElementById('title-3').style.transition = "1.5s";
    }else{
        document.getElementById('overlayed-side-slide-bar-1').style.transition = "1.5s";
        document.getElementById('overlayed-side-slide-bar-2').style.transition = "1.5s";
        document.getElementById('overlayed-side-slide-bar-3').style.transition = "1.5s";
        document.getElementById('title-1').style.transition = "1.5s";
        document.getElementById('title-2').style.transition = "1.5s";
        document.getElementById('title-3').style.transition = "1.5s";
        console.log("setTransitionBasedOnSelectedTitle FUNCTION not working");
    }
}



