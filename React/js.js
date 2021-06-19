import {Attach} from "./Store.js"
import App from "./compoment.js"
console.log(App);
console.log(Attach);
Attach(App, document.getElementById("root"));
// Attach(()=>"<h1>Ok</h1>", document.getElementById("root"));
