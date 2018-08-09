var thumb1 = document.getElementById("thumb-1"),
    thumb2 = document.getElementById("thumb-2"),
    thumb3 = document.getElementById("thumb-3"),
    thumb4 = document.getElementById("thumb-4"),
    activePicture = document.getElementById("active-picture");
var currentPic = null;

var writePic = function writePic() {
    activePicture.innerHTML =
        " <picture> <source media='(min-width: 1000px)' srcset='images/" 
        + currentPic + "/" + currentPic + "2.jpg, images/" + currentPic + "/" + currentPic + "3.jpg 2x'>" +
        "<source media = '(min-width: 480px)' srcset = 'images/" + currentPic + "/" + currentPic + "1.jpg, images/" + 
        currentPic + "/" + currentPic +"2.jpg 2x'>" +
        "<img src='images/" + currentPic + "/" + currentPic + "1.jpg' srcset='images/" + currentPic + "/" + 
        currentPic + "mobile1.jpg, images/" + currentPic + "/" + 
        currentPic +"mobile2.jpg 2x' alt='Sandra Patton "+ currentPic +" Headshot'></picture>"
}

thumb1.addEventListener("click", function () {
    currentPic = "Business";
    writePic();
})

thumb2.addEventListener("click", function () {
    currentPic = "Commercial";
    writePic();
})

thumb3.addEventListener("click", function () {
    currentPic = "Cop";
    writePic();
})

thumb4.addEventListener("click", function () {
    currentPic = "Dramatic";
    writePic();
})
