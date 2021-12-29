var newWindow;
var onClick;

// Arrows can be used to hide/show menus
// Hide and show images
// Footer background which fixes to the bottom of menus, only show up with white space, and has overflow restriction so user doesn't pointless scroll unnecessarily 

// Add Icon - Ability for user to add height and Width, 
// and then create a button in memory
// that user can click to reveal size put in

// Desktop + Laptops devices sizes
function DesktopSize(){
    newWindow = window.open("", "_blank", "width=1440, height=1024");
    newWindow.document.write('<img src="img/desktopWallpaper.jpg">');
    newWindow.document.write('<style> img{height:100%; width:100%; margin:0;}</style>');
    newWindow.document.write('<style> body{margin:0;}</style>');
}
function mbp14Size(){
    newWindow = window.open("", "_blank", "width=1400, height=800");
    newWindow.document.write('<img src="MontereyApple.jpeg">');  
    newWindow.document.write("<style> *{margin:0;}img{height:100%; width:100%;}</style>");
}

function mbp16Size(){
    newWindow = window.open("", "_blank", "width=3072, height=1920");
    newWindow.document.write('<img src="mbp16-wallpaper.jpg">');  
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

//insertImage
var imageCollection = [];

imageCollection[0] = document.createElement("img");
imageCollection[0].setAttribute("class", "sectionIconImage");
imageCollection[0].src = 'img/40mmAppleWatchIcon.png';
document.getElementById("imageContainerWatch40").appendChild(imageCollection[0]);

imageCollection[1] = document.createElement("img");
imageCollection[1].setAttribute("class", "sectionIconImage");
imageCollection[1].src = 'img/44mmAppleWatchIcon.png';
document.getElementById("imageContainerWatch44").appendChild(imageCollection[1]);