import {CreateStore}  from "./Core.js"
import reducer from "./Reduce.js"

const {Attach, Connect, Dispatch} =CreateStore(reducer);
console.log(CreateStore(reducer));
window.Dispatch=Dispatch;
console.log(Attach);
export{
    Attach,
    Connect
}