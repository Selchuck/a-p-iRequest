let pageCounter = 1;
const btn = document.getElementById("btn");
const animalContainer = document.getElementById("animal-info");

btn.addEventListener("click", () => {
  let xhttp = new XMLHttpRequest();
  let rootUrl = "https://learnwebcode.github.io/json-example/animals-";
  let url = rootUrl + pageCounter + ".json";

  xhttp.open("GET", url);

  xhttp.onload = () => {
    let ourData = JSON.parse(xhttp.responseText);
    renderHTML(ourData);
  };

  xhttp.send(null);
  pageCounter++;
  pageCounter > 3 ? btn.classList.add("hide-me") : btn;
});

const renderHTML = ourData => {
  let htmlString = "";

  ourData.forEach(element => {
    htmlString += `<p><strong>${element.name}
            </strong> is a <strong>${element.species}</strong>
                that like's to eat </p>`;
  });
  
  animalContainer.insertAdjacentHTML("beforeend", htmlString);
};
