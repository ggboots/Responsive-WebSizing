let newWindow;
let onClick;
var desktopMediaMatch = window.matchMedia("(max-width:900px)")
var mobileMediaMatch = window.matchMedia("(max-width:500px)")

// 1 - Hide and show images in full screen mode DONE

// 2 - Uses array elements to assing variable with total numbers
// *end of script, uses 2 for loops

// 3 - Add Icon - Ability for user to add height and Width, 
// and then create a button in memory
// that user can click to reveal size put in
// Save in cache

var hide = false
function showHideSwitchDesktop(){
    var section = document.getElementById("sectionDesktop");
    if (hide === false){
        section.style.display = "none";
        hide = true;
    } else if (hide === true){
        section.style.display = "grid";
        hide = false;
    }
}
function showHideSwitchPhone(){
    var section = document.getElementById("sectionPhone");

    if (hide == false){
        section.style.display = "none";
        hide = true;
    } else if (hide == true){
        section.style.display = "grid";
        hide = false;
    }
}
function showHideSwitchTablet(){
    var section = document.getElementById("sectionTablet");

    if (hide == false){
        section.style.display = "none";
        hide = true;
    } else if (hide == true){
        section.style.display = "grid";
        hide = false;
    }
}
function showHideSwitchWatch(){
    var section = document.getElementById("sectionWatch");

    if (hide == false){
        section.style.display = "none";
        hide = true;
    } else if (hide == true){
        section.style.display = "grid";
        hide = false;
    }
}

let hideImages = true;
function showAllImages(){
    var showIconImage = document.getElementById("showIcon");
    var hideIconImage = document.getElementById("hideIcon");
    if (hideImages == true) {
        var imageContainers = document.getElementsByClassName("imageContainer");
        for (var i=0; i<imageContainers.length;i++){
            imageContainers[i].style.display = "flex";
            imageContainers[i].style.justifyContent = "center";
            imageContainers[i].style.alignItems = "center";
            imageContainers[i].style.position = "relative";

        }
        var showIcon = document.getElementsByClassName("sectionIconImage");
        for (var i=0; i<showIcon.length;i++){
            showIcon[i].style.display = "inline";
            showIcon[i].style.objectFit = "contain";
            showIcon[i].style.bottom = "20%";
            showIcon[i].style.width = "80%";
            showIcon[i].style.height = "70%";
            showIcon[i].style.position = "absolute";
        }
        var buttonSize = document.getElementsByClassName("button");
        for (var i=0; i<buttonSize.length;i++){
            buttonSize[i].style.display = "flex";
            buttonSize[i].style.height = "200px";
            if(mobileMediaMatch.matches){
                buttonSize[i].style.width = "85%";
            }else {
                buttonSize[i].style.width = "100%";
            }
            buttonSize[i].style.flexDirection = "column";
        } 
        showIconImage.style.display = "none";
        hideIconImage.style.display = "inline";
        hideImages = false;
        
    } else if (hideImages == false) {
        var imageContainers = document.getElementsByClassName("imageContainer");
        for (var i=0; i<imageContainers.length;i++){
            imageContainers[i].style.display = "flex";
            if (desktopMediaMatch.matches){
                imageContainers[i].style.justifyContent = "center";
            } else {
                imageContainers[i].style.justifyContent = "start";
            }
            imageContainers[i].style.alignItems = "none";
            imageContainers[i].style.position = "none";

        }
        var showIcon = document.getElementsByClassName("sectionIconImage");
        for (var i=0; i<showIcon.length;i++){
            showIcon[i].style.display = "none";
        }
        var buttonSize = document.getElementsByClassName("button");
        for (var i=0; i<buttonSize.length;i++){
            buttonSize[i].style.display = "flex";
            buttonSize[i].style.height = "50px";
            buttonSize[i].style.width = "200px";
            buttonSize[i].style.flexDirection = "column";
        } 
        showIconImage.style.display = "inline";
        hideIconImage.style.display = "none";
        hideImages = true;
    }
}

