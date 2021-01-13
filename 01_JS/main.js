
function myCity(select) {
    let a = select.selectedIndex;
    let city = select.options[a].value;
    if (a == 0) {
        alert(`Please select your city.`);
    }
    else {
        document.write(`Your hometown is ${city}.`);
    }
}