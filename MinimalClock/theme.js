//url query string
const params = new Proxy(new URLSearchParams(window.location.search), {
    get: (searchParams, prop) => searchParams.get(prop),
});
// Get the value of "some_key" in eg "https://example.com/?some_key=some_value"
let value = params.theme; // "some_value"
console.log(value);
// set initial theme
if (value == "dark") {
    document.body.className = "dark";
}
if (value == "light") {
    document.body.className = "light";
}
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