document.getElementById("showImages").addEventListener("click", showAllImages);
// Desktop + Laptops devices sizes
function DesktopSize(){
    newWindow = window.open("", "_blank", "width=1440, height=1024");
    newWindow.document.write('<img src="img/desktopWallpaper.jpg">');
    newWindow.document.write('<style> img{height:100%; width:100%; margin:0;}</style>');
    newWindow.document.write('<style> body{margin:0;}</style>');
}
function mbp14Size(){
    newWindow = window.open("", "_blank", "width=1400, height=800"); 
    newWindow.document.write("<style> *{margin:0;}img{height:100%; width:100%;}</style>");
}

function mbp16Size(){
    newWindow = window.open("", "_blank", "width=3072, height=1920");  
    newWindow.document.write("<style> img{height:100%; width:100%;}</style>");
}

// Phone sizes
function PhoneSize(){
    newWindow = window.open("", "_blank", "width=375, height=650");
}
function iPhone6Size(){
    newWindow = window.open("", "_blank", "width=375, height=667");
}
function iPhoneXSize(){
    newWindow = window.open("", "_blank", "width=375px, height=812px");
}

// Tablet sizes
function TabletSize(){
    newWindow = window.open("", "_blank", "width=1024, height=768");
}

// Watch and Other devices sizes
function applWatch40(){
    newWindow = window.open("", "_blank", "width=292, height=320");
    newWindow.document.write('<img src="img/40mmBackground.jpg">');  
    newWindow.document.write("<style> body{padding:0; margin:0; border-sizing:border-box;}</style>");
    newWindow.document.write("<style> img{height:100%; width:100%; padding:0; margin:0; border-sizing:border-box;}</style>");

}
function applWatch44(){
    newWindow = window.open("", "_blank", "width=330, height=364");
    newWindow.document.write('<img src="img/44mmBackground.png">'); 
    newWindow.document.write("<style> body{padding:0; margin:0; border-sizing:border-box;}</style>");
    newWindow.document.write("<style> img{height:100%; width:100%; padding:0; margin:0; border-sizing:border-box;}</style>");

}

document.getElementById("DesktopBtn").addEventListener("click", DesktopSize);
document.getElementById("mbp14Btn").addEventListener("click", mbp14Size);
document.getElementById("mbp16Btn").addEventListener("click", mbp16Size);
document.getElementById("phoneBtn").addEventListener("click", PhoneSize);
document.getElementById("iPhoneXBtn").addEventListener("click", iPhoneXSize);
document.getElementById("iPhone6Btn").addEventListener("click", iPhone6Size);
document.getElementById("tabletBtn").addEventListener("click", TabletSize);
document.getElementById("watch40Btn").addEventListener("click", applWatch40);
document.getElementById("watch44Btn").addEventListener("click", applWatch44);

document.getElementById("dropDownDesktop").addEventListener("click",showHideSwitchDesktop);
document.getElementById("dropDownPhone").addEventListener("click",showHideSwitchPhone);
document.getElementById("dropDownTablet").addEventListener("click",showHideSwitchTablet);
document.getElementById("dropDownWatch").addEventListener("click",showHideSwitchWatch);

document.getElementById('DeviceCategory').addEventListener("input", handleSelect);
function handleSelect(ev){
    let select = ev.target;
    var nonSectionDesktop = document.getElementById("desktopTitle");
    var nonSectionPhone = document.getElementById("phoneTitle");
    var nonSectionWatch = document.getElementById("watchTitle");
    var nonSectionTablet = document.getElementById("tabletTitle");
    var nonSectionIcon = document.getElementsByClassName("dropDownArrow");
    /* console.log(select.value); */ //ev.target get the exact value
    // display to be set as null, setting as grid and flex will effect button
    if (select.value === "none"){
        nonSectionIcon[0].style.display = "";
        nonSectionIcon[1].style.display = "";
        nonSectionIcon[2].style.display = "";
        nonSectionIcon[3].style.display = "";
        nonSectionDesktop.style.display = "";
        nonSectionPhone.style.display = "";
        nonSectionWatch.style.display = "";
        nonSectionTablet.style.display = "";
    } else if (select.value === "desktop"){
        nonSectionIcon[0].style.display = "none";
        nonSectionDesktop.style.display = "";
        nonSectionPhone.style.display = "none";
        nonSectionWatch.style.display = "none";
        nonSectionTablet.style.display = "none";
    } else if (select.value ==="phone") {
        nonSectionDesktop.style.display = "none";
        nonSectionPhone.style.display = "";
        nonSectionWatch.style.display = "none";
        nonSectionTablet.style.display = "none";
        nonSectionIcon[1].style.display = "none";
    } else if (select.value ==="tablet") {
        nonSectionDesktop.style.display = "none";
        nonSectionPhone.style.display = "none";
        nonSectionWatch.style.display = "none";
        nonSectionTablet.style.display = "";
        nonSectionIcon[2].style.display = "none";
    } else if (select.value ==="watch") {
        nonSectionDesktop.style.display = "none";
        nonSectionPhone.style.display = "none";
        nonSectionWatch.style.display = "";
        nonSectionTablet.style.display = "none";
        nonSectionIcon[3].style.display = "none";
    }
}

