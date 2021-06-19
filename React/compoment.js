import html from "./Core.js"
import {Connect} from"./Store.js"
const connector=Connect();
function App({cars})
{
    console.log(cars);
    return html`
            <ul>
            ${cars.map(car => `<li>${car}</li>`)}
            </ul>
            `
}
// console.log(cars.map(car=>`<h2>${car}</h2>`));
export default connector(App)