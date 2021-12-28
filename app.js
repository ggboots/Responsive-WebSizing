var newWindow;
var onClick;

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
}
function ApplWatch44(){
    newWindow = window.open("", "_blank", "width=330, height=364");
}

document.getElementById("DesktopBtn").addEventListener("click", DesktopSize);
document.getElementById("mbp14Btn").addEventListener("click", mbp14Size);
document.getElementById("mbp16Btn").addEventListener("click", mbp16Size);
document.getElementById("phoneBtn").addEventListener("click", PhoneSize);
document.getElementById("iPhoneXBtn").addEventListener("click", iPhoneXSize);
document.getElementById("iPhone6Btn").addEventListener("click", iPhone6Size);
document.getElementById("tabletBtn").addEventListener("click", TabletSize);


