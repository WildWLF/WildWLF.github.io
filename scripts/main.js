let myImage = document.querySelector("img");

myImage.onclick = () => {

    let mySrc = myImage.getAttribute("src");
    if (mySrc === "images/test1.jpg") {
    myImage.setAttribute("src", "images/test2.jpg");
    } 
    else {
    myImage.setAttribute("src", "images/test1.jpg");
  }
};