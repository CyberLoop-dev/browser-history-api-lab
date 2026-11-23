const $ = (id) => document.getElementById(id);
const routeInput = $("route");
let logEntries = ["Initial document entry"];
if (!history.state || typeof history.state.demoIndex !== "number") {
  history.replaceState({demoIndex:0,label:"Initial"}, "", location.pathname);
}
function render(eventName = "STATE UPDATED") {
  $("pathname").textContent = location.pathname;
  $("state").textContent = history.state?.label || "null";
  $("length").textContent = String(history.length);
  $("event").textContent = eventName;
  $("log").innerHTML = "";
  for (const entry of logEntries.slice(-18)) {
    const li = document.createElement("li");
    li.textContent = entry;
    $("log").append(li);
  }
}
function normalizeRoute(value) {
  const trimmed = value.trim();
  if (!trimmed) throw new Error("Enter a route path.");
  const url = new URL(trimmed.startsWith("/") ? trimmed : "/" + trimmed, location.origin);
  if (url.origin !== location.origin) throw new Error("Only same-origin paths are allowed.");
  return url.pathname + url.search + url.hash;
}
$("push").addEventListener("click", () => {
  try {
    const route = normalizeRoute(routeInput.value);
    const index = Number(history.state?.demoIndex || 0) + 1;
    history.pushState({demoIndex:index,label:route}, "", route);
    logEntries.push("pushState → " + route + " (index " + index + ")");
    render("PUSHSTATE");
  } catch (error) { alert(error.message); }
});
$("replace").addEventListener("click", () => {
  try {
    const route = normalizeRoute(routeInput.value);
    const index = Number(history.state?.demoIndex || 0);
    history.replaceState({demoIndex:index,label:route}, "", route);
    logEntries.push("replaceState → " + route + " (current entry replaced)");
    render("REPLACESTATE");
  } catch (error) { alert(error.message); }
});
$("back").addEventListener("click", () => history.back());
$("forward").addEventListener("click", () => history.forward());
$("clear").addEventListener("click", () => { logEntries = []; render("LOG CLEARED"); });
addEventListener("popstate", (event) => {
  logEntries.push("popstate ← " + location.pathname + " | state: " + JSON.stringify(event.state));
  render("POPSTATE");
});
render("READY");
