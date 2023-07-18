function saveData() {
    localStorage.setItem("localData", document.getElementById("localData").value);
    sessionStorage.setItem("sessionData", document.getElementById("sessionData").value);
}
function loadData() {
    document.getElementById("localData").value = localStorage.getItem("localData");
    document.getElementById("sessionData").value = sessionStorage.getItem("sessionData");
}
function resetData() {
    localStorage.clear();
    sessionStorage.clear();
}