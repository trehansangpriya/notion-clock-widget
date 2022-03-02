// toggle light/dark mode
function toggleTheme() {
    var body = document.getElementsByTagName("body")[0];
    var currentClass = body.className;
    var newClass = currentClass == "light" ? "dark" : "light";
    body.className = newClass;
}
// toggle theme on dbl click on id clock
const clock = document.getElementById("clock");
clock.addEventListener("dblclick", toggleTheme);