var createNew = document.getElementById("createNew");
createNew.addEventListener("click", function(){

    // error check that prompt is integer value 
    // Create custom input screen
    var windowCreateNewHeight = window.prompt("Enter height you want: ");
    var windowCreateNewWidth = window.prompt("Enter width you want: ");
    var createNewHeight = windowCreateNewHeight;
    var createNewWidth = windowCreateNewWidth;
    
    console.log(createNewHeight);
    console.log(createNewWidth);
    newElement = document.createElement("div");
    newElement.setAttribute("class", "button");
    newElement.setAttribute("id", "custom1");
    // newElement.style.height = createNewHeight;
    // newElement.style.width = createNewWidth;
    document.getElementById("addNew").appendChild(newElement);

});
//insertImage
var imageCollection = [];

imageCollection[0] = document.createElement("img");
imageCollection[0].setAttribute("class", "sectionIconImage");
imageCollection[0].src = 'img/desktopWallpaper.jpg';
document.getElementById("desktopIcon").appendChild(imageCollection[0]);

imageCollection[1] = document.createElement("img");
imageCollection[1].setAttribute("class", "sectionIconImage");
imageCollection[1].src = 'img/mbp14Icon.png';
document.getElementById("mbp14Btn").appendChild(imageCollection[1]);

imageCollection[2] = document.createElement("img");
imageCollection[2].setAttribute("class", "sectionIconImage");
imageCollection[2].src = 'img/mbp16Icon.png';
document.getElementById("mbp16Btn").appendChild(imageCollection[2]);

imageCollection[3] = document.createElement("img");
imageCollection[3].setAttribute("class", "sectionIconImage");
imageCollection[3].src = 'img/iPhoneBasicIcon.png';
document.getElementById("phoneBtn").appendChild(imageCollection[3]);

imageCollection[4] = document.createElement("img");
imageCollection[4].setAttribute("class", "sectionIconImage");
imageCollection[4].src = 'img/iPhoneXicon.png';
document.getElementById("iPhoneXBtn").appendChild(imageCollection[4]);

imageCollection[5] = document.createElement("img");
imageCollection[5].setAttribute("class", "sectionIconImage");
imageCollection[5].src = 'img/iPhone6Icon.png';
document.getElementById("iPhone6Btn").appendChild(imageCollection[5]);

imageCollection[6] = document.createElement("img");
imageCollection[6].setAttribute("class", "sectionIconImage");
imageCollection[6].src = 'img/iPadBasicIcon.png';
document.getElementById("tabletBtn").appendChild(imageCollection[6]);

imageCollection[7] = document.createElement("img");
imageCollection[7].setAttribute("class", "sectionIconImage");
imageCollection[7].src = 'img/40mmAppleWatchIcon.png';
document.getElementById("imageContainerWatch40").appendChild(imageCollection[7]);

imageCollection[8] = document.createElement("img");
imageCollection[8].setAttribute("class", "sectionIconImage");
imageCollection[8].src = 'img/44mmAppleWatchIcon.png';
document.getElementById("imageContainerWatch44").appendChild(imageCollection[8]);



// for loop which assigns array element based on how many photos are available
// After loop, assign images 
// another for loop that the runs through assigned arrays and appends 