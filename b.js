const loginButton = document.querySelector(".login");
const textbox = document.querySelector(".name");

var val;

loginButton.addEventListener('click', () => {
    val = String(textbox.value);

    localStorage.setItem('localname', val);
    location.href = "desk.html";

})



