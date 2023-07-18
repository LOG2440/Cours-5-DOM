const element = document.getElementById("user");
element.dataset.dateOfBirth = "1996-10-15";
element.dataset.otherData = "autre information";

const dataset = element.dataset;
const ulElement = document.getElementById("list-parent");
for (key in dataset) {
    const liElement = document.createElement("li");
    liElement.textContent = `${key}: ${dataset[key]}`;
    ulElement.appendChild(liElement);
}