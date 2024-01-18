async function foo() {

    var createDiv = document.createElement("div");
    var clickButton = document.createElement("button");
    clickButton.id = "clickButton";
    clickButton.innerHTML = "Click here To view Animal Below"

    createDiv.append(clickButton);
    document.body.append(createDiv);
    
    document.addEventListener("click", getOutWithImage)
}


async function getOutWithImage() {

    try {
        var getAPI = await fetch("https://dog.ceo/api/breeds/image/random");
        var getAPI1 = await getAPI.json();
        var getImage = getAPI1.message;
    } catch (err) {
        console.log(err);
    }

    let createDiv1 = document.createElement("div");
    createDiv1.id = "placeImage"
   
    var setImage = document.createElement("img");
    setImage.setAttribute("src", getImage);
    setImage.setAttribute("alt", "Animal Image");

    createDiv1.append(setImage);
    document.body.append(createDiv1);
}

foo